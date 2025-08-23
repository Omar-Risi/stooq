<?php

namespace App\Http\Controllers;

use App\Mail\BusinessApplied;
use Illuminate\Http\Request;
use App\Http\Requests\StoreBusinessRequest;
use App\Models\Business;
use App\Models\Owner;
use App\Models\Product;
use App\Models\OtpToken;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;
use App\Mail\OtpSent;

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

        Mail::to($validated['owner']['email'])
            ->send(new OtpSent($otp));

        return back()->with([
            'success'=>true,
            'transaction_id' => $transactionId,
        ]);
    }

    public function store (StoreBusinessRequest $request) {

        $validated = $request->validated();

        $request->validate([
            'otp' => ['string','required','max:6'],
            'transaction_id' => ['required','uuid']
        ]);


        $otpToken = OtpToken::where('transaction_id', $request->transaction_id)
            ->where('email', $validated['owner']['email'])
            ->where('used', false)
            ->where('expires_at', '>', now())
            ->first();

        if (!$otpToken || !Hash::check($request->otp, $otpToken->otp)) {
            return back()->withErrors(['otp' => 'Invalid or expired OTP.']);
        }

        $otpToken->update(['used', true]);


        $owner = Owner::create($validated['owner']);

        $logoPath = $request->file('business.logo')->store('business_logos', 'public');
        $bannerPath = $request->file('business.banner')->store('business_banners', 'public');

        $business = Business::create([
            'owner_id' => $owner->id, // Link to owner
            'name' => $validated['business']['name'],
            'name_ar'=>$validated['business']['name_ar'],
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

        Mail::to($validated['owner']['email'])
            ->send(new BusinessApplied());

        return  redirect(route('business.sign-up'))->with('success', 'created successfully');
    }
}
