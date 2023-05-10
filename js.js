// Передвижение элементов

const units = document.querySelectorAll('[data-unit]');

units.forEach(item => {
    item.onmousedown = function (event) {
        // (1) отследить нажатие

        // (2) подготовить к перемещению:
        // разместить поверх остального содержимого и в абсолютных координатах
        item.style.position = 'absolute';
        item.style.zIndex = 1000;
        // переместим в body, чтобы мяч был точно не внутри position:relative
        document.body.append(item);
        // и установим абсолютно спозиционированный мяч под курсор

        moveAt(event.pageX, event.pageY);

        // передвинуть мяч под координаты курсора
        // и сдвинуть на половину ширины/высоты для центрирования
        function moveAt(pageX, pageY) {
            item.style.left = pageX - item.offsetWidth / 2 + 'px';
            item.style.top = pageY - item.offsetHeight / 2 + 'px';
        }

        function onMouseMove(event) {
            moveAt(event.pageX, event.pageY);
        }

        // (3) перемещать по экрану
        document.addEventListener('mousemove', onMouseMove);

        // (4) положить мяч, удалить более ненужные обработчики событий
        item.onmouseup = function () {
            document.removeEventListener('mousemove', onMouseMove);
            item.onmouseup = null;
        };

        item.ondragstart = function () {
            return false;
        };
    };
});

// Смена фонового цвета элементов

const variants = document.querySelectorAll('[data-variant]');

variants.forEach(item => {
    item.addEventListener('click', () => {
        item.classList.toggle('active');
    });
});