import React from 'react';
import { getAbout } from '@/providers/about';

interface AboutMeProps {
  title: string;
  sections: [
    {
      title: string;
      dscr: string;
    }
  ];
}

const getData = async () => {
  return getAbout();
};

export default async function AboutMe() {
  const { title, sections } = await getData();
  return (
    <section className="flex flex-col">
      <span className="text-48-bold lg:text-80-bold text-white pb-[60px]">
        {title}
      </span>
      <div className="flex flex-col space-y-8">
        {sections.map((section, index) => (
          <div key={index} className="flex flex-col space-y-2">
            <span className="text-16-semi-bold text-medium-gray">
              {section.title}
            </span>
            <span className="text-15-regular lg:text-18-regular text-main-dark-gray !leading-[158%]">
              {section.dscr}
            </span>
          </div>
        ))}
      </div>
      <p className="text-15-regular lg:text-18-regular text-main-dark-gray !leading-[158%] pt-[60px]">
        Feel free to reach out via{' '}
        <a className="text-white underline" href="mailto:webxmdev@gmail.com">
          e-mail
        </a>
        , or follow me on{' '}
        <a
          className="text-white underline"
          href="https://x.com/xmdcode"
          target="_blank">
          Twitter
        </a>
        . Want to see where I’ve worked? Check out my{' '}
        <a
          className="text-white underline"
          href="https://your-website.com/resume.pdf"
          target="_blank">
          Resume
        </a>
        , or{' '}
        <a
          className="text-white underline"
          href="https://www.linkedin.com/in/xristos-marios-dimopoulos-a876937a/"
          target="_blank">
          Connect with me on LinkedIn
        </a>
        .
      </p>
    </section>
  );
}
// export async
