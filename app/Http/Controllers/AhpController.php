<?php

namespace App\Http\Controllers;

use App\Http\Requests;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Log;

class AhpController extends Controller
{

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Http\Response
     */
    public function show()
		{
				$title = "Analytic Hierarchy Process Application";
        return view('angular.ahp-app')->withTitle($title);
    }
}
