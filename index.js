// Your code goes here
document.addEventListener('DOMContentLoaded', () => {
  console.log('The DOM has loaded');
});

console.log(
  'This console.log() fires when index.js loads - before DOMContentLoaded is triggered'
);

document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('text').innerHTML = 'This is really cool!';
});
