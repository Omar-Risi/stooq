import NavBar from "@/components/nav/navbar";
import Button from "@/components/front/button";
import { Link } from "@inertiajs/react";


export default function Home() {
    return (

        <>
            <main className="relative flex flex-col min-h-[50vh]">
                {/* BG made independent because of scale-x-125 */}
                <div className="bg-linear-to-br from-light-magenta to-dark-magenta h-full scale-x-125 w-screen -z-5 rounded-b-full absolute top-0 left-0"></div>

                <NavBar className="fill-white text-white" />

                <div className="text-white flex-1 flex justify-center items-center">
                    <div className="w-1/2 flex flex-col items-center text-center">
                        <h1 className="text-4xl font-bold"> Welcome to <span className="bg-clip-text text-transparent bg-linear-to-r from-primary to-primary-dark"> STOOQ </span></h1>
                        <p className="mt-4 "> A Marketplace made by students, for students</p>
                        <div className="flex flex-col md:flex-row  gap-4 mt-4">
                            <Button>
                                <Link className="block" href={route('business.apply')}>
                                    Become a vendor
                                </Link>
                            </Button>
                            <a className="block" href="https://stooq.kushk.io">
                                <Button className="bg-none border-4 text-primary border-primary hover:border-transparent"> Start shopping </Button>
                            </a>
                        </div>
                    </div>
                </div>
            </main>


            <section className="text-primary-dark mt-8">
                {/* TODO: Add sub heading here */}
            </section>
        </>
    )
}
