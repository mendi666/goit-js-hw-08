import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.on('timeupdate', throttle(onPlay, 1000));

const timeData = {
  duration: 61.857,
  percent: 0.049,
  seconds: 3.034,
};

function onPlay(timeData) {
  localStorage.setItem('videoplayer-current-time',timeData.seconds);
}

player.setCurrentTime(localStorage.getItem('videoplayer-current-time'));