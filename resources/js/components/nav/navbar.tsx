
import StooqLogo from "@/components/icons/logo";
import { Link } from "@inertiajs/react";
import { Menu } from "lucide-react";

type NavBarProps = {
    className?: string,
}

export default function NavBar({ className }: NavBarProps) {
    return (
        <header className={`${className} w-screen p-4 text-primary fill-primary flex justify-between`}>
            <Link href={route('home')} className="flex gap-4">
                <StooqLogo />
                <h1 className="font-extrabold text-2xl"> STOOQ </h1>
            </Link>

            <nav className="flex items-center gap-4 px-4">
                <Link href={`${route('home')}#about`} className="hidden lg:block"> About us </Link>
                <Link href={`${route('home')}#pricing`} className="hidden lg:block"> Pricing </Link>
                <button className="rounded  shadow-md p-2 bg-primary text-white cursor-pointer hover:bg-white hover:text-primary transition-colors "> AR </button>
                <button>
                    <Menu size={36} />
                </button>
            </nav>

        </header >
    );
}
