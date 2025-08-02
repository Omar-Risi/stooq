export default function SubHeading({ children, className }: { children?: any, className?: string }) {

    return (
        <h2 className={`${className} text-xl text-primary font-bold`}> {children}</h2>
    )
}
