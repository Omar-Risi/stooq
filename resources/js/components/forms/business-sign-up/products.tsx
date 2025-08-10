import {
    Card,
    CardHeader,
    CardTitle,
    CardDescription,
    CardContent,
    CardAction,
    CardFooter
} from "@/components/ui/card";

import {
    Trash
} from "lucide-react"

import { TextInputContainer } from "@/components/forms/input-container";
import { Button } from "@/components/ui/button";

export default function ProductsCard({ data, errors, setData, translations }) {
    return (
        <Card className="w-full text-start">
            <CardHeader>
                <CardTitle>{translations.card.title}</CardTitle>
                <CardDescription>{translations.card.description}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">

                <Card className="border-2 shadow-none">
                    <CardHeader>
                        <CardTitle className="text-sm">Product 1</CardTitle>
                        <CardAction>
                            <Button
                                variant="destructive"
                                size="icon"
                                className="size-8 cursor-pointer"
                                type="button"
                            >

                                <Trash />
                            </Button>
                        </CardAction>
                    </CardHeader>
                    <CardContent>
                        <TextInputContainer
                            name="product_name"
                            type="text"
                            label='Product name'
                            placeholder='black headset'
                            required
                            value={data.products[0].name}
                            error={errors.business_name}
                            onChange={(val) => setData("business_name", val)}
                        />

                        <TextInputContainer
                            name="product_price"
                            type="number"
                            label='Price (OMR)'
                            placeholder='15.00'
                            required
                            value={data.products[0].price}
                            error={errors.business_name}
                            onChange={(val) => setData("business_name", val)}
                        />

                        <TextInputContainer
                            name="product_name"
                            type="text"
                            label='Product quantity'
                            placeholder='10'
                            required
                            value={data.products[0].quanitiy}
                            error={errors.business_name}
                            onChange={(val) => setData("business_name", val)}
                        />

                        <TextInputContainer
                            name="product_picture"
                            type="file"
                            label='product image'
                            required
                            value={data.products[0].image}
                            error={errors.business_logo}
                            onChange={(val) => setData("business_logo", val)}
                        />


                    </CardContent>
                </Card>
                <Button
                    variant="outline"
                    type="button"
                    className="w-full text-primary border-primary hover:bg-primary hover:text-white cursor-pointer"
                >
                    Add a product
                </Button>

            </CardContent>
        </Card>
    );
}

