import Player from '@vimeo/player';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const onPlay = {
  duration: 61.857,
  percent: 0.049,
  seconds: 3.034,
};

player.on('timeupdate', function (onPlay) {
  localStorage.setItem(
    'videoplayer-current-time',
    JSON.stringify(onPlay.seconds)
  );
});

const savedData = localStorage.getItem('videoplayer-current-time');
const parsedData = JSON.parse(savedData);

window.addEventListener('load', event => {
  player.setCurrentTime(parsedData);
});
