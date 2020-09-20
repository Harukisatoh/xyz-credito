<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::post('login', 'App\Http\Controllers\UserController@login');
Route::post('register', 'App\Http\Controllers\UserController@register');
Route::get('debtors', 'App\Http\Controllers\DebtController@index');

Route::group(['middleware' => 'auth:api'], function () {
    Route::delete('logout', 'App\Http\Controllers\UserController@logout');
    Route::post('debts', 'App\Http\Controllers\DebtController@create');
    Route::get('debts', 'App\Http\Controllers\DebtController@getRegisteredDebtsByUser');
    Route::delete('debts/{id}', 'App\Http\Controllers\DebtController@delete');
    Route::put('debts/{id}', 'App\Http\Controllers\DebtController@update');
});
