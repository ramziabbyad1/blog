<!-- Ramzi Abbyad -->
@extends ('layouts.app')
@section ('title')
{{ $title }}
@endsection
@section ('content')
@if ( !$posts->count() )
There are no posts at this time.
@else
<div class="">
	@foreach ($posts as $post)
	<div class="list-group">
		<div class="list-group-item">
			<h3>
				<a href="{{ url('/'.$post->slug) }}">
					{{ $post->title }}
				</a>
				@if ( 
					!Auth::guest() 
					&& ( $post->author_id == Auth::user()->id
						|| Auth::user()->is_admin() ) 
				)
					@if ( $post->active == '1' )
					<button class="btn" style="float: right">
						<a href="{{ url('edit/'.$post->slug)}}">
							Edit Post
						</a>
					</button>
					@else
					<button class="btn" style="float: right">
						<a href="{{ url('edit/'.$post->slug) }}">
							Edit Draft
						</a>
					</button>
					@endif
				@endif
			</h3>
			<p>
				{{ $post->created_at->format('M d,Y \a\t h:i a') }} By 
				<a href="{{ url('/user/'.$post->author_id) }}">
					{{ $post->author->name }}
				</a>
			</p>
		</div>
		<div class="list-group-item">
			@if ($post->active)
			<article>
				{!! 
					str_limit(
						$post->body, 
						$limit=1500
					)  
				!!}
			</article>
			...<a href="{{url('/'.$post->slug)}}">  Read More</a>
			@else
			<article>
				{!! 
					$post->body  
				!!}
			@endif
		</div>
	</div>
	@endforeach
	{!! $posts->render() !!}
</div>
@endif
@endsection
