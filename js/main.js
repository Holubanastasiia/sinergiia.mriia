const menuBtn = document.querySelector('#menu-btn');
const headerMenu = document.querySelector('.header__menu');
const headerContact = document.querySelector('.header__contact');
// const body = document.querySelector("body");

menuBtn.addEventListener('click', () => {
    if (headerMenu.classList.contains('show')) {
        headerMenu.classList.remove('show');
        headerContact.style.display = 'none';
        menuBtn.textContent = "Меню";
    } else {
        headerMenu.classList.add('show');
        menuBtn.textContent = "Закрити";
        // body.style.overflow = 'hidden';
        headerContact.style.display = 'inline-block';
    }

});

headerMenu.addEventListener('click', function (event) {
    if (event.target.tagName === 'A') {
        headerMenu.classList.remove('show');
        headerContact.style.display = 'none';
        menuBtn.textContent = 'Меню';
    }
});

const form = document.querySelector('.form');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    sendMessage(form);
});

async function sendMessage(form) {
    const formData = new FormData(form);

    if(formData) {
        const url = 'sendmessage.php';
        const response = await fetch(url, {
            method: "POST",
            body: formData
        });
        if (response.ok) {
            form.reset();
            alert("Вітаємо! Ваша заявка прийнятаю Очікуйте дзвінка від нашого менеджера.")
        } else {
            alert("Щось пішло не так... Спробуйте ще раз!");
        }
    }

}

