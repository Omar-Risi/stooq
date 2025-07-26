<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use App\Models\Business;

class Product extends Model
{
    protected $fillable = [
        'name',
        'description',
        'price',
        'quantity',
        'business_id',
    ];

    /**
    * Get the business that owns this model.
    *
    * Defines an inverse one-to-many relationship to the Business model.
    *
    * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
    */
    public function business():BelongsTo {
        return $this->belongsTo(Business::class);
    }
}
