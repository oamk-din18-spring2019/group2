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
Route::resource('admin/questions', 'AdminController');
Route::get('login', 'AdminLoginController@login');
Route::post('/login', 'AdminLoginController@authenticate');
