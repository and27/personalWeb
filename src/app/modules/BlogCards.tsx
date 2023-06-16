import { use } from 'react';
import getContentfulData from '@/lib/getDataEntries';
import RowCards, { IRowCard, IRowCards } from '../components/RowCards/RowCards';
import getImageDataFromBlogPost from '../utils/getImageSrc';

interface BlogCardsProps {
  isFeatured?: boolean;
  cta?: string;
  maxCards: number;
}

const BlogCards: React.FC<BlogCardsProps> = ({ isFeatured, cta, maxCards }) => {
  const posts = use(getContentfulData('blogPost', 1, maxCards)); //contentType, page, itemsPerPage
  const postCards = posts.map((postRaw: any): IRowCard => {
    const post = postRaw.fields;
    const date = new Date(post.date).toLocaleString('default', {
      month: 'long',
      day: 'numeric',
      year: 'numeric'
    });
    const { src, alt } = getImageDataFromBlogPost(postRaw);
    const imageData = { src, alt };

    return {
      title: post.title,
      subtitle: date,
      description: post.body.content[0].content[0].value,
      link: `/blog/${post.slug}`,
      image: imageData
    };
  });

  const Posts: IRowCards = {
    title: 'Latest posts',
    linkLabel: 'Read post',
    orientation: 'vertical',
    isFeatured: isFeatured,
    cards: postCards,
    cta: cta
  };

  return <RowCards {...Posts} />;
};

export default BlogCards;
