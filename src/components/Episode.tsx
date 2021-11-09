import episodes from "../episodes.json";
import IEpisode from "../utils/interface";

type OneEpisodeProps = { episode: IEpisode }

export default function EpisodesView(): JSX.Element {
    const episodesList = episodes.map((episode)=> <Episode key={episode.id} episode={episode}/>)
    
    return <>
    <div>{episodesList}</div>
    </>
}


function Episode({ episode }: OneEpisodeProps): JSX.Element {
    return <>
    <h2>{episode.name}</h2>
    <img src={episode.image.medium} alt="Scene from episode" />
    <p>{episode.summary}</p>
    </>
}