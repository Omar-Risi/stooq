import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { TextInputContainer, PrefixInputContainer, FileInputContainer, TextareaContainer } from "@/components/forms/input-container";

export default function BusinessInfoCard({ data, errors, setData, translations }) {
    return (
        <Card className="w-full text-start">
            <CardHeader>
                <CardTitle>{translations.card.title}</CardTitle>
                <CardDescription>{translations.card.description}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">

                <TextInputContainer
                    name="business.name"
                    type="text"
                    label={translations.name.label}
                    placeholder={translations.name.placeholder}
                    required
                    value={data.business.name}
                    error={errors['business.name']}
                    onChange={(val) => setData("business.name", val)}
                />

                <TextInputContainer
                    name="business.age"
                    type="number"
                    label={translations.age.label}
                    placeholder={translations.age.placeholder}
                    required
                    value={data.business.age}
                    error={errors['business.age']}
                    onChange={(val) => setData("business.age", val)}
                />

                <TextareaContainer
                    name="business.description"
                    label={translations.description.label}
                    placeholder={translations.description.placeholder}
                    value={data.business.description}
                    error={errors['business.description']}
                    onChange={(val) => setData("business.description", val)}
                />

                <TextInputContainer
                    name="business.commercial_registration"
                    type="text"
                    label={translations.commercial_registration.label}
                    placeholder={translations.commercial_registration.placeholder}
                    value={data.business.commercial_registration}
                    error={errors['business.commercial_registration']}
                    onChange={(val) => setData("business.commercial_registration", val)}
                />

                <PrefixInputContainer
                    name="business.instagram_handle"
                    type="text"
                    label={translations.instagram.label}
                    placeholder={translations.instagram.placeholder}
                    prefix="@"
                    required
                    value={data.business.instagram_handle}
                    error={errors['business.instagram_handle']}
                    onChange={(val) => setData("business.instagram_handle", val)}
                />

                <FileInputContainer
                    name="business.logo"
                    label={translations.logo.label}
                    required
                    error={errors['business.logo']}
                    onChange={(val) => setData("business.logo", val)}
                    accept=".jpg,.jpeg,.png,image/jpeg,image/png"
                />

                <FileInputContainer
                    name="business.banner"
                    label={translations.banner.label}
                    required
                    error={errors['business.banner']}
                    onChange={(val) => setData("business.banner", val)}
                    accept=".jpg,.jpeg,.png,image/jpeg,image/png"
                />

            </CardContent>
        </Card>
    );
}

