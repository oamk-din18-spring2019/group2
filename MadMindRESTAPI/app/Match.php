<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Match extends Model
{
    // protected $guarded = ['id'];
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'creator','matchType','score','isRunning','questionsToBeAttempted','numberOfCorrectAnswers'
    ];
}
