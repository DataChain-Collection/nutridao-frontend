"use client"

import { useState, useEffect, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import BootstrapTemplate from '../../../markdown/docs/nutridao-roadmap.mdx';
import ContactForm from '../../../markdown/docs/contact-form.mdx';
import StyleGuide from '../../../markdown/docs/style-guide.mdx';
import TailwindComponent from '../../../markdown/docs/tailwind-component.mdx';
import About from '../../../markdown/docs/about.mdx';

const docs = [
  { title: "Roadmap", Component: BootstrapTemplate, slug: "nutridao-roadmap" },
  { title: "Contact Form", Component: ContactForm, slug: "contact-form" },
  { title: "Style Guide", Component: StyleGuide, slug: "style-guide" },
  { title: "Tailwind Component", Component: TailwindComponent, slug: "tailwind-component" },
  { title: "About Us", Component: About, slug: "about" },
];

function DocsPageContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [activeIdx, setActiveIdx] = useState(0);

  // Get the active document from URL params
  useEffect(() => {
    const docParam = searchParams.get('doc');
    if (docParam) {
      const idx = docs.findIndex(doc => doc.slug === docParam);
      if (idx !== -1) {
        setActiveIdx(idx);
      }
    }
  }, [searchParams]);

  const handleDocChange = (idx: number) => {
    setActiveIdx(idx);
    const slug = docs[idx].slug;
    router.push(`/docs?doc=${slug}`);
  };

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
                            onClick={() => handleDocChange(idx)}
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
              <div className="blog-details blog-details-docs docs-mdx shadow-three dark:bg-gray-dark rounded-xs bg-white px-8 py-11 sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]">
                <h2 className="text-2xl font-semibold mb-4">{docs[activeIdx].title}</h2>
                <ActiveDoc />
              </div>
            </div>
          </div>
        </div>
      </section>
  );
}

export default function DocsPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <DocsPageContent />
    </Suspense>
  );
}