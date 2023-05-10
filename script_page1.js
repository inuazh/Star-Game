// функция вызываемая при начале движения картинки
function startDrag(event) {
    let target = event.target ? event.target : event.srcElement;

    if (target.className != 'planet_img') {
        return
    }
    // получаем X и Y координаты события
    offsetX = event.clientX;
    offsetY = event.clientY;
    // назначаем координаты по умолчанию для верхнего левого угла объекта
    if (!target.style.left) {
        target.style.left = '0px'
    }
    if (!target.style.top) {
        target.style.top = '0px'
    }
    // вычисляем целые значения для верхнего левого угла объекта
    coordX = parseInt(target.style.left);
    coordY = parseInt(target.style.top);
    drag = true;
    // перемещаем элемент
    document.onmousemove = dragElement;
}

// перемещение картинки
function dragElement(e) {
    // если перемещение закончено, вызод из функции
    if (!drag) {
        return
    }
    //получаем событие если не получили его ранее
    if (!e) {
        let e = window.event
    }
    // получаем целевой элемент события
    let target = e.target ? e.target : e.srcElement;
    // перемещаем элемент на новые координаты
    target.style.left = coordX + e.clientX - offsetX + 'px';
    target.style.top = coordY + e.clientY - offsetY + 'px';
    return false;
}

// функция вызываемая для остановки пермещения объекта
function stopDragElement() {
    drag = false;
    orderPlanetsImgsAndCheckPositions();
}

// функция вызываемая при загрзуки страницы
window.onload = function () {
    // назначаем функцию startDrag для обработки события нажатия кнопки мыши
    document.onmousedown = startDrag;
    // назначаем функцию startDrag для обработки события отпусания кнопки мыши
    document.onmouseup = stopDragElement;
};

// функция отвечающая за сортировку списка планет в зависимости от их позиции
// на странице
function orderPlanetsImgsAndCheckPositions() {
    // получаем список картинок планет
    let p_imgs = document.getElementsByClassName('planet_img');
    let p_imgs_arr = [].slice.call(p_imgs);
    // получаем список планет отсортированный по Id (Этот список имеет верный порядок)
    let p_imgs_arr_by_id = [...p_imgs_arr].sort((a, b) => a.id - b.id);
    // получаем список планет отсортированный по положению на странице (координату по высоте берем с множителем чтобы планеты размещенные внизу были
    // по позиции дальше планет просто размещнных правее)
    let p_imgs_arr_by_pos = [...p_imgs_arr].sort((a, b) => (a.getBoundingClientRect().right + a.getBoundingClientRect().bottom * 6) - (b.getBoundingClientRect().right + b.getBoundingClientRect().bottom * 6));
    // for (let i = 0; i < p_imgs_arr_by_pos.length; i++){
    //     console.log(p_imgs_arr_by_pos[i]);
    //     let domRect = p_imgs_arr_by_pos[i].getBoundingClientRect();
    //     console.log(domRect);
    // }
    // console.log(comparePlanetImgPositions(p_imgs_arr_by_id, p_imgs_arr_by_pos));
    //сравниваем список с правильным порядком и список по положению на странице, возвращаем результат сравнения
    return comparePlanetImgPositions(p_imgs_arr_by_id, p_imgs_arr_by_pos);
}

// функция для сравнения двух списков планет с использованием id
// функция возвращает true если картинки планет в списках идут в одном и том же порядке, иначе false
function comparePlanetImgPositions(p_imgs_arr_by_id, p_imgs_arr_by_pos){
    for (let i = 0; i < p_imgs_arr_by_id.length; i++) {
        if (p_imgs_arr_by_id[i].id !== p_imgs_arr_by_pos[i].id){
            // делаем неактивной кнопку далее если порядок в списках не совпадает
            document.getElementById("arrow_next").className = 'arrow_container_right not_active';
            return false;
        }
    }
    // делаем активной кнопку далее если порядок в списках совпадает
    document.getElementById("arrow_next").className = 'arrow_container_right active';
    return true
}

// функция проверяющая правильный ли порядок картинок планет на странице и перенаправляющая если да
function checkPlanetLocationAndRedirect(page) {
    if (orderPlanetsImgsAndCheckPositions()){
        redirect(page);
    }
}
