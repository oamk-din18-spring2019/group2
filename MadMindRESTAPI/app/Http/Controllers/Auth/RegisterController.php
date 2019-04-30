<?php

namespace App\Http\Controllers\Auth;

use App\User;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use Illuminate\Foundation\Auth\RegistersUsers;
use Illuminate\Auth\Events\Registered;

class RegisterController extends Controller
{
    /*
    |--------------------------------------------------------------------------
    | Register Controller
    |--------------------------------------------------------------------------
    |
    | This controller handles the registration of new users as well as their
    | validation and creation. By default this controller uses a trait to
    | provide this functionality without requiring any additional code.
    |
    */

    use RegistersUsers;

    /**
     * Where to redirect users after registration.
     *
     * @var string
     */
    protected $redirectTo = '/home';

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('guest');
    }

    /**
     * Get a validator for an incoming registration request.
     *
     * @param  array  $data
     * @return \Illuminate\Contracts\Validation\Validator
     */
    protected function validator(array $data)
    {
        return Validator::make($data, [
            'username' => ['required', 'string', 'max:255'],
            'password' => ['required', 'string', 'min:5'],
            'highScores' =>['required', 'string'],
            'counts' => ['required', 'string'],
            'lastScores'=>['required', 'string'],
            'totalScore'=>['required','integer']

        ]);
    }

    /**
     * Create a new user instance after a valid registration.
     *
     * @param  array  $data
     * @return \App\User
     */
    protected function create(array $data)
    {
        return json_encode($data);

        // return User::create([
        //     'username' => $data['username'],
        //     'password' => Hash::make($data['password']),
        //     'counts' => $data['counts'],
        //     'highScores' => $data['highScores'],
        //     'lastScores' => $data['lastScores'],
        //     'totalScore' =>$data['totalScore']
        // ]);
    }

    public function register(Request $request)
{

    $bodyContent = $request->getContent();
    
    //     return $content;
    $username = json_decode($bodyContent)['username'];
    
    return $bodyContent;

     
    // $this->create(array(["username"->$content['username']]));

    
        // event(new Registered($user = $this->create($request->all())));
    
       
       
        // return $this->registered($request, $user)
        //                 ?: redirect($this->redirectPath());

    
    // $this->validator($request->all())->validate();

    
    // event(new Registered($user = $this->create($request->all())));

    // // After the user is created, he's logged in.
    // $this->guard()->login($user);

   
    // return $this->registered($request, $user)
    //                 ?: redirect($this->redirectPath());
}

protected function registered(Request $request, $user)
{
    $user->generateToken();

    return response()->json(['data' => $user->toArray()], 201);
}
}
