import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Component
import { faPlay, faAngleRight, faAngleLeft } from '@fortawesome/free-solid-svg-icons'; // Icons
const Player = () => {
    return (
        <div className="player-container">
            <h1>Player</h1>
            <div className="time-control">
                <p>Start time</p>
                <input type="range" />
                <p>End time</p>
            </div>
            <div className="playPause-control">
                <FontAwesomeIcon className="playBack" icon={faAngleLeft} />
                <FontAwesomeIcon className="play" icon={faPlay} />
                <FontAwesomeIcon className="playFoward" icon={faAngleRight} />
            </div>
        </div>
    )
}
export default Player;