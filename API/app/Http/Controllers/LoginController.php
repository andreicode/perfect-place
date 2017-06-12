<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use JWTAuth;

use Socialite;
use App\User;

class LoginController extends Controller
{

    public function facebook() {

        $user = Socialite::driver('facebook')->stateless()->user();

        $check_user = User::where('social_id', $user->getId())->first();

        if (!$check_user) {

            $new_user = new User;

            $new_user->social_id = $user->getId();
            $new_user->avatar = $user->getAvatar();
            $new_user->name = $user->getName();
            $new_user->email = $user->getEmail();

            $new_user->save();

        } 

        $token = JWTAuth::fromUser($check_user ? $check_user : $new_user);
               
        return response()->json(['token' => $token]);

    }
}
