import { use } from 'react';
import getContentfulData from '@/lib/getDataEntries';
import RowCards, { IRowCards } from '../components/RowCards/RowCards';
import getImageDataFromBlogPost from '../utils/getImageSrc';
import { IRowCard } from '../components/RowCards/Card';

interface BlogCardsProps {
  isFeatured?: boolean;
  cta?: string;
  maxCards: number;
  sectionTitle?: string;
  orientation?: 'horizontal' | 'vertical';
}

const BlogCards: React.FC<BlogCardsProps> = ({
  isFeatured = false,
  cta,
  maxCards,
  sectionTitle,
  orientation = 'vertical'
}) => {
  const posts = use(getContentfulData('blogPost', 1, maxCards)) || []; //contentType, page, itemsPerPage
  const postCards = posts.map((postRaw: any, idx): IRowCard => {
    const post = postRaw.fields;
    const date = new Date(post.date).toLocaleString('default', {
      month: 'long',
      day: 'numeric',
      year: 'numeric'
    });
    const imageData = getImageDataFromBlogPost(postRaw);

    return {
      id: idx.toString(),
      title: post.title,
      subtitle: date,
      description: post.body.content[0].content[0].value,
      link: `/blog/${post.slug}`,
      image: { ...imageData, height: 240 }
    };
  });

  const Posts: IRowCards = {
    title: sectionTitle,
    linkLabel: 'Read post',
    orientation: orientation,
    isFeatured: isFeatured,
    cards: postCards,
    cta: cta
  };

  return (
    <RowCards {...Posts} imageOverflow={'hidden'} isFeatured={isFeatured} />
  );
};

export default BlogCards;
