<?php

namespace App\Http\Controllers;


use App\Http\Controllers\Controller;
use App\Hierarchy;
use App\Criteria;
use App\Dto\Node;
use App\Dto\HierarchyDTO;

use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Log;

class AhpDA extends Controller
{
	
	public function default_hierarchy() {	
					
		//if (!Auth::check())	{
			$default_id = 1;
			Log::info('hit ahpda logic');
			$hierarchy = Hierarchy::find($default_id);
			Log::info($hierarchy);	
		//} 
			return $hierarchy;
	}

	public function getCriteriaByHierarchyId(Request $request, $id) {
		$criteria = Hierarchy::find($id)->criteria()
						->leftJoin('criteria as c', 'criteria.parent_id', '=', 'c.id')
						->select('criteria.name'
						, 'criteria.id', 'c.name as parent_name', 'c.id as parent_id')
						->get();
		$response = response()
						->json($criteria)
						->setCallback($request->input('callback'));
		Log::debug($response);
		return $response;
	}

	public function deleteCriterium(Request $request, $id) {
		Criteria::destroy($id);
	}
 
}
