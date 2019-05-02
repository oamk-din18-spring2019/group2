<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
Use App\Match;

class MatchController extends Controller
{
    

    public function create(Request $request){
      
        $bodyContent = $request->all();

        $creator = $bodyContent['creator'];
        $matchType = $bodyContent['matchType'];

        $score = 0;
        $isRunning = true;
        $questionsToBeAttempted;
        $numberOfCorrectAnswers = 0;
        
        switch($matchType){
            case 0:
            $questionsToBeAttempted = 15;
            break;

            case 1:
            $questionsToBeAttempted = 600;
            break;

            case 2:
            $questionsToBeAttempted = 1200;
            break;

        }

        $match =  Match::create([
            'creator' => $creator,
            'matchType' => $matchType,
            'score' => $score,
            'isRunning' => $isRunning,
            'questionsToBeAttempted' => $questionsToBeAttempted,
            'numberOfCorrectAnswers' =>$numberOfCorrectAnswers
        ]);

       return $match;


    }

    public function store(Request $request)
    {
        $match =  Match::create($request->all());
        return response()->json($match,201);
    }

    public function show($id){

        return Match::findOrFail($id);

    }

    public function showBy($id){

        $matches = Match::where("creator", $id)->get();
        return $matches;

    }
    
    public function update(Request $request){

        $bodyContent = $request->all();

        $id = $bodyContent['id'];
        $isRunning = $bodyContent['isRunning'];
        $score = $bodyContent['score'];
        $numberOfCorrectAnswers = $bodyContent['numberOfCorrectAnswers'];

        $updatedMatch = Match::where('id',$id)->update(['isRunning'=>$isRunning, 'score' => $score, 'numberOfCorrectAnswers' => $numberOfCorrectAnswers]);
        return $updatedMatch;

    }

}
