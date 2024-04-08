"use client";
import Image from "next/image";
import { FullWidthContent } from "./Sections";
import Link from "next/link";
import { Context, useContext } from "react";
import { DesignContext } from "@/context/design";
import Input from "./Input";
import { Button } from "./Buttons";

const Footer = () => {
  const {
    data: { ourServices, footerSocialList },
    theme: { button },
  } = useContext(DesignContext);
  return (
    <div className="bg-primary text-secondary">
      {/* Contact Row */}
      <div className="grid grid-rows-3 md:grid-cols-3 md:grid-rows-1 md:px-5 border-b border-gret text-[14px] lg:text-[16px]">
        <div className="flex gap-4 items-center justify-start md:justify-center px-3 py-3 md:py-4 border-gret border-b md:border-b-0">
          <Image
            src="/images/icons/icon-map.svg"
            alt=""
            width={27}
            height={37}
            className="w-[17px] md:w-[27px] h-auto"
          />
          <p>{"17 John's Street Johnstown, PA 15901"}</p>
        </div>
        <div className="flex gap-4 items-center justify-start md:justify-center border-gret border-b py-3 md:py-4 px-3 md:border-b-0 md:border-l md:border-r ">
          <Image
            src="/images/icons/icon-mail.svg"
            alt=""
            width={29}
            height={21}
            className="w-[22px] md:w-[29px] h-auto"
          />
          <p>info@example.com</p>
        </div>
        <div className="flex items-center justify-start md:justify-center gap-x-4 py-3 md:py-4 px-3">
          <Image
            src="/images/icons/icon-phone.svg"
            alt=""
            width={33}
            height={33}
            className="w-[20px] md:w-[33px] h-auto"
          />
          <div className="flex items-center justify-start md:justify-center flex-wrap gap-x-4 gap-y-1">
            <p className="w-[max-content]">Tel: (814) 254-4376</p>
            <p>Fax: (814) 254-4057</p>
          </div>
        </div>
      </div>

      <FullWidthContent>
        <div className="flex flex-col md:flex-row md:flex-wrap md:justify-between lg:grid lg:grid-cols-3 gap-x-5 gap-y-6 py-10">
          {/* Grid 1 - Logo */}
          <div className="h-[max-content]">
            <Image
              src="/pct_logo.png"
              className="mb-3"
              alt=""
              width={167}
              height={74}
            />
            <p className="font-rob400 tracking-wide text-sm text-white-content max-w-[313px]">
              We are committed to providing consistent, quality service at a
              competitive price to ensure that we meet and/or exceed our
              customers’ expectations.
            </p>
          </div>
          {/* Grid - 2 Links */}
          <div>
            <div className="flex flex-col md:flex-row justify-between font-rob500 text-white-content gap-x-6 gap-y-6">
              <div className="flex flex-col gap-y-4 font-rob500 text-white-content">
                <h2 className="text-[22px] mb-1 text-white">Quick Links</h2>
                <Link href="/">Home</Link>
                <Link href="/about">About Us</Link>
                <Link href="/blog">Blog</Link>
                <Link href="/career">Career</Link>
                <Link href="/dimer-and-machine-sales">
                  Dinner & Machine Sales
                </Link>
              </div>
              <div className="flex flex-col gap-y-4">
                <h2 className="text-[22px] mb-1 text-white">Services</h2>
                {ourServices.map((item) => {
                  return (
                    <Link key={item.id} href="#">
                      {item.title}
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
          {/* Grid - 3 Newsletter */}
          <div>
            <div className="max-w-[330px] md:ml-auto md:mr-0">
              <h2 className="text-[22px] font-rob500 mb-6">Newsletter</h2>
              <p className="text-lg font-rob500 mb-4 text-white-content">
                Get latest updates and offers.
              </p>
              <div className="ring-1 ring-gret28 rounded-md flex items-center mb-4">
                <Input
                  className="ring-0 bg-transparent placeholder:text-gret"
                  type="text"
                  placeholder="Enter your email address"
                />
                <Button
                  className={`w-[54px] h-[54px] bg-red ${button.icon} rounded-r-md`}
                >
                  <svg
                    width="18"
                    height="19"
                    viewBox="0 0 18 19"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M16.6531 0.75647C17.2367 0.413147 17.9921 0.893799 17.8547 1.58044L15.3828 16.412C15.3141 16.9613 14.7305 17.2703 14.2498 17.0643L9.99264 15.2447L7.79537 17.9226C7.31472 18.5063 6.35342 18.1973 6.35342 17.3733V14.5924L14.5932 4.53302C14.7648 4.32703 14.4902 4.0867 14.3185 4.25836L4.46514 12.9444L0.79159 11.3995C0.173609 11.1591 0.104944 10.2665 0.722925 9.92319L16.6531 0.75647Z"
                      fill="#F9F9F9"
                    />
                  </svg>
                </Button>
              </div>
              <div className="flex gap-x-4">
                {footerSocialList.map((item) => {
                  return (
                    <Link href={item.href} key={item.id}>
                      <Image src={item.icon} alt="" width={35} height={35} />
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
        {/* Divider */}
        <div className="bg-gret28 h-[1px]"></div>
        {/* Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-start px-0 py-4 md:p6 text-white-content gap-x-4">
          <p>Privacy Policy | Terms of Service</p>
          <p className="text-right">Copyright © 2023. All rights reserved.</p>
        </div>
      </FullWidthContent>
    </div>
  );
};

export default Footer;
