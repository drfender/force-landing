$('.faq_list__element_close').click(function() {
    // $('.faq_list__element__desc').hide();
    if ( $(this).next().css('display') === 'block') {
        $(this).next().hide();
        $(this).find('.faq_list__element_close-arrow>img').attr('src','image/arrow_d.png');
        $(this).find('.faq_list__element_close-text').removeClass('active');
    } else {
        $(this).next().show();
        $(this).find('.faq_list__element_close-text').addClass('active');
        $(this).find('.faq_list__element_close-arrow>img').attr('src','image/arrow_u.png');
    } 
});

$("#form_phone").intlTelInput({
    autoPlaceholder: false,
    preferredCountries: [ "ua", "ru",'by','kz' ],
    initialCountry: 'auto',
    geoIpLookup: function (callback) {
        $.get("https://ipinfo.io", function () { }, "jsonp").always(function (resp) {
            var countryCode = (resp && resp.country) ? resp.country : "UA";
            callback(countryCode);
        });
    }
});

$("#form_phone").on("countrychange", function (e, countryData) {
    // alert('hey')
    // var countryData = $("#form_phone").intlTelInput("getSelectedCountryData")
    $("#form_phone").intlTelInput("setNumber", '+' + countryData.dialCode);
});



// slider
   let image_slide_count = $('.slider_block__slider-img img');
   $('#last_slide').text(image_slide_count.length);
   $('#right_arr').click(function() {
       let count = -1;
        for (let i=0; i<$('.slider_block__slider-img img').length; i++) {
            if($('.slider_block__slider-img img')[i].className == 'active') {
                count = i;
                $('.slider_block__slider-img img')[i].className = '';
                $('.slider_block__slider-text p')[i].className = '';
            }
        
        }
        count++;
        count%=image_slide_count.length;
        image_slide_count[count].className +='active';
        $('.slider_block__slider-text p')[count].className += 'active';
        $('#this_slide').text(count+1)
        
    });
    $('#left_arr').click(function() {
        let count = -1;
        for (let i=0; i<$('.slider_block__slider-img img').length; i++) {
            if($('.slider_block__slider-img img')[i].className == 'active') {
                count = i;
                $('.slider_block__slider-img img')[i].className = '';
                $('.slider_block__slider-text p')[i].className = '';
            }
        }
        if (count == 0) {
            count = image_slide_count.length;
        }
        count--;
        image_slide_count[count].className +='active';
        $('.slider_block__slider-text p')[count].className += 'active';
        $('#this_slide').text(count+1)
    });
// slider

$('a[href^="#"]').click(function(event) {
    var id = $(this).attr("href");
    var offset = 20;
    var target = $(id).offset().top - offset;

$('html, body').animate({scrollTop:target}, 500);
    event.preventDefault();
});

$('.workers_first_block__slider-photos img').click(function() {
    $('.workers_first_block__slider-photos img').removeClass('active');
    this.className = 'active';
    let curentIndex = $(this).data('index');
    for (let i = 0; i<$('.workers_first_block__slider-text').length; i++) {
        if ($('.workers_first_block__slider-text')[i].id == curentIndex) {
            $('.workers_first_block__slider-text').removeClass('active')
            $('.workers_first_block__slider-text')[i].classList.add('active');
        }
    }
}); 

let nameValid = false;
let emailValid = false;
let phoneValid = false;

$('#form_name').keyup(function() {
    let testName = /[A-Za-zА-Яа-яёЁ]+/;
    let value = $(this).val();
    if (testName.test(value)) {
        nameValid = true;
        $(this).css('border', '1px solid green');
    } else {
        nameValid = false;
        $(this).css('border', '1px solid red');
    }
})

$('#form_email').keyup(function() {
    let testEmail = /^[A-Z0-9._%+-]+@([A-Z0-9-]+\.)+[A-Z]{2,4}$/i;
    let value = $(this).val();
    if (testEmail.test(value)) {
        emailValid = true;
        $(this).css('border', '1px solid green');
    } else {
        emailValid = false;
        $(this).css('border', '1px solid red');
    }
});

$('#form_phone').keyup(function() {
    let phone = /^[0-9\-\+]{9,15}$/
    let value = $(this).val();
    if (phone.test(value)) {
        phoneValid = true;
        $(this).css('border', '1px solid green');
    } else {
        phoneValid = false;
        $(this).css('border', '1px solid red');
    }
});

$('.form_block__form').submit(function() {
    let testName = /[A-Za-zА-Яа-яёЁ]+/;
    let value1 = $('#form_name').val();
    if (testName.test(value1)) {
        nameValid = true;
        $('#form_name').css('border', '1px solid green');
    } else {
        nameValid = false;
        $('#form_name').css('border', '1px solid red');
    }
    let testEmail = /^[A-Z0-9._%+-]+@([A-Z0-9-]+\.)+[A-Z]{2,4}$/i;
    let value2 = $('#form_email').val();
    if (testEmail.test(value2)) {
        emailValid = true;
        $('#form_email').css('border', '1px solid green');
    } else {
        emailValid = false;
        $('#form_email').css('border', '1px solid red');
    }
    let phone = /^[0-9\-\+]{9,15}$/
    let value3 =  $('#form_phone').val();
    if (phone.test(value3)) {
        phoneValid = true;
        $('#form_phone').css('border', '1px solid green');
    } else {
        phoneValid = false;
        $('#form_phone').css('border', '1px solid red');
    }
    return phoneValid && nameValid && emailValid;
    
});



