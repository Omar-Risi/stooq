<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class OtpToken extends Model
{

    protected $primaryKey = 'transaction_id';
    public $incrementing = false;
    protected $keyType = 'string';

    protected  $fillable = [
        'transaction_id',
        'email',
        'otp',
        'expires_at',
        'used'
    ];

}
