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

import { ProductContainer } from "../product-container";

import { TextInputContainer } from "@/components/forms/input-container";
import { Button } from "@/components/ui/button";


export default function ProductsCard({ data, errors, setData, translations }) {

    const handleAddProduct = () => {
        setData("products", [
            ...data.products,
            { name: "", price: "", quantity: "", image: null }
        ]);
    };

    const handleRemoveProduct = (index: number) => {
        setData("products", data.products.filter((_, i) => i !== index));
    };

    return (
        <Card className="w-full text-start">
            <CardHeader>
                <CardTitle>{translations.card.title}</CardTitle>
                <CardDescription>{translations.card.description}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">

                {data.products.map((product, index) => (
                    <ProductContainer
                        key={index}
                        index={index}
                        product={product}
                        errors={errors}
                        setData={setData}
                        products={data.products}
                        onRemove={() => handleRemoveProduct(index)}
                        translations={translations}
                    />
                ))}

                <Button
                    variant="outline"
                    type="button"
                    className="w-full text-primary border-primary hover:bg-primary hover:text-white cursor-pointer"
                    onClick={handleAddProduct}
                >
                    Add a product
                </Button>

            </CardContent>
        </Card>
    );
}

