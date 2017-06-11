<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Listing;
use App\Http\Requests\ListingRequest;
use App\Http\Requests\ListingUpdateRequest;

use Image;
use JWTAuth;


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

        $user = JWTAuth::parseToken()->toUser();

        $path = ltrim($request->image->store('public'), 'public/');
       
        $listing = new Listing;

        $listing->title = $request->title;
        $listing->phone = $request->phone;
        $listing->address = $request->address;
        $listing->price = $request->price;
        $listing->lat = $request->lat;
        $listing->long = $request->long;
        $listing->roomNumber = $request->roomNumber;
        $listing->description = $request->description;
        $listing->rental = $request->rental ? 1 : 0;
        $listing->image = $path;
        $listing->user_id = $user->id;

        $listing->save();

        return response()->json(compact('listing'));

    }

    public function my() {

         $user = JWTAuth::parseToken()->toUser();

         $listings = Listing::where('user_id', $user->id)->orderBy('created_at', 'DESC')->get();

         return response()->json(compact('listings'));

    }

    public function update(ListingUpdateRequest $request, $id) {

       $user = JWTAuth::parseToken()->toUser();

       $listing = Listing::where('id', $id)->where('user_id', $user->id)->first();

       $listing->update($request->all());

       if ($request->hasFile('image')) {

            $path = ltrim($request->image->store('public'), 'public/');

            $listing->update(['image' => $path]);

       }

       return response()->json(compact('listing')); 

    }

}
