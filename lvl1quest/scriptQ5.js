
    function checkThing() {
        var selectElement = document.querySelector('.select');
        var selectedOption = selectElement.options[selectElement.selectedIndex];
        var arrowDiv = document.querySelector('.arrow_right_text');
        
        if (selectedOption.getAttribute('name') === 'animal') {
            arrowDiv.parentNode.onclick = function() {
                window.location.href = '../Section.html';
            }
            arrowDiv.parentNode.classList.remove('not_active');
        } else {
            arrowDiv.parentNode.onclick = null;
            arrowDiv.parentNode.classList.add('not_active');
        }
    }



// такая же проверка как везде, чекает есть ли правильный выбор