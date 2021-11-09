// import { greet } from "./utils/greet";
import episodes from "./episodes.json";
import {Episode} from "./components/Episode"


function App(): JSX.Element {
  return <>
    {/* <h1>{greet("World")}</h1> */}
    <div>  {Episode(episodes[0])}</div>
  </>
}

export default App;
