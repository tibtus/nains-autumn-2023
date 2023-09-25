const hamburgerMenu = document.querySelector('.tibtus-hamburger-menu');
const closeMenu = document.querySelector('.tibtus-close-menu');
const navList = document.querySelector('.tibtus-hamburger-menu-modal');


hamburgerMenu.addEventListener('click', () => {
    navList.classList.add('tibtus-show-menu');
    closeMenu.style.display = 'block';
    hamburgerMenu.style.display = 'none';
});

closeMenu.addEventListener('click', () => {
    navList.classList.remove('tibtus-show-menu');
    closeMenu.style.display = 'none';
    hamburgerMenu.style.display = 'block';
});


// Отримуємо посилання на елемент блока, на який можна натиснути
const blockToClick = document.querySelector('.Turnkey_solution_Frame_wrapper');
// Отримуємо посилання на контейнер презентації
const presentationContainer = document.getElementById('presentation-container');


console.log("TEST 1 blockToClick", blockToClick)
console.log("TEST 2 presentationContainer", presentationContainer)

// Додаємо обробник події "click" до блока
blockToClick.addEventListener('click', function () {
    // Відображаємо контейнер презентації
    console.log("TEST CLICK")
    presentationContainer.style.display = 'block';
    // Додайте код для завантаження вашої презентації у цей контейнер, наприклад, використовуючи iframe
    // presentationContainer.innerHTML = '<iframe src="URL_презентації"></iframe>';
});
// Додаємо обробник події "click" до контейнера презентації для закриття презентації
presentationContainer.addEventListener('click', function () {
    // Приховуємо контейнер презентації при кліку на нього
    presentationContainer.style.display = 'none';
});



