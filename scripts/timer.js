const timer = document.querySelector('#clock')
let total_seconds = parseInt(localStorage.getItem('total_site_uptime')) || 0;

function update_timer_display() {
    const hours = Math.floor(total_seconds / 3600);
    const minutes = Math.floor((total_seconds % 3600) / 60);
    const seconds = total_seconds % 60;

    const formatted = String(hours).padStart(2, '0') + ':' +
                      String(minutes).padStart(2, '0') + ':' +
                      String(seconds).padStart(2, '0');

    timer.innerHTML = formatted;
}

update_timer_display();

setInterval(() => {
    total_seconds++;
    localStorage.setItem('total_site_uptime', total_seconds);
    update_timer_display();
}, 1000); // every second
