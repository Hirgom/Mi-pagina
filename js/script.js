// Inicializar AOS (Animaciones)
AOS.init({
    duration: 1000,
    once: true,
    offset: 100
});

// Navbar scroll effect
$(window).scroll(function() {
    if ($(this).scrollTop() > 50) {
        $('.navbar').addClass('scrolled');
    } else {
        $('.navbar').removeClass('scrolled');
    }
});

// Smooth scroll para los enlaces internos
$('a[href^="#"]').on('click', function(event) {
    var target = $(this.getAttribute('href'));
    if (target.length) {
        event.preventDefault();
        $('html, body').animate({
            scrollTop: target.offset().top - 70
        }, 1000);
    }
});

// Marcar el enlace activo en el navbar
$(window).scroll(function() {
    var scrollDistance = $(window).scrollTop();
    
    $('section').each(function(i) {
        if ($(this).position().top <= scrollDistance + 100) {
            $('.navbar-nav a.active').removeClass('active');
            $('.navbar-nav a').eq(i).addClass('active');
        }
    });
}).scroll();

// Formulario de contacto
$('#contactForm').on('submit', function(e) {
    e.preventDefault();
    
    // Aquí iría la lógica para enviar el formulario
    // Por ahora solo mostramos un mensaje
    alert('¡Gracias por contactarme! Te responderé pronto.');
    this.reset();
});

// Animación de las barras de progreso cuando son visibles
function animateProgressBars() {
    $('.progress-bar').each(function() {
        var width = $(this).css('width');
        $(this).css('width', '0%');
        $(this).animate({
            width: width
        }, 1000);
    });
}

// Detectar cuando las skills son visibles
$(window).scroll(function() {
    var skillsSection = $('#skills');
    if (skillsSection.length) {
        var sectionTop = skillsSection.offset().top;
        var sectionBottom = sectionTop + skillsSection.outerHeight();
        var scrollTop = $(window).scrollTop();
        var windowHeight = $(window).height();
        
        if (scrollTop + windowHeight > sectionTop && scrollTop < sectionBottom) {
            animateProgressBars();
        }
    }
});

// Tooltips de Bootstrap
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
var tooltipList = tooltipTriggerList.map(function(tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl);
});

console.log('🚀 Portafolio de Wilfer Andrés Carmona Orrego cargado correctamente');