const shineVar = document.querySelectorAll('.correct__var');
const listItems = document.querySelectorAll('.bodies__item2');
let draggedItem = null;

for (let i = 0; i < listItems.length; i++) {
    const item = listItems[i];
    item.addEventListener('dragstart', function (e) {
        draggedItem = e.target;
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

for (let i = 0; i < shineVar.length; i++) {
    const varItem = shineVar[i];
    varItem.addEventListener('dragover', function (e) {
        e.preventDefault();
    });

    varItem.addEventListener('dragenter', function (e) {
        e.preventDefault();
        this.style.backgroundColor = 'rgba(0, 0, 0, 0.2)';
    });

    varItem.addEventListener('dragleave', function () {
        this.style.backgroundColor = 'transparent';
    });

    varItem.addEventListener('drop', function (e) {
        if (draggedItem.classList.contains('notRight')) {
            draggedItem.classList.add('right_answer');
        }
        this.appendChild(draggedItem);
        this.style.backgroundColor = 'transparent';
    });
}

shineVar.addEventListener('drop', function (e) {
    if (draggedItem.classList.contains('notRight')) {
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
        window.location.href = 'Q4.html';
    }
}