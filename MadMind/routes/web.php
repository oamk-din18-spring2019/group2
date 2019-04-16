<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});
Route::get('profile', function (){
    //Only authenticated users may enter
})->middleware('auth');

Route::resource('categories', 'categoriesController');
Route::resource('matches', 'matchesController');
// Route::resource('questions', 'questionsController');
Route::resource('admin/questions', 'adminController');
Route::resource('users', 'usersController');
<<<<<<< HEAD
Route::get('api/getQuestions/{n}','apiController@getQuestions');
=======
Auth::routes();
Route::get('/home', 'homeController@index')->name('home');
>>>>>>> b59d985afc590b928ee8444affe6634f77e23993
