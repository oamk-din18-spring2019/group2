<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')
    ->get('/user', function (Request $request) {
        return $request->user();
    });


Use App\User;

Route::post('register', 'Auth\RegisterController@register');
Route::post('login', 'Auth\LoginController@login');
Route::post('logout', 'Auth\LoginController@logout');

// Route::get('users', 'UserController@index');

// Route::get('users/{id}', 'UserController@show');

// Route::post('users', 'UserController@store');

// Route::put('users/{id}', 'UserController@update');

// Route::delete('users/{id}', 'UserController@delete');

Use App\Question;

Route::group(['middleware' => 'auth:api'], function() {
Route::get('questions', 'QuestionController@index');

Route::get('questions/{question}', 'QuestionController@show');

Route::post('questions', 'QuestionController@store');

Route::put('questions/{question}', 'QuestionController@update');

Route::delete('questions/{question}', 'QuestionController@delete');

});
