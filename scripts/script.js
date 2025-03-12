window.onload = function () {
    let fullNameInput = document.getElementById('fullName');
    let userNameInput = document.getElementById('userName');
    let emailInput = document.getElementById('emailInput');
    let passwordInput = document.getElementById('passwordInput');
    let confirmPasswordInput = document.getElementById('confirmPassword');
    let agreementCheckbox = document.getElementById('agreementCheckbox');
    let signUpBtn = document.getElementById('signUpBtn');
    let loginLink = document.getElementById('loginLink');
    let popupOkBtn = document.getElementById('popupOkBtn');

    fullNameInput.onkeydown = (event) => {
        let number = parseInt(event.key);
        if (!isNaN(number)) {
            event.preventDefault();
        }
    };

    userNameInput.onkeydown = (event) => {
        if (event.key === '.' || event.key === ',') {
            event.preventDefault();
        }
    };

    agreementCheckbox.onchange = (event) => {
        if (event.target.checked === true) {
            console.log('Согласен');
        } else {
            console.log('Не согласен');
        }
    };

    function signUpHandler(event) {
        event.preventDefault();

        if (!fullNameInput.value) {
            alert('Заполните поле Full Name');
            return;
        }

        if (!userNameInput.value) {
            alert('Заполните поле username');
            return;
        }

        if (!emailInput.value) {
            alert('Заполните поле E-mail');
            return;
        }

        if (!passwordInput.value) {
            alert('Заполните поле Password');
            return;
        } else if (passwordInput.value.length < 8) {
            alert('Поле Password должно содержать больше 8-и символов');
            return;
        }

        if (!confirmPasswordInput.value) {
            alert('Заполните поле Repeat Password');
            return;
        } else if (confirmPasswordInput.value !== passwordInput.value) {
            alert('Введенные пароли не совпадают');
            return;
        }

        if (!agreementCheckbox.checked) {
            alert('Примите соглашение об условиях пользования сервисом');
            return;
        }

        let popupOverlay = document.getElementById('popupOverlay');
        popupOverlay.style.display = 'block';

        let popupOkBtn = document.getElementById('popupOkBtn');
        popupOkBtn.onclick = () => {
            popupOverlay.style.display = 'none';

            document.getElementById('accountForm').reset();
        };
    }

    function signInHandler(event) {
        event.preventDefault();

        let passwordInput = document.getElementById('passwordInput');

        if (!userNameInput.value) {
            alert('Заполните поле username');
            return;
        }

        if (!passwordInput.value) {
            alert('Заполните поле Password');
        } else {
            alert('Добро пожаловать, ' + userNameInput.value + '!');
        }

        document.getElementById('accountForm').reset();
    }

    function switchToLoginHandler() {
        document.getElementById('formBlockTitle').innerText = 'Log in to the system';

        document.getElementById('fullNameBlock').remove();
        document.getElementById('emailBlock').remove();
        document.getElementById('confirmPasswordBlock').remove();
        document.getElementById('agreementBlock').remove();

        signUpBtn.innerText = 'Sign In';

        document.getElementById('loginBlock').remove();

        signUpBtn.removeEventListener('click', signUpHandler);

        signUpBtn.addEventListener('click', signInHandler);
    }

    signUpBtn.addEventListener('click', signUpHandler);

    loginLink.addEventListener('click', switchToLoginHandler);

    popupOkBtn.addEventListener('click', switchToLoginHandler);
}