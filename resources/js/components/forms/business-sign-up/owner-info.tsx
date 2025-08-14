import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

import {
    TextInputContainer,
    RadioInputContainer,
    SelectContainer,
    PrefixInputContainer
} from "@/components/forms/input-container";


export default function OwnerInfoCard({ data, errors, setData, translations }) {
    return (
        <Card className="w-full text-start">
            <CardHeader>
                <CardTitle>{translations.card.title}</CardTitle>
                <CardDescription>{translations.card.description}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">

                <TextInputContainer
                    name="owner.name"
                    type="text"
                    label={translations.name.label}
                    placeholder={translations.name.placeholder}
                    required
                    value={data.owner.name}
                    error={errors['owner.name']}
                    onChange={(val) => setData("owner.name", val)}
                />
                <RadioInputContainer
                    name="owner.gender"
                    label={translations.gender.label}
                    required
                    options={[
                        { label: translations.gender.male, value: "male" },
                        { label: translations.gender.female, value: "female" },
                    ]}
                    value={data.owner.gender}
                    onChange={(val) => setData("owner.gender", val)}
                    error={errors['owner.gender']}
                />



                <TextInputContainer
                    name="owner.age"
                    type="number"
                    label={translations.age.label}
                    placeholder={translations.age.placeholder}
                    required
                    value={data.owner.age}
                    error={errors['owner.age']}
                    onChange={(val) => setData("owner.age", val)}
                />

                <TextInputContainer
                    name="owner.id_number"
                    type="number"
                    label={translations.id_number.label}
                    placeholder={translations.id_number.placeholder}
                    required
                    value={data.owner.resident_id}
                    error={errors['owner.resident_id']}
                    onChange={(val) => setData("owner.resident_id", val)}
                />

                <RadioInputContainer
                    name="owner.education_level"
                    label={translations.education_level.label}
                    required
                    options={[
                        { label: translations.education_level.options.school, value: "school" },
                        { label: translations.education_level.options.higher_education, value: "higher_education" },
                    ]}
                    value={data.owner.education_level}
                    onChange={(val) => setData("owner.education_level", val)}
                    error={errors['owner.eudcation_level']}
                />

                <TextInputContainer
                    name="owner.institute_name"
                    type="text"
                    label={translations.institute_name.label}
                    placeholder={translations.institute_name.placeholder}
                    required
                    value={data.owner.institute_name}
                    error={errors['owner.institute_name']}
                    onChange={(val) => setData("owner.institute_name", val)}
                />

                <PrefixInputContainer
                    name="owner.phone_number"
                    prefix="+968"
                    type="number"
                    label={translations.phone_number.label}
                    placeholder={translations.phone_number.placeholder}
                    required
                    value={data.owner.phone_number}
                    error={errors['owner.phone_number']}
                    onChange={(val) => setData("owner.phone_number", val)}
                />

                <TextInputContainer
                    name="owner.email"
                    type="email"
                    label={translations.email.label}
                    placeholder={translations.email.placeholder}
                    required
                    value={data.owner.email}
                    error={errors['owner.email']}
                    onChange={(val) => setData("owner.email", val)}
                />

                <SelectContainer
                    name="owner.governorate"
                    label={translations.governorate.label}
                    required
                    options={[
                        { label: translations.governorate.options.muscat, value: "muscat" },
                        { label: translations.governorate.options.dhofar, value: "dhofat" },
                        { label: translations.governorate.options.musandam, value: "musandam" },
                        { label: translations.governorate.options.al_batinah_north, value: "al_batinah_north" },
                        { label: translations.governorate.options.al_batinah_south, value: "al_batinah_south" },
                        { label: translations.governorate.options.al_dakhiliya, value: "al_dakhiliya" },
                        { label: translations.governorate.options.al_sharqiyah_north, value: "al_sharqiyah_north" },
                        { label: translations.governorate.options.al_sharqiyah_south, value: "al_sharqiyah_south" },
                        { label: translations.governorate.options.al_dhahirah, value: "al_dahirah" },
                        { label: translations.governorate.options.al_wusta, value: "al_wusta" },
                        { label: translations.governorate.options.al_buraimi, value: "al_buraimi" },
                    ]}
                    value={data.owner.governorate}
                    onChange={(val) => setData("owner.governorate", val)}
                    error={errors['owner.governorate']}
                />

            </CardContent>
        </Card>
    );
}

