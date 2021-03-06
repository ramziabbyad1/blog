<?php

namespace App;


use Illuminate\Database\Eloquent\Model;

class Hierarchy extends Model 
{
	protected $table = "hierarchies";

	public function criteria() {
		return $this->hasMany('App\Criteria', 'hierarchy_id');
	}
	
	public function user() {
		return $this->belongsTo('App\User', 'user_id');	
	}			
}
