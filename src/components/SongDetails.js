import React from "react"

const SongDetails = ({artist, title, loaded, image, preview}) => {

    if (!loaded){
        return <p>Loading...</p>
    }

    return (
        <>
            <div id="song-box">
                <img class="image" src={image} alt="Artist"></img> 
                <div class="song" >
                    <li>{artist} - {title}</li>
                    <br></br>
                    <audio controls>
                            <source src={preview} type="audio/aac"></source>
                        </audio>
                </div>
            </div>

        </>
    );
}

export default SongDetails;