// next image
import Image from "next/image";

// next link
import Link from "next/link";

//icons
import { HiArrowRight } from "react-icons/hi2";

const ProjectsBtn = () => {
  return (
    <div className="mx-auto xl:mx-0">
      <Link
        href={"/work"}
        className="relative w-[125px] h-[125px] flex justify-center items-center
      bg-circleStar bg-cover bg-center bg-no-repeat group mt-[-420px]"
      >
        <Image
          src={"/rounded-text.png"}
          width={141}
          height={148}
          alt=""
          className="animate-spin-slow w-full h-full max-w-[100px] max-h-[100px] ]"
        />
        <HiArrowRight
          className="absolute text-4x1 group-hover:translate-x-2
        transition-all duration-300 "
        />
      </Link>
    </div>
  );
};

export default ProjectsBtn;
