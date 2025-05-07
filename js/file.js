document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('bugReportForm');

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        resetErrors();

        const isUsernameValid = validateUsername();
        const isEmailValid = validateEmail();
        const isServerValid = validateServer();
        const isDescriptionValid = validateDescription();
        const isPermissionChecked = validatePermission();

        console.log({
            isUsernameValid,
            isEmailValid,
            isServerValid,
            isDescriptionValid,
            isPermissionChecked
        });

        if (isUsernameValid && isEmailValid && isServerValid && isDescriptionValid && isPermissionChecked) {
            const modal = document.getElementById('successModal');
            modal.style.display = 'flex'; // Tampilkan modal

            // Tambahkan event listener tombol close
            document.getElementById('closeModal').addEventListener('click', function () {
                window.location.href = 'index.html'; // Ganti dengan halaman tujuan
            });
        }
    });

    function resetErrors() {
        const existingErrors = document.querySelectorAll('.input-error');
        existingErrors.forEach(el => el.remove());
    }

    function showError(inputId, message) {
        const input = document.getElementById(inputId);
        if (input) {
            const error = document.createElement('div');
            error.className = 'input-error';
            error.style.color = 'red';
            error.style.fontSize = '0.9rem';
            error.style.marginTop = '4px';
            error.textContent = message;
            input.parentNode.appendChild(error);
        }
    }

    function validateUsername() {
        const usernameElement = document.getElementById('username');
        if (!usernameElement) {
            console.error('Username input element not found');
            return false;
        }
        const username = usernameElement.value.trim();

        if (username === '') {
            showError('username', 'Username is required');
            return false;
        }

        if (username.length < 3) {
            showError('username', 'Username must be at least 3 characters');
            return false;
        }

        if (username.includes(' ')) {
            showError('username', 'Username cannot contain spaces');
            return false;
        }

        const allowedChars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789._';
        for (let i = 0; i < username.length; i++) {
            if (!allowedChars.includes(username[i])) {
                showError('username', 'Username can only contain letters, numbers, underscores, and periods');
                return false;
            }
        }

        return true;
    }

    function validateEmail() {
        const email = document.getElementById('email').value.trim();
        if (email === '') {
            showError('email', 'Email is required');
            return false;
        }
        if (email.indexOf('@') === -1 || email.indexOf('.') === -1 || email.length < 5) {
            showError('email', 'Please enter a valid email address(contains @ and .)');
            return false;
        }
        return true;
    }

    function validateServer() {
        const server = document.getElementById('server').value.trim();
        if (server === '') {
            showError('server', 'Server is required');
            return false;
        }
        return true;
    }

    function validateDescription() {
        const description = document.getElementById('description').value.trim();
        if (description === '') {
            showError('description', 'Description is required');
            return false;
        }
        if (description.length < 15) {
            showError('description', 'Description must be at least 15 characters');
            return false;
        }
        return true;
    }

    function validatePermission() {
        const permission = document.getElementById('permission');
        if (!permission.checked) {
            showError('permission', 'You must agree to receive updates');
            return false;
        }
        return true;
    }
});
