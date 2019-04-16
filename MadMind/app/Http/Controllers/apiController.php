<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\questions;
class apiController extends Controller
{

    public function getQuestions($n)
    {
    //    dd("here");

    
        // $questions = questions::inRandomOrder()->limit($n)->get();
        $questions = questions::inRandomOrder()->limit($n)->get();
        
// dd($questions);
      $array = collect(json_decode($questions, true))->flatten();
      $filtered = [];

      foreach ($array as $bruh) {
          # code...

          if(gettype($bruh) == "NULL"){
            
          }else{
              array_push($filtered,$bruh);
          }
          
      }

     // dd($filtered);


     return $filtered;
      //  dd("id: ".$array[0],"category id: ".$array[1],"category title: ".$array[2],"question: ".$array[3],"correctanswer: ".$array[4],"option 1: ".$array[5],"option 2: ".$array[6],"option 3: ".$array[7]);
    
        // dd($questions[0]);
        // dd(gettype($questions));

        // $questions = questions::all();
        // return view('admin/questions.index', compact('questions'));
    }
    
}