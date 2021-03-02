import React, {useState, useEffect} from "react"
import SongDetails from "../components/SongDetails"

const MusicChartContainer = () => {

    const [songs, setSongs] =  useState([]);

    const getSongs = () => {
        console.log("Getting songs information");
        fetch ("https://itunes.apple.com/gb/rss/topsongs/limit=20/json")
        .then (response => response.json())
        .then (dataFromAPI => setSongs(dataFromAPI.feed.entry[0]))
    }

    useEffect(() => {
        console.log ("Use effect triggered")
        getSongs();},[])                        // the empty list prevents getSongs being called infinitely
    


    return (
        <>
            <h3>Music Chart</h3>
            <SongDetails/>
        </>
    );
}

export default MusicChartContainer;