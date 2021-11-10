import { useState } from "react"
import episodes from "../episodes.json";
import IEpisode from "../utils/interface";
import EpisodesView from "./Episode";

// type OneEpisodeProps = { episode: IEpisode };
// type EpisodesProps = { episodes: IEpisode[]}

export default function LiveSearch(): JSX.Element {
    const[searchTerm, setSearchTerm] = useState(""); 
    
    const handleSearch = (searchTerm: string, episodes: IEpisode[]) => {
        return episodes.filter((episode) => containsTerm(searchTerm, episode.name) 
        || containsTerm(searchTerm, episode.summary));
    }
    const filteredEpisodesList = handleSearch(searchTerm, episodes)

    return <>
        <input type="search" onChange={(e)=>setSearchTerm(e.target.value)}     />
        <p>{filteredEpisodesList.length}/73 episodes found</p>
        <EpisodesView episodes={filteredEpisodesList} />
    </>
}

function containsTerm(searchedTerm: string, episodeElement:string): boolean {
    return episodeElement.toLowerCase().includes(searchedTerm.toLowerCase())
}