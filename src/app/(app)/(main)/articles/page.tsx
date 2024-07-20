import React from 'react';
import HeroSection from '@/components/Atoms/HeroSection';
import { getArticles } from '@/providers/articles';
import ArticleCard from '@/components/Molecules/Articles/ArticleCard';

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
  return getArticles();
};

export default async function Articles() {
  const { heroSection, articles } = await getData();
  return (
    <section className="flex flex-col">
      <HeroSection title={heroSection.title} subtitle={heroSection.subtitle} />
      <div className="lg:max-w-[1024px] mx-auto w-full grid md:grid-cols-2 gap-5">
        {articles.map((article) => (
          <ArticleCard key={article.id} {...article} />
        ))}
      </div>
    </section>
  );
}
