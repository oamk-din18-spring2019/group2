@extends('layout')

@section('content')
<h1>Quesions database</h1>
    <h1 class="title">{{ $question->categoryTitle }}</h1>
    <div class="content">{{ $question->question }}</div>
    <div class="content">{{ $question->correctAnswer }}</div>
    <div class="content">{{ $question->option1 }}</div>
    <div class="content">{{ $question->option2 }}</div>
    <div class="content">{{ $question->option3 }}</div>
    <p>
        <a href=" {{ url('admin/questions') }}/{{ $question->id  }}/edit">Edit</a>
    </p>
@endsection