<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use App\Models\Product;

class Business extends Model
{

    protected $fillable = [
        'business_name',
        'business_description',
        'instagram_handle',
        'commercial_registeration',
        'business_age',
        'business_logo',
        'business_banner',

        'owner_name',
        'owner_id',
        'owner_age',
        'governorate',
        'education_level',
        'institute_name',
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
