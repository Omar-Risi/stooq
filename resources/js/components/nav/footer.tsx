import { Link, usePage } from "@inertiajs/react";

export default function Footer() {

    const { translations } = usePage().props;

    function ListItem({ url, children }) {
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
                <h1> {translations.general.stooq}</h1>
                <ul className="mt-4">
                    <ListItem url={route('home')}>
                        {translations.general.nav.home}
                    </ListItem>
                    <ListItem url={`${route('home')}#about`}>
                        {translations.general.nav.about}
                    </ListItem>
                    <ListItem url={route('business.sign-up')}>
                        {translations.general.nav.become_a_vendor}
                    </ListItem>
                </ul>
            </div>
            <div className="flex justify-end items-end">
                <p>
                    {translations.general.footer.rights}
                </p>
            </div>
        </footer>
    )
}
