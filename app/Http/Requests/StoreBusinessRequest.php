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
            'owner_name' => 'required|string|max:255',
            'owner_age' => 'required|integer|min:18',
            'owner_id' => 'required|string|max:20',
            'education_level' => 'nullable|string|max:255',
            'institute_name' => 'nullable|string|max:255',
            'phone_number' => 'required|string|max:20',
            'email' => 'required|email|max:255',
            'governorate' => 'required|string|max:255',
            'business_name' => 'required|string|max:255',
            'business_age' => 'required|integer|min:0',
            'business_description' => 'nullable|string',
            'commercial_registration' => 'nullable|string|max:255',
            'instagram' => 'nullable|string|max:255',
            'business_logo' => 'nullable|image|file|mimes:jpg,jpeg,png,heic,heif|max:2048',
            'business_banner' => 'nullable|image|file|mimes:jpg,jpeg,png,heic,heif|max:4096',
            'products' => 'nullable|array',
        ];
    }
}
