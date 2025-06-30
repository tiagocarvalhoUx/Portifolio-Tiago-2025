// next image
import Image from "next/image";

// next link
import Link from "next/link";

// next router
import { useRouter } from "next/router";

//components
import Socials from "../components/Socials";

import { BsDownload } from "react-icons/bs";

const Header = () => {
  const router = useRouter();
  
  // Verifica se está na página inicial
  const isHomePage = router.pathname === "/";

  return (
    <header className="absolute z-30 w-full flex items-center px-16 xl:px-0 xl:h-[100px]">
      <div className="container mx-auto">
        <div
          className="flex flex-col lg:flex-row justify-between items-center gapy-y-6  
      py-8"
        >
          {/* logo - aparece apenas na página inicial */}
          {isHomePage && (
            <Link href={"/"}>
              <Image
                src={"/logo-tiago-2025.png"}
                width={240}
                height={60}
                alt=""
                priority={true}
              />
            </Link>
          )}

          {/* Download Button - aparece apenas na página inicial */}
          {isHomePage && (
            <a
              href="/cv-Tiago-ats-Port-_2025.pdf"
              download="cv-Tiago-ats-Port-_2025.pdf"
              target="_blank"
              className=" rounded-full border   border-white/50 bg-accent px-6 py-1 sm:px-8 flex  items-center justify-center transition-all duration-300 hover:bg-transparent group text-sm sm:text-base"
            >
              <span className="group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500 ">
                Download CV
              </span>
              <BsDownload className="-translate-y-[120%] text-accent  font-extrabold opacity-0 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-500 absolute text-[20px] sm:text-[28px]" />
            </a>
          )}

          {/* Socials - sempre aparece */}
          <Socials />
        </div>
      </div>
    </header>
  );
};

export default Header;