<?php

return [
    'headline' => 'Become a vendor at ',
    'forms' => [
        'owner' => [
            'card' => [
                'title' => 'Your Information',
                'description' => 'Provide information about yourself',
            ],
            'name' => [
                'label' => 'Name',
                'placeholder' => 'John Doe',
            ],
            'age' => [
                'label' => 'Age',
                'placeholder' => 'Your age',
            ],
            'id_number' => [
                'label' => 'ID number',
                'placeholder' => 'Your id number',
            ],
            'education_level' => [
                'label' => 'Education Level',
                'options' => [
                    'school' => 'School',
                    'higher_education' => 'Higher Education',
                ],
            ],
            'institute_name' => [
                'label' => 'Educational institute name',
                'placeholder' => 'GUtech',
            ],
            'phone_number' => [
                'label' => 'Phone number',
                'placeholder' => '+968 92345678',
            ],
            'email' => [
                'label' => 'Email',
                'placeholder' => 'youremail@business.com',
            ],
            'governorate' => [
                'label' => 'Governorate in Oman',
                'placeholder' => 'Select governorate',
                'options' => [
                    'muscat' => 'Muscat',
                    'dhofar' => 'Dhofar',
                    'musandam' => 'Musandam',
                    'al_batinah_north' => 'Al Batinah North',
                    'al_batinah_south' => 'Al Batinah South',
                    'al_dakhiliya' => 'Al Dakhiliyah',
                    'al_sharqiyah_north' => 'Al Sharqiyah North',
                    'al_sharqiyah_south' => 'Al Sharqiyah South',
                    'al_dhahirah' => 'Al Dhahirah',
                    'al_wusta' => 'Al Wusta',
                    'al_buraimi' => 'Al Buraimi',
                ],
            ],
        ],

        'business' => [
            'card' => [
                'title' => 'Business Information',
                'description' => 'Tell us about your business',
            ],
            'name' => [
                'label' => 'Business Name',
                'placeholder' => 'e.g. ScanBite',
            ],
            'age' => [
                'label' => 'Business Age (years)',
                'placeholder' => 'e.g. 2',
            ],
            'description' => [
                'label' => 'Description',
                'placeholder' => 'Describe your business...',
            ],
            'commercial_registration' => [
                'label' => 'Commercial Registration Number (optional)',
                'placeholder' => 'Optional',
            ],
            'instagram' => [
                'label' => 'Instagram Handle',
                'placeholder' => '@yourbusiness',
            ],
            'logo' => [
                'label' => 'Business Logo',
                'placeholder' => '',
            ],
            'banner' => [
                'label' => 'Business Banner',
                'placeholder' => '',
            ],
        ],
        'products' => [
            'card' => [
                'title' => 'Products',
                'description' => 'Add your products maximum of 10'
            ]
        ]
    ],
];

