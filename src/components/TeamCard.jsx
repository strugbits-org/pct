import Image from "next/image";
import Link from "next/link";

export default function TeamCard({image, name, position}) {
  return (
    <div className="">
      <Image
        src={image}
        alt={name}
        className="rounded-t-md w-full h-[232px] md:w-[314px] md:h-[332px] object-cover"
        width={314}
        height={332}
      />

      <div className="flex items-end p-2 md:py-4 -mt-2 bg-red rounded-b-md relative z-10">
        <div className="w-full space-y-1 text-sm md:text-[16px] text-secondary">
          <h1 className="font-rob700">{name}</h1>
          <p className="font-rob400">{position}</p>
        </div>
        <ul className="flex gap-x-1">
          <li>
            <Link href={"#"}>
              <Image
                src={"/images/icons/linkedin-outline.svg"}
                alt="Linkedin"
                className="w-[20px] h-[20px]"
                width={20}
                height={20}
                />
            </Link>
          </li>
          <li>
            <Link href={"#"}>
              <Image
                src={"/images/icons/facebook-outline.svg"}
                alt="Facebook"
                className="w-[20px] h-[20px]"
                width={20}
                height={20}
                />
            </Link>
          </li>
          <li>
            <Link href={"#"}>
              <Image
                src={"/images/icons/twitter-outline.svg"}
                alt="Twitter"
                className="w-[20px] h-[20px]"
                width={20}
                height={20}
              />
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
