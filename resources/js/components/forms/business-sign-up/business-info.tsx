import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { TextInputContainer } from "@/components/forms/input-container";

type BusinessInfoCardProps = {
    data: Record<string, any>;
    errors: Record<string, string>;
    setData: (field: string, value: any) => void;
};

export default function BusinessInfoCard({ data, errors, setData }: BusinessInfoCardProps) {
    return (
        <Card className="w-full text-start">
            <CardHeader>
                <CardTitle>Business Information</CardTitle>
                <CardDescription>Tell us about your business</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">

                <TextInputContainer
                    name="business_name"
                    type="text"
                    label="Business Name"
                    placeholder="e.g. ScanBite"
                    required
                    value={data.business_name}
                    error={errors.business_name}
                    onChange={(val) => setData("business_name", val)}
                />

                <TextInputContainer
                    name="business_age"
                    type="number"
                    label="Business Age (years)"
                    placeholder="e.g. 2"
                    required
                    value={data.business_age}
                    error={errors.business_age}
                    onChange={(val) => setData("business_age", val)}
                />

                <TextInputContainer
                    name="business_description"
                    type="text"
                    label="Description"
                    placeholder="Describe your business..."
                    required
                    value={data.business_description}
                    error={errors.business_description}
                    onChange={(val) => setData("business_description", val)}
                />

                <TextInputContainer
                    name="commercial_registration"
                    type="text"
                    label="Commercial Registration Number (optional)"
                    placeholder="Optional"
                    value={data.commercial_registration}
                    error={errors.commercial_registration}
                    onChange={(val) => setData("commercial_registration", val)}
                />

                <TextInputContainer
                    name="instagram"
                    type="text"
                    label="Instagram Handle"
                    placeholder="@yourbusiness"
                    required
                    value={data.instagram}
                    error={errors.instagram}
                    onChange={(val) => setData("instagram", val)}
                />

                <TextInputContainer
                    name="business_logo"
                    type="file"
                    label="Business Logo"
                    required
                    value={data.business_logo}
                    error={errors.business_logo}
                    onChange={(val) => setData("business_logo", val)}
                />

                <TextInputContainer
                    name="business_banner"
                    type="file"
                    label="Business Banner"
                    required
                    value={data.business_banner}
                    error={errors.business_banner}
                    onChange={(val) => setData("business_banner", val)}
                />

            </CardContent>
        </Card>
    );
}
