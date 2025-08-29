import NavBar from "@/components/nav/navbar";
import Footer from "@/components/nav/footer";
import Button from "@/components/front/button";
import SubHeading from "@/components/front/sub-heading";
import { Link } from "@inertiajs/react";
import { Truck, Package, ChartArea } from "lucide-react";
import { usePage } from "@inertiajs/react";
import { TermsAndConditions } from "@/components/terms-and-conditions";


export default function Home() {

    const { translations, direction, locale } = usePage().props;


    return (

        <div dir={direction} className='font-plus-jakarta rtl:font-noto-kufi-arabic'>
            <main className="relative flex flex-col min-h-[50vh]">
                {/* BG made independent because of scale-x-125 */}
                <div className="bg-linear-to-br from-light-magenta to-dark-magenta h-[110%] scale-x-125 w-screen -z-5 rounded-b-full absolute top-0 left-0"></div>

                <NavBar className="fill-white text-white" />

                <div className="text-white flex-1 flex justify-center items-center">
                    <div className="w-1/2 flex flex-col items-center text-center">
                        <h1 className="text-4xl font-bold">
                            {translations.home.welcome}
                            <span className="bg-clip-text text-transparent bg-linear-to-r from-primary to-primary-dark"> {translations.general.stooq}</span>
                        </h1>
                        <p className="mt-4 ">{translations.home.sub_headline}</p>
                        <div className="flex flex-col md:flex-row  gap-4 mt-4">
                            <Button>
                                <Link className="block" href={route('business.sign-up')}>
                                    {translations.general.nav.become_a_vendor}
                                </Link>
                            </Button>
                            {/*
                                <a className="block" href="https://stooq.kushk.io">
                                    <Button className="bg-none border-4 text-primary border-primary hover:border-transparent">
                                        {translations.general.nav.start_shopping}
                                    </Button>
                                </a>
                            */}
                        </div>
                    </div>
                </div>
            </main>


            {/* Using min-h-[50vh] to make space dynamically instead of using margins */}
            <section className="text-primary-dark min-h-[80vh] lg:min-h-[50vh] flex justify-center flex-col items-center text-center mt-12" id="about">
                <SubHeading className="w-4/5">
                    {translations.home.about.headline}
                </SubHeading>

                <p className="mt-2 text-charcoal w-1/2">
                    {translations.home.about.sub_headline}
                </p>

                <Button className="text-white bg-none bg-primary mt-4">
                    <Link className="block" href={route('business.sign-up')}>
                        {translations.home.about.cta}
                    </Link>
                </Button>

            </section>

            <section className="text-primary-dark min-h-[50vh] lg:min-h-[25vh] flex flex-col items-center justify-center text-center" id="pricing">
                <SubHeading className="w-4/5" >
                    {translations.home.pricing.headline}
                </SubHeading>

                <p className="mt-2 text-charcoal">
                    {translations.home.pricing.sub_headline}
                </p>
            </section>

            <section className="text-primary-dark min-h-[50vh] flex flex-col items-center justify-center text-center">
                <SubHeading className="w-4/5" >
                    {translations.home.benefits.headline}
                </SubHeading>

                <ul className="grid grid-rows-3 lg:grid-cols-3 lg:grid-rows-none lg:min-h-[25vh] lg:items-center gap-16 lg:gap-8 w-4/5 text-start mt-12">
                    <li>
                        <div className="flex gap-4 items-center">
                            <Package className="stroke-primary size-16" />
                            <h3 className="text-xl text-primary font-bold"> {translations.home.benefits.inventory.headline}</h3>
                        </div>
                        <p className="text-charcoal w-3/4 mt-2">
                            {translations.home.benefits.inventory.sub_headline}
                        </p>
                    </li>
                    <li>
                        <div className="flex gap-4 items-center">
                            <Truck className="stroke-primary size-16" />
                            <h3 className="text-xl text-primary font-bold">
                                {translations.home.benefits.transport.headline}
                            </h3>
                        </div>
                        <p className="text-charcoal w-3/4 mt-2">
                            {translations.home.benefits.transport.sub_headline}
                        </p>
                    </li>

                    <li>
                        <div className="flex gap-4 items-center">
                            <ChartArea className="stroke-primary size-16" />
                            <h3 className="text-xl text-primary font-bold"> {translations.home.benefits.sales.headline}</h3>
                        </div>
                        <p className="text-charcoal w-3/4 mt-2">
                            {translations.home.benefits.sales.sub_headline}
                        </p>
                    </li>


                </ul>
            </section>

            <TermsAndConditions />

            <Footer />
        </div>
    )
}
