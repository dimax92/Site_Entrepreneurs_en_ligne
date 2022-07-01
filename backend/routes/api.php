<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\EntreprisesController;
use App\Http\Controllers\AuthentificationController;

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

Route::post('/register', [AuthentificationController::class, 'register']);
Route::post('/login', [AuthentificationController::class, 'login']);

Route::get("/entreprise", [EntreprisesController::class, "index"]);
Route::post("/recherche/{search}", [EntreprisesController::class, "search"]);
Route::get("/entreprise/{id}", [EntreprisesController::class, "show"]);

Route::group(['middleware' => ['auth:sanctum']], function () {
    Route::get('/profile', [AuthentificationController::class, 'profile']);
    Route::post('/logout', [AuthentificationController::class, 'logout']);
    Route::post('/updateprofil/{id}', [AuthentificationController::class, 'update']);
    Route::post('/suppressionprofil/{id}', [AuthentificationController::class, 'destroy']);

    Route::post("/entreprise/{id}", [EntreprisesController::class, "store"]);
    Route::post("/modification/{id}", [EntreprisesController::class, "update"]);
    Route::post("/suppression/{id}", [EntreprisesController::class, "destroy"]);
    Route::get("/mesentreprises/{id}", [EntreprisesController::class, "mesEntreprises"]);
});