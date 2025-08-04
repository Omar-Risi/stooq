import StooqLogo from "@/components/icons/logo";
import { Link } from "@inertiajs/react";
import { Menu } from "lucide-react";
import {
    Sheet,
    SheetTrigger,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetClose,
} from "@/components/ui/sheet";

type NavBarProps = {
    className?: string,
};

export default function NavBar({ className }: NavBarProps) {
    return (
        <header className={`${className} w-screen p-4 text-primary fill-primary flex justify-between`}>
            <Link href={route('home')} className="flex gap-4">
                <StooqLogo />
                <h1 className="font-extrabold text-2xl"> STOOQ </h1>
            </Link>

            <nav className="flex items-center gap-4 px-4">
                {/* Desktop Nav */}
                <Link href={`${route('home')}#about`} className="hidden lg:block"> About us </Link>
                <Link href={`${route('home')}#pricing`} className="hidden lg:block"> Pricing </Link>

                <button className="rounded shadow-md p-2 bg-primary text-white cursor-pointer hover:bg-white hover:text-primary transition-colors">
                    <Link href={route('business.sign-up')}>
                        Become a vendor
                    </Link>
                </button>

                <button className="rounded shadow-md p-2 bg-primary text-white cursor-pointer hover:bg-white hover:text-primary transition-colors">
                    AR
                </button>

                {/* Mobile Nav */}
                <div className="lg:hidden">
                    <Sheet>
                        <SheetTrigger asChild>
                            <button>
                                <Menu size={36} />
                            </button>
                        </SheetTrigger>
                        <SheetContent side="right" className="w-64">
                            <SheetHeader>
                                <SheetTitle>Menu</SheetTitle>
                            </SheetHeader>
                            <div className="mt-4 flex flex-col gap-4 px-4" >
                                <SheetClose asChild>
                                    <Link href={`${route('home')}#about`} className="text-lg">About us</Link>
                                </SheetClose>
                                <SheetClose asChild>
                                    <Link href={`${route('home')}#pricing`} className="text-lg">Pricing</Link>
                                </SheetClose>

                                <SheetClose asChild>
                                    <Link href={`${route('home')}#pricing`} className="text-lg"> Become a vendor</Link>
                                </SheetClose>
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>
            </nav>
        </header>
    );
}

