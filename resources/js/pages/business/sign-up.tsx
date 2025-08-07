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
                            <InputContainer>
                                <Label htmlFor="owner_name">
                                    Name <span className="text-red-500">*</span>
                                </Label>
                                <Input required type="text" id="owner_name" name="owner_name" placeholder="Your full name..." />
                            </InputContainer>

                            <InputContainer>
                                <Label htmlFor="owner_age">
                                    Age <span className="text-red-500">*</span>
                                </Label>
                                <Input required type="number" id="owner_age" name="owner_age" placeholder="Your age..." />
                            </InputContainer>

                            <InputContainer>
                                <Label htmlFor="owner_id">
                                    ID Number <span className="text-red-500">*</span>
                                </Label>
                                <Input required type="text" id="owner_id" name="owner_id" placeholder="e.g. 12345678" />
                            </InputContainer>

                            <InputContainer>
                                <Label>
                                    Education Level <span className="text-red-500">*</span>
                                </Label>
                                <div className="flex flex-col gap-2 mt-1">
                                    <label htmlFor="school" className="flex items-center gap-2">
                                        <Input
                                            required
                                            type="radio"
                                            id="school"
                                            name="education_level"
                                            value="school"
                                            className="w-4 h-4 shadow-none"
                                        />
                                        <span>School</span>
                                    </label>
                                    <label htmlFor="higher_education" className="flex items-center gap-2">
                                        <Input
                                            required
                                            type="radio"
                                            id="higher_education"
                                            name="education_level"
                                            value="higher_education"
                                            className="w-4 h-4 shadow-none"
                                        />
                                        <span>Higher Education</span>
                                    </label>
                                </div>
                            </InputContainer>

                            <InputContainer>
                                <Label htmlFor="institute_name">
                                    Higher Education Institute Name <span className="text-red-500">*</span>
                                </Label>
                                <Input required type="text" id="institute_name" name="institute_name" placeholder="e.g. SQU" />
                            </InputContainer>

                            <InputContainer>
                                <Label htmlFor="phone">
                                    Phone Number <span className="text-red-500">*</span>
                                </Label>
                                <Input required type="tel" id="phone" name="phone" placeholder="e.g. 91234567" />
                            </InputContainer>

                            <InputContainer>
                                <Label htmlFor="email">
                                    Email <span className="text-red-500">*</span>
                                </Label>
                                <Input required type="email" id="email" name="email" placeholder="you@example.com" />
                            </InputContainer>

                            <InputContainer>
                                <Label htmlFor="governorate">
                                    Governorate in Oman <span className="text-red-500">*</span>
                                </Label>
                                <select
                                    required
                                    id="governorate"
                                    name="governorate"
                                    className="w-full border rounded p-2"
                                >
                                    <option value="">Select governorate</option>
                                    <option value="Muscat">Muscat</option>
                                    <option value="Dhofar">Dhofar</option>
                                    <option value="Musandam">Musandam</option>
                                    <option value="Al Batinah North">Al Batinah North</option>
                                    <option value="Al Batinah South">Al Batinah South</option>
                                    <option value="Al Dakhiliyah">Al Dakhiliyah</option>
                                    <option value="Al Sharqiyah North">Al Sharqiyah North</option>
                                    <option value="Al Sharqiyah South">Al Sharqiyah South</option>
                                    <option value="Al Dhahirah">Al Dhahirah</option>
                                    <option value="Al Wusta">Al Wusta</option>
                                    <option value="Al Buraimi">Al Buraimi</option>
                                </select>
                            </InputContainer>
                        </CardContent>
                    </Card>

                    {/* Card 2: Business Info */}
                    <Card className="w-full text-start">
                        <CardHeader>
                            <CardTitle>Business Information</CardTitle>
                            <CardDescription>Tell us about your business</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <InputContainer>
                                <Label htmlFor="business_name">
                                    Business Name <span className="text-red-500">*</span>
                                </Label>
                                <Input required type="text" id="business_name" name="business_name" placeholder="e.g. ScanBite" />
                            </InputContainer>

                            <InputContainer>
                                <Label htmlFor="business_age">
                                    Business Age (years) <span className="text-red-500">*</span>
                                </Label>
                                <Input required type="number" id="business_age" name="business_age" placeholder="e.g. 2" />
                            </InputContainer>

                            <InputContainer>
                                <Label htmlFor="business_description">
                                    Description <span className="text-red-500">*</span>
                                </Label>
                                <textarea required id="business_description" name="business_description" className="w-full border rounded p-2" rows={4} placeholder="Describe your business..."></textarea>
                            </InputContainer>

                            <InputContainer>
                                <Label htmlFor="commercial_registration">Commercial Registration Number (optional)</Label>
                                <Input type="text" id="commercial_registration" name="commercial_registration" placeholder="Optional" />
                            </InputContainer>

                            <InputContainer>
                                <Label htmlFor="instagram">
                                    Instagram Handle <span className="text-red-500">*</span>
                                </Label>
                                <Input required type="text" id="instagram" name="instagram" placeholder="@yourbusiness" />
                            </InputContainer>

                            <InputContainer>
                                <Label htmlFor="business_logo">
                                    Business Logo <span className="text-red-500">*</span>
                                </Label>
                                <Input required type="file" id="business_logo" name="business_logo" />
                            </InputContainer>

                            <InputContainer>
                                <Label htmlFor="business_banner">
                                    Business Banner <span className="text-red-500">*</span>
                                </Label>
                                <Input required type="file" id="business_banner" name="business_banner" />
                            </InputContainer>
                        </CardContent>
                    </Card>

                    {/* Submit Button */}
                    <div className="w-full flex justify-end">
                        <Button type="submit" className="mt-4">Submit</Button>
                    </div>
                </form>
            </section>

        </div>
    )
}
