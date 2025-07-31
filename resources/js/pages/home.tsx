import NavBar from "@/components/nav/navbar";


export default function Home() {

    return (
        <>
            <main className="relative flex flex-col min-h-[50vh]">
                {/* BG made independent because of scale-x-125 */}
                <div className="bg-linear-to-br from-light-magenta to-dark-magenta h-full scale-x-125 w-screen -z-5 rounded-b-full absolute top-0 left-0"></div>

                <NavBar primaryColor="white"></NavBar>

                <div className="text-white flex-1 flex justify-center items-center">
                    <div className="w-1/2">
                        <h1 className="text-4xl font-bold"> Welcome to <span className="bg-clip-text text-transparent bg-linear-to-r from-primary to-primary-dark"> STOOQ </span></h1>
                        <p> A Marketplace by students, for students</p>
                    </div>
                </div>

            </main>
        </>
    )
}
