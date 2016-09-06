<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Comparison extends Model
{
	protected $table = "comparisons";

	/** Self joins performed via query builder*/
	
	public function children_criteria() {
		$this->hasMany('App\Criteria', 'crtieria_right_id');
	}

	public function parent_criteria() {
		$this->belongsTo('App\Criteria', 'criteria_left_id');
	}

}
