
import StooqLogo from "@/components/icons/logo";
import { Link } from "@inertiajs/react";

type NavBarProps = {
    primaryColor: string,
}

export default function NavBar({ primaryColor }: NavBarProps) {
    return (
        <header className={`w-screen p-4 fill-${primaryColor} text-${primaryColor} flex justify-between`}>
            <Link href={route('home')} className="flex gap-4">
                <StooqLogo />
                <h1 className="font-extrabold text-2xl"> STOOQ </h1>
            </Link>

            <nav className="flex items-center gap-4">
                <a href="#about"> About us </a>
                <a href="#pricing"> Pricing </a>
                <button className="rounded  shadow-md p-2 bg-primary text-white cursor-pointer hover:bg-white hover:text-primary transition-colors "> AR </button>
            </nav>
        </header>
    );
}
