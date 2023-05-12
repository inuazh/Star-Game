function checkPlanetLocationAndRedirect(destination) {
    var select1 = document.getElementsByClassName('select--question8')[0];
    var select2 = document.getElementsByClassName('select--question8')[1];
    var select3 = document.getElementsByClassName('select--question8')[2];

    if (
      select1.value === 'Шары' &&
      select2.value === 'Цвету' &&
      select3.value === 'Большая Медведица'
    ) {
      window.location.href = destination;
    } else {
        console.log('neer')
    }
  }