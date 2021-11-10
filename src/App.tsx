// import { greet } from "./utils/greet";
// import episodes from "./episodes.json";
import EpisodesView from "./components/Episode";
import LiveSearch from "./components/LiveSearch";

function App(): JSX.Element {
  return (
    <>
      {/* <h1>{greet("World")}</h1> */}
      <LiveSearch />
      <EpisodesView />
    </>
  );
}

export default App;
