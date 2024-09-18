import { ReactNode } from 'react'

import Nav from '@/components/Nav';
import Footer from '@/components/Footer';

interface LayoutProps {
  children?: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="">
      <Nav />
      <main>{ children }</main>
      <Footer />
    </div>
  )
}

export default Layout;