<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('businesses', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->longText('description');
            $table->string('instagram_handle');
            $table->string('cr')->nullable(true);
            $table->integer('age');
            $table->string('profile_img');
            $table->string('banner');

            $table->string('owner_name');
            $table->string('owner_gender');
            $table->integer('owner_id');
            $table->string('owner_age');
            $table->string('educational_institution')->nullable();
            $table->string('phone_number');
            $table->string('email');

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('businesses');
    }
};
