import { Link } from "@inertiajs/react";

export default function Footer() {


    function ListItem({ url, children }: { url: string, children?: any }) {
        return (
            <li>
                <Link
                    className="text-white/65 hover:text-white transition-colors cursor-pointer"
                    href={url}>
                    {children}
                </Link>
            </li>

        )
    }

    return (
        <footer className="mt-8 p-2 lg:py-4 lg:px-8 bg-primary text-white flex flex-col lg:flex-row lg:justify-between gap-8">
            <div>
                <h1> STOOQ </h1>
                <ul className="mt-4">
                    <ListItem url={route('home')}> Home </ListItem>
                    <ListItem url={`${route('home')}#about`}> About us </ListItem>
                    <ListItem url={route('business.sign-up')}> Become a vendor </ListItem>
                </ul>
            </div>
            <div className="flex justify-end items-end">
                <p>
                    Copyright @ STOOQ. All Rights Reserved.
                </p>
            </div>
        </footer>
    )
}
