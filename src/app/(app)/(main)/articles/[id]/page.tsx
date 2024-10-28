import React from 'react'
import { InferGetServerSidePropsType } from 'next'
import { getServerSideProps } from 'next/dist/build/templates/pages'
import { getArticle } from '@/providers/articles'
import HeroSection from '@/components/Atoms/HeroSection'
import Image from 'next/image'

const getData = (id: string) => {
  return getArticle(id)
}

const SingleArticle: React.FC<InferGetServerSidePropsType<typeof getServerSideProps>> = async ({
  params,
}) => {
  const id = (await params).id
  const articleData = await getData(id)

  return (
    <section className="text-white lg:max-w-[1024px] mx-auto max-w-full flex flex-col">
      <HeroSection
        title={articleData.title}
        subtitle={articleData.subtitle}
        wrapperClassname="order-1"
      />
      <div className="w-full h-[504px] relative rounded-[22px] border-[#383737] overflow-hidden order-2">
        <Image
          fill={true}
          className="object-cover"
          src={articleData.img.src}
          alt={articleData.img.alt}
        />
      </div>
      <div
        className="max-w-[823px] w-full mx-auto text-white text-15-regular lg:text-18-regular mt-4 lg:my-[60px] order-4 lg:order-3"
        dangerouslySetInnerHTML={{ __html: articleData.dscr }}
      />
      <span className="order-3 lg:order-4 mt-[27px] lg:mt-0 text-main-dark-gray lg:text-14-regular">
        Last updated: {new Date().toLocaleDateString()}
      </span>
    </section>
  )
}

export default SingleArticle
