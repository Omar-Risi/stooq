import NavBar from "@/components/nav/navbar";
import Button from "@/components/front/button";
import SubHeading from "@/components/front/sub-heading";
import { Link, usePage } from "@inertiajs/react";
import {
    Card,
    CardAction,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

import {
    TextInputContainer,
    RadioInputContainer,
    SelectContainer
} from "@/components/forms/input-container";


export default function SignUp() {

    const { direction, translations } = usePage().props;

    function InputContainer({ children }) {
        return (
            <div className="flex flex-col w-full gap-1 mt-4">
                {children}
            </div>
        )
    }

    function handleSubmit() { }

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
                    {/* Card 1: Owner Info */}
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
                                required={true}
                                value=""
                                error={'error'}
                                onChange={() => 1}
                            />

                            <TextInputContainer
                                name="owner_age"
                                type="number"
                                label="Age"
                                placeholder="Your age"
                                required={true}
                                value=""
                                error={'error'}
                                onChange={() => 1}
                            />

                            <TextInputContainer
                                name="owner_id"
                                type="number"
                                label="ID number"
                                placeholder="Your id number"
                                required={true}
                                value=""
                                error={'error'}
                                onChange={() => 1}
                            />

                            <RadioInputContainer
                                name="education_level"
                                label="Education Level"
                                required
                                options={[
                                    { label: "School", value: "school" },
                                    { label: "Higher Education", value: "higher_education" },
                                ]}
                                value={""}
                                onChange={() => 1}
                                error={"error"}
                            />

                            <TextInputContainer
                                name="institute_name"
                                type="text"
                                label="Educational institute name"
                                placeholder="GUtech"
                                required={true}
                                value=""
                                error={'error'}
                                onChange={() => 1}
                            />

                            <TextInputContainer
                                name="phone_number"
                                type="text"
                                label="Phone number"
                                placeholder="+968 92345678"
                                required={true}
                                value=""
                                error={'error'}
                                onChange={() => 1}
                            />

                            <TextInputContainer
                                name="email"
                                type="email"
                                label="Email"
                                placeholder="youremail@business.com"
                                required={true}
                                value=""
                                error={'error'}
                                onChange={() => 1}
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
                                value={""}
                                onChange={() => 1}
                                error={"error"}
                            />
                        </CardContent>
                    </Card>


                    {/* Card 2: Business Info */}
                    <Card className="w-full text-start">
                        <CardHeader>
                            <CardTitle>Business Information</CardTitle>
                            <CardDescription>Tell us about your business</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">

                            <TextInputContainer
                                name="business_name"
                                type="text"
                                label="Business Name"
                                placeholder="e.g. ScanBite"
                                required={true}
                                value={""}
                                error={""}
                                onChange={() => 1}
                            />

                            <TextInputContainer
                                name="business_age"
                                type="number"
                                label="Business Age (years)"
                                placeholder="e.g. 2"
                                required={true}
                                value={""}
                                error={""}
                                onChange={() => 1}
                            />

                            <TextInputContainer
                                name="business_description"
                                type="text"
                                label="Description"
                                placeholder="Describe your business..."
                                required={true}
                                value={""}
                                error={""}
                                onChange={() => 1}
                            />

                            <TextInputContainer
                                name="commercial_registration"
                                type="text"
                                label="Commercial Registration Number (optional)"
                                placeholder="Optional"
                                value={""}
                                error={""}
                                onChange={() => 1}
                            />

                            <TextInputContainer
                                name="instagram"
                                type="text"
                                label="Instagram Handle"
                                placeholder="@yourbusiness"
                                required={true}
                                value={""}
                                error={""}
                                onChange={() => 1}
                            />

                            <TextInputContainer
                                name="business_logo"
                                type="file"
                                label="Business Logo"
                                required={true}
                                value={""}
                                error={""}
                                onChange={() => 1}
                            />

                            <TextInputContainer
                                name="business_banner"
                                type="file"
                                label="Business Banner"
                                required={true}
                                value={""}
                                error={""}
                                onChange={() => 1}
                            />

                        </CardContent>
                    </Card>


                    {/* Submit Button */}
                    <div className="w-full flex justify-end">
                        <Button type="submit" className="mt-4 flex-1 text-white font-bold">Submit</Button>
                    </div>
                </form>
            </section>

        </div>
    )
}
