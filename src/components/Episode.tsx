// import episodes from "../episodes.json";
import IEpisode from "../utils/interface";

export function Episode({name, image, summary}: IEpisode): JSX.Element {

    return <>
    <h2>{name}</h2>
    <img src={image.medium} alt="Scene from episode" />
    <p>{summary}</p>
    </>
}