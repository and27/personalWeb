import getPosts from '@/lib/getDataEntries';
import PostGrid, { PostCardData } from '../components/PostGrid/PostGrid';
import getImageDataFromBlogPost from '../../../utils/getImageSrc';
import globalStyles from '../page.module.scss';

export interface BlogCardsProps {
  cta?: string;
  maxCards: number;
  sectionTitle?: string;
  locale: string;
}

const BlogCards = async ({ cta, maxCards, sectionTitle, locale }: BlogCardsProps) => {
  const page = 1;
  const postParams = {
    page,
    itemsPerPage: maxCards,
    locale: locale === 'en' ? 'en-US' : 'es'
  };

  let posts: any[] = [];
  try {
    posts = (await getPosts(postParams)) || [];
  } catch {
    // Contentful unavailable — render the page without blog cards.
  }

  if (posts.length === 0) return null;

  const postCards: PostCardData[] = posts.map((postRaw: any, idx): PostCardData => {
    const post = postRaw.fields;
    const date = new Date(post.date).toLocaleString(locale === 'en' ? 'en-US' : 'es-ES', {
      month: 'long',
      day: 'numeric',
      year: 'numeric'
    });
    const imageData = getImageDataFromBlogPost(postRaw);

    return {
      id: idx.toString(),
      title: post.title,
      description: post.body?.content[0].content[0].value,
      date,
      link: `/blog/${post.slug}`,
      image: { src: imageData.src as string, alt: imageData.alt }
    };
  });

  return (
    <section className={globalStyles.blog}>
      <PostGrid title={sectionTitle} posts={postCards} cta={cta} />
    </section>
  );
};

export default BlogCards;
