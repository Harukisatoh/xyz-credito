<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Debt extends Model
{
    use SoftDeletes, HasFactory;

    protected $fillable = [
        'user_id', 'debtor_id', 'value'
    ];

    protected $dates = [
        'deleted_at'
    ];

    protected $hidden = [
        'created_at', 'updated_at'
    ];
}
