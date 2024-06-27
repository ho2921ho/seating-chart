document.addEventListener('DOMContentLoaded', () => {
    const seats = document.querySelectorAll('.seat.red');
    const nameDisplay = document.getElementById('name-display');

    seats.forEach(seat => {
        seat.addEventListener('click', () => {
            const name = seat.getAttribute('data-name');
            nameDisplay.textContent = name;
        });
    });
});
