<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class ListingRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'title' => 'required',
            'description' => 'required|max:1000',
            'address' => 'required',
            'rental' => 'required|boolean',
            'roomNumber' => 'required|numeric',
            'phone' => 'required',
            'lat' => 'required|numeric',
            'long' => 'required|numeric',
            'price' => 'required|numeric',
            'image' => 'required|image'
        ];
    }
}
