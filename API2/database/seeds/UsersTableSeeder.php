<?php

use Illuminate\Database\Seeder;

class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        factory(App\User::class, 50)->create()->each(function($u) {

            $nr = mt_rand(0, 20);
            for ($i = 0; $i < $nr; $i++) {

                $u->listings()->save(factory(App\Listing::class)->make());

            }

        });
    }
}
