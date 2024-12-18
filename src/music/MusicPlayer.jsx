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
  
    const playPause = () => {
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

    function nextSong() {
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
        <p>Currently Playing: {songs[currentSongIndex].title}</p>
        <audio
          ref={audioRef}
          src={songs[currentSongIndex].url}
          onTimeUpdate={onTimeUpdate}
          onEnded={nextSong}
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
        <div className="play-button">
        <button className="play-pause-button" onClick={playPause}>
          {isPlaying ? "pause" : "play"}
        </button> 
        </div>
        <div className="next-button">
          <button className="next-track-button" onClick={nextSong}>next</button>
        </div>
        <div>
          {/* <p>Time: {Math.floor(currentTime)} s</p> */}
          {/* <p>Time: {currentTime} s</p> */}
        </div>
      </div>
      </>
    );
  };

export default MusicPlayer