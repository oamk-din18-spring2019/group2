<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
Use App\Category;
Use App\Question;

class CategoryController extends Controller
{
    public function index()
    {
        return Category::all();
    }

    

    public function store(Request $request)
    {
        $category =  Category::create($request->all());
        return response()->json($category,201);
    }


    public function update(Request $request){

        $bodyContent = $request->all();

        $id = $bodyContent['id'];
        $title = $bodyContent['title'];
        
        $updatedCategory = Category::where('id',$id)->update(['title'=>$title]);
        return $updatedCategory;

    }

    public function questions($id)
    {
        $matches = Question::where("categoryId", $id)->get();
       

        return $questions;
    }

}
