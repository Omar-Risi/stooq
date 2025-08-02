
type ButtonProps = {
    children?: any,
    className?: string

}

export default function Button({ children, className }: ButtonProps) {


    return (
        <button className={`${className} uppercase text-inherit bg-linear-to-r from-primary-dark to-primary px-4 py-2 rounded shadow-md cursor-pointer hover:bg-white hover:text-primary hover:bg-none transition-colors `}>
            {children}
        </button>
    )
}
