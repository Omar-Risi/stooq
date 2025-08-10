import {
    Card,
    CardHeader,
    CardTitle,
    CardContent,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Trash } from "lucide-react";
import { TextInputContainer } from "./input-container";

import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

interface Product {
    name: string;
    price: string;
    quantity: string;
    image: File | null;
}

interface ProductContainerProps {
    index: number;
    product: Product;
    products: Product[];
    errors: Record<string, any>;
    setData: (key: string, value: any) => void;
    onRemove: () => void;
}

export default function ProductContainer({
    index,
    product,
    products,
    errors,
    setData,
    onRemove,
}: ProductContainerProps) {
    const updateProduct = (field: keyof Product, value: any) => {
        setData(
            "products",
            products.map((p, i) => (i === index ? { ...p, [field]: value } : p))
        );
    };

    return (
        <Card className="border-2 shadow-none">
            <CardHeader className="flex justify-between items-center">
                <CardTitle className="text-sm">Product {index + 1}</CardTitle>

                {/* AlertDialog for delete confirmation */}
                <AlertDialog>
                    <AlertDialogTrigger asChild>
                        <Button
                            variant="destructive"
                            size="icon"
                            className="size-8 cursor-pointer"
                            type="button"
                        >
                            <Trash />
                        </Button>
                    </AlertDialogTrigger>
                    <AlertDialogContent>
                        <AlertDialogHeader>
                            <AlertDialogTitle>Delete product?</AlertDialogTitle>
                            <AlertDialogDescription>
                                This action cannot be undone. This will permanently remove the product from your list.
                            </AlertDialogDescription>
                        </AlertDialogHeader>
                        <AlertDialogFooter>
                            <AlertDialogCancel>Cancel</AlertDialogCancel>
                            <AlertDialogAction onClick={onRemove}>Delete</AlertDialogAction>
                        </AlertDialogFooter>
                    </AlertDialogContent>
                </AlertDialog>
            </CardHeader>

            <CardContent className="space-y-4">
                <TextInputContainer
                    name={`products[${index}].name`}
                    type="text"
                    label="Product name"
                    placeholder="black headset"
                    required
                    value={product.name || ""}
                    error={errors[`products.${index}.name`]}
                    onChange={(val) => updateProduct("name", val)}
                />

                <TextInputContainer
                    name={`products[${index}].price`}
                    type="number"
                    label="Price (OMR)"
                    placeholder="15.00"
                    required
                    value={product.price || ""}
                    error={errors[`products.${index}.price`]}
                    onChange={(val) => updateProduct("price", val)}
                />

                <TextInputContainer
                    name={`products[${index}].quantity`}
                    type="number"
                    label="Product quantity"
                    placeholder="10"
                    required
                    value={product.quantity || ""}
                    error={errors[`products.${index}.quantity`]}
                    onChange={(val) => updateProduct("quantity", val)}
                />

                <TextInputContainer
                    name={`products[${index}].image`}
                    type="file"
                    label="Product image"
                    required
                    value={product.image || ""}
                    error={errors[`products.${index}.image`]}
                    onChange={(val) => updateProduct("image", val)}
                />
            </CardContent>
        </Card>
    );
}

export {
    ProductContainer
}
