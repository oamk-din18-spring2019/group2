<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Question extends Model
{
     /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'question','categoryTitle','categoryId','correctAnswer','option1','option2','option3','correctGuesses','option1Guesses','option2Guesses','option3Guesses','usePermission'
        ];
    private $question, $categoryTitle, $categoryId, $correctAnswer, $option1, $option2, $option3, $correctGuesses, $option1Guesses, $option2Guesses, $option3Guesses, $usePremission;
    private $options;

    public function __constructor($question,$categoryTitle, $categoryId, $correctAnswer, $option1, $option2, $option3){

        $this->setCorrectAnswer($correctAnswer);
        $this->setQuestion($question);
        $this->setCategoryTitle($categoryTitle);
        $this->setCategoryId($categoryId);
        $this->setOptions($option1,$option2,$option3);
        
    }

    public function getQuestion(){
        return $this->question;
    }

    public function getCategoryTitle(){
        return $this->categoryTitle;
    }

    public function getCategoryId(){
        return $this->categoryId;
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

    public function saveQuestion(){
        $attributes = request()->validate([
            'categoryTitle' => ['required', 'min:3', 'max:255'],
            'categoryId' => ['nullable', 'min:0', 'max:255'],
            'question' => ['required', 'min:3'],
            'correctAnswer' => ['required', 'min:3'],
            'option1' => ['required', 'min:3'],
            'option2' => ['required', 'min:3'],
            'option3' => ['required', 'min:3'],
            'correctGuesses' => ['nullable', 'min:0'],
            'option1Guesses' => ['nullable','min:0'],
            'option2Guesses' => ['nullable','min:0'],
            'option3Guesses' => ['nullable','min:0'],
            'usePremission' => ['nullable','min:0'],

        ]);
        Question::create($attributes);
    }

}
