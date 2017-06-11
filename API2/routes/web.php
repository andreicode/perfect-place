<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Route::group(['prefix' => 'login'], function () {

    Route::post('facebook', 'LoginController@facebook');

});

Route::group(['prefix' => 'listing'], function () {

    Route::get('all', 'ListingController@all');
    Route::get('map', 'ListingController@map');
    Route::get('{id}', 'ListingController@single');

    Route::group(['middleware' => 'jwt.auth'], function () {

        Route::get('my', 'ListingController@my');
        Route::get('my/{id}', 'ListingController@mySingle');
        Route::post('store', 'ListingController@store');
        Route::put('{id}', 'ListingController@update');
        Route::delete('{id}', 'ListingsController@delete');

    });


});

Route::group(['prefix' => 'user'], function () {

    Route::get('/', 'UserController@user');

});
