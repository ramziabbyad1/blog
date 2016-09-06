<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Criteria extends Model
{
	protected $table = "criteria";
	
	public function hierarchy() {
		$this->hasMany('App\Hiearchy', 'hierarchy_id'); //foreign key
	}

	/* Self joins will be performed using query builder*/
	public function parent() {
		$this->belongsTo(self::class, 'parent_id');
	}

	public function children() {
		$this->hasManyTo(self::class, 'id');
	}
	

	public function comparisons() {
		$this->hasMany('App\Comparisons', 'comaprison_left_id');
	}
}
