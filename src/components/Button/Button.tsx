import { ReactNode } from 'react';
import { Link } from 'wouter';

interface ButtonProps {
  children?: ReactNode;
  className?: string;
  href?: string;
}

const Button = ({ children, className = '', href }: ButtonProps) => {
  if ( typeof href === 'string' ) {
    return (
      <Link href={href}>
        <a className={`inline-block rounded bg-slate-600 py-2.5 px-6 text-sm font-bold uppercase text-white hover:bg-slate-500 hover:text-white ${className}`}>
          { children }
        </a>
      </Link>
    );
  }

  return (
    <button className={`inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-[#001633] text-primary hover:bg-[#00214c] h-8 px-3 ${className}`}>
      { children }
    </button>
  )
}

export default Button;