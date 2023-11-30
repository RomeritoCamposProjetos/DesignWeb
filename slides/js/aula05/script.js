function mostrarHoras() {
    const clock = document.querySelector('#clock');
    let now = new Date();
    clock.textContent = now.toLocaleTimeString();
}
mostrarHoras();
setInterval(mostrarHoras, 1000);