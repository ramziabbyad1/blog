<?php

namespace App;

use Illuminate\Auth\Authenticatable;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Auth\Passwords\CanResetPassword;
use Illuminate\Contracts\Auth\Authenticatable as AuthenticatableContract;
use Illuminate\Contracts\Auth\CanResetPassword as CanResetPasswordContract;


class User extends Model 
implements AuthenticatableContract, CanResetPasswordContract
{
	use Authenticatable, CanResetPassword;

	const AUTHOR_ROLE = 'author';
	const ADMIN_ROLE = 'admin';
	const POSTS_MODEL= 'App\Posts';
	const COMMENTS_MODEL = 'App\Comments';
	const POSTS_PK = 'author_id';
	const COMMENTS_FK = 'from_user';
	const CAN_POST = true;
	const IS_ADMIN = true;
	
	protected $table = 'users';
	
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name', 'email', 'password',
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token',
    ];


	public function posts()
	{
		return $this->hasMany(User::POSTS_MODEL, User::POSTS_PK);
	}

	public function comments()
	{
		return $this->hasMany(User::COMMENTS_MODEL, User::COMMENTS_FK);
	}	

	public function can_post()
	{
		$role = $this->role;
		if($role == User::AUTHOR_ROLE || $role == User::ADMIN_ROLE) {
			return User::CAN_POST;
		}
	}
	
	public function is_admin() {
		$role = $this->role;
		if($role == User::ADMIN_ROLE) {
			return User::IS_ADMIN;
		}
		return !User::IS_ADMIN;
	}
}
