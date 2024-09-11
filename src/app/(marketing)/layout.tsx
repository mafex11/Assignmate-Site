import React from 'react'
import { Navbar } from '@/components';
import Footer from '@/components/navigation/footer';
interface Props {
    children: React.ReactNode;
}

const MarketingLayout = ({ children }: Props) => {
    return (
        <div className="flex flex-col items-center w-full">
        <Navbar/>
            {children}
        <Footer/>
        </div>
    )
};

export default MarketingLayout
