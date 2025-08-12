import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { TextInputContainer, PrefixInputContainer, FileInputContainer } from "@/components/forms/input-container";


export default function BusinessInfoCard({ data, errors, setData, translations }) {
    return (
        <Card className="w-full text-start">
            <CardHeader>
                <CardTitle>{translations.card.title}</CardTitle>
                <CardDescription>{translations.card.description}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">

                <TextInputContainer
                    name="business_name"
                    type="text"
                    label={translations.name.label}
                    placeholder={translations.name.placeholder}
                    required
                    value={data.business_name}
                    error={errors.business_name}
                    onChange={(val) => setData("business_name", val)}
                />

                <TextInputContainer
                    name="business_age"
                    type="number"
                    label={translations.age.label}
                    placeholder={translations.age.placeholder}
                    required
                    value={data.business_age}
                    error={errors.business_age}
                    onChange={(val) => setData("business_age", val)}
                />

                <TextInputContainer
                    name="business_description"
                    type="text"
                    label={translations.description.label}
                    placeholder={translations.description.placeholder}
                    required
                    value={data.business_description}
                    error={errors.business_description}
                    onChange={(val) => setData("business_description", val)}
                />

                <TextInputContainer
                    name="commercial_registration"
                    type="text"
                    label={translations.commercial_registration.label}
                    placeholder={translations.commercial_registration.placeholder}
                    value={data.commercial_registration}
                    error={errors.commercial_registration}
                    onChange={(val) => setData("commercial_registration", val)}
                />

                <PrefixInputContainer
                    name="instagram"
                    type="text"
                    label={translations.instagram.label}
                    placeholder={translations.instagram.placeholder}
                    prefix="@"
                    required
                    value={data.instagram_handle}
                    error={errors.instagram_handle}
                    onChange={(val) => setData("instagram_handle", val)}
                />


                <FileInputContainer
                    name="business_logo"
                    label={translations.logo.label}
                    required
                    error={errors.business_logo}
                    onChange={(val) => setData("business_logo", val)}
                    accept=".jpg,.jpeg,.png,image/jpeg,image/png"
                />

                <FileInputContainer
                    name="business_banner"
                    label={translations.banner.label}
                    required
                    error={errors.business_banner}
                    onChange={(val) => setData("business_banner", val)}
                    accept=".jpg,.jpeg,.png,image/jpeg,image/png"
                />

            </CardContent>
        </Card>
    );
}

