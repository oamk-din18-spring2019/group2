@extends('layout')


@section('content')
    <h1 class="title">edit question</h1>
    <form method="POST" action="{{ url('admin/questions') }}/{{ $question->id }}">
        @method('PATCH')
        @csrf
        <div class="field">
            <label class="label" for="title">Title</label>
            <div class="control">
                <input type="text" class="input" name="categoryTitle" placeholder="Category" value="{{ $question->categoryTitle }}">
            </div>
        </div>
        <div class="field">
            <label class="label" for="question">Question</label>
            <div class="control">
                <textarea class="textarea" name="question" placeholder="">{{ $question->question }}</textarea>
            </div>
        </div>
        <div class="field">
            <label class="label" for="correctAnswer">Correct answer</label>
            <div class="control">
                <textarea class="textarea" name="correctAnswer" placeholder="">{{ $question->correctAnswer }}</textarea>
            </div>
        </div>
        <div class="field">
            <label class="label" for="option1">Option1</label>
            <div class="control">
                <textarea class="textarea" name="option1" placeholder="">{{ $question->option1 }}</textarea>
            </div>
        </div>
        <div class="field">
            <label class="label" for="optins2">option2</label>
            <div class="control">
                <textarea class="textarea" name="option2" placeholder="">{{ $question->option2 }}</textarea>
            </div>
        </div>
        <div class="field">
            <label class="label" for="optins3">option3</label>
            <div class="control">
                <textarea class="textarea" name="option3" placeholder="">{{ $question->option3 }}</textarea>
            </div>
        </div>
        <div class="field">
            <label class="label" for="optins3">option4</label>
            <div class="control">
                <textarea class="textarea" name="option4" placeholder="">{{ $question->option4 }}</textarea>
            </div>
        </div>
        <div class="field">
            <div class="control">
                <button type="submit" class="button">Update question</button>
            </div>
        </div>
    </form><br>
    <form  method="POST" action="{{ url('admin/questions') }}/{{ $question->id }}">
        @method('DELETE')
        @csrf
        <div class="field">
            <div class="control">
                <button type="submit" class="">Delete question</button>
            </div>
        </div>
    </form>
@endsection