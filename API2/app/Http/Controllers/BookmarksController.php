<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Bookmark;
use JWTAuth;

class BookmarksController extends Controller
{
    public function all() {

        $user = JWTAuth::parseToken()->toUser();

        $bookmarks = Bookmark::with('listing')->where('user_id', $user->id)->orderBy('created_at', 'DESC')->get();

        return $bookmarks;

       
    }

    public function create($id) {

        $user = JWTAuth::parseToken()->toUser();

        $checkBookmark = Bookmark::where(['user_id'  => $user->id, 'listing_id' => $id])->first();

        if ($checkBookmark) {

            return response()->json('already_bookmark');

        }


        $bookmark = new Bookmark;
        $bookmark->user_id = $user->id;
        $bookmark->listing_id = $id;

        $bookmark->save();


        return response()->json('bookmark_save');

    }

    public function delete($id) {

         $user = JWTAuth::parseToken()->toUser();

         $checkBookmark = Bookmark::where(['user_id'  => $user->id, 'listing_id' => $id])->first();

         if (!$checkBookmark) {

            return response()->json('not_bookmark');

        }

        $checkBookmark->delete();

        return response()->json('bookmark_deleted');

    }
}
