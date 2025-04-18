import { use } from 'react';
import Image from 'next/image';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import styles from './blog.module.scss';
import globalStyles from '../../page.module.scss';
import getImageDataFromBlogPost from '../../../../utils/getImageSrc';
import RelatedPostCards from '../../modules/RelatedPostCards';
import { getBlogPostBySlug } from '@/lib/getDataEntries';

function renderRichText(richTextField: any) {
  return documentToReactComponents(richTextField);
}

function BlogPost({ params }: any) {
  const { id: slug, lng } = params;
  const lang = lng === 'en' ? 'en-US' : 'es';

  const blogPost = use(getBlogPostBySlug(slug, lang)) as any;
  const richTextField = blogPost?.fields.body;
  const image = getImageDataFromBlogPost(blogPost);
  const imgHeight = 200;

  const getPostDate = () => {
    const dateRaw = new Date(blogPost.fields.date);
    const month = dateRaw.toLocaleString('en-US', { month: 'long' });
    const day = dateRaw.getDate();
    const year = dateRaw.getFullYear();
    const date = `${month} ${day}, ${year}`;
    return date;
  };

  return (
    <div className={styles.blog}>
      <div className={globalStyles.container}>
        <div className={styles.blogArticle}>
          <h1 className={styles.blogTitle}>{blogPost?.fields.title}</h1>
          <Image
            src={image.src}
            alt={image.alt}
            className={styles.blogImage}
            width={image.width}
            height={imgHeight}
            loading="eager"
            sizes="(max-width: 768px) 100vw,
            (max-width: 1200px) 50vw,
            33vw"
          />
          <p className={styles.blogDate}>{getPostDate()}</p>
          <ul className={styles.blogTags}>
            {blogPost?.fields.tags.map((tag: any, idx: number) => (
              <li key={idx}>{tag.fields.name}</li>
            ))}
          </ul>
          {renderRichText(richTextField)}
        </div>
        <div className={styles.blogCardsContainer}>
          <RelatedPostCards sectionTitle={'Related Posts'} currentPost={slug} lang={lang} />
        </div>
      </div>
    </div>
  );
}

export default BlogPost;
