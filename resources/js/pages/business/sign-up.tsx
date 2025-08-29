import { usePage } from "@inertiajs/react";
import NavBar from "@/components/nav/navbar";
import { Button } from "@/components/ui/button";
import { useForm } from "@inertiajs/react";
import { Loader2Icon, CircleCheckBig } from "lucide-react";
import { OtpSection } from "@/components/forms/business-sign-up/otp-section";
import OwnerInfoCard from "@/components/forms/business-sign-up/owner-info";
import BusinessInfoCard from '@/components/forms/business-sign-up/business-info';
import { useEffect, useState } from "react";
import ProductsCard from "@/components/forms/business-sign-up/products";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import Footer from "@/components/nav/footer";

export default function SignUp() {

    const { direction, translations, flash } = usePage().props;
    const [otpOpen, setOtpOpen] = useState(false);
    const [fileKey, setFileKey] = useState(0);
    const [alertStyle, setAlertStyle] = useState("");
    const [isResetDisabled, setIsResetDisabled] = useState(false);


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

    const initialData = {
        owner: {
            name: "",
            gender: "male",
            age: "",
            nationality: "",
            resident_id: "",
            education_level: "higher_education",
            institute_name: "",
            phone_number: "",
            email: "",
            governorate: "",
        },
        business: {
            name: "",
            name_ar: "",
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

    }


    const { data, setData, post, processing, errors, wasSuccessful } = useForm(initialData);


    useEffect(() => {
        if (wasSuccessful && flash.success && flash.transaction_id) {
            setData('transaction_id', flash.transaction_id);
            setOtpOpen(true);
            console.log(flash.otp)
        }
    }, [wasSuccessful, flash, setData]);

    usePersistedFormState("ownerFormData", data, setData);

    function handleValidate(e) {
        e.preventDefault();

        if (otpOpen) {
            setIsResetDisabled(true);
            setTimeout(() => setIsResetDisabled(false), 300000) // disable five minutes
        }


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
                setData(initialData);
                sessionStorage.removeItem("ownerFormData");
                setFileKey(fileKey + 1)

                setAlertStyle('animate-fly-in');
                setTimeout(() => setAlertStyle(''), 5000)
            },
        })

    }

    return (
        <div dir={direction} className="h-full w-full font-plus-jakarta rtl:font-noto-kufi-arabic" >
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
                        key={fileKey}
                    />

                    <ProductsCard
                        data={data}
                        errors={errors}
                        setData={setData}
                        translations={translations.sign_up.forms.products}
                        key={fileKey + 1}
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
                            isResetDisabled={isResetDisabled}
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


            <Alert variant="default" className={`${alertStyle} w-3/4 lg:w-1/3 fixed top-8 right-4 z-50 transform-[translateX(150%)]`}>
                <AlertTitle className="flex gap-2">
                    <CircleCheckBig />
                    {translations.sign_up.success.title}
                </AlertTitle>
                <AlertDescription className="mt-2">
                    {translations.sign_up.success.description}
                </AlertDescription>
            </Alert>


            <Footer />
        </div>
    )

}
