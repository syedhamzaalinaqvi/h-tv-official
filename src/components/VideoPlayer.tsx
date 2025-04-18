'use client';

import React, { useEffect, useRef } from 'react';
import videojs from 'video.js';
import 'video.js/dist/video-js.css';
import '@videojs/http-streaming';

interface VideoPlayerProps {
  src: string;
  poster?: string;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ src, poster }) => {
  const videoRef = useRef<HTMLDivElement>(null);
  const playerRef = useRef<any>(null);

  useEffect(() => {
    if (!videoRef.current) return;

    // Initialize video.js player
    const videoElement = document.createElement('video');
    videoElement.className = 'video-js vjs-big-play-centered';
    videoRef.current.appendChild(videoElement);

    const player = videojs(videoElement, {
      controls: true,
      fluid: true,
      aspectRatio: '16:9',
      preload: 'auto',
      autoplay: false,
      poster: poster || '/images/default-poster.jpg',
      sources: [{
        src: src,
        type: 'application/x-mpegURL'
      }]
    }, () => {
      console.log('Player is ready');
    });

    playerRef.current = player;

    // Clean up function
    return () => {
      if (playerRef.current) {
        playerRef.current.dispose();
        playerRef.current = null;
      }
    };
  }, [src, poster]);

  // Update source when src prop changes
  useEffect(() => {
    if (playerRef.current) {
      playerRef.current.src([{
        src: src,
        type: 'application/x-mpegURL'
      }]);
    }
  }, [src]);

  return (
    <div className="rounded-lg overflow-hidden shadow-xl">
      <div ref={videoRef} data-vjs-player />
    </div>
  );
};

export default VideoPlayer;
