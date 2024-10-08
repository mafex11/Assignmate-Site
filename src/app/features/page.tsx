import { Navbar } from "@/components";
import {Wrapper} from "@/components";
import {Container} from "@/components";
import { LampContainer } from "@/components/ui/lamp";
import Image from "next/image";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { ArrowRight, ChevronRight, UserIcon, Zap } from "lucide-react";
import Link from "next/link";
import SectionBadge from "@/components/ui/section-badge";
import { Button } from "@/components/ui/button";
import { BorderBeam } from "@/components/ui/border-beam";
import { Input } from "@/components/ui/input";
import {Footer} from "@/components";
import { features, perks } from "@/constants";
import {Icons} from "@/components";
import Newsletter from "../newsletter/page";

const pricing = () => {

    return (
        <div className="flex flex-col items-center w-full">
            <Navbar/>
        <div className="w-full relative flex items-center justify-center flex-col px-4 md:px-0 py-8">
        

            {/* hero */}
            <Wrapper>
                <div className="absolute inset-0 dark:bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[linear-gradient(to_right,#161616_1px,transparent_1px),linear-gradient(to_bottom,#161616_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)] -z-10 h-[100vh]" />
            </Wrapper>

            
            <Wrapper className="flex flex-col items-center justify-center relative">
            <div className="relative flex items-center py-10 md:py-5 w-full">
                            
            </div>
                <div className="hidden md:block absolute top-0 -right-1/3 w-72 h-72 bg-primary rounded-full blur-[10rem] -z-10"></div>
                <div className="hidden md:block absolute bottom-0 -left-1/3 w-72 h-72 bg-indigo-600 rounded-full blur-[10rem] -z-10"></div>
                <Container>
                    <div className="max-w-md mx-auto text-start md:text-center">
                        <SectionBadge title="Features" />
                        <h2 className="text-3xl lg:text-4xl font-semibold mt-6">
                            Discover our powerful plans
                        </h2>
                        <p className="text-muted-foreground mt-6">
                            Assignmate offers a range of plans and customization to help you with your assignments.
                        </p>
                        
                    </div>
                    <div className="hidden md:flex relative items-center justify-center mt-8 md:mt-12 w-full">
                                <Link href="/pricing" className="flex items-center justify-center w-max rounded-full border-t border-foreground/30 bg-white/20 backdrop-blur-lg px-2 py-1 md:py-2 gap-2 md:gap-8 shadow-3xl shadow-background/40 cursor-pointer select-none">
                                    <p className="text-foreground text-sm text-center md:text-base font-medium pl-4 pr-4 lg:pr-0 ">
                                        ✨ {"  "} Assignments delivered within 10 minutes!
                                    </p>
                                    <Button size="sm" className="rounded-full hidden lg:flex border border-foreground/20">
                                        Request
                                        <ArrowRight className="w-4 h-4 ml-1" />
                                    </Button>
                                </Link>
                            </div>
                </Container>
                
                <Container>
                    <div className="flex flex-col items-center justify-center py-10 md:py-20 w-full">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full gap-8">
                            {features.map((feature) => (
                                <div key={feature.title} className="flex flex-col items-start lg:items-start px-0 md:px-0">
                                    <div className="flex items-center justify-center">
                                        <feature.icon className="w-8 h-8" />
                                    </div>
                                    <h3 className="text-lg font-medium mt-4">
                                        {feature.title}
                                    </h3>
                                    <p className="text-muted-foreground mt-2 text-start lg:text-start">
                                        {feature.info}
                                    </p>
                                </div>
                            ))}
                        </div>
                    <div className="flex flex-col items-center justify-center py-20 h-full"><Link href="/pricing">
                    
                    <button className="group relative grid overflow-hidden rounded-full px-4 py-1 shadow-[0_1000px_0_0_hsl(0_0%_20%)_inset] transition-colors duration-200">
                        <span>
                            <span className="spark mask-gradient absolute inset-0 h-[100%] w-[100%] animate-flip overflow-hidden rounded-full [mask:linear-gradient(white,_transparent_50%)] before:absolute before:aspect-square before:w-[200%] before:rotate-[-90deg] before:animate-rotate before:bg-[conic-gradient(from_0deg,transparent_0_340deg,white_360deg)] before:content-[''] before:[inset:0_auto_auto_50%] before:[translate:-50%_-15%]" />
                        </span>
                        <span className="backdrop absolute inset-[1px] rounded-full bg-neutral-950 transition-colors duration-200 group-hover:bg-neutral-900" />
                        <span className="h-full w-full blur-md absolute bottom-0 inset-x-0 bg-gradient-to-tr from-primary/40"></span>
                        <span className="z-10 py-0.5 text-sm text-neutral-100 flex items-center justify-center gap-1.5">
                            <Image src="/icons/sparkles-dark.svg" alt="✨" width={24} height={24} className="w-4 h-4" />
                            Request an Assignment
                            <ChevronRight className="w-4 h-4" />
                        </span>
                    </button>
                </Link>
                </div>
                        
                    </div>
                </Container>
            </Wrapper>
            


            <div className="w-full relative flex items-center justify-center flex-col px-4 md:px-0 mt-4">
        <Wrapper className="flex flex-col items-center justify-center py-12 relative">
        <Container className="relative z-[999999]">
          <div className="flex items-center justify-center w-full -mt-40">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-start md:justify-between w-full px-4 md:px-8 rounded-lg lg:rounded-2xl border border-border/80 py-4 md:py-8 shadow-2xl shadow-black ">
              <Newsletter/>
            </div>
          </div>
        </Container>
      </Wrapper>
        </div>
            


        </div>
        <Footer/>
        </div>
    )
}

export default pricing;