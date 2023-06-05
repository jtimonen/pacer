function setDistance(km) {
    document.getElementById('distance').value = km;
}

function calculatePace() {
    const distance = document.getElementById('distance').value;
    const hours = document.getElementById('hours').value;
    const minutes = document.getElementById('minutes').value;
    const seconds = document.getElementById('seconds').value;

    if (distance && (hours || minutes || seconds)) {
        const totalMinutes = hours * 60 + parseFloat(minutes) + parseFloat(seconds / 60);
        const pace = totalMinutes / distance;
        const paceMinutes = Math.floor(pace);
        const paceSeconds = Math.round((pace % 1) * 60 * 10) / 10; // to keep 1 decimal place

        // Ensure two digits for minutes and seconds
        const formattedPaceMinutes = paceMinutes.toString().padStart(2, '0');
        const formattedPaceSeconds = paceSeconds.toFixed(1).padStart(4, '0'); // pad to 4 to account for decimal

        document.getElementById('pace').textContent = `${formattedPaceMinutes}:${formattedPaceSeconds} per kilometer.`;
    } else {
        document.getElementById('pace').textContent = 'Please enter both distance and time.';
    }
}
