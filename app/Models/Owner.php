<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasOne;
use App\Models\Business;

class Owner extends Model
{
    protected $fillable = [
        'name',
        'gender',
        'resident_id',
        'governorate',
        'education_level',
        'institute_name',
        'phone_number',
        'email',
    ];


    /* Define one-to-one relation with the business model
     *
     * Returns the business that belongs to this owner
     *
     * @return \Illuminate\Database\Eloquent\Relations\HasOne
    */
    public function business():HasOne
    {
        return $this->hasOne(Business::class);
    }
}
