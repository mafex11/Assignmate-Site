import { Navbar } from "@/components";
import {Wrapper} from "@/components";
import {Container} from "@/components";
import Form from "../form/page";
import SectionBadge from "@/components/ui/section-badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, ChevronRight, UserIcon, Zap } from "lucide-react";
import {Footer} from "@/components";
import { Input } from "@/components/ui/input";


const contact = () => {

    return (
        <div className="flex flex-col items-center w-full">
            <Navbar/>
        <div className="w-full relative flex items-center justify-center flex-col px-4 md:px-0 py-8">
        

            {/* hero */}
            <Wrapper>
                <div className="absolute inset-0 dark:bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[linear-gradient(to_right,#161616_1px,transparent_1px),linear-gradient(to_bottom,#161616_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)] -z-10 h-[150vh]" />

                
            </Wrapper>

           
            
            

            <Wrapper className="flex flex-col items-center justify-center py-12 relative">
            <div className="absolute top-1/2 left-1/2 -z-10 gradient w-3/4 -translate-x-1/2 h-3/4 -translate-y-1/2 inset-0 blur-[10rem] opacity-40"></div>
                    <div className="-m-2 rounded-xl p-2 ring-1 ring-inset ring-foreground/20 lg:-m-4 lg:rounded-2xl bg-opacity-50 backdrop-blur-3xl">
                            
                    </div>
            <div className="hidden md:block absolute bottom-0 -left-1/3 w-72 h-72 bg-indigo-600 rounded-full blur-[10rem] -z-10"></div>
                <Container>
                    <div className="max-w-4xl mx-auto text-start md:text-center">
                        <SectionBadge title="Contact" />
                        <h2 className="text-3xl lg:text-5xl font-semibold mt-6">
                        Fill the form with your details and upload your assignment, we will get back to you ASAP.                        </h2>
                    </div>
                    <div className="hidden md:flex relative items-center justify-center mt-8 md:mt-12 w-full">
                                <Link href="#" className="flex items-center justify-center w-max rounded-full border-t border-foreground/30 bg-white/20 backdrop-blur-lg px-2 py-1 md:py-2 gap-2 md:gap-8 shadow-3xl shadow-background/40 cursor-pointer select-none shadow-2xl shadow-black">
                                    <p className="text-foreground text-sm text-center md:text-base font-medium pl-4 pr-4 lg:pr-0 mr-10 ">
                                    ✉️ {"  "} Fill this form for custom plans and query
                                    </p>
                                    {/* <Button size="sm" className="rounded-full hidden lg:flex border border-foreground/20 ">
                                        Form
                                        <ArrowRight className="w-4 h-4 ml-1" />
                                    </Button> */}
                                </Link>
                            </div>
                </Container>
                <Container className="flex items-center justify-center">
    <div className="w-full max-w-4xl">
        <div className="mt-20">
            <Form/>
        </div>
        
    </div>
</Container>


            </Wrapper>
            <Wrapper className="flex flex-col items-center justify-center py-12 relative mt-40 ">
                
                <Container className="relative z-[999999] ">
                    <div className="flex items-center justify-center w-full -mt-40  ">
                        <div className="flex flex-col md:flex-row items-start md:items-center justify-start md:justify-between w-full px-4 md:px-8 rounded-lg lg:rounded-2xl border border-border/80 py-4 md:py-8 shadow-2xl shadow-black">
                            <div className="flex flex-col items-start gap-4 w-full ">
                                <h4 className="text-xl md:text-2xl font-semibold">
                                    Join our newsletter
                                </h4>
                                <p className="text-base text-muted-foreground">
                                    For special offers and Discounts, Join now.
                                </p>
                            </div>
                            <div className="flex flex-col items-start gap-2 md:min-w-80 mt-5 md:mt-0 w-full md:w-max">
                                <form action="#" className="flex flex-col md:flex-row items-center gap-2 w-full md:max-w-xs">
                                    <Input
                                        required
                                        type="email"
                                        placeholder="Enter your email"
                                        className="focus-visible:ring-0 focus-visible:ring-transparent focus-visible:border-primary duration-300 w-full"
                                    />
                                    <Button type="submit" size="sm" variant="secondary" className="w-full md:w-max">
                                        Subscribe
                                    </Button>
                                </form>
                                <p className="text-xs text-muted-foreground">
                                    By subscribing you agree with our{" "}
                                    <Link href="#">
                                        Privacy Policy
                                    </Link>
                                </p>
                            </div>
                        </div>
                    </div>
                </Container>
            </Wrapper>
            


        </div>
        <Footer/>
        </div>
        
    )
}

export default contact;