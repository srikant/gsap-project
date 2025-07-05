import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Navbar from './sections/NavBar'
import FirstVideo from './sections/FirstVideo'
import SecondVideo from './sections/SecondVideo'
import PostCard from './sections/PostCard'
import Final from './sections/Final'
import Outro from './sections/Outro'
import ComingSoon from './sections/ComingSoon'
import Lucia from './sections/Lucia'
import Jason from './sections/Jason'
import Hero from './sections/Hero'
gsap.registerPlugin(ScrollTrigger);

const App = () => {
  return (
    <main>
       <Navbar />
       <Hero />
       <FirstVideo />
       <Jason />
       <SecondVideo />
       <Lucia />
       <PostCard />
       <Final />
       <Outro />
    </main>
  )
}
export default App