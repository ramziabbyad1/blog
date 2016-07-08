<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the controller to call when that URI is requested.
|
*/
Route::get('/', 'PostController@index');
Route::get('/home', ['as' => 'home',
	'uses' => 'PostController@index'
]);

// Authentication routes...
Route::get('auth/login', 'Auth\AuthController@getLogin');
Route::post('auth/login', 'Auth\AuthController@postLogin');
Route::get('auth/logout', 'Auth\AuthController@getLogout');

// Registration routes...
Route::get('auth/register', 'Auth\AuthController@getRegister');
Route::post('auth/register', 'Auth\AuthController@postRegister');
//authorization
Route::controllers([
	'auth' => 'Auth\AuthController',
	'password' => 'Auth\PasswordController'
]);
//
Route::group(['middleware' => ['auth']], function()
{
	Route::get('new-post', 'PostController@create');
	Route::post('new-post', 'PostController@store');
	Route::get('edit/{slug}', 'PostController@edit');
	Route::post('update', 'PostController@update');
	Route::get('delete/{id}', 'PostController@destroy');
	Route::get('my-all-posts', 
		'UserController@user_posts_all'
	);
	Route::get('my-drafts', 
		'UserController@user_posts_draft'
	);
	Route::post('comment/add', 'CommentController@store');
	Route::post('comment/delete/{id}', 
		'CommentController@destroy'	
	);
});


Route::get('user/{id}', 'UserController@profile')
	-> where('id', '[0-9]+');
Route::get('user/{id}/posts', 'UserController@user_posts')
	-> where('id', '[0-9]+');
Route::get('/{slug}', [
	'as' => 'post', 
	'uses' => 'PostController@show'
]) -> where('slug', '[A-Za-z0-9-_]+');

