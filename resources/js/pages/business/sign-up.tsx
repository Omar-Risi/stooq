import NavBar from "@/components/nav/navbar";
import Button from "@/components/front/button";
import SubHeading from "@/components/front/sub-heading";
import { Link } from "@inertiajs/react";


export default function SignUp() {
    return (

        <>
            <main className="relative flex flex-col min-h-[50vh]">
                {/* BG made independent because of scale-x-125 */}
                <div className="bg-linear-to-br from-light-magenta to-dark-magenta h-full scale-x-125 w-screen -z-5 rounded-b-full absolute top-0 left-0"></div>

                <NavBar className="fill-white text-white" />

                <div className="text-white flex-1 flex justify-center items-center">
                    <h1 className="text-4xl font-bold text-center"> Become a vendor at <span className="bg-clip-text text-transparent bg-linear-to-r from-primary to-primary-dark"> STOOQ </span></h1>
                </div>
            </main>


            {/* Using min-h-[50vh] to make space dynamically instead of using margins */}
            <section className="text-primary-dark min-h-[50vh] flex justify-center flex-col items-center text-center">
            </section>
        </>
    )
}
