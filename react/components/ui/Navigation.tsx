'use client';

// import { useSession, signOut } from "next-auth/react";
import Link from 'next/link';
// import { usePathname, useSearchParams } from 'next/navigation';
import Image from 'next/image';
// import { activeLink } from '@/services/activeRoute';

type NavLink = {
  label: string;
  href: string;
};
type Props = {
  navLinks: NavLink[];
};

export const Navigation = ({ navLinks }: Props) => {
  // const pathname = usePathname();
  // const searchParams = useSearchParams();
  // const callbackUrl = searchParams.get('callbackUrl') || '/';
  return (
    <>
      <nav className="container max-w-container mx-auto flex items-center justify-between px-4">
        <div className="flex items-center space-x-2">
          <Image src="/images/logo.png" alt="logo" width={21} height={16} />
          <span className="text-2xl font-bold text-[#FDFDFD]">БИТКЭМП</span>
        </div>
        <ul className="space-x-6 hidden md:flex">
          {/* <Image src={logo} alt={"logo"} className="w-16 h-16 bg-white/50 "  /> */}
          {navLinks.map((link) => {
            const isActive = false;
            // activeLink(link.href, pathname, callbackUrl);
            return (
              <li key={link.label} className="flex items-center">
                <Link
                  href={link.href}
                  className={
                    isActive
                      ? "relative text-[#FDFDFD] font-raleway text-[15px] font-bold leading-[17.61px] tracking-[-0.02em] text-center transition-colors duration-300 after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-[#FDFDFD] after:transition-all after:duration-300 hover:after:w-full"
                      : "relative text-[#FDFDFD] font-raleway text-[15px] font-bold leading-[17.61px] tracking-[-0.02em] text-center transition-colors duration-300 after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:bg-[#FDFDFD] after:transition-all after:duration-300 after:w-full"
                  }
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
};
