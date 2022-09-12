$(function(){
    populateCarousel(sliderImages);
    populateArtistList();
    $("#artists a").on( "mouseenter",(function() {
        var index = this.getAttribute('data-index') ? parseInt(this.getAttribute('data-index')) : -1;
        var imgSrc = showArtistImage(index);
        if (isMobile()) {
            $('.right-container-mob').removeClass('d-none');
            $('.right-container-mob img').attr("src", imgSrc);
        }
        else {
            //$('.left-container').removeClass('col-12').addClass('col-md-8', 'col-lg-9');
            $('.right-container').removeClass('d-none');
            $('.right-container img').attr("src", imgSrc);
        }
    }));
    $("#artists a").on( "mouseleave",(function () {
       // $('.left-container').removeClass('col-md-8', 'col-lg-9').addClass('col-12')
        $('.right-container').addClass('d-none');
    }));
});
function showSearchField() {
    if ($('.navbar-form').hasClass("d-none"))
        $('.navbar-form').removeClass("d-none").addClass("d-inline-block");
    else {
        //todo search action
        $('.navbar-form').removeClass("d-inline-block").addClass("d-none");
    }
}
function populateCarousel(sliderImages) {
    for (var index = 0; index < sliderImages.length; index++) {
        $('<div class="carousel-item"><img class="d-block w-100" src="' + sliderImages[index] +
            '"></div>').appendTo('.carousel-inner');
        $('<li data-target="#banner-carousel" data-slide-to="' + index +
            '"></li>').appendTo('.carousel-indicators')
    }
    $('.carousel-item').first().addClass('active');
    $('.carousel-indicators > li').first().addClass('active');
}
function populateArtistList() {
    artistList.forEach((artist, index) => {
        $('<li class="pb-2"> <a href="#" data-index="' + index + '">' + artist.name +
            '</a></li>').appendTo('#artists')
    })
}
function showArtistImage(imageIndex) {
    var src = ""
    artistList.forEach((artist, index) => {
        if (imageIndex == index) {
            src = artist.imageSrc;
            return;
        }
    })
    return src;
}
function isMobile() {
    return window.matchMedia("(max-width: 767px)").matches;
}