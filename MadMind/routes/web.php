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
Route::get('profile', function () {
    //Only authenticated users may enter
})->middleware('auth');

Route::get('/admin/questions', ['middleware' => 'AdminMiddleware', function () {
    return view('admin/questions');
}]);

Route::resource('categories', 'categoriesController');
Route::resource('matches', 'matchesController');
Route::resource('admin/questions', 'adminController');
Route::resource('users', 'usersController');
Route::get('api/getQuestions/{n}',array('middleware'=> 'cors', 'uses' => 'apiController@getQuestions'));
Route::post('api/create',array('middleware'=> 'cors', 'uses' => 'registerController@create'));
Route::get('/home', 'homeController@index')->name('home');
Auth::routes(['register' => false]);