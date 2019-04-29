<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class matches extends Model
{
    protected $guarded = ['id'];
    private $creator, $matchType , $score, $isRunning, $questionsToBeAttempted, $numberOfCorrectAnswers;
    public $created_at;
    public function __constructor($creator, $matchType, $created_at, $score, $isRunning, $questionsToBeAttempted, $numberOfCorrectAnswers){

        $this->setBy($creator);
        $this->setMatchType($matchType);
        $this->created_at = $created_at;
        $this->setScore($score);
        $this->setIsRunning($isRunning);
        $this->setQuestionsToBeAttempted($questionsToBeAttempted);
        $this->setNumberOfCorrectAnswers($numberOfCorrectAnswers);
        return $this;
    }

    public function setBy($creator){
        $this->creator = $creator;
    }
    
    public function setMatchType($matchType){
        $this->matchType = $matchType;
    }


    public function setScore($score){
        $this->score = $score;
    }
   
    public function setIsRunning($isRunning){
        $this->isRunning = $isRunning;
    }

    public function setQuestionsToBeAttempted($questionsToBeAttempted){
        $this->questionsToBeAttempted = $questionsToBeAttempted;
    }

    public function setNumberOfCorrectAnswers($numberOfCorrectAnswers){
        $this->numberOfCorrectAnswers = $numberOfCorrectAnswers;
    }


    public function getCreator(){
        return $this->creator;
    }
    
    public function getMatchType(){
        return $this->matchType;
    }


    public function getScore(){
        return $this->score;
    }
   
    public function getIsRunning(){
        return $this->isRunning;
    }

    public function getQuestionsToBeAttempted(){
        return $this->questionsToBeAttempted;
    }

    public function getNumberOfCorrectAnswers(){
        return $this->numberOfCorrectAnswers;
    }

    public function save(){

        $attributes = ["creator"=>$this->creator,
                        "matchType"=>$this->matchType,
                        "score"=>$this->score,
                        "isRunning"=>$this->isRunning,
                        "questionsToBeAttempted"=>$this->questionsToBeAttempted,
                        "numberOfCorrectAnswers"=>$this->numberOfCorrectAnswers];
        $attributes = request()->validate([
            'creator' => ['required'],
            'matchType' => ['required'],
            'score' => ['required'],
            'isRunning' => ['required'],
            'questionsToBeAttempted' => ['required'],
            'numberOfCorrectAnswers' => ['required']
        ]);
        $this::create($attributes);

    }

    public function findById($id){

        $match = DB::table('matches')->where('id', $id)->first();
        return $match;
    }
}
