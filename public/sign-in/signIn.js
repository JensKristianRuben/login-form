const container = document.getElementById('container');
    const goRight = document.getElementById('goRight');
    const goLeft = document.getElementById('goLeft');

    goRight.addEventListener('click', () => {
      container.classList.add('right-active');
      goRight.classList.add('inactive');
      goLeft.classList.add('active');

    });

    goLeft.addEventListener('click', () => {
      container.classList.remove('right-active');
      goLeft.classList.remove('active');
      goRight.classList.remove('inactive');
    });