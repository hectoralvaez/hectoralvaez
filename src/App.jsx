import { Tags } from "./components/Tags"
import { generalTagsData } from "./data/generalTagsData"
import MySkills from "./stats/MySkills"
import { AtlassianLogo, Css3Logo, FigmaLogo, GitLogo, Html5Logo, ReactLogo, SassLogo, SymfonyLogo } from './assets/logos';


function App() {

  return (
    <>
      
      <h1>Héctor Penalva Peláez</h1>
      <p>Lorem ipsum <a href="#">dolor sit amet consectetur adipisicing elit</a>. Culpa, nam nemo facilis incidunt excepturi ipsum, ab laborum dignissimos veritatis minima deleniti repellat. Placeat architecto quis iusto quasi tempora officiis minima?</p>
      <MySkills />
      <Tags items={ generalTagsData }  />
      <Tags items={["fasdf", "sesdfasd"]}  />
      <AtlassianLogo />
    </>
  )
}

export default App
