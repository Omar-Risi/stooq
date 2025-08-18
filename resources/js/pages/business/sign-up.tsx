import { usePage } from "@inertiajs/react";
import NavBar from "@/components/nav/navbar";
import { Button } from "@/components/ui/button";
import { useForm } from "@inertiajs/react";
import { Loader2Icon } from "lucide-react";
import { OtpSection } from "@/components/forms/business-sign-up/otp-section";
import OwnerInfoCard from "@/components/forms/business-sign-up/owner-info";
import BusinessInfoCard from '@/components/forms/business-sign-up/business-info';
import { useEffect, useState } from "react";
import ProductsCard from "@/components/forms/business-sign-up/products";


export default function SignUp() {

    const pageProps = usePage().props;
    const { direction, translations, flash } = usePage().props;
    const [otpOpen, setOtpOpen] = useState(false);


    function usePersistedFormState(key: string, data: (string | number | boolean | unknown), setData: (name: string, value: (string | boolean | number | unknown)) => void) {
        // Load from sessionStorage when component mounts
        useEffect(() => {
            const saved = sessionStorage.getItem(key);
            if (saved) {
                try {
                    const parsed = JSON.parse(saved);
                    for (const [name, value] of Object.entries(parsed)) {
                        setData(name, value);
                    }
                } catch {
                    console.warn("Invalid saved form data");
                }
            }
        }, [key, setData]);

        // Save to sessionStorage when data changes
        useEffect(() => {
            sessionStorage.setItem(key, JSON.stringify(data));
        }, [key, data]);
    }



    const { data, setData, post, processing, errors, reset, wasSuccessful } = useForm({
        owner: {
            name: "",
            gender: "male",
            age: "",
            resident_id: "",
            education_level: "",
            institute_name: "",
            phone_number: "",
            email: "",
            governorate: "",
        },
        business: {
            name: "",
            age: "",
            description: "",
            commercial_registration: "",
            instagram_handle: "",
            logo: "",
            banner: "",
        },
        products: [],
        otp: '',
        transaction_id: '',
    });



    usePersistedFormState("ownerFormData", data, setData);

    useEffect(() => {
        if (wasSuccessful && flash.success && flash.transaction_id) {
            setData('transaction_id', flash.transaction_id);
            setOtpOpen(true);
            console.log(flash.otp)
        }
    }, [wasSuccessful, flash]);


    function handleValidate(e) {
        e.preventDefault();

        post(route('business.validate'), {
            preserveScroll: true,
        })
    }

    function handleSubmit(e) {

        e.preventDefault();

        console.log(errors)

        post('/business/store', {
            preserveScroll: true,
            onSuccess: () => {
                setOtpOpen(false);
                reset();
            },
        })

    }

    return (
        <div dir={direction} className="h-full w-full">
            <main className="relative flex flex-col min-h-[50vh]">
                {/* BG made independent because of scale-x-125 */}
                <div className="bg-linear-to-br from-light-magenta to-dark-magenta h-full scale-x-125 w-screen -z-5 rounded-b-full absolute top-0 left-0"></div>

                <NavBar className="fill-white text-white" />

                <div className="text-white flex-1 flex justify-center items-center">
                    <h1 className="text-4xl font-bold text-center"> {translations.sign_up.headline} <span className="bg-clip-text text-transparent bg-linear-to-r from-primary to-primary-dark"> {translations.general.stooq} </span></h1>
                </div>
            </main>


            {/* Using min-h-[50vh] to make space dynamically instead of using margins */}
            <section className="text-primary-dark min-h-screen w-full flex justify-center items-center py-10">
                <form
                    onSubmit={(otpOpen ? handleSubmit : handleValidate)} // replace with your handler
                    className="w-full max-w-5xl space-y-8"
                    encType="multipart/form-data"
                >

                    <OwnerInfoCard
                        data={data}
                        errors={errors}
                        setData={setData}
                        translations={translations.sign_up.forms.owner}
                    />

                    <BusinessInfoCard
                        data={data}
                        errors={errors}
                        setData={setData}
                        translations={translations.sign_up.forms.business}
                    />

                    <ProductsCard
                        data={data}
                        errors={errors}
                        setData={setData}
                        translations={translations.sign_up.forms.products}
                    />


                    {/* Submit Button */}
                    <div className="w-full flex justify-end">
                        <OtpSection
                            open={otpOpen}
                            setOtpOpen={setOtpOpen}
                            data={data}
                            setData={setData}
                            processing={processing}
                            handleSubmit={handleSubmit}
                            handleValidate={handleValidate}
                        />

                        <Button
                            type="submit"
                            className="mt-4 flex-1 text-white font-bold cursor-pointer hover:bg-white hover:text-primary"
                            disabled={processing}
                        >
                            {(processing) && <Loader2Icon className="animate-spin" />}
                            Submit
                        </Button>
                    </div>
                </form>
            </section>

        </div>
    )
}
