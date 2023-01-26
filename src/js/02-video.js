import Player from '@vimeo/player';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const onPlay = function (data) {
  duration: 61.857;
  percent: 0.049;
  seconds: 3.034;
};

const getTime = player.on('timeupdate', function (onPlay) {
  localStorage.setItem(
    'videoplayer-current-time',
    JSON.stringify(onPlay.seconds)
  );
  //const savedData = localStorage.getItem('videoplayer-current-time');
  const parsedData = JSON.parse(savedData);
  console.log(savedData);
  console.log(parsedData);
});

console.log(getTime);

player.setCurrentTime(0).then(function (getTime) {
  // seconds = the actual time that the player seeked to
  if (location.reload) {
    return (player.setCurrentTime = getTime);
  }
});
