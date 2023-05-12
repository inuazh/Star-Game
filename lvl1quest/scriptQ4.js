
function checkPlanetLocationAndRedirect(destination) {
    var selectedValue = document.querySelector('input[name="radio"]:checked').value;
    if (selectedValue === "bear") {
      window.location.href = destination;
    }
  }





// такая же проверка как везде, чекает есть ли правильный выбор