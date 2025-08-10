import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { TextInputContainer } from "@/components/forms/input-container";

export default function ProductsCard({ data, errors, setData, translations }) {
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
                    label='product name'
                    placeholder='product name'
                    required
                    value={data.business_name}
                    error={errors.business_name}
                    onChange={(val) => setData("business_name", val)}
                />

                <TextInputContainer
                    name="business_logo"
                    type="file"
                    label='product image'
                    required
                    value={data.business_logo}
                    error={errors.business_logo}
                    onChange={(val) => setData("business_logo", val)}
                />


            </CardContent>
        </Card>
    );
}

