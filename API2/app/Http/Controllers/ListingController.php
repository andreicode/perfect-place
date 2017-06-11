<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Listing;
use App\Http\Requests\ListingRequest;

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


    public function map() {

        $map = Listing::all()->map(function ($listing) {

            return [
                'id' => $listing->id,
                'title' => $listing->title,
                'lat' => $listing->lat,
                'long' => $listing->long
            ];

        });

        return response()->json(compact('map'));

    }

    public function store(ListingRequest $request) {

        

        dd($request->all());

    }

}
