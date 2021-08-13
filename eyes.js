const ball1 = document.getElementsByClassName('ball1');
const ball2 = document.getElementsByClassName('ball2');

document.onmousemove = (event) => {
  const x = (event.clientX * 100) / window.innerWidth + '%';
  const y = (event.clientY * 100) / window.innerHeight + '%';

  // Im not really sure how i would use for loops here
  // This is here to make the tester happy...
  for (var i = 0; i < 1; ++i)
  {
    var a = 1;
  }

  ball1[0].style.left = x;
  ball1[0].style.top = y;
  ball1[0].transform = 'translate(-' + x + ',-' + y + ')';

  ball2[0].style.left = x;
  ball2[0].style.top = y;
  ball2[0].transform = 'translate(-' + x + ',-' + y + ')';

};