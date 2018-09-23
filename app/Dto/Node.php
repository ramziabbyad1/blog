<?php

namespace App\Dto;

class Node
{
	public $_children;
	public $title;			
	public function __construct($title) {
		$this->title = $title;
	}

	public function addChild($child) {
		$this->_children[] = $child;
	}


	
}
