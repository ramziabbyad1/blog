<?php namespace App;

use Illuminate\Database\Eloquent\Model;
	/*
		Each post, hasMany comments, belongsTo an author
	*/

	class Posts extends Model 
	{
		//this is a column filter for table posts
		protected $guarded = [];

		public function comments() 
		{
			return $this -> hasMany('App\Comments', 
				'on_post');
		}

		public function author()
		{
			return $this -> belongsTo('App\User', 
				'author_id');
		}
		
	}

?>
