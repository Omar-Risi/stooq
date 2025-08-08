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

type OwnerInfoCardProps = {
    data: Record<string, any>;
    errors: Record<string, string>;
    setData: (field: string, value: any) => void;
};

export default function OwnerInfoCard({ data, errors, setData }: OwnerInfoCardProps) {
    return (
        <Card className="w-full text-start">
            <CardHeader>
                <CardTitle>Your Information</CardTitle>
                <CardDescription>Provide information about yourself</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">

                <TextInputContainer
                    name="owner_name"
                    type="text"
                    label="Name"
                    placeholder="John doe..."
                    required
                    value={data.owner_name}
                    error={errors.owner_name}
                    onChange={(val) => setData("owner_name", val)}
                />

                <TextInputContainer
                    name="owner_age"
                    type="number"
                    label="Age"
                    placeholder="Your age"
                    required
                    value={data.owner_age}
                    error={errors.owner_age}
                    onChange={(val) => setData("owner_age", val)}
                />

                <TextInputContainer
                    name="owner_id"
                    type="number"
                    label="ID number"
                    placeholder="Your id number"
                    required
                    value={data.owner_id}
                    error={errors.owner_id}
                    onChange={(val) => setData("owner_id", val)}
                />

                <RadioInputContainer
                    name="education_level"
                    label="Education Level"
                    required
                    options={[
                        { label: "School", value: "school" },
                        { label: "Higher Education", value: "higher_education" },
                    ]}
                    value={data.education_level}
                    onChange={(val) => setData("education_level", val)}
                    error={errors.education_level}
                />

                <TextInputContainer
                    name="institute_name"
                    type="text"
                    label="Educational institute name"
                    placeholder="GUtech"
                    required
                    value={data.institute_name}
                    error={errors.institute_name}
                    onChange={(val) => setData("institute_name", val)}
                />

                <TextInputContainer
                    name="phone_number"
                    type="text"
                    label="Phone number"
                    placeholder="+968 92345678"
                    required
                    value={data.phone_number}
                    error={errors.phone_number}
                    onChange={(val) => setData("phone_number", val)}
                />

                <TextInputContainer
                    name="email"
                    type="email"
                    label="Email"
                    placeholder="youremail@business.com"
                    required
                    value={data.email}
                    error={errors.email}
                    onChange={(val) => setData("email", val)}
                />

                <SelectContainer
                    name="governorate"
                    label="Governorate in Oman"
                    required
                    options={[
                        { value: "Muscat", label: "Muscat" },
                        { value: "Dhofar", label: "Dhofar" },
                        { value: "Musandam", label: "Musandam" },
                        { value: "Al Batinah North", label: "Al Batinah North" },
                        { value: "Al Batinah South", label: "Al Batinah South" },
                        { value: "Al Dakhiliyah", label: "Al Dakhiliyah" },
                        { value: "Al Sharqiyah North", label: "Al Sharqiyah North" },
                        { value: "Al Sharqiyah South", label: "Al Sharqiyah South" },
                        { value: "Al Dhahirah", label: "Al Dhahirah" },
                        { value: "Al Wusta", label: "Al Wusta" },
                        { value: "Al Buraimi", label: "Al Buraimi" },
                    ]}
                    value={data.governorate}
                    onChange={(val) => setData("governorate", val)}
                    error={errors.governorate}
                />

            </CardContent>
        </Card>
    );
}
