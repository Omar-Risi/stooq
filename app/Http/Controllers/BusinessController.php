<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests\StoreBusinessRequest;
use App\Models\Business;
use App\Models\Owner;
use App\Models\Product;
use App\Models\OtpToken;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;

class BusinessController extends Controller
{

    public function validate(StoreBusinessRequest $request) {
        $validated = $request->validated();

        $otp = rand(100000, 999999);
        $transactionId = Str::uuid();

        OtpToken::create([
            'transaction_id' => $transactionId,
            'email' => $validated['owner']['email'],
            'otp' => Hash::make($otp),
            'expires_at' => now()->addMinutes(5),
        ]);

        Mail::raw("Your OTP code is: {$otp}", function ($message) use ($validated) {
            $message->to($validated['owner']['email'])
                ->subject('Your OTP Code');
        });

        return back()->with([
            'transaction_id' => $transactionId,
            'otp_sent' => true,
        ]);
    }

    public function store (StoreBusinessRequest $request) {

        $validated = $request->validated();

        $owner = Owner::create([
            'name' => $validated['owner']['name'],
            'age' => $validated['owner']['age'],
            'gender' => 'male',
            'resident_id' => $validated['owner']['resident_id'],
            'education_level' => $validated['owner']['education_level'],
            'institute_name' => $validated['owner']['institute_name'],
            'phone_number' => $validated['owner']['phone_number'],
            'email' => $validated['owner']['email'],
            'governorate' => $validated['owner']['governorate'],
        ]);

        $logoPath = $request->file('business.logo')->store('business_logos', 'public');
        $bannerPath = $request->file('business.banner')->store('business_banners', 'public');

        $business = Business::create([
            'owner_id' => $owner->id, // Link to owner
            'name' => $validated['business']['name'],
            'age' => $validated['business']['age'],
            'description' => $validated['business']['description'],
            'commercial_registration' => $validated['business']['commercial_registration'] ?? null,
            'instagram_handle' => $validated['business']['instagram_handle'],
            'logo' => $logoPath,
            'banner' => $bannerPath,
        ]);

        if (!empty($validated['products'])) {
            foreach ($validated['products'] as $product) {
                // Handle product image upload
                $imagePath = null;
                if (isset($product['image']) && $product['image'] instanceof \Illuminate\Http\UploadedFile) {
                    $imagePath = $product['image']->store('products', 'public'); // stores in storage/app/public/products
                }

                Product::create([
                    'business_id' => $business->id,
                    'name' => $product['name'],
                    'price' => $product['price'],
                    'description' => $product['description'] ?? null,
                    'image' => $imagePath,
                ]);
            }
        }

        return  redirect(route('business.sign-up'))->with('success', 'created successfully');
    }
}
