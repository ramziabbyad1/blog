<?php

namespace App\Http\Controllers;

use App\Http\Requests;
use Illuminate\Http\Request;
use Log;

class AhpController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
		{
				Log::info('constructiong ahp controller');
        //$this->middleware('auth');
    }

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Http\Response
     */
    public function show()
		{
				Log::info('fetching view');
				$title = "Analytic Hierarchy Process Application";
        return view('angular.ahp-app')->withTitle($title);
    }
}
