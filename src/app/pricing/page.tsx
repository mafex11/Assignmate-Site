import { Navbar } from "@/components";
import {Wrapper} from "@/components";
import {Container} from "@/components";
import { LampContainer } from "@/components/ui/lamp";
import { pricingCards } from "@/constants";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { ArrowRight, ChevronRight, UserIcon, Zap } from "lucide-react";
import Link from "next/link";
import SectionBadge from "@/components/ui/section-badge";
import { Button } from "@/components/ui/button";
import { BorderBeam } from "@/components/ui/border-beam";
import { Input } from "@/components/ui/input";
import {Footer} from "@/components";
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

           
            
            

            {/* pricing */}
            <Wrapper className="flex flex-col items-center justify-center py-12 relative ">
            <div className=" absolute top-2/3 left-1/2 -z-10 gradient w-3/4 -translate-x-1/2 h-2/4 -translate-y-3/4 inset-0 blur-[5rem] opacity-60"></div>
                    
            <div className="hidden md:block absolute bottom-0 -left-1/3 w-72 h-72 bg-indigo-600 rounded-full blur-[10rem] -z-10"></div>
                <Container>
                    <div className="max-w-md mx-auto text-start md:text-center shadow-2xl shadow-black/40">
                        <SectionBadge title="Pricing" />
                        <h2 className="text-3xl lg:text-4xl font-semibold mt-6">
                        Choose the best plan for your university or course.                        </h2>
                    </div>
                    <div className="hidden md:flex relative items-center justify-center mt-8 md:mt-12 w-full ">
                                <Link href="/contact" className="flex items-center justify-center w-max rounded-full border-t border-foreground/30 bg-white/20 backdrop-blur-lg px-2 py-1 md:py-2 gap-2 md:gap-8 shadow-3xl shadow-background/40 cursor-pointer select-none shadow-2xl shadow-black/40">
                                    <p className="text-foreground text-sm text-center md:text-base font-medium pl-4 pr-4 lg:pr-0 ">
                                    ✉️ {"  "} Fill this form for custom plans and query
                                    </p>
                                    <Button size="sm" className="rounded-full hidden lg:flex border border-foreground/20">
                                        Form
                                        <ArrowRight className="w-4 h-4 ml-1" />
                                    </Button>
                                </Link>
                            </div>
                </Container>
                <Container className="flex items-center justify-center">
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 w-full md:gap-8 py-10 md:py-20 flex-wrap max-w-4xl">
        {pricingCards.map((card) => (
            <Card
                key={card.title}
                className={cn(
                    "flex flex-col w-full border-neutral-700",
                    card.title === "Kit" && "border-2 border-primary",
                    "transition-all duration-300 ease-in-out",
                    "hover:scale-105 hover:shadow-xl hover:z-10"
                )}
            >
                {/* Rest of the card content remains unchanged */}
                <CardHeader className="border-b border-border font">
                    <span>{card.title}</span>
                    <CardTitle className={cn(card.title !== "Unlimited Saas" && "")}>
                        {card.price}
                    </CardTitle>
                    <CardDescription>{card.description}</CardDescription>
                </CardHeader>
                <CardContent className="pt-6 space-y-3">
                    {card.features.map((feature) => (
                        <div key={feature} className="flex items-center gap-2">
                            <Zap className="w-4 h-4 fill-primary text-primary" />
                            <p>{feature}</p>
                        </div>
                    ))}
                </CardContent>
                <CardFooter className="mt-auto">
                    <Link
                        href="#"
                        className={cn(
                            "w-full text-center text-primary-foreground bg-primary p-2 rounded-md text-sm font-medium",
                            card.title !== "Unlimited Saas" && "!bg-foreground !text-background",
                            "cursor-pointer"
                        )}
                    >
                        {card.buttonText}
                    </Link>
                </CardFooter>
            </Card>
        ))}
    </div>
</Container>


            </Wrapper>
            <div className="w-full relative flex items-center justify-center flex-col px-4 md:px-0 mt-20">
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