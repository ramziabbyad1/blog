<?php

namespace App\Dto;


use Illuminate\Database\Eloquent\Model;
use App\seedhelpers\DefaultDataProvider;
use Illuminate\Support\Collection;

use Log;

class HierarchyDTO
{
	public $adjList;
	public $title;
	public $criteria;
	public $criteriaGroups;	
	public function __construct($title, $criteria) {
		$this->title = $title;
		$this->criteriaGroups = collect($criteria)->groupBy('parent_id');
		$this->loadHierarchy($this->root, $this->criteriaGroups);
	}

	//criteria is an array of db rows
	private function loadHierarchy($root, $criteriaGroups) {
		$root->addChild();
			
	}
	
}
