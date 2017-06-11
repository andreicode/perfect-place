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

    protected $pageSize = 9;

    public function all(Request $request) {

        $listings = Listing::with('user')
            ->when($request->has('search'), function ($query) use($request) {

                return $query->where('title', 'LIKE', '%' . $request->search . '%')
                   ->orWhere('description', 'LIKE', '%' . $request->search . '%');
                   
            })
            ->orderBy($request->has('order') ? $request->order : 'created_at', $request->has('orderType') ? $request->orderType : 'DESC')
            ->skip($request->has('page') ? $request->page : 0)
            ->limit($this->pageSize)
            ->get();
    
        return response()->json(compact('listings'));

    }

    public function single($id) {

        $listing = Listing::with('user')->find($id);

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

    public function my(Request $request) {

         $user = JWTAuth::parseToken()->toUser();

         $listings = Listing::when($request->has('search'), function ($query) use($request) {

                return $query->where(function ($q) use($request) {

                    return $q->where('title', 'LIKE', '%' . $request->search . '%')
                        ->orWhere('description', 'LIKE', '%' . $request->search . '%');

                });

            })
            ->where('user_id', $user->id)
            ->orderBy($request->has('order') ? $request->order : 'created_at', $request->has('orderType') ? $request->orderType : 'DESC')
            ->skip($request->has('page') ? $request->page : 0)
            ->limit($this->pageSize)
            ->get();

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

    public function delete($id) {

        $user = JWTAuth::parseToken()->toUser();

        $listing = Listing::where('id', $id)->where('user_id', $user->id)->first();

        if ($listing) {

            $listing->delete();

        }

        return response()->json('item_deleted');

    }

}
