let condition = true;
let start = 0;
let end = 0;

function forward() {
    anime({
        targets: '.menu-small',
        translateX: ['-110%', '-5%'],
        easing: 'easeInOutQuad',
        direction: 'alternate',
        duration: 1000,
        loop: false
    }); 
    
    anime({
        targets: '.menu_small_icon',
        rotate: 90,
        easing: 'easeInOutQuad',
        direction: 'alternate',
        duration: 1000,
        loop: false
    });
    
    anime({
        targets: '.stick',
        rotate: 180,
        easing: 'easeInOutQuad',
        direction: 'alternate',
        duration: 1000,
        loop: false
    });

    anime({
        targets: 'main',
        opacity: 0.1,       
        duration: 1000,
        loop: false,
        easing: 'easeOutQuad'
    });

    condition = false; 
}

function backward() {
    anime({
        targets: '.menu-small',
        translateX: ['-5%', '-110%'],
        easing: 'easeInOutQuad',
        direction: 'alternate',
        duration: 1000,
        loop: false
    });
    
    anime({
        targets: '.menu_small_icon',
        rotate: -90,
        easing: 'easeInOutQuad',
        direction: 'alternate',
        duration: 1000,
        loop: false
    });
    
    anime({
        targets: '.stick',
        rotate: -180,
        easing: 'easeInOutQuad',
        direction: 'alternate',
        duration: 1000,
        loop: false
    });

    anime({
        targets: 'main',
        opacity: 1,       
        duration: 1000,
        loop: false,
        easing: 'easeOutQuad'
    });

    condition = true; 
}




$('.menu_small_icon').on('touchend', function () {
    if (condition) {
        forward();
    } else {
        backward();
    }
});

$('.menu_small_item').on('touchend', function () {
    backward();
});

// $('.menu_small_icon').on('click', function () {
//     if (condition) {
//         forward();
//     } else {
//         backward();
//     }
// });


$('.container').on('touchstart', function (event) {
    start = event.originalEvent.touches[0].pageX;
});

$('.container').on('touchend', function (event) {
    end = event.originalEvent.changedTouches[0].pageX;
    if (end - start >= 100 && condition) {
        forward();
    } else if (start - end >= 100 && !condition) {
        backward();
    }
});
