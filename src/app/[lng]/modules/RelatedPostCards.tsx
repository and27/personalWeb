import { use } from 'react';
import { getRelatedPosts } from '@/lib/getDataEntries';
import RowCards, { IRowCards } from '../components/RowCards/RowCards';
import getImageDataFromBlogPost from '../utils/getImageSrc';
import { IRowCard } from '../components/RowCards/Card';

interface RelatedPostsProps {
  maxCards?: number;
  sectionTitle?: string;
  currentPost: any;
}

const RelatedPostCards: React.FC<RelatedPostsProps> = ({ maxCards = 3, sectionTitle, currentPost }) => {
  const posts = use(getRelatedPosts({ maxItems: maxCards, currentPost: currentPost })) || [];

  const postCards = posts.map((postRaw: any, idx): IRowCard => {
    const post = postRaw.fields;
    const date = new Date(post.date).toLocaleString('en-US', {
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
    orientation: 'horizontal',
    isFeatured: false,
    cards: postCards
  };

  return <RowCards {...Posts} imageOverflow={'hidden'} />;
};

export default RelatedPostCards;
