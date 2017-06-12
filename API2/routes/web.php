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

Route::group(['prefix' => 'login'], function () {

    Route::post('facebook', 'LoginController@facebook');

});

Route::group(['prefix' => 'listing'], function () {

    Route::get('all', 'ListingController@all');
    Route::get('map', 'ListingController@map');

    Route::group(['middleware' => 'jwt.auth'], function () {

        Route::get('my', 'ListingController@my');
        Route::post('store', 'ListingController@store');
        Route::post('update/{id}', 'ListingController@update');
        Route::delete('{id}', 'ListingController@delete');

    });

    Route::get('{id}', 'ListingController@single');

});

Route::group(['prefix' => 'user'], function () {

    Route::get('/', 'UserController@user');

});

Route::group(['prefix' => 'bookmark', 'middleware' => 'jwt.auth'], function () {

    Route::get('all', 'BookmarksController@all');
    Route::post('/{id}', 'BookmarksController@create');
    Route::delete('/{id}', 'BookmarksController@delete');

});

