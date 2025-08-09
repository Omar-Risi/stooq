import StooqLogo from "@/components/icons/logo";
import { Link, router } from "@inertiajs/react";
import { Menu } from "lucide-react";
import {
    Sheet,
    SheetTrigger,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetClose,
} from "@/components/ui/sheet";

import { usePage } from "@inertiajs/react";
import { useEffect } from "react";

type NavBarProps = {
    className?: string,
};

export default function NavBar({ className }: NavBarProps) {

    const { translations, locale } = usePage().props;



    function toggleLang() {
        router.post(route('switch.lang', { locale: (locale == 'en') ? 'ar' : 'en' }), { preserveScroll: true })
    }


    return (
        <header className={`${className} w-screen p-4 text-primary fill-primary flex justify-between`}>
            <Link href={route('home')} className="flex gap-4">
                <StooqLogo />
                <h1 className="font-extrabold text-2xl"> {translations.general.stooq} </h1>
            </Link>

            <nav className="flex items-center gap-4 px-4">
                {/* Desktop Nav */}
                <Link href={`${route('home')}#about`} className="hidden lg:block">
                    {translations.general.nav.about}
                </Link>
                <Link href={`${route('home')}#pricing`} className="hidden lg:block">
                    {translations.general.nav.pricing}
                </Link>

                <button className="hidden lg:block rounded shadow-md p-2 bg-primary text-white cursor-pointer hover:bg-white hover:text-primary transition-colors">
                    <Link href={route('business.sign-up')}>
                        {translations.general.nav.become_a_vendor}
                    </Link>
                </button>

                <button
                    onClick={toggleLang}
                    className="rounded shadow-md p-2 bg-primary text-white cursor-pointer hover:bg-white hover:text-primary transition-colors">
                    {locale == 'en' ? 'AR' : 'EN'}
                </button>

                {/* Mobile Nav */}
                <div className="lg:hidden">
                    <Sheet>
                        <SheetTrigger asChild>
                            <button>
                                <Menu size={36} />
                            </button>
                        </SheetTrigger>
                        <SheetContent side="right" className="w-64 flex flex-col">
                            <SheetHeader>
                            </SheetHeader>
                            <div className="mt-4 flex flex-col justify-center gap-4 px-4 flex-1 " >
                                <SheetClose asChild>
                                    <Link href={`${route('home')}#about`} className="text-lg">
                                        {translations.general.nav.about}
                                    </Link>
                                </SheetClose>
                                <SheetClose asChild>
                                    <Link href={`${route('home')}#pricing`} className="text-lg">
                                        {translations.general.nav.pricing}
                                    </Link>
                                </SheetClose>

                                <SheetClose asChild>
                                    <Link href={`${route('home')}#pricing`} className="text-lg">
                                        {translations.general.nav.become_a_vendor}
                                    </Link>
                                </SheetClose>
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>
            </nav>
        </header>
    );
}

