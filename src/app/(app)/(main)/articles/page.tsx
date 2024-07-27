import React from 'react'
import HeroSection from '@/components/Atoms/HeroSection'
import { getArticles } from '@/providers/articles'
import ArticleCard from '@/components/Molecules/Articles/ArticleCard'
import payload from '@/libs/payload'
import Pagination from '@/components/Atoms/Pagination'

interface AboutMeProps {
  title: string
  sections: [
    {
      title: string
      dscr: string
    },
  ]
}

const getData = async (page: string) => {
  const pageData = await payload.find({
    collection: 'pages',
    depth: 2,
    where: { name: { equals: 'articles' } },
    showHiddenFields: false,
  })

  const articles = await payload.find({ collection: 'articles', page: page ? Number(page) : 1 })
  return {
    heroSection: pageData?.docs[0]?.layout?.find((item) => item.blockType === 'herosection'),
    articles: articles.docs,
    pagination: {
      totalPages: articles.totalPages,
      currentPage: articles.page,
      hasNextPage: articles.hasNextPage,
      hasPrevPage: articles.hasPrevPage,
      prevPage: articles.prevPage,
      nextPage: articles.nextPage,
    },
  }
}

export default async function Articles(props) {
  const { heroSection, articles, pagination } = await getData(props.searchParams.page)

  console.log(pagination)
  return (
    <section className="flex flex-col">
      <HeroSection title={heroSection?.title} subtitle={heroSection?.subtitle} />
      <div className="lg:max-w-[1024px] mx-auto w-full grid md:grid-cols-2 gap-5">
        {articles.map((article) => (
          <ArticleCard key={article.id} {...article} />
        ))}
      </div>
      <Pagination {...pagination} />
    </section>
  )
}
