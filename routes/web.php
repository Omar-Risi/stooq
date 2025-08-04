<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Middleware\SetLocale;


Route::middleware([SetLocale::class])->group(
    function () {
        Route::get('/', function () {
            return Inertia::render('home');
        })->name('home');

        Route::get('/business/signup', function () {
            return Inertia::render('business/sign-up');
        })->name('business.sign-up');
    }
);

/* Route::middleware(['auth', 'verified'])->group(function () { */
/*     Route::get('dashboard', function () { */
/*         return Inertia::render('dashboard'); */
/*     })->name('dashboard'); */
/* }); */

/* require __DIR__.'/settings.php'; */
/* require __DIR__.'/auth.php'; */
