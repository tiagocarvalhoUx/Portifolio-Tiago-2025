// next image
import Image from "next/image";

const Avatar = () => {
  return (
    <div className="hidden xl:flex xl:max-w-none">
      <Image
        src={"/avatar-hd.png"}
        width={350}
        height={1000}
        alt=""
        className="translate-z-0 w-[210px] h-full ml-[540px] mt-20 "
      />
    </div>
  );
};

export default Avatar;
