document.getElementById('colorChangeButton').addEventListener('click', function() {
    document.documentElement.classList.remove('color-change-2');
    document.documentElement.classList.toggle('color-change-1');
});

document.getElementById('colorChangeButton2').addEventListener('click', function() {
    document.documentElement.classList.remove('color-change-1');
    document.documentElement.classList.toggle('color-change-2');
});

document.getElementById('resetColorsButton').addEventListener('click', function() {
    document.documentElement.classList.remove('color-change-1', 'color-change-2');
});
