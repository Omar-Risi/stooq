<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Middleware\SetLocale;
use App\Http\Controllers\BusinessController;


Route::middleware([SetLocale::class])->group(
    function () {
        Route::get('/', function () {

            return Inertia::render('home');
        })->name('home');

        Route::get('/business/signup', function () {
            return Inertia::render('business/sign-up');
        })->name('business.sign-up');



        Route::post('/business/store', [BusinessController::class, 'store'])->name('business.store');
        Route::post('/business/validate', [BusinessController::class, 'validate'])->name('business.validate');
        Route::post('/api/success', function (Request $request) {

            return back()->with('success', 'successfully post');
        });
    }

);

Route::post('toggle-locale', function (Request $request) {
    $locale = $request->input('locale');

    if (in_array($locale, ['en', 'ar'])) {
        session(['locale' => $locale]);
    }

    return back();
})->name('switch.lang');


/* Route::middleware(['auth', 'verified'])->group(function () { */
/*     Route::get('dashboard', function () { */
/*         return Inertia::render('dashboard'); */
/*     })->name('dashboard'); */
/* }); */

/* require __DIR__.'/settings.php'; */
/* require __DIR__.'/auth.php'; */
