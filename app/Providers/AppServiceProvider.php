<?php

namespace App\Providers;

use Illuminate\Support\Facades\URL;
use Illuminate\Support\ServiceProvider;
use Inertia\Inertia;
use Illuminate\Support\Facades\Lang;
use Illuminate\Support\Facades\App;
use Illuminate\Support\Facades\Cookie;

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

        if (config('app.env') === 'production') {
            URL::forceScheme('https');
        }

        // pass locale translations using props
        Inertia::share([
            'locale' => fn() => App::getLocale(),
            'direction' => fn() => App::getLocale() == 'en' ? 'ltr' : 'rtl',
            'translations' => fn() => [
                 'home' => Lang::get('home'),
                 'general' => Lang::get('general'),
                 'sign_up' => Lang::get('sign_up'),
                 'validation' => Lang::get('validation')
            ],
            'flash' => fn() => [
                'success' => session('success'),
                'transaction_id' => session('transaction_id'),
            ],
            'is_agreed_to_terms' => fn() => Cookie::get('is_agreed_to_terms', false) ? true : false,
    ]);
    }
}
