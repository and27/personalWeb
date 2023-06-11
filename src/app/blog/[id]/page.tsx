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

const getImageDataFromBlogPost = (blogPost:any) => {
  const img = blogPost?.fields.image.fields.file;
  const imgWidth = img.details.image.width;
  const imgSrc = `https:${img.url}`;
  console.log(img);
  const imgDescription = img.description;

  return {imgWidth, imgSrc, imgDescription}

}

function BlogPost({params}:any) {
  
  const { id } = params

  const blogPost = use(getData(id)) as any
  const richTextField = blogPost?.fields.body;
  const {imgWidth, imgSrc, imgDescription} = getImageDataFromBlogPost(blogPost);
  const imgHeight = 200;
  
  const getPostDate = ()=>{
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
          src={imgSrc}
          alt={imgDescription}
          className={styles.blog__image}
          width={imgWidth}
          height={imgHeight}
          sizes="(max-width: 768px) 100vw,
                  (max-width: 1200px) 50vw,
                  33vw"
        />
          <ul className={styles.blog__tags}>
            {blogPost?.fields.tags.map((tag:any) => (<li>
                  {tag.fields.name}
              </li>))}
          </ul>
            {renderRichText(richTextField)} 
      </div>
    </div>
  );
}

export default BlogPost;