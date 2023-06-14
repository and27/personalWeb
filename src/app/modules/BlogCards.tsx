import client from '@/lib/contentful';
import { use } from 'react';
import RowCards, { IRowCard, IRowCards } from '../components/RowCards/RowCards';
import getImageDataFromBlogPost from '../utils/getImageSrc';

interface IPost {
  title: string;
  author: string;
  date: string;
  body: any;
  tags: any[];
  slug: string;
  image: any;
}

const BlogCards = () => {
  async function getData() {
    const entries = await client.getEntries({
      content_type: 'blogPost'
    });
    return entries.items;
  }

  const posts = use(getData()) as any;

  const postCards = posts.map((postRaw: any): IPost => {
    const post = postRaw.fields;
    const date = new Date(post.date).toLocaleString('default', {
      month: 'long',
      day: 'numeric',
      year: 'numeric'
    });
    const { src, alt } = getImageDataFromBlogPost(postRaw);
    const image = { src, alt };

    return {
      title: post.title,
      author: post.author,
      date: date,
      body: post.body,
      tags: post.tags,
      slug: post.slug,
      image: image
    };
  });

  const finalPostCards = postCards.map((post: IPost): IRowCard => {
    return {
      title: post.title,
      description: post.body.content[0].content[0].value,
      link: `/blog/${post.slug}`,
      subtitle: post.date,
      image: post.image
    };
  });

  const Posts: IRowCards = {
    title: 'Latest posts',
    cards: finalPostCards,
    linkLabel: 'Read post',
    orientation: 'horizontal',
    isClickable: true
  };

  return <RowCards {...Posts} />;
};

export default BlogCards;
