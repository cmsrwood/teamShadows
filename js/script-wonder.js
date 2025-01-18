document.addEventListener('DOMContentLoaded', function () {
    const navbarToggle = document.getElementById('navbarToggle');
    const navbarMenu = document.getElementById('navbarMenu');

    navbarToggle.addEventListener('click', function () {
        navbarMenu.style.display = navbarMenu.style.display === 'block' ? 'none' : 'block';
    });

    document.getElementById('playerAge').textContent = '20';
    document.getElementById('playerHeight').textContent = '1.85m';
    document.getElementById('playerRole').textContent = 'Duelista';
    document.getElementById('playerDescription').textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.';

    const highlightsGrid = document.getElementById('highlightsGrid');
    for (let i = 0; i < 6; i++) {
        const highlightItem = document.createElement('div');
        highlightItem.className = 'highlight-item';
        highlightsGrid.appendChild(highlightItem);
    }

    particlesJS('particles-js', {
        particles: {
            number: {
                value: 80,
                density: {
                    enable: true,
                    value_area: 800
                }
            },
            color: {
                value: '#ffffff'
            },
            shape: {
                type: 'circle',
                stroke: {
                    width: 0,
                    color: '#000000'
                },
                polygon: {
                    nb_sides: 5
                }
            },
            opacity: {
                value: 0.5,
                random: false,
                anim: {
                    enable: false,
                    speed: 1,
                    opacity_min: 0.1,
                    sync: false
                }
            },
            size: {
                value: 3,
                random: true,
                anim: {
                    enable: false,
                    speed: 40,
                    size_min: 0.1,
                    sync: false
                }
            },
            line_linked: {
                enable: true,
                distance: 150,
                color: '#ffffff',
                opacity: 0.4,
                width: 1
            },
            move: {
                enable: true,
                speed: 6,
                direction: 'none',
                random: false,
                straight: false,
                out_mode: 'out',
                bounce: false,
                attract: {
                    enable: false,
                    rotateX: 600,
                    rotateY: 1200
                }
            }
        },
        interactivity: {
            detect_on: 'canvas',
            events: {
                onhover: {
                    enable: true,
                    mode: 'repulse'
                },
                onclick: {
                    enable: true,
                    mode: 'push'
                },
                resize: true
            },
            modes: {
                grab: {
                    distance: 400,
                    line_linked: {
                        opacity: 1
                    }
                },
                bubble: {
                    distance: 400,
                    size: 40,
                    duration: 2,
                    opacity: 8,
                    speed: 3
                },
                repulse: {
                    distance: 200,
                    duration: 0.4
                },
                push: {
                    particles_nb: 4
                },
                remove: {
                    particles_nb: 2
                }
            }
        },
        retina_detect: true
    });
});

document.getElementById('contactForm').addEventListener('submit', function (event) {
    event.preventDefault();
    validateForm();
});

function validateForm() {
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (!name || !email || !message) {
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Todos los campos son requeridos',
            background: '#2b2b2b',
            color: '#fff'
        });
        return false;
    }

    if (!validateEmail(email)) {
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Por favor ingresa un email válido',
            background: '#2b2b2b',
            color: '#fff'
        });
        return false;
    }

    Swal.fire({
        icon: 'success',
        title: '¡Éxito!',
        text: 'Mensaje enviado correctamente',
        background: '#2b2b2b',
        color: '#fff'
    });

    document.getElementById('contactForm').reset();
    return true;
}

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}