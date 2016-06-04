<?php

namespace App\Http\Controllers;

use App\Posts;
use App\User;
use Redirect;
use App\Http\Controllers\Controller;
use App\Http\Requests\PostFormRequest;

use Log;
use Illuminate\Http\Request;

class PostController extends Controller
{
	public function index() 
	{
		$posts = Posts::where('active', 1)->orderBy('created_at', 'desc')
					->paginate(5);
		
		$title = 'Lastest Posts';
		
		return view('home')->withPosts($posts)->withTitle($title);
	}

	public function create(Request $request)
	{
		if($request->user()->can_post()) {
			return view('posts.create');
		} else {
			return redirect('/')->withErrors('You have insufficient permissions
					to create this post.');
		}
	}

	public function store(Request $request) 
	{
		$post = new Posts();
		$post->title = $request->get('title');
		$post->body = $request->get('body');
		$post->slug = str_slug($post->title);
		$post->author_id = $request->user()->id;

		if($request->has('save')) {
			$post->active = 0;
			$message = 'Post saved successfully!';
		} else {
			$post->active = 1;
			$message = 'Post published successfully';
		}

		$post->save();
		return redirect('edit/'.$post->slug)->withMessage($message);
	}

	public function show($slug) 
	{
		$post = Posts::where('slug', $slug)->first();
		Log::info("slug = ".$slug);
		Log::info("post = ".$post);

		if($post) {
			if($post->active == false) {
				return redirect('/')->withErrors('requested page not found');
			}
			$comments = $post->comments;
		}
		else {
			return redirect('/')->withErrors('requested page not found');
		}
		return view('posts.show')->withPost($post)->withComments($comments);
	}

	//why are post retrievals don differently
	//in edit and update fns
	public function edit(Request $request, $slug) 
	{
		Log::debug('The slug for this post is  = '.$slug);
		$post = Posts::where('slug', $slug)->first();

		if( $this->can_post($request, $post)  ) {
			return view('posts.edit')->with('post', $post);
		}

		return redirect('/')
			->withErrors('You don\'t have permission to edit this post');
	}
	//why search by post id offered from input?
	public function update(Request $request) 
	{
		$post_id = $request->input('post_id');
		$post = Posts::find($post_id);
		
		if( $this->can_post($request, $post) ) {
			$title = $request->input('title');
			$slug = str_slug($title);
			$duplicate = Posts::where('slug', $slug)->first();	
			if($duplicate) 
			{
				if($duplicate->id != $post_id) {
					return redirect('edit/'.$post->slug)
							->withErrors('Title already exists.')
							->withInput();
				} else {
					$post->slug = $slug;
				}
			}
			
			$post->title = $title;
			$post->body = $request->input('body');

			if( $request->has('save') ) {
				$post->active = 0;
				$message = 'Post saved successfully';
				$landing = 'edit/'.$post->slug;
			} else {
				$post->active = 1;
				$message = 'Post updated successfully';
				$landing = $post->slug;
			}

			$post->save();
			return redirect($landing)->withMessage($message);

		} else {
			return redirect('/')
					->withErrors('You don\'t have 
						permission to do this!');			
		}
		
	}

	public function destroy(Request $request, $id)
	{
		$post = Posts::find($id);

		Log::info("id = ".$id);
		Log::info("post = ".$post);
		if( $this->can_post($request, $post) ) {
			$post->delete();
			$data['message'] = 'Post deleted Successfully';
			
		} else {

			$data['errors'] = 'Invalid Operation.  
				You\'re not allowed!';

		}

		return redirect('/')->with($data);
	}	

	private function can_post(Request $request, $post)
	{
		$user_id = $request->user()->id;
		$is_admin = $request->user()->is_admin();

		return $post && ($user_id == $post->author_id || $is_admin);
	}
}
