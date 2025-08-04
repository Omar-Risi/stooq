export default function SubHeading({ children, className }: { className?: string }) {

    return (
        <h2 className={`${className} text-xl text-primary font-bold`}> {children}</h2>
    )
}
