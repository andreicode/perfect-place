<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

use JWTAuth;
use App\Bookmark;

class Listing extends Model
{
    
     protected $fillable = [
        'title', 'phone', 'address', 'price', 'lat', 'long', 'description', 'roomNumber', 'rental', 'image'
    ];

    protected $appends = ['book'];


    public function getImageAttribute($value) {

        if (starts_with($value, 'http://lorempixel.com/')) {

            return $value;

        }

        return url('storage/' . $value);

    }

    public function user() {

        return $this->hasOne('App\User', 'id', 'user_id');

    }

    public function getBookAttribute() {

        $isToken = JWTAuth::getToken();
        $userId = 0;

        if ($isToken) {

            $user = JWTAuth::parseToken()->toUser();
            $userId = $user->id;
            $check = Bookmark::where('user_id', $user->id)->where('listing_id', $this->id)->first();

            if ($check) {

                return true;

            } else {

                return false;

            }


        } else {

            return false;

        }

    }

}
