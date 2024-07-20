export const getArticles = () => {
  return {
    heroSection: {
      title: 'Articles',
      subtitle: 'My thoughts, insights, and reflections.',
    },
    articles: [
      {
        title: 'Ultimate guide to the App Router in Next.js 13',
        date: '17th Jul 2023',
        id: 1,
        articleimg: {
          src: '/images/article.jpg',
          alt: 'Ultimate guide to the App Router in Next.js 13',
        },
      },
      {
        title: 'Ultimate guide to the App Router in Next.js 13',
        date: '17th Jul 2023',
        id: 1,
        articleimg: {
          src: '/images/article.jpg',
          alt: 'Ultimate guide to the App Router in Next.js 13',
        },
      },
      {
        title: 'Ultimate guide to the App Router in Next.js 13',
        date: '17th Jul 2023',
        id: 1,
        articleimg: {
          src: '/images/article.jpg',
          alt: 'Ultimate guide to the App Router in Next.js 13',
        },
      },
      {
        title: 'Ultimate guide to the App Router in Next.js 13',
        date: '17th Jul 2023',
        id: 1,
        articleimg: {
          src: '/images/article.jpg',
          alt: 'Ultimate guide to the App Router in Next.js 13',
        },
      },
    ],
  };
};

export const getArticle = async (id: string) => {
  const item = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const itemjson = await item.json();
  const pic = await fetch(`https://jsonplaceholder.typicode.com/photos/${id}`);
  const picjson = await pic.json();

  return {
    title: itemjson.title,
    subtitle: itemjson.title,
    dscr: itemjson.body,
    img: { src: picjson.url, alt: picjson.alt },
  };
};
