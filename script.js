const ghosts = document.querySelectorAll('.ghost');
ghosts.forEach((ghost, i) => {
    ghost.style.setProperty("--index", i);
    ghost.style.setProperty("--total", ghosts.length);
});