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
    <h2>S{padSeasonOrNumber(episode.season)}E{padSeasonOrNumber(episode.number)} {episode.name}</h2>
    <img src={episode.image.medium} alt="Scene from episode" />
    <p>{trimSummary(episode.summary)}</p>
    <a href={episode.url}>Source</a>
    </>
}

function padSeasonOrNumber(seasonOrEpNum: number): string {
    return seasonOrEpNum.toString().padStart(2, "0")
}

function trimSummary(summary: string): string {
    const summaryLength = summary.length;
    return summary.slice(3, summaryLength-4)
}