let login = prompt('Login', 3);

if (login.toLowerCase() == 'admin') {
    alert('Hi Admin!');
} else {
    alert('Warning! User rights limited');
}