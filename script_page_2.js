// функция проверяющая правильный ли указан космонавт
function checkCosmonaut() {
    let selected_cosmonaut = document.querySelector('input[name="cosmonaut"]:checked').value;
    if (selected_cosmonaut == "Нил Армстронг") {
        // делаем активной кнопку далее если космонавт выбран верно
        document.getElementById("arrow_next").className = 'arrow_container_right active';
        return true;
    } else {
        // делаем неактивной кнопку далее если космонавт выбран неверно
        document.getElementById("arrow_next").className = 'arrow_container_right not_active';
        return false;
    }
}

// функция проверяющая правильный ли указан космонавт и перенаправляющая далее если да
function checkCosmonautAndRedirect(page) {
    if (checkCosmonaut()){
        redirect(page);
    }
}