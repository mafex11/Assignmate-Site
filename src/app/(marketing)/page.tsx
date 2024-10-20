import { Container, Icons, Wrapper } from "@/components";
import { BorderBeam } from "@/components/ui/border-beam";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { LampContainer } from "@/components/ui/lamp";
import Marquee from "@/components/ui/marquee";
import SectionBadge from "@/components/ui/section-badge";
import { features, perks, pricingCards, reviews } from "@/constants";
import { cn } from "@/lib/utils";
import { ArrowRight, ChevronRight, UserIcon, Zap } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Form from "../form/page";
import Newsletter from "../newsletter/page";
import  BlurIn  from "../../components/ui/blurin";
const HomePage = () => {

    


    const firstRow = reviews.slice(0, reviews.length / 2);
    const secondRow = reviews.slice(reviews.length / 2);

    return (
        <div className="w-full relative flex items-center justify-center flex-col px-4 md:px-0 py-8">


            {/* hero */}
            <Wrapper>
                <div className="absolute inset-0 dark:bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[linear-gradient(to_right,#161616_1px,transparent_1px),linear-gradient(to_bottom,#161616_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)] -z-10 h-[150vh]" />
                    
                <Container>
                    
                    <div className="flex flex-col items-center justify-center py-20 h-full">
                    <Link href="/pricing">
                    
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

                        <div className="flex flex-col items-center mt-8 max-w-5xl w-11/12 md:w-full">
                        <BlurIn className="text-4xl text-centre md:text-6xl lg:textxl md:!leading-snug font-semibold bg-clip-text bg-gradient-to-b from-gray-50 to-gray-50 text-transparent" word="High-Quality, 100% Hand-typed Assignments & Essays for Students." duration={1} />
                            {/* <h1 className="text-4xl md:text-6xl lg:textxl md:!leading-snug font-semibold text-center bg-clip-text bg-gradient-to-b from-gray-50 to-gray-50 text-transparent">
                            High-Quality, 100% Handwritten Assignments & Essays for Students.
                            </h1> */}
                            <p className="text-base md:text-lg text-foreground/80 mt-6 text-center">
                            Get your assignments done quickly and accurately with personalized, handwritten content writers. 
                            Experience originality, fast delivery, and top-notch academic performance.
                            </p>
                            <div className="hidden md:flex relative items-center justify-center mt-8 md:mt-12 w-full">
                                <Link href="/pricing" className="flex items-center justify-center w-max rounded-full border-t border-foreground/30 bg-white/20 backdrop-blur-lg px-2 py-1 md:py-2 gap-2 md:gap-8 shadow-3xl shadow-background/40 cursor-pointer select-none">
                                    <p className="text-foreground text-sm text-center md:text-base font-medium pl-4 pr-4 lg:pr-0">
                                        ✨ {"  "} Assignments delivered within 10 minutes!
                                    </p>
                                    <Button size="sm" className="rounded-full hidden lg:flex border border-foreground/20">
                                        Request
                                        <ArrowRight className="w-4 h-4 ml-1" />
                                    </Button>
                                </Link>
                            </div>
                        </div>

                    </div>
                </Container>
            </Wrapper>
            <Wrapper className="flex flex-col items-center justify-center py-12 relative md:hidden">
            <div className="absolute top-1/2 left-1/2 -z-10 gradient w-3/4 -translate-x-1/2 h-3/4 -translate-y-1/2 inset-0 blur-[10rem] opacity-40"></div>
                    
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
            

            {/* how it works */}
            
            <Wrapper className="flex flex-col items-center justify-center py-12 relative">
                <Container>
                    <div className="max-w-md mx-auto text-start md:text-center">
                        <SectionBadge title="The Process" />
                        <h2 className="text-3xl lg:text-4xl font-semibold mt-6">
                            Three steps to complete your assignments.
                        </h2>
                        <p className="text-muted-foreground mt-6">
                            Get full marks and stay ahead of the competition.
                        </p>
                    </div>
                </Container>
                <Container>
                    <div className="flex flex-col items-center justify-center py-10 md:py-20 w-full">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full divide-x-0 md:divide-x divide-y md:divide-y-0 divide-gray-900 first:border-l-2 lg:first:border-none first:border-gray-900">
                            {perks.map((perk) => (
                                <div key={perk.title} className="flex flex-col items-start px-4 md:px-6 lg:px-8 lg:py-6 py-4">
                                    <div className="flex items-center justify-center">
                                        <perk.icon className="w-8 h-8" />
                                    </div>
                                    <h3 className="text-lg font-medium mt-4">
                                        {perk.title}
                                    </h3>
                                    <p className="text-muted-foreground mt-2 text-start lg:text-start">
                                        {perk.info}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </Container>
            </Wrapper>
            

            
            <Wrapper className="flex flex-col items-center justify-center relative md:hidden">
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
                    </div>
                </Container>
            </Wrapper>

            
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
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-5 w-full md:gap-8 py-10 md:py-20 flex-wrap max-w-6xl">
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
    <Link href={card.buttonHref} className={cn(
        "w-full text-center text-primary-foreground bg-primary p-2 rounded-md text-sm font-medium",
        card.title !== "Unlimited Saas" && "!bg-foreground !text-background",
        "cursor-pointer"
    )}>
        {card.buttonText}
    </Link>
</CardFooter>
            </Card>
        ))}
    </div>
</Container>


            </Wrapper>

            {/* testimonials */}
            <Wrapper className="flex flex-col items-center justify-center py-12 relative">
                <div className="hidden md:block absolute -top-1/4 -left-1/3 w-72 h-72 bg-indigo-500 rounded-full blur-[10rem] -z-10"></div>
                <Container>
                    <div className="max-w-md mx-auto text-start md:text-center">
                        <SectionBadge title="Our Customers" />
                        <h2 className="text-3xl lg:text-4xl font-semibold mt-6">
                            What people are saying
                        </h2>
                        <p className="text-muted-foreground mt-6">
                            See how Assignmate empowers students of all universities. Here&apos;s what real people are saying on Twitter
                        </p>
                    </div>
                </Container>
                <Container>
                    <div className="py-10 md:py-20 w-full">
                        <div className="relative flex h-full w-full flex-col items-center justify-center overflow-hidden py-10">
                            <Marquee pauseOnHover className="[--duration:20s] select-none">
                                {firstRow.map((review) => (
                                    <figure
                                        key={review.name}
                                        className={cn(
                                            "relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
                                            "border-zinc-50/[.1] bg-background over:bg-zinc-50/[.15]",
                                        )}
                                    >
                                        <div className="flex flex-row items-center gap-2">
                                            <UserIcon className="w-6 h-6" />
                                            <div className="flex flex-col">
                                                <figcaption className="text-sm font-medium">
                                                    {review.name}
                                                </figcaption>
                                                <p className="text-xs font-medium text-muted-foreground">{review.username}</p>
                                            </div>
                                        </div>
                                        <blockquote className="mt-2 text-sm">{review.body}</blockquote>
                                    </figure>
                                ))}
                            </Marquee>
                            <Marquee reverse pauseOnHover className="[--duration:20s] select-none">
                                {secondRow.map((review) => (
                                    <figure
                                        key={review.name}
                                        className={cn(
                                            "relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
                                            "border-zinc-50/[.1] bg-background over:bg-zinc-50/[.15]",
                                        )}
                                    >
                                        <div className="flex flex-row items-center gap-2">
                                            <UserIcon className="w-6 h-6" />
                                            <div className="flex flex-col">
                                                <figcaption className="text-sm font-medium">
                                                    {review.name}
                                                </figcaption>
                                                <p className="text-xs font-medium text-muted-foreground">{review.username}</p>
                                            </div>
                                        </div>
                                        <blockquote className="mt-2 text-sm">{review.body}</blockquote>
                                    </figure>
                                ))}
                            </Marquee>
                            <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-background"></div>
                            <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-background"></div>
                        </div>
                    </div>
                </Container>
            </Wrapper>

            {/* newsletter */}
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
    )
};

export default HomePage
