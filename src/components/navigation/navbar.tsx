import { Container, Icons } from "@/components";
import { buttonVariants } from "@/components/ui/button";
import { UserButton, } from "@clerk/nextjs";
import { currentUser } from "@clerk/nextjs/server";
import Link from "next/link";
import { SparklesText } from "@/components/ui/sparkletext";

const Navbar = async () => {

    const user = await currentUser();

    return (
        <header className="px-4 h-14 sticky top-0 inset-x-0 w-full bg-background/40 backdrop-blur-lg border-b border-border z-50">
            <Container reverse>
                
                <div className="flex items-center justify-between h-full mx-auto md:max-w-screen-xl">
                <div className="flex items-start">
                {/* <div className="md:hidden menuButton mt-1 mr-4">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#ffffff" fill="none">
                            <path d="M4 5L16 5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M4 12L20 12" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M4 19L12 19" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                </div> */}
                    <Link href="/" className="flex items-center gap-2">
                        <div>
            <SparklesText
                text="Assignmoto"
                className="custom-class"
                sparklesCount={10}
                colors={{ first: "#004ff8", second: "#00b4d4" }} 
            />
        </div>
                        {/* <span className="text-2xl font-thin">
                            <span className="text-blue-600 font-bold">A</span>ssignmate
                        </span> */}
                        </Link>
                    </div>
                    <nav className="hidden md:block absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
                        <ul className="flex items-center justify-center gap-8">
                            <Link href="/pricing" className="hover:text-foreground/80 text-sm">Pricing</Link>
                            <Link href="/about" className="hover:text-foreground/80 text-sm">About</Link>
                            <Link href="/features" className="hover:text-foreground/80 text-sm">Features</Link>
                            <Link href="/contact" className="hover:text-foreground/80 text-sm">Contact</Link>
                            <Link href="/customrequest" className="hover:text-foreground/80 text-sm">Custom Request</Link>
                        </ul>
                    </nav>
                    {/* <div className="flex items-center gap-4">
                        {user ? (
                            <UserButton />
                        ) : (
                            <>
                                <Link href="/sign-in" className={buttonVariants({ size: "sm", variant: "ghost" })}>
                                    Login
                                </Link>
                                <Link href="/sign-up" className={buttonVariants({ size: "sm", className: "hidden md:flex" })}>
                                Sign-up
                                </Link>
                            </>
                        )}
                    </div> */}
                    <div className="flex items-center gap-4 text-blue-500">
                        Assignmoto@gmail.com
                    </div>

                </div>
            </Container>
        </header>
    )
};

export default Navbar
