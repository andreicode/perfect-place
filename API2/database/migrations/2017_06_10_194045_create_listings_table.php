<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateListingsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
         Schema::create('listings', function (Blueprint $table) {
            $table->increments('id');
            $table->string('title');
            $table->string('description', 1000);
            $table->string('address', 250);
            $table->integer('roomNumber');
            $table->double('lat');
            $table->double('long');
            $table->integer('user_id')->references('id')->on('users');
            $table->integer('price');
            $table->string('image');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('listings');
    }
}