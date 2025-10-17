<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreBusinessRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            // Owner
            'owner.name' => ['required', 'string', 'max:255'],
            'owner.age' => ['required', 'integer', 'min:18'],
            'owner.gender' => ['required', 'string'],
            'owner.resident_id' => ['required', 'string', 'max:50'],
            /* 'owner.education_level' => ['string', 'max:255'], */
            'owner.nationality' => ['required', 'string', 'max:255'],
            'owner.institute_name' => ['required', 'string', 'max:255'],
            'owner.phone_number' => ['required', 'string'],
            'owner.email' => ['required', 'email', 'max:255'],
            'owner.governorate' => ['required', 'string'],

            // Business
            'business.name' => ['required', 'string', 'max:255'],
            'business.name_ar' => ['required', 'string', 'max:255'],
            'business.age' => ['required', 'integer', 'min:0'], // in years
            'business.description' => ['nullable', 'string'],
            'business.commercial_registration' => ['nullable', 'string', 'max:100'],
            'business.instagram_handle' => ['required', 'string', 'max:50', 'regex:/^[A-Za-z0-9._]+$/'],
            'business.logo' => ['required', 'image', 'mimes:jpg,jpeg,png'],
            'business.banner' => ['required', 'image', 'mimes:jpg,jpeg,png'],

            // Products array
            'products' => ['array'],
            'products.*.name' => ['required', 'string', 'max:255'],
            'products.*.price' => ['required', 'numeric', 'min:1'],
            'products.*.description' => ['nullable', 'string'],
            'products.*.image' => ['required', 'image', 'mimes:jpg,jpeg,png', 'max:4096'],
        ];
    }
}
