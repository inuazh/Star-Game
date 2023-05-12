const shineVar = document.querySelector('.shine__var');
const listItems = document.querySelectorAll('.shine__list-item');
let draggedItem = null;

for (let i = 0; i < listItems.length; i++) {
    const item = listItems[i];
    item.addEventListener('dragstart', function () {
        draggedItem = item;
        setTimeout(function () {
            item.style.display = 'none';
        }, 0);
    });
    item.addEventListener('dragend', function () {
        setTimeout(function () {
            draggedItem.style.display = 'block';
            draggedItem = null;
        }, 0);
    });
}

shineVar.addEventListener('dragover', function (e) {
    e.preventDefault();
});

shineVar.addEventListener('dragenter', function (e) {
    e.preventDefault();
    this.style.backgroundColor = 'rgba(0, 0, 0, 0.2)';
});

shineVar.addEventListener('dragleave', function () {
    this.style.backgroundColor = 'transparent';
});

shineVar.addEventListener('drop', function (e) {
    if (draggedItem.classList.contains('shine__list-item1')) {
        draggedItem.classList.add('right_answer');
    }
    this.append(draggedItem);
    this.style.backgroundColor = 'transparent';
});

// код выше - стандартный перетаскиватель




function check_answer() {
    // Проверяем наличие элемента с классом "right_answer" на странице
    var rightAnswerElement = document.getElementsByClassName('right_answer')[0];
    
    if (rightAnswerElement) {
        // Если элемент найден, перенаправляем пользователя на страницу 1.html
        window.location.href = 'Q5.html';
    }
}



// крч мы создаем элемент с классом right_answer только когда перетащен нужный элемент,
// а кнопка далее работает только когда на странице есть этот класс, очень элегантно по моему)
