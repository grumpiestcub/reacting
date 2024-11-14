import { useState } from "react";
import { useRef } from "react";
import beat1 from '/src/assets/beat1.mp3';
import beat2 from '/src/assets/beat2.mp3';
import '/src/css/musicPlayer.css'

function MusicPlayer () {
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);
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
  
    function nextSongHandler() {
        setCurrentSongIndex((prev) => (prev + 1) % songs.length);
        setIsPlaying(false);
    }
  
    const onTimeUpdate = () => {
      setCurrentTime(audioRef.current.currentTime);
    };
  
    return (
      <div className="music-player">
        <p>Currently Playing: {songs[currentSongIndex].title}</p>
        
        <audio
          ref={audioRef}
          src={songs[currentSongIndex].url}
          onTimeUpdate={onTimeUpdate}
          onEnded={nextSongHandler}
        />
  
        <button className="play-pause-button" onClick={playPauseHandler}>
          {isPlaying ? "Pause" : "Play"}
        </button>
        <button className="next-track-button" onClick={nextSongHandler}>Next</button>
        <div>
          <p>Time: {Math.floor(currentTime)} s</p>
        </div>
      </div>
    );
  };

export default MusicPlayer