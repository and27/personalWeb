import { use } from 'react';
import getPosts from '@/lib/getDataEntries';
import RowCards, { IRowCards } from '../components/Cards/RowCards/RowCards';
import getImageDataFromBlogPost from '../utils/getImageSrc';
import { IRowCard } from '../components/Cards/VerticalCard/Card';
import globalStyles from '../page.module.scss';

export interface BlogCardsProps {
  isFeatured?: boolean;
  cta?: string;
  maxCards: number;
  sectionTitle?: string;
  orientation?: 'horizontal' | 'vertical';
  locale: string;
}

const BlogCards: React.FC<BlogCardsProps> = ({
  isFeatured = false,
  cta,
  maxCards,
  sectionTitle,
  orientation = 'vertical',
  locale
}) => {
  const page = 1;
  const postParams = {
    page,
    itemsPerPage: maxCards,
    locale: locale === 'en' ? 'en-US' : 'es'
  };

  const posts = use(getPosts(postParams)) || [];
  console.log(postParams);

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
      // subtitle: date,
      description: post.body?.content[0].content[0].value,
      link: `/blog/${post.slug}`,
      image: {
        ...imageData,
        height: 240
      }
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
    <section className={globalStyles.blog}>
      <RowCards {...Posts} imageOverflow={'hidden'} isFeatured={isFeatured} />
    </section>
  );
};

export default BlogCards;
