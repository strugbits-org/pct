"use client";

import Image from "next/image";
import Link from "next/link";
import logo from "public/pct_logo.png";
import { useState } from "react";
import { TextWithIcon } from ".";

import { headerContactList, headerSocialList } from "@/lib/data";
import { buttonTheme } from "@/lib/constant";
import { ButtonRed } from "./Buttons";

const Header = () => {
  const [toggleServices, setToggleServices] = useState(false);
  const linkClassValues = "text-sm font-semibold leading-6 text-secondary font-rob400"
  return (
    <header class="bg-primary">
      <div className="max-w-[1394px] mx-auto px-[20px]">
        <div className="flex gap-x-6 items-center justify-between py-2">
          <div className="flex gap-x-6 items-center">
            {headerContactList.map((item) => {
              return (
                <Link href="#" key={item.id}>
                  <TextWithIcon leftIcon={item.icon} text={item.value} />
                </Link>
              );
            })}
          </div>
          <div className="flex gap-x-6 items-center">
            {headerSocialList.map((item) => {
              return (
                <Link href="#" key={item.id}>
                  <TextWithIcon leftIcon={item.icon} text={item.value} iconSize={14} />
                </Link>
              );
            })}
          </div>
        </div>

        <nav class="flex items-center justify-between" aria-label="Global">
          <div class="flex lg:flex-1">
            <Link href="/" class="-m-1.5 p-1.5">
              <span class="sr-only">Para Coat Technologies</span>
              <Image className="h-[74px] w-auto" src={logo} alt="" />
            </Link>
          </div>
          <div class="flex lg:hidden">
            <button
              type="button"
              class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-secondary"
            >
              <span class="sr-only">Open main menu</span>
              <svg
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </button>
          </div>
          <div class="hidden lg:flex lg:gap-x-8">
            <Link
              href="/"
              class={linkClassValues}
            >
              Home
            </Link>
            <div class="">
              <button
                type="button"
                class="flex items-center gap-x-1 text-sm font-semibold leading-6 text-secondary"
                aria-expanded="false"
                onClick={() => setToggleServices(!toggleServices)}
              >
                Product
              </button>
              {toggleServices ? (
                <div class="absolute z-10 mt-3 left-0 w-screen overflow-hidden bg-primary">
                  <h2 className="text-secondary">OUR SERVICES</h2>
                  <div class="p-4 flex">
                    <div class="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50">
                      <div class="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                        <svg
                          class="h-6 w-6 text-gray-600 group-hover:text-indigo-600"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M10.5 6a7.5 7.5 0 107.5 7.5h-7.5V6z"
                          />
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M13.5 10.5H21A7.5 7.5 0 0013.5 3v7.5z"
                          />
                        </svg>
                      </div>
                      <div class="flex-auto">
                        <a href="#" class="block font-semibold text-gray-900">
                          Analytics
                          <span class="absolute inset-0"></span>
                        </a>
                        <p class="mt-1 text-gray-600">
                          Get a better understanding of your traffic
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                ""
              )}
            </div>
            <Link
              href="/about"
              class={linkClassValues}
            >
              About Us
            </Link>
            <Link
              href="/industries-served"
              class={linkClassValues}
            >
              Industries Served
            </Link>
            <Link
              href="/blog"
              class={linkClassValues}
              >
              Blog
            </Link>
            <Link
              href="/careers"
              class={linkClassValues}
            >
              Careers
            </Link>
            <Link
              href="/dimer-and-machine-sales"
              class={linkClassValues}
            >
              Dimer & Machine Sales
            </Link>
          </div>
          <div class="hidden lg:flex lg:flex-1 lg:justify-end">
                <ButtonRed className={buttonTheme.red}>Contact Us</ButtonRed>

            
          </div>
        </nav>
        {/* <!-- Mobile menu, show/hide based on menus open state. --> */}
        <div class="lg:hidden" role="dialog" aria-modal="true">
          {/* <!-- Background backdrop, show/hide based on slide-over state. --> */}
          <div class="fixed inset-0 z-10"></div>
          <div class="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div class="flex items-center justify-between">
              <a href="#" class="-m-1.5 p-1.5">
                <span class="sr-only">Your Company</span>
                <img
                  class="h-8 w-auto"
                  src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                  alt=""
                />
              </a>
              <button
                type="button"
                class="-m-2.5 rounded-md p-2.5 text-gray-700"
              >
                <span class="sr-only">Close menu</span>
                <svg
                  class="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div class="mt-6 flow-root">
              <div class="-my-6 divide-y divide-gray-500/10">
                <div class="space-y-2 py-6">
                  <div class="-mx-3">
                    <button
                      type="button"
                      class="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                      aria-controls="disclosure-1"
                      aria-expanded="false"
                    >
                      Product
                      {/* <!--
                  Expand/collapse icon, toggle classes based on menu open state.

                  Open: "rotate-180", Closed: ""
                --> */}
                      <svg
                        class="h-5 w-5 flex-none"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                          clip-rule="evenodd"
                        />
                      </svg>
                    </button>
                    {/* <!-- 'Product' sub-menu, show/hide based on menu state. --> */}
                    <div class="mt-2 space-y-2" id="disclosure-1">
                      <a
                        href="#"
                        class="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                      >
                        Analytics
                      </a>
                      <a
                        href="#"
                        class="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                      >
                        Engagement
                      </a>
                      <a
                        href="#"
                        class="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                      >
                        Security
                      </a>
                      <a
                        href="#"
                        class="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                      >
                        Integrations
                      </a>
                      <a
                        href="#"
                        class="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                      >
                        Automations
                      </a>
                      <a
                        href="#"
                        class="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                      >
                        Watch demo
                      </a>
                      <a
                        href="#"
                        class="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                      >
                        Contact sales
                      </a>
                    </div>
                  </div>
                  <a
                    href="#"
                    class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    Features
                  </a>
                  <a
                    href="#"
                    class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    Marketplace
                  </a>
                  <a
                    href="#"
                    class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    Company
                  </a>
                </div>
                <div class="py-6">
                  <a
                    href="#"
                    class="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    Log in
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
