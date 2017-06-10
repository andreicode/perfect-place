<?php

/*
|--------------------------------------------------------------------------
| Model Factories
|--------------------------------------------------------------------------
|
| Here you may define all of your model factories. Model factories give
| you a convenient way to create models for testing and seeding your
| database. Just tell the factory how a default model should look.
|
*/

/** @var \Illuminate\Database\Eloquent\Factory $factory */
$factory->define(App\User::class, function (Faker\Generator $faker) {

    return [
        'name' => $faker->name,
        'email' => $faker->unique()->safeEmail,
        'social_id' => str_random(60),
        'created_at' => $faker->dateTimeThisYear(),
        'avatar' => $faker->imageUrl(400, 400, 'people')
    ];
});

$factory->define(App\Listing::class, function (Faker\Generator $faker) {

    return [

        'title' => $faker->catchPhrase(),
        'description' => $faker->realText(600),
        'address' => $faker->address(),
        'roomNumber' => $faker->numberBetween($min = 1, $max = 10),
        'lat' => $faker->latitude($min = 51.337815, $max = 51.677150),
        'long' => $faker->longitude($min = -0.440848, $max = 0.124948),
        'price' => $faker->randomNumber($nbDigits = 5),
        'created_at' => $faker->dateTimeThisYear(),
        'image' => $faker->imageUrl(1600, 900, 'city')
        
    ];
});