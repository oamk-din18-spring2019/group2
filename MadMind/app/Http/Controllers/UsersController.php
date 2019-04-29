<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\User;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Hash;
use Illuminate\Foundation\Auth\RegistersUsers;
use Illuminate\Foundation\Auth\AuthenticatesUsers;

class UsersController extends Controller
{

    public function index($n){

        
        // $i = strpos($n,'-');
        $data = explode('-',$n);
        $username = $data[0];
        $password = $data[1];

        
        $d =  User::create([
                'username' => $username,
                'password' => Hash::make($password)
            ]);
        
        return json_encode($d);

       
    }
public function login($n){
        $data = explode('-',$n);
        $username = $data[0];
        $password = $data[1];

        $credentials = array("username"=>$username,"password"=>$password);

        if (Auth::attempt($credentials)) {
            
            $user = DB::table('users')->where('username', $username)->first();
            return $user;
        }else{
            return null;
        }
 }
  
}
