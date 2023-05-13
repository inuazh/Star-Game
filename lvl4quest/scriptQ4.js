const shineVar = document.querySelectorAll('.bodies__item--question2');
const listItems = document.querySelectorAll('.bodies__item');
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
        this.style.backgroundColor = 'rgb(255, 255, 255)';
    });

    varItem.addEventListener('dragleave', function () {
        this.style.backgroundColor = 'transparent';
    });

    varItem.addEventListener('drop', function (e) {
        if (draggedItem.classList.contains('oven')) {
            draggedItem.classList.add('right_answer');
        }
        this.appendChild(draggedItem);
        this.style.backgroundColor = 'transparent';
    });

    varItem.addEventListener('drop', function (e) {
        if (draggedItem.classList.contains('vodoley')) {
            draggedItem.classList.add('right_answer2');
        }
        this.appendChild(draggedItem);
        this.style.backgroundColor = 'transparent';
    });

    varItem.addEventListener('drop', function (e) {
        if (draggedItem.classList.contains('vesy')) {
            draggedItem.classList.add('right_answer3');
        }
        this.appendChild(draggedItem);
        this.style.backgroundColor = 'transparent';
    });

}



// работает. каждый ответ должен проверяться далее =>tudoo


// код выше - стандартный перетаскиватель + создание тригеров правильного ответа




function checkPlanetLocationAndRedirect() {
    // Проверяем наличие элементов с классами "right_answer", "right_answer2" и "right_answer3" на странице
    var rightAnswerElement1 = document.getElementsByClassName('right_answer')[0];
    var rightAnswerElement2 = document.getElementsByClassName('right_answer2')[0];
    var rightAnswerElement3 = document.getElementsByClassName('right_answer3')[0];
    
    if (rightAnswerElement1 && rightAnswerElement2 && rightAnswerElement3) {
      // Если все элементы найдены, перенаправляем пользователя на страницу "Section.html"
      window.location.href = 'Q5.html';
    }
  }
  
