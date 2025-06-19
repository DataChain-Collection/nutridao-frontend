"use client"

import { useState } from "react";
import BootstrapTemplate from '../../../markdown/docs/bootstrap-template.mdx';
import ContactForm from '../../../markdown/docs/contact-form.mdx';
import StyleGuide from '../../../markdown/docs/style-guide.mdx';
import TailwindComponent from '../../../markdown/docs/tailwind-component.mdx';
import TailwindTemplate from '../../../markdown/docs/tailwind-template.mdx';

const docs = [
  { title: "Bootstrap Template", Component: BootstrapTemplate },
  { title: "Contact Form", Component: ContactForm },
  { title: "Style Guide", Component: StyleGuide },
  { title: "Tailwind Component", Component: TailwindComponent },
  { title: "Tailwind Template", Component: TailwindTemplate },
];

export default function DocsPage() {
  const [activeIdx, setActiveIdx] = useState(0);
  const ActiveDoc = docs[activeIdx].Component;

  return (
    <section className="pb-16 pt-24 md:pb-20 md:pt-28 lg:pb-24 lg:pt-32">
      <div className="container mx-auto">
        <div className="-mx-4 flex flex-wrap">
          {/* Sidebar */}
          <div className="w-full px-4 lg:w-1/4 mb-8 lg:mb-0">
            <div className="sticky top-[74px] rounded-lg border border-white p-4 shadow-solid-4 transition-all dark:border-strokedark dark:bg-blacksection">
              <ul className="space-y-2">
                {docs.map((doc, idx) => (
                  <li key={doc.title}>
                    <button
                      className={`w-full text-left px-2 py-1 rounded transition-colors ${activeIdx === idx ? 'bg-primary text-white' : 'hover:bg-primary/10'}`}
                      onClick={() => setActiveIdx(idx)}
                    >
                      {doc.title}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Main Content */}
          <div className="w-full px-4 lg:w-3/4">
            <div className="blog-details blog-details-docs shadow-three dark:bg-gray-dark rounded-xs bg-white px-8 py-11 sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]">
              <h2 className="text-2xl font-semibold mb-4">{docs[activeIdx].title}</h2>
              <ActiveDoc />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}