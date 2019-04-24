<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\questions;

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
}
