<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use JWTAuth;

class UserController extends Controller
{
    public function user() {

        $user = JWTAuth::parseToken()->toUser();

        return response()->json(compact('user'));

    }
}
