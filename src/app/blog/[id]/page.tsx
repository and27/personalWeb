import { use } from 'react'
import Image from 'next/image';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import styles from './blog.module.css'
import globalStyles from '../../page.module.css'
import client from '../../../lib/contentful'

function renderRichText(richTextField:any) {
  return documentToReactComponents(richTextField);
}

async function getData(id:any) {
  const response = await client.getEntries({
    content_type: 'blogPost',
    'fields.slug': id
  });
  return response.items[0];
}

function BlogPost({params}:any) {
  
  const { id } = params

  const blogPost = use(getData(id)) as any
  const richTextField = blogPost.fields.body;

  return (
    <div className={styles.blog}>
      <div className={globalStyles.container}>
        <h1 className={styles.blog__title}>{blogPost.fields.title}</h1>
        <p className={styles.blog__subtitle}>Lorem ipsum dolor sit amet co nsectetur adipisicing elit. Quisquam, quod.</p>
          {/* <ul className={styles.blog__tags}>
          {post.fields.tags.map((tag:any) => (<li>
              {tag}
          </li>))}
          </ul> */}
        <Image
          src="/vercel.svg"
          alt="Picture of the author"
          className={styles.blog__image}
          width={200}
          height={48}
          sizes="(max-width: 768px) 100vw,
                  (max-width: 1200px) 50vw,
                  33vw"
        />
            {renderRichText(richTextField)} 
      </div>
    </div>
  );
}

export default BlogPost;