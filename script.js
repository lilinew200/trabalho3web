function toggleRoomState(element) {
    if (element.classList.contains('free')) {
        element.classList.remove('free');
        element.classList.add('occupied');
        element.innerHTML = element.innerHTML.replace('Livre', 'Ocupada');
    } else if (element.classList.contains('occupied')) {
        element.classList.remove('occupied');
        element.classList.add('maintenance');
        element.innerHTML = element.innerHTML.replace('Ocupada', 'Manutenção');
    } else if (element.classList.contains('maintenance')) {
        element.classList.remove('maintenance');
        element.classList.add('free');
        element.innerHTML = element.innerHTML.replace('Manutenção', 'Livre');
    }
}
