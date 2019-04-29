<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class questions extends Model
{
    protected $guarded = ['id'];
    private $question, $categoryTitle, $option1, $option2, $option3, $correctAnswer;
    private $options;

    public function __constructor($question,$categoryTitle, $correctAnswer, $option1, $option2, $option3){

        $this->setCorrectAnswer($correctAnswer);
        $this->setQuestion($question);
        $this->setCategoryTitle($categoryTitle);
        $this->setOptions($option1,$option2,$option3);
        
    }

    public function getQuestion(){
        return $this->question;
    }

    public function getCategoryTitle(){
        return $this->categoryTitle;
    }

    public function getOptions(){

        return $this->options;
    }

    public function getCorrectAnswer($correctAnswer){
       return $this->correctAnswer;
    }

    public function setQuestion($question){
        $this->question = $question;
    }

    public function setCategoryTitle($categoryTitle){
        $this->categoryTitle = $categoryTitle;
    }

    public function setOptions($option1,$option2,$option3){
        $this->option1 = $option1;
        $this->option2 = $option2;
        $this->option3 = $option3;
        $this->option3 = array($option1,$option2,$option3);

    }

    public function setCorrectAnswer($correctAnswer){
        $this->correctAnswer = $correctAnswer;
    }

    public function save(){
        $attributes = request()->validate([
            'categoryTitle' => ['required', 'min:3', 'max:255'],
            'question' => ['required', 'min:3'],
            'correctAnswer' => ['required', 'min:3'],
            'option1' => ['required', 'min:3'],
            'option2' => ['required', 'min:3'],
            'option3' => ['required', 'min:3'],
        ]);
        questions::create($attributes);
    }

}
