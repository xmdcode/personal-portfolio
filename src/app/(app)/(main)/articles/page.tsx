import React from 'react'
import payload from '@/lib/payload'
import HeroSection from '@/components/Atoms/HeroSection'
import ArticleCard from '@/components/Molecules/Articles/ArticleCard'
import Pagination from '@/components/Atoms/Pagination'

const getLoaderData = async (page: string | string[]) => {
  const pageData = await payload.find({
    collection: 'pages',
    depth: 2,
    where: { name: { equals: 'articles' } },
    showHiddenFields: false,
  })

  const articles = await payload.find({
    collection: 'articles',
    page: page ? Number(page) : 1,
    limit: 4,
  })

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
      pagingCounter: articles.pagingCounter,
      totalDocs: articles.totalDocs,
    },
  }
}

export default async function Articles({ params }: { params: Promise<{ page: string }> }) {
  const page = (await params).page
  const { heroSection, articles, pagination } = await getLoaderData(page ?? '1')

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
