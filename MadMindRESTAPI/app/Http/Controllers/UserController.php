<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
Use App\User;

class UserController extends Controller
{
    public function index()
    {
        return User::all();
    }

    public function show($id)
    {
        return User::find($id);
    }

    public function store(Request $request)
    {
        return User::create($request->all());
    }

    public function update(Request $request)
    {
        $bodyContent = $request->all();

        $updateObj = $bodyContent['updateObj'];
        $newTotalScore = $bodyContent['newTotalScore'];
        $id = $bodyContent['userId'];


        $user = User::where('id',$id)->update(['highScores'=>$updateObj, 'totalScore' => $newTotalScore]);
    

        // $user = User::findOrFail($id);
        // $user->update($request->all());

        return $user;
    }

    public function delete(Request $request, $id)
    {
        $user = User::findOrFail($id);
        $user->delete();

        return 204;
    }

    public function leaderBoard()
    {
        $users = \DB::table('users')->select('username', 'highScores', 'lastScore', 'totalScore')->orderBy('totalScore', 'desc')->limit(10)->get();
        return $users;
    }
}
