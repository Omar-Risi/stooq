<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use App\Models\Product;

class Business extends Model
{

    protected $fillable = [
        'name',
        'description',
        'social_media_handle',
        'cr',
        'id',
        'age',
        'profile_img',
        'banner',

        'owner_name',
        'owner_age',
        'phone_number',
        'email',
    ];

    /**
    * Define a one-to-many relationship with the Product model.
    *
    * Returns all products associated with this model.
    *
    * @return \Illuminate\Database\Eloquent\Relations\HasMany
    */
    public function products():HasMany
    {
        return $this->hasMany(Product::class);
    }
}
