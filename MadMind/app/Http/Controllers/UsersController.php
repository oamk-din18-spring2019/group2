<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\User;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Hash;
use Illuminate\Foundation\Auth\RegistersUsers;

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



        // return json_encode($n);





        // $username = $data->username;
        // $password = $data->password;
        // $passwordConfirm  = $data->passwordConfirm;

        // if($password == $passwordConfirm){
        //     return User::create([
        //         'username' => $username,
        //         'password' => Hash::make($password)
        //     ]);
        // }
       
    }
}
