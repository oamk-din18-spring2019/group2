<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;
use App\questions;

class adminController extends Controller
{
    public function __construct()
    {
        $this->middleware('admin');
    }

    public function index()
    {
        $questions = questions::all();
        return view('admin/questions.index', compact('questions'));
    }

    public function create()
    {
        return view('admin/questions.create');
    }

    public function store()
    {
        $atributes = request()->validate([
            'categoryTitle' => ['required', 'min:3', 'max:255'],
            'question' => ['required', 'min:3'],
            'correctAnswer' => ['required', 'min:3'],
            'option1' => ['required', 'min:3'],
            'option2' => ['required', 'min:3'],
            'option3' => ['required', 'min:3'],
        ]);
        questions::create($atributes);
        return redirect('admin/questions');
    }

    public function show(questions $question)
    {
        return view('admin/questions.show', compact('question'));
    }

    public function edit(questions $question) //example.com/questions/1/edit
    {
        return view('admin/questions.edit', compact('question'));
    }
    public function update(questions $question)
    {
        $question->update(request(['categoryTitle', 'question', 'correctAnswer', 'option1', 'option2', 'option3']));
        return redirect('admin/questions');
    }

    public function destroy(questions $question)
    {
        $question->delete();
        return redirect('admin/questions');
    }
}
