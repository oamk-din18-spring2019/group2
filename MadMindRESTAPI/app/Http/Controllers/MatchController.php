<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
Use App\Match;

class MatchController extends Controller
{
    

    public function store(Request $request)
    {
        return Match::create($request->all());
        return response()->json($question,201);
    }

    

}
