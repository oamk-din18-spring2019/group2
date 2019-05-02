<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateQuestionsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('questions', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->integer('categoryId')->nullable();
            $table->string('categoryTitle', 255)->nullable()->unique();
            $table->text('question')->nullable();
            $table->text('correctAnswer')->nullable();
            $table->text('option1')->nullable();
            $table->text('option2')->nullable();
            $table->text('option3')->nullable();
            $table->integer('option1Guesses')->nullable();
            $table->integer('option2Guesses')->nullable();
            $table->integer('option3Guesses')->nullable();
            $table->integer('correctGuesses')->nullable();
            $table->integer('usePermission')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('questions');
    }
}
