<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class profileController extends Controller
{
    /**
     * Update the user's profile.
     *
     * @param  Request  $request
     * @return Response
     */
    public function update(Request $request)
    {
        if (Auth::check()) {
            // The user is logged in...
        }
        // $request->user() returns an instance of the authenticated user...
    }
    public function __construct()
    {
        $this->middleware('auth');
        $this->middleware('auth:api');
    }
    /**
     * Get the path the user should be redirected to.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return string
     */
    protected function redirectTo($request)
    {
        return route('login');
    }
}