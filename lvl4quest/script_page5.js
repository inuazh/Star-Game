// переменная для хранения текущей выбранной планеты
let selected_id = "planet_1";

// функция устанавливающая рамку вокрун выбранной планеты и проверяющая выбрана ли планета верно
function setBorderAndCheckPlanet(element_id) {
    // убираем рамку для предыдущей выбранной планеты
    document.getElementById(selected_id).className = 'obj_img';
    // устанавливаем рамку для текущей выбранной планеты
    document.getElementById(element_id).className = 'planet border_img';
    // устанавливаем текущую выбранную планету
    selected_id = element_id;
    // проверяем выбрана ли планета верно
    checkPlanet();
}

// функция проверяющая правильно ли выбрана планета
function checkPlanet() {
    if (selected_id === "planet_1"){
        // делаем активной кнопку далее если планета выбрана верно
        document.getElementById("arrow_next").className = 'arrow_container_right active';
        return true;
    } else {
        // делаем неактивной кнопку далее если планета выбрана неверно
        document.getElementById("arrow_next").className = 'arrow_container_right not_active';
        return false;
    }
}

function checkPlanetLocationAndRedirect(url) {
    const earth = document.querySelector('.earth1');
    const moon = document.querySelector('.moon');
    if (earth.getBoundingClientRect().top < moon.getBoundingClientRect().top) {
      window.location.href = url;
      alert('Поздравляем, вы прошли игру!!');
    }
  }
  // костыльная проверка задачки