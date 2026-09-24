const thumb = document.getElementById('scroll-thumb');
const track = document.getElementById('custom-scrollbar');

function isMobile() {
    return window.innerHeight > window.innerWidth;
}

if (!isMobile()) {
    thumb.style.display = 'none';
    track.style.display = 'none';
}

function updateScroll() {
    const scrollTop = window.scrollY;
    const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
    const trackHeight = track.clientHeight - thumb.clientHeight;

    if (scrollHeight > 0) {
        const thumbTop = (scrollTop / scrollHeight) * trackHeight;
        thumb.style.transform = `translateY(${thumbTop}px)`;
    }
}

window.addEventListener('scroll', updateScroll);
window.addEventListener('resize', updateScroll);
