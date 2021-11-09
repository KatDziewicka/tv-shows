// import { greet } from "./utils/greet";
// import episodes from "./episodes.json";
import EpisodesView from "./components/Episode"


function App(): JSX.Element {
  return <>
    {/* <h1>{greet("World")}</h1> */}
    <EpisodesView />
  </>
}

export default App;
