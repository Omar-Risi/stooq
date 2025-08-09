import {
    Card,
    CardAction,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

import {
    TextInputContainer,
    RadioInputContainer,
    SelectContainer
} from "@/components/forms/input-container";


export default function OwnerInfoCard({ data, errors, setData, translations }) {
    return (
        <Card className="w-full text-start">
            <CardHeader>
                <CardTitle> {translations.card.title}</CardTitle>
                <CardDescription>{translations.card.description}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">

                <TextInputContainer
                    name="owner_name"
                    type="text"
                    label={translations.name.label}
                    placeholder={translations.name.placeholder}
                    required
                    value={data.owner_name}
                    error={errors.owner_name}
                    onChange={(val) => setData("owner_name", val)}
                />

                <TextInputContainer
                    name="owner_age"
                    type="number"
                    label={translations.age.label}
                    placeholder={translations.age.placeholder}
                    required
                    value={data.owner_age}
                    error={errors.owner_age}
                    onChange={(val) => setData("owner_age", val)}
                />

                <TextInputContainer
                    name="owner_id"
                    type="number"
                    label={translations.id_number.label}
                    placeholder={translations.id_number.placeholder}
                    required
                    value={data.owner_id}
                    error={errors.owner_id}
                    onChange={(val) => setData("owner_id", val)}
                />

                <RadioInputContainer
                    name="education_level"
                    label={translations.education_level.label}
                    required
                    options={[
                        { label: translations.education_level.options.school, value: "school" },
                        { label: translations.education_level.options.higher_education, value: "higher_education" },
                    ]}
                    value={data.education_level}
                    onChange={(val) => setData("education_level", val)}
                    error={errors.education_level}
                />

                <TextInputContainer
                    name="institute_name"
                    type="text"
                    label={translations.institute_name.label}
                    placeholder={translations.institute_name.placeholder}
                    required
                    value={data.institute_name}
                    error={errors.institute_name}
                    onChange={(val) => setData("institute_name", val)}
                />

                <TextInputContainer
                    name="phone_number"
                    type="text"
                    label={translations.phone_number.label}
                    placeholder={translations.phone_number.placeholder}
                    required
                    value={data.phone_number}
                    error={errors.phone_number}
                    onChange={(val) => setData("phone_number", val)}
                />

                <TextInputContainer
                    name="email"
                    type="email"
                    label={translations.email.label}
                    placeholder={translations.email.placeholder}
                    required
                    value={data.email}
                    error={errors.email}
                    onChange={(val) => setData("email", val)}
                />

                <SelectContainer
                    name="governorate"
                    label={translations.governorate.label}
                    required
                    options={[
                        { value: translations.governorate.options.muscat, label: "Muscat" },
                        { value: translations.governorate.options.dhofar, label: "Dhofar" },
                        { value: translations.governorate.options.musandam, label: "Musandam" },
                        { value: translations.governorate.options.al_batinah_north, label: "Al Batinah North" },
                        { value: translations.governorate.options.al_batinah_south, label: "Al Batinah South" },
                        { value: translations.governorate.options.al_dakhiliya, label: "Al Dakhiliyah" },
                        { value: translations.governorate.options.al_sharqiyah_north, label: "Al Sharqiyah North" },
                        { value: translations.governorate.options.al_sharqiyah_south, label: "Al Sharqiyah South" },
                        { value: translations.governorate.options.al_dhahirah, label: "Al Dhahirah" },
                        { value: translations.governorate.options.al_wusta, label: "Al Wusta" },
                        { value: translations.governorate.al_buraimi, label: "Al Buraimi" },
                    ]}
                    value={data.governorate}
                    onChange={(val) => setData("governorate", val)}
                    error={errors.governorate}
                />

            </CardContent>
        </Card>
    );
}
