"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const Footer = () => {
  return (
    <>
      <footer className="border-t border-stroke bg-white dark:border-strokedark dark:bg-blacksection">
        <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
          {/* <!-- Footer Top --> */}
          <div className="py-20 lg:py-25">
            <div className="flex flex-wrap gap-8 lg:justify-between lg:gap-0">
              <motion.div
                variants={{
                  hidden: {
                    opacity: 0,
                    y: -20,
                  },

                  visible: {
                    opacity: 1,
                    y: 0,
                  },
                }}
                initial="hidden"
                whileInView="visible"
                transition={{ duration: 1, delay: 0.5 }}
                viewport={{ once: true }}
                className="animate_top w-1/2 lg:w-1/4"
              >
                <a href="/" className="relative">
                  <Image
                    width={110}
                    height={80}
                    src="/images/logo/logo-light.svg"
                    alt="Logo"
                    className="dark:hidden"
                  />
                  <Image
                    width={110}
                    height={80}
                    src="/images/logo/logo-dark.svg"
                    alt="Logo"
                    className="hidden dark:block"
                  />
                </a>

                <p className="mb-10 mt-5">
                  NutriDAO – A DataChain Collection Initiative
                </p>

                {/*<p className="mb-1.5 text-sectiontitle uppercase tracking-[5px]">*/}
                {/*  contact*/}
                {/*</p>*/}
                {/*<a*/}
                {/*  href="#"*/}
                {/*  className="text-itemtitle font-medium text-black dark:text-white"*/}
                {/*>*/}
                {/*  hello@solid.com*/}
                {/*</a>*/}
              </motion.div>

              {/*<div className="flex w-full flex-col gap-8 md:flex-row md:justify-between md:gap-0 lg:w-2/3 xl:w-7/12">*/}
              {/*  <motion.div*/}
              {/*    variants={{*/}
              {/*      hidden: {*/}
              {/*        opacity: 0,*/}
              {/*        y: -20,*/}
              {/*      },*/}
              
              {/*      visible: {*/}
              {/*        opacity: 1,*/}
              {/*        y: 0,*/}
              {/*      },*/}
              {/*    }}*/}
              {/*    initial="hidden"*/}
              {/*    whileInView="visible"*/}
              {/*    transition={{ duration: 1, delay: 0.1 }}*/}
              {/*    viewport={{ once: true }}*/}
              {/*    className="animate_top"*/}
              {/*  >*/}
              {/*    <h4 className="mb-9 text-itemtitle2 font-medium text-black dark:text-white">*/}
              {/*      Quick Links*/}
              {/*    </h4>*/}
              
              {/*    <ul>*/}
              {/*      <li>*/}
              {/*        <a*/}
              {/*          href="#"*/}
              {/*          className="mb-3 inline-block hover:text-primary"*/}
              {/*        >*/}
              {/*          Home*/}
              {/*        </a>*/}
              {/*      </li>*/}
              {/*      <li>*/}
              {/*        <a*/}
              {/*          href="#"*/}
              {/*          className="mb-3 inline-block hover:text-primary"*/}
              {/*        >*/}
              {/*          Product*/}
              {/*        </a>*/}
              {/*      </li>*/}
              {/*      <li>*/}
              {/*        <a*/}
              {/*          href="#"*/}
              {/*          className="mb-3 inline-block hover:text-primary"*/}
              {/*        >*/}
              {/*          Careers*/}
              {/*        </a>*/}
              {/*      </li>*/}
              {/*      <li>*/}
              {/*        <a*/}
              {/*          href="#"*/}
              {/*          className="mb-3 inline-block hover:text-primary"*/}
              {/*        >*/}
              {/*          Pricing*/}
              {/*        </a>*/}
              {/*      </li>*/}
              {/*    </ul>*/}
              {/*  </motion.div>*/}
              
              {/*  <motion.div*/}
              {/*    variants={{*/}
              {/*      hidden: {*/}
              {/*        opacity: 0,*/}
              {/*        y: -20,*/}
              {/*      },*/}
              
              {/*      visible: {*/}
              {/*        opacity: 1,*/}
              {/*        y: 0,*/}
              {/*      },*/}
              {/*    }}*/}
              {/*    initial="hidden"*/}
              {/*    whileInView="visible"*/}
              {/*    transition={{ duration: 1, delay: 0.1 }}*/}
              {/*    viewport={{ once: true }}*/}
              {/*    className="animate_top"*/}
              {/*  >*/}
              {/*    <h4 className="mb-9 text-itemtitle2 font-medium text-black dark:text-white">*/}
              {/*      Support*/}
              {/*    </h4>*/}
              
              {/*    <ul>*/}
              {/*      <li>*/}
              {/*        <a*/}
              {/*          href="#"*/}
              {/*          className="mb-3 inline-block hover:text-primary"*/}
              {/*        >*/}
              {/*          Company*/}
              {/*        </a>*/}
              {/*      </li>*/}
              {/*      <li>*/}
              {/*        <a*/}
              {/*          href="#"*/}
              {/*          className="mb-3 inline-block hover:text-primary"*/}
              {/*        >*/}
              {/*          Press media*/}
              {/*        </a>*/}
              {/*      </li>*/}
              {/*      <li>*/}
              {/*        <a*/}
              {/*          href="#"*/}
              {/*          className="mb-3 inline-block hover:text-primary"*/}
              {/*        >*/}
              {/*          Our Blog*/}
              {/*        </a>*/}
              {/*      </li>*/}
              {/*      <li>*/}
              {/*        <a*/}
              {/*          href="#"*/}
              {/*          className="mb-3 inline-block hover:text-primary"*/}
              {/*        >*/}
              {/*          Contact Us*/}
              {/*        </a>*/}
              {/*      </li>*/}
              {/*    </ul>*/}
              {/*  </motion.div>*/}
              
              {/*  <motion.div*/}
              {/*    variants={{*/}
              {/*      hidden: {*/}
              {/*        opacity: 0,*/}
              {/*        y: -20,*/}
              {/*      },*/}
              
              {/*      visible: {*/}
              {/*        opacity: 1,*/}
              {/*        y: 0,*/}
              {/*      },*/}
              {/*    }}*/}
              {/*    initial="hidden"*/}
              {/*    whileInView="visible"*/}
              {/*    transition={{ duration: 1, delay: 0.1 }}*/}
              {/*    viewport={{ once: true }}*/}
              {/*    className="animate_top"*/}
              {/*  >*/}
              {/*    <h4 className="mb-9 text-itemtitle2 font-medium text-black dark:text-white">*/}
              {/*      Newsletter*/}
              {/*    </h4>*/}
              {/*    <p className="mb-4 w-[90%]">*/}
              {/*      Subscribe to receive future updates*/}
              {/*    </p>*/}
              
              {/*    <form action="#">*/}
              {/*      <div className="relative">*/}
              {/*        <input*/}
              {/*          type="text"*/}
              {/*          placeholder="Email address"*/}
              {/*          className="w-full rounded-full border border-stroke px-6 py-3 shadow-solid-11 focus:border-primary focus:outline-hidden dark:border-strokedark dark:bg-black dark:shadow-none dark:focus:border-primary"*/}
              {/*        />*/}
              
              {/*        <button*/}
              {/*          aria-label="signup to newsletter"*/}
              {/*          className="absolute right-0 p-4"*/}
              {/*        >*/}
              {/*          <svg*/}
              {/*            className="fill-[#757693] hover:fill-primary dark:fill-white"*/}
              {/*            width="20"*/}
              {/*            height="20"*/}
              {/*            viewBox="0 0 20 20"*/}
              {/*            fill="none"*/}
              {/*            xmlns="http://www.w3.org/2000/svg"*/}
              {/*          >*/}
              {/*            <g clipPath="url(#clip0_48_1487)">*/}
              {/*              <path*/}
              {/*                d="M3.1175 1.17318L18.5025 9.63484C18.5678 9.67081 18.6223 9.72365 18.6602 9.78786C18.6982 9.85206 18.7182 9.92527 18.7182 9.99984C18.7182 10.0744 18.6982 10.1476 18.6602 10.2118C18.6223 10.276 18.5678 10.3289 18.5025 10.3648L3.1175 18.8265C3.05406 18.8614 2.98262 18.8792 2.91023 18.8781C2.83783 18.8769 2.76698 18.857 2.70465 18.8201C2.64232 18.7833 2.59066 18.7308 2.55478 18.6679C2.51889 18.6051 2.50001 18.5339 2.5 18.4615V1.53818C2.50001 1.46577 2.51889 1.39462 2.55478 1.33174C2.59066 1.26885 2.64232 1.2164 2.70465 1.17956C2.76698 1.14272 2.83783 1.12275 2.91023 1.12163C2.98262 1.12051 3.05406 1.13828 3.1175 1.17318ZM4.16667 10.8332V16.3473L15.7083 9.99984L4.16667 3.65234V9.16651H8.33333V10.8332H4.16667Z"*/}
              {/*                fill=""*/}
              {/*              />*/}
              {/*            </g>*/}
              {/*            <defs>*/}
              {/*              <clipPath id="clip0_48_1487">*/}
              {/*                <rect width="20" height="20" fill="white" />*/}
              {/*              </clipPath>*/}
              {/*            </defs>*/}
              {/*          </svg>*/}
              {/*        </button>*/}
              {/*      </div>*/}
              {/*    </form>*/}
              {/*  </motion.div>*/}
              {/*</div>*/}
            </div>
          </div>
          {/* <!-- Footer Top --> */}

          {/* <!-- Footer Bottom --> */}
          <div className="flex flex-col flex-wrap items-center justify-center gap-5 border-t border-stroke py-7 dark:border-strokedark lg:flex-row lg:justify-between lg:gap-0">
            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  y: -20,
                },

                visible: {
                  opacity: 1,
                  y: 0,
                },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 1, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_top"
            >
              <ul className="flex items-center gap-8">
                <li>
                  <a href="#" className="hover:text-primary">
                    English
                  </a>
                </li>
                {/*<li>*/}
                {/*  <a href="#" className="hover:text-primary">*/}
                {/*    Privacy Policy*/}
                {/*  </a>*/}
                {/*</li>*/}
                {/*<li>*/}
                {/*  <a href="#" className="hover:text-primary">*/}
                {/*    Support*/}
                {/*  </a>*/}
                {/*</li>*/}
              </ul>
            </motion.div>

            <motion.div
                variants={{
                  hidden: {
                    opacity: 0,
                    y: -20,
                  },

                  visible: {
                    opacity: 1,
                    y: 0,
                  },
                }}
                initial="hidden"
                whileInView="visible"
                transition={{duration: 1, delay: 0.1}}
                viewport={{once: true}}
                className="animate_top"
            >
              <p>
                &copy; 2025 DataChain Collection.
              </p>
              <p>
                Building ethical data economies across health (NutriDAO), finance, and consumer ecosystems.
              </p>
            </motion.div>

            <motion.div
                variants={{
                  hidden: {
                    opacity: 0,
                  y: -20,
                },

                visible: {
                  opacity: 1,
                  y: 0,
                },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 1, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_top"
            >
              <ul className="flex items-center gap-5">
                <li>
                  <a href="#" aria-label="social icon">
                    <svg
                      className="fill-[#D1D8E0] transition-all duration-300 hover:fill-primary"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clipPath="url(#clip0_48_1502)">
                        <path
                          d="M22.162 5.65593C21.3985 5.99362 20.589 6.2154 19.76 6.31393C20.6337 5.79136 21.2877 4.96894 21.6 3.99993C20.78 4.48793 19.881 4.82993 18.944 5.01493C18.3146 4.34151 17.4803 3.89489 16.5709 3.74451C15.6615 3.59413 14.7279 3.74842 13.9153 4.18338C13.1026 4.61834 12.4564 5.30961 12.0771 6.14972C11.6978 6.98983 11.6067 7.93171 11.818 8.82893C10.1551 8.74558 8.52832 8.31345 7.04328 7.56059C5.55823 6.80773 4.24812 5.75098 3.19799 4.45893C2.82628 5.09738 2.63095 5.82315 2.63199 6.56193C2.63199 8.01193 3.36999 9.29293 4.49199 10.0429C3.828 10.022 3.17862 9.84271 2.59799 9.51993V9.57193C2.59819 10.5376 2.93236 11.4735 3.54384 12.221C4.15532 12.9684 5.00647 13.4814 5.95299 13.6729C5.33661 13.84 4.6903 13.8646 4.06299 13.7449C4.32986 14.5762 4.85 15.3031 5.55058 15.824C6.25117 16.345 7.09712 16.6337 7.96999 16.6499C7.10247 17.3313 6.10917 17.8349 5.04687 18.1321C3.98458 18.4293 2.87412 18.5142 1.77899 18.3819C3.69069 19.6114 5.91609 20.2641 8.18899 20.2619C15.882 20.2619 20.089 13.8889 20.089 8.36193C20.089 8.18193 20.084 7.99993 20.076 7.82193C20.8949 7.2301 21.6016 6.49695 22.163 5.65693L22.162 5.65593Z"
                          fill=""
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_48_1502">
                          <rect width="24" height="24" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </a>
                </li>
              </ul>
            </motion.div>
          </div>
          {/* <!-- Footer Bottom --> */}
        </div>
      </footer>
    </>
  );
};

export default Footer;
