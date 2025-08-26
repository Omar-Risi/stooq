import {
    Card,
    CardHeader,
    CardTitle,
    CardContent,
} from "@/components/ui/card";

import { Button } from "@/components/ui/button";

import { Trash } from "lucide-react";

import {
    TextInputContainer,
    PrefixInputContainer,
    FileInputContainer,
    TextareaContainer
} from "./input-container";

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
    description: string;
    price: string;
    quantity: string;
    image: string | undefined;
}

interface ProductContainerProps {
    index: number;
    product: Product;
    products: Product[];
    errors: object;
    setData: (key: string, value: string | number | boolean | Product[]) => void;
    onRemove: () => void;
    translations: {
        card: { title: string };
        name: { label: string; placeholder: string };
        price: { label: string; placeholder: string };
        quantity: { label: string; placeholder: string };
        image: { label: string };
        actions: {
            delete_title: string;
            delete_description: string;
            cancel: string;
            delete: string;
        };
    };
}

function ProductContainer({
    index,
    product,
    products,
    errors,
    setData,
    onRemove,
    translations,
}: ProductContainerProps) {
    const updateProduct = (field: keyof Product, value: (string | number | boolean | Product[])) => {
        setData(
            "products",
            products.map((p, i) => (i === index ? { ...p, [field]: value } : p))
        );
    };

    return (
        <Card className="border-2 shadow-none">
            <CardHeader className="flex justify-between items-center">
                <CardTitle className="text-sm">
                    {`${translations.card.title} ${index + 1}`}
                </CardTitle>

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
                            <AlertDialogTitle>
                                {translations.delete_dialog.title}
                            </AlertDialogTitle>
                            <AlertDialogDescription>
                                {translations.delete_dialog.description}
                            </AlertDialogDescription>
                        </AlertDialogHeader>
                        <AlertDialogFooter>
                            <AlertDialogCancel>
                                {translations.delete_dialog.cancel}
                            </AlertDialogCancel>
                            <AlertDialogAction className="bg-destructive cursor-pointer hover:bg-destructive hover:brightness-105" onClick={onRemove}>
                                {translations.delete_dialog.confirm}
                            </AlertDialogAction>
                        </AlertDialogFooter>
                    </AlertDialogContent>
                </AlertDialog>
            </CardHeader>

            <CardContent className="space-y-4">
                <TextInputContainer
                    name={`products[${index}].name`}
                    type="text"
                    label={translations.name.label}
                    placeholder={translations.name.placeholder}
                    required
                    value={product.name || ""}
                    error={errors[`products.${index}.name`]}
                    onChange={(val) => updateProduct("name", val)}
                />

                <TextareaContainer
                    name={`products[${index}].description`}
                    label={translations.description.label}
                    placeholder={translations.description.placeholder}
                    required
                    value={product.description || ""}
                    error={errors[`products.${index}.description`]}
                    onChange={(val) => updateProduct("description", val)}
                />


                <PrefixInputContainer
                    prefix="OMR"
                    name={`products[${index}].price`}
                    type="number"
                    label={translations.price.label}
                    placeholder={translations.price.placeholder}
                    required
                    value={product.price || ""}
                    error={errors[`products.${index}.price`]}
                    onChange={(val) => updateProduct("price", val)}
                />

                <TextInputContainer
                    name={`products[${index}].quantity`}
                    type="number"
                    label={translations.quantity.label}
                    placeholder={translations.quantity.placeholder}
                    required
                    value={product.quantity || ""}
                    error={errors[`products.${index}.quantity`]}
                    onChange={(val) => updateProduct("quantity", val)}
                />

                <FileInputContainer
                    name={`products[${index}].image`}
                    label={translations.image.label}
                    accept=".jpg,.jpeg,.png,image/jpeg,image/png"
                    required
                    error={errors[`products.${index}.image`]}
                    onChange={(val) => updateProduct("image", val)}
                />
            </CardContent>
        </Card>
    );
}

export { ProductContainer };

