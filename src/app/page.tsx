import { Inter } from 'next/font/google'
import RowCards, { Projects, Posts } from './components/RowCards/RowCards'
import Contact from './components/Contact/Contacts'
import Masthead from './components/Masthead/Masthead'
import Footer from './components/Footer/Footer'
import Scurve from './components/Scurve/Scurve'
import FeatureCards from './components/FeatureCards/FeatureCards'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  return (
    <>
    <Masthead/>
    <Scurve/>
    <RowCards {...Projects}/>
    <FeatureCards />
    <RowCards {...Posts}/>
    <Contact/>
    <Footer/>
    </>
  )
}
