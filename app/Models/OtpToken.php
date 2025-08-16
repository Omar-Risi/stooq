<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class OtpToken extends Model
{
    protected  $fillable = [
        'transaction_id',
        'email',
        'otp',
        'expires_at',
        'used'
    ];

}
