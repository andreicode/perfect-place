<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Listing extends Model
{
    
     protected $fillable = [
        'title', 'phone', 'address', 'price', 'lat', 'long', 'description', 'roomNumber', 'rental', 'image'
    ];


    public function getImageAttribute($value) {

        if (starts_with($value, 'http://lorempixel.com/')) {

            return $value;

        }

        return url('storage/' . $value);

    }
}
