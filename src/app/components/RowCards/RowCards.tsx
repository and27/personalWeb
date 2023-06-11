import styles from './RowCards.module.css'
import globalStyles from '../../page.module.css'

interface IRowCard {
    title: string
    description: string
    link: string,
    linkLabel?: string,
}

interface IRowCards {
    title: string
    cards: IRowCard[],
    linkLabel?: string,
}

const ProjectCards = [
  {
    title: "Frontend Development",
    description: "I build responsive websites and web applications using React, Next.js, TypeScript, JavaScript, HTML, CSS, and SASS.",
    link: ""
  },
  {
    title: "Backend Development",
    description: "I build REST APIs using Node.js, Express, MongoDB, and Firebase.",
    link: ""
  },
  {
    title: "UI/UX Design",
    description: "I design user interfaces and user experiences using Figma, Adobe XD, and Adobe Photoshop.",
    link: ""
  }
]

const PostCards = [
  {
    title: "How to create a Next.js app with TypeScript",
    description: "Learn how to create a Next.js app with TypeScript",
    link: ""
  },
  {
    title: "How to create a React app with TypeScript",
    description: "Learn how to create a React app with TypeScript",
    link: ""
  },
  {
    title: "How to create a React app with JavaScript",
    description: "Learn how to create a React app with JavaScript",
    link: ""
  }
]

export const Projects:IRowCards = {
    title: "What I do?",
    cards: ProjectCards,

}

export const Posts:IRowCards = {
  title: "Blog",
  cards: PostCards,
  linkLabel: "Read post", 
}

const Card:React.FC<IRowCard> = ({title, description, link, linkLabel})=>{
    return (
        <div className={styles.project__card}>
            <h3 className={styles.project__title}>{title}</h3>
            <p className={styles.project__description}>{description}</p>
            <a className={styles.link} href={link}>{linkLabel}</a>
        </div>
    )
}

const RowCards:React.FC<IRowCards> = ({title, cards, linkLabel})=>{
    return (
     <section className={globalStyles.projects}>
      <div className={globalStyles.container}>
        <h2 className={globalStyles.section__title}>{title}</h2>
        <div className={styles.project__cards}>
          {cards?.map((card, index) => (
            <Card
              key={index}
              title={card.title}
              description={card.description}
              link={card.link}
              linkLabel={linkLabel}
            />
          ))}
        </div>
      </div>
    </section>
    )
}
export default RowCards;