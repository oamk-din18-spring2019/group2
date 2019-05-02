<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\questions;
use App\matches;

class apiController extends Controller
{

    public function getQuestions($n)
    {
        $questions = questions::inRandomOrder()->limit($n)->get();

        $array = collect(json_decode($questions, true))->flatten();
        $filtered = [];

        foreach ($array as $bruh) {

            if (gettype($bruh) == "NULL") { } else {
                array_push($filtered, $bruh);
            }
        }
        return $filtered;
    }

    public function createMatch($n){
      
        $data = explode('-',$n);
        $creator = $data[0];
        $matchType = $data[1];

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

        $match = new matches($creator,$matchType, $score, $isRunning, $questionsToBeAttempted, $numberOfCorrectAnswers);
        $match->save();

        



    }
}
