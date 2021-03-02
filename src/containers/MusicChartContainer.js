import React, {useState, useEffect} from "react"
import SongDetails from "../components/SongDetails"

const MusicChartContainer = () => {

    const [songs, setSongs] =  useState([]);

    const [loaded, setLoaded] = useState(false);

    const getSongs = () => {
        console.log("Getting songs information");
        fetch ("https://itunes.apple.com/gb/rss/topsongs/limit=20/json")
        .then (response => response.json())
        .then (dataFromAPI => setSongs(dataFromAPI.feed.entry))
        .then (() => setLoaded(true));
    }

    useEffect(() => {
        console.log ("Use effect triggered")
        getSongs();},[])                        
    // the empty list prevents getSongs being called infinitely
    
    const songsNodes = songs.map(song => {
        return (
            (<SongDetails 
                loaded={loaded} 
                artist= {song["im:artist"].label} 
                title={song["im:name"].label} 
                key={song.id.attributes["im:id"]} 
                image={song["im:image"][2].label}
                preview={song.link[1].attributes.href}>

                </SongDetails>)
        )
    })


    return (
        <>
                <h1>Music Chart Top 20</h1>
                {songsNodes}
        </>
    );
}

export default MusicChartContainer;