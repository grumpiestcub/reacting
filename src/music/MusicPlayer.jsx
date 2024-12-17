import { useState } from "react";
import { useRef } from "react";
import beat1 from '/src/assets/beat1.mp3';
import beat2 from '/src/assets/beat2.mp3';
import '/src/css/musicPlayer.css'

function MusicPlayer () {
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);
    const audioRef = useRef(null);
  
    const songs = [
        {title: "beat1", url:beat1},
        {title: "beat2", url:beat2}
    ];

    const [currentSongIndex, setCurrentSongIndex] = useState(0);
  
    const playPauseHandler = () => {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    };
  
    const onLoadedMetaData = () => {
      if (audioRef.current) {
        const duration = audioRef.current.duration;
        setDuration(duration);
      }
    };

    function nextSongHandler() {
        setCurrentSongIndex((prev) => (prev + 1) % songs.length);
        setIsPlaying(false);
    }
  
    const onTimeUpdate = () => {
      setCurrentTime(audioRef.current.currentTime);
    };

    const handleScrub = (event) => {
      const newTime = event.target.value;
      audioRef.current.currentTime = newTime;
      setCurrentTime(newTime);
    }
  
    return ( //work to separate buttons from player div, can have buttons below title and bar, look into adding track images
      <>
      <p className="beats-title">beats</p>
      <div className="music-player">
      <button className="play-pause-button" onClick={playPauseHandler}>
          {isPlaying ? "Pause" : "Play"}
        </button> 
        <p>Currently Playing: {songs[currentSongIndex].title}</p>
        <audio
          ref={audioRef}
          src={songs[currentSongIndex].url}
          onTimeUpdate={onTimeUpdate}
          onEnded={nextSongHandler}
          onLoadedMetadata={onLoadedMetaData} // gets duration when loaded
        />
        <div className="progress-bar">
          <input 
          type="range"
          min="0"
          max={duration}
          step="0.1"
          value={currentTime}
          onChange={handleScrub} 
          />
          <p>
            {Math.floor(currentTime)} / {Math.floor(duration)} seconds
          </p>
        </div>
        <button className="next-track-button" onClick={nextSongHandler}>Next</button>
        <div>
          {/* <p>Time: {Math.floor(currentTime)} s</p> */}
          {/* <p>Time: {currentTime} s</p> */}
        </div>
      </div>
      </>
    );
  };

export default MusicPlayer