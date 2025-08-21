<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;
use App\Models\Product;
use App\Models\Owner;

class Business extends Model
{

    protected $fillable = [
        'name',
        'name_ar',
        'description',
        'instagram_handle',
        'commercial_registeration',
        'age',
        'logo',
        'banner',
        'owner_id'
    ];

    /**
    * Define a one-to-one relationship with the Owner model.
    *
    * Returns the owner of this business
    *
    * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
    */

    public function owner():BelongsTo {
        return $this->belongsTo(Owner::class);
    }

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
