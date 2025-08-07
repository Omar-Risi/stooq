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
            <div className="grid w-full items-center gap-3">
                {children}
            </div>
        )
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
            <section className="text-primary-dark min-h-[50vh] w-screen flex justify-center flex-col items-center text-center">

                <Card className="w-1/2 text-start">
                    <CardHeader>
                        <CardTitle> Your information </CardTitle>
                        <CardDescription> Provide information about yourself </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <InputContainer>
                            <Label htmlFor="owner_name"> Name </Label>
                            <Input type="text" placeholder="your name..." name="owner_name" />
                        </InputContainer>
                    </CardContent>
                </Card>
            </section>
        </div>
    )
}
