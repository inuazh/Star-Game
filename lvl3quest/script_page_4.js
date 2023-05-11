// переменная для хранения текущей выбранной планеты
let selected_id = "planet_1";

// функция устанавливающая рамку вокрун выбранной планеты и проверяющая выбрана ли планета верно
function setBorderAndCheckPlanet(element_id) {
    // убираем рамку для предыдущей выбранной планеты
    document.getElementById(selected_id).className = 'planet';
    // устанавливаем рамку для текущей выбранной планеты
    document.getElementById(element_id).className = 'planet border_img';
    // устанавливаем текущую выбранную планету
    selected_id = element_id;
    // проверяем выбрана ли планета верно
    checkPlanet();
}

// функция проверяющая правильно ли выбрана планета
function checkPlanet() {
    if (selected_id === "planet_3"){
        // делаем активной кнопку далее если планета выбрана верно
        document.getElementById("arrow_next").className = 'arrow_container_right active';
        return true;
    } else {
        // делаем неактивной кнопку далее если планета выбрана неверно
        document.getElementById("arrow_next").className = 'arrow_container_right not_active';
        return false;
    }
}

// функция проверяющая правильно ли выбрана планета и перенаправляющая далее если да
function checkPlanetAndRedirect(page) {
    if (checkPlanet()){
        redirect(page);
    }
}