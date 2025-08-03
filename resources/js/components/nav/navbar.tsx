
import StooqLogo from "@/components/icons/logo";
import { Link } from "@inertiajs/react";

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

            {/* TODO: Add responsive nav */}
            <nav className="flex items-center gap-4 px-4">
                <a href="#about"> About us </a>
                <a href="#pricing"> Pricing </a>
                <button className="rounded  shadow-md p-2 bg-primary text-white cursor-pointer hover:bg-white hover:text-primary transition-colors "> AR </button>
            </nav>
        </header>
    );
}
