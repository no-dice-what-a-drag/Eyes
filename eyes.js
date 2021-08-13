const ball1 = document.getElementsByClassName('ball1');
const ball2 = document.getElementsByClassName('ball2');

document.onmousemove = (event) => {
  const x = (event.clientX * 100) / window.innerWidth + '%';
  const y = (event.clientY * 100) / window.innerHeight + '%';

  ball1[0].style.left = x;
  ball1[0].style.top = y;
  ball1[0].transform = 'translate(-' + x + ',-' + y + ')';

  ball2[0].style.left = x;
  ball2[0].style.top = y;
  ball2[0].transform = 'translate(-' + x + ',-' + y + ')';

};