<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;
use App\Hierarchies;

use Log;

class AhpDA extends Controller
{
	
	public function show() {	
					
		if (!Auth::check())	{
			$default_id = 0;
			Log::info('hit ahpda logic');
			return Hierarchies::find($default_id);	
		} 

	}
}
