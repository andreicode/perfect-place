<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Listing;

class ListingController extends Controller
{
    public function all() {

        $listings = Listing::orderBy('created_at', 'DESC')->get();
    
        return response()->json(compact('listings'));

    }

    public function single($id) {

        $listing = Listing::find($id);

        return response()->json(compact('listing'));
    }
}
