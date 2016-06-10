<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Session\Store;
use Log;

class SessionTimeout {

    protected $session;
    protected $timeout = 20;

    public function __construct(Store $session){
        $this->session = $session;
    }
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
		Log::debug("Request path = ".$request->path());
        $isLoggedIn = $request->path() != 'auth/logout';
		Log::debug("is logged in = ".$isLoggedIn);


        if(! session('lastActivityTime') ) {

            $this->session->put('lastActivityTime', time());

        } 
		elseif(time() - $this->session->get('lastActivityTime') > $this->timeout){

            $this->session->forget('lastActivityTime');
            $cookie = cookie('intend', $isLoggedIn ? url()->current() : 'auth/login');
			Log::debug("A cookie: ".$cookie);
            $email = $request->user()->email;
			Log::debug("logging out now... with email...".$email);
            auth()->logout();

            return message(
				'You have not had activity since '.$this->timeout/60 .' minutes ago.', 
				'warning', 
				'login')->withInput(compact('email'))->withCookie($cookie);
        }

        $isLoggedIn ? $this->session->put('lastActivityTime', time()) : $this->session->forget('lastActivityTime');

		Log::debug('calling session timeout');

        return $next($request);
    }

}
