<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Criteria extends Model
{
	protected $table = "criteria";
	
	public function hierarchy() {
		return $this->belongsTo('App\Hierarchy', 'hierarchy_id'); //foreign key
	}

	/* Self joins will be performed using query builder*/
	public function parent() {
		return $this->belongsTo(self::class, 'parent_id');
	}

	public function children() {
		return $this->hasMany(self::class, 'id');
	}
	

	public function comparisons() {
		$this->hasMany('App\Comparisons', 'comaprison_left_id');
	}
}
