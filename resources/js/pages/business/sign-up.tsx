import { Link, usePage } from "@inertiajs/react";
import NavBar from "@/components/nav/navbar";
import Button from "@/components/front/button";
import { useForm } from "@inertiajs/react";


import OwnerInfoCard from "@/components/forms/business-sign-up/owner-info";
import BusinessInfoCard from '@/components/forms/business-sign-up/business-info';



export default function SignUp() {

    const { direction, translations } = usePage().props;

    function handleSubmit() { }


    const { data, setData, post, processing, errors, reset } = useForm({
        owner_name: "",
        owner_age: "",
        owner_id: "",
        education_level: "",
        institute_name: "",
        phone_number: "",
        email: "",
        governorate: "",
        business_name: "",
        business_age: "",
        business_description: "",
        commercial_registration: "",
        instagram: "",
        business_logo: null,
        business_banner: null,
    });

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
                    onSubmit={handleSubmit} // replace with your handler
                    className="w-full max-w-5xl space-y-8"
                    encType="multipart/form-data"
                >

                    <OwnerInfoCard
                        data={data}
                        errors={errors}
                        setData={setData}
                        translations={translations.sign_up.forms.owner}
                    />
                    <BusinessInfoCard data={data} errors={errors} setData={setData} />


                    {/* Submit Button */}
                    <div className="w-full flex justify-end">
                        <Button type="submit" className="mt-4 flex-1 text-white font-bold">Submit</Button>
                    </div>
                </form>
            </section>

        </div>
    )
}
