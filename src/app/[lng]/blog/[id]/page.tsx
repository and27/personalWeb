import { use } from 'react';
import Image from 'next/image';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import styles from './blog.module.scss';
import globalStyles from '../../page.module.scss';
import client from '../../../../lib/contentful';
import getImageDataFromBlogPost from '../../utils/getImageSrc';
import BlogCards from '../../modules/BlogCards';

function renderRichText(richTextField: any) {
  return documentToReactComponents(richTextField);
}

async function getData(id: any) {
  const response = await client.getEntries({
    content_type: 'blogPost',
    'fields.slug': id
  });
  return response.items[0];
}

function BlogPost({ params }: any) {
  const { id } = params;

  const blogPost = use(getData(id)) as any;
  const richTextField = blogPost?.fields.body;
  const image = getImageDataFromBlogPost(blogPost);
  const imgHeight = 200;

  const getPostDate = () => {
    const dateRaw = new Date(blogPost.fields.date);
    const month = dateRaw.toLocaleString('default', { month: 'long' });
    const day = dateRaw.getDate();
    const year = dateRaw.getFullYear();
    const date = `${month} ${day}, ${year}`;
    return date;
  };

  return (
    <div className={styles.blog}>
      <div className={globalStyles.container}>
        <p className={styles.blog__subtitle}>{getPostDate()}</p>
        <h1 className={styles.blog__title}>{blogPost?.fields.title}</h1>
        <Image
          src={image.src}
          alt={image.alt}
          className={styles.blog__image}
          width={image.width}
          height={imgHeight}
          loading="eager"
          sizes="(max-width: 768px) 100vw,
                  (max-width: 1200px) 50vw,
                  33vw"
        />
        <ul className={styles.blog__tags}>
          {blogPost?.fields.tags.map((tag: any, idx: number) => (
            <li key={idx}>{tag.fields.name}</li>
          ))}
        </ul>
        {renderRichText(richTextField)}
        <div className={styles.blogCardsContainer}>
          <BlogCards
            maxCards={3}
            sectionTitle={'Related Posts'}
            orientation="horizontal"
          />
        </div>
      </div>
    </div>
  );
}

export default BlogPost;
