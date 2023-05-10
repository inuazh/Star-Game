// функция проверяющая правильно ли указано название премета на картинке
function checkName() {
    let name = document.getElementById("img_name").value;
    if (name == "Телец"){
        // делаем активной кнопку далее если название премета на картинке указано верно
        document.getElementById("arrow_next").className = 'arrow_container_right active';
        return true;
    } else {
        // делаем неактивной кнопку далее если название премета на картинке указано неверно
        document.getElementById("arrow_next").className = 'arrow_container_right not_active';
        return false;
    }
}

// функция проверяющая правильно ли указано название премета на картинке и перенаправляющая далее если да
function checkNameAndRedirect(page) {
    if (checkName()){
        redirect(page);
    }
}