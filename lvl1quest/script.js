// функция для переключения между страницами, в качестве аргумента примнимает путь к странице
function checkPlanetLocationAndRedirect(url) {
    const inputs = document.querySelectorAll('.numbers__input');
    const values = Array.from(inputs).map(input => parseInt(input.value, 10));
    const [swan, pegasus, bull] = values;
  
    if (swan === 4 && pegasus === 5 && bull === 2) {
      window.location.href = url;
    } else {
      // Если условие не выполняется, добавляем класс "not_active" к div с id "arrow_next"
      const arrow = document.querySelector('#arrow_next');
      arrow.classList.add('not_active');
    }
  }
  
  // Добавьте следующий код в обработчик события для div с классом "arrow_right_text":
  document.querySelector('.arrow_right_text').addEventListener('click', () => {
    checkPlanetLocationAndRedirect('Q3.html');
  });
  
