// switch them
var checkbox = document.querySelector('input[name=theme]');

checkbox.addEventListener('change', function () {
    if (this.checked) {
        trans()
        document.documentElement.setAttribute('data-theme', 'dark');
    } else {
        trans()
        document.documentElement.setAttribute('data-theme', 'light');
    }
})

let trans = () => {
    document.documentElement.classList.add('transition');
    window.setTimeout(() => {
        document.documentElement.classList.remove('transition')
    }, 1000)
}

//modal
$(".information-card__button").click(function (e) {
    const cardText = $(this).siblings(".information-card__text");
    $(".modal-title")[0].innerHTML = $(this).siblings(".information-card__title")[0].innerText;
    $(".modal-body")[0].innerHTML = $(this).siblings(".information-card__text").length ?
        $(this).siblings(".information-card__text")[0].innerText
        : "توضیحاتی برای نمایش وجود ندارد";
});

//particlesJS
particlesJS('particles-js',
    {
        "fullScreen": {
            "enable": true,
            "zIndex": 1
        },
        "particles": {
            "number": {
                "value": 100
            },
            "color": {
                "value": "#92B4EC"
            },
            "shape": {
                "type": "star",
                "options": {
                    "star": {
                        "sides": 5
                    }
                }
            },
            "opacity": {
                "value": 0.5,
                "random": false,
                "anim": {
                    "enable": false,
                    "speed": 1,
                    "opacity_min": 0.1,
                    "sync": false
                }
            },
            "size": {
                "value": 4,
                "random": true,
                "anim": {
                    "enable": false,
                    "speed": 40,
                    "size_min": 0.1,
                    "sync": false
                }
            },
            "line_linked": {
                "enable": false,
                "distance": 150,
                "color": "#ffffff",
                "opacity": 0.4,
                "width": 1
            },
            "move": {
                "enable": true,
                "speed": 6,
                "direction": "left",
                "random": false,
                "straight": true,
                "out_mode": "out",
                "bounce": false,
                "attract": {
                    "enable": false,
                    "rotateX": 600,
                    "rotateY": 1200
                }
            }
        },
        "interactivity": {
            "events": {
                "onhover": {
                    "enable": false,
                    "mode": "grab"
                },
                "onclick": {
                    "enable": true,
                    "mode": "repulse"
                },
                "resize": true
            },
            "modes": {
                "grab": {
                    "distance": 200,
                    "line_linked": {
                        "opacity": 1
                    }
                },
                "bubble": {
                    "distance": 400,
                    "size": 40,
                    "duration": 2,
                    "opacity": 8,
                    "speed": 3
                },
                "repulse": {
                    "distance": 200,
                    "duration": 0.4
                },
                "push": {
                    "particles_nb": 4
                },
                "remove": {
                    "particles_nb": 2
                }
            }
        },
        "retina_detect": true,
        "background": {
            "color": "#043564",
            "image": "url('http://vincentgarreau.com/particles.js/assets/img/kbLd9vb_new.gif')",
            "position": "0 50%",
            "repeat": "no-repeat",
            "size": "60%"
        }
    }
);

