import React, { useState } from 'react';
import ReactPlayer from 'react-player';
import styles from './VideoPlayer.module.scss';
import { ArrowLeft } from 'lucide-react';

const baseUrl = 'https://cache.libria.fun';

const VideoPlayer = ({ activeEpisode, setOpenPlayer, series=[]}) => {



  const getProgress = (state) => {
    console.log(state);
    //Надо будет написать логику прогресс бара 
  };



  return (
    <div className={styles.video_player}>
      <button className={styles.back_button} onClick={() => setOpenPlayer(false)}>
        <ArrowLeft color='white' />
      </button>
      {/* {series.map(series=> <span>{series.episode}</span>)} */}
      {activeEpisode && (
        <ReactPlayer
          width='100%'
          height='100%'
          url={`${baseUrl}${activeEpisode}`}
          controls
          onProgress={getProgress}
        />
      )}
    </div>
  );
};

export default VideoPlayer;