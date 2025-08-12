<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use Inertia\Inertia;
use Illuminate\Support\Facades\Lang;
use Illuminate\Support\Facades\App;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        //
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        // pass locale translations using props
        Inertia::share([
            'locale' => fn() => App::getLocale(),
            'direction' => fn() => App::getLocale() == 'en' ? 'ltr' : 'rtl',
            'translations' => fn() => [
                 'home' => Lang::get('home'),
                 'general' => Lang::get('general'),
                 'sign_up' => Lang::get('sign_up'),
                 'validation' => Lang::get('validation')
            ]
    ]);
    }
}
