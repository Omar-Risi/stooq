<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests\StoreBusinessRequest;
use App\Models\Business;

class BusinessController extends Controller
{

    public function store (StoreBusinessRequest $request) {

        $validated = $request->validated();

        // Create the business (exclude products array when creating)
        $business = Business::create(
            collect($validated)->except('products')->toArray()
        );

        // Create products if present
        if (!empty($validated['products'])) {
            foreach ($validated['products'] as $productData) {
                $business->products()->create($productData);
            }
        }

        return $validated;
    }
}
