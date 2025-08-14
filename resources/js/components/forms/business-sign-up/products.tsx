import {
    Card,
    CardHeader,
    CardTitle,
    CardDescription,
    CardContent,
} from "@/components/ui/card";

import { useState } from "react";

import { ProductContainer } from "../product-container";

import { Button } from "@/components/ui/button";


export default function ProductsCard({ data, errors, setData, translations }) {

    const [canAdd, setCanAdd] = useState(true);

    const handleAddProduct = () => {

        if (data.products.length >= 10) {
            setCanAdd(false);
            return;
        }
        setData("products", [
            ...data.products,
            { name: "", price: "", quantity: "", image: null }
        ]);
    };

    const handleRemoveProduct = (index: number) => {
        setData("products", data.products.filter((_, i) => i !== index));

        if (data.products.length <= 10) {
            setCanAdd(true);
            return;
        }
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
                    disabled={!canAdd}
                    variant={canAdd ? "outline" : 'ghost'}
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

