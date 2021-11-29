const HYBRIDIZE = (function () {
  return {
    mixed: false,
    TRIBES: [
      {
        name: 'Mudwing',
        photo: 'mudwing.jpg'
      },
      {
        name: 'Rainwing',
        photo: 'rainwing.jpg'
      },
      {
        name: 'Nightwing',
        photo: 'nightwing.jpg'
      },
      {
        name: 'Skywing',
        photo: 'skywing.jpg'
      },
      {
        name: 'Silkwing',
        photo: 'silkwing.jpg'
      },
      {
        name: 'Sandwing',
        photo: 'sandwing.jpg'
      },
      {
        name: 'Hivewing',
        photo: 'hivewing.jpg'
      },
      {
        name: 'Leafwing',
        photo: 'leafwing.jpg'
      },
      {
        name: 'Seawing',
        photo: 'seawing.jpg'
      },
      {
        name: 'Icewing',
        photo: 'icewing.jpg'
      },
    ],

    hybridize: function hybridize(tribes) {
      if (!HYBRIDIZE.mixed) HYBRIDIZE.mixed = true;

      let tribe1 = tribes[Math.floor(Math.random() * tribes.length)];
      let tribe2 = tribes[Math.floor(Math.random() * tribes.length)];

      if (tribe1.name === tribe2.name) return hybridize(tribes);

      const tribe1Name = document.getElementById('tribe_1_name');
      const tribe2Name = document.getElementById('tribe_2_name');
      const tribe1Photo = document.getElementById('tribe_1_photo');
      const tribe2Photo = document.getElementById('tribe_2_photo');

      tribe1Name.innerHTML = tribe1.name;
      tribe2Name.innerHTML = tribe2.name;
      
      setTimeout(function () {
        tribe1Photo.setAttribute('src', `./images/${tribe1.photo}`);
        tribe2Photo.setAttribute('src', `./images/${tribe2.photo}`);
      }, 100);
    },

    countdown: function countdown() {
      let duration = 5;
      const statusMsg = document.getElementById('status');

      statusMsg.textContent = duration;
      const countdown = setInterval(function () {
        duration -= 1;
        statusMsg.textContent = duration;
        if (duration <= 0) {
          console.log('done!');
          clearInterval(countdown);
        }
      }, 1000);

    },

    showMixed: function hideUnMixed() {
      const items = document.getElementsByClassName('hide');
      Object.values(items)
        .forEach(function (item) {
          item.classList.replace('hide', 'show');
        })
    },

  }
})();

window.onload = () => {

  const theButton = document.getElementById('hybridizerBtn');
  theButton.addEventListener('click', function () {
    HYBRIDIZE.hybridize(HYBRIDIZE.TRIBES);
    HYBRIDIZE.showMixed();
  });
}