!function(e){var r={};function t(s){if(r[s])return r[s].exports;var i=r[s]={i:s,l:!1,exports:{}};return e[s].call(i.exports,i,i.exports,t),i.l=!0,i.exports}t.m=e,t.c=r,t.d=function(e,r,s){t.o(e,r)||Object.defineProperty(e,r,{configurable:!1,enumerable:!0,get:s})},t.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,"a",r),r},t.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},t.p="",t(t.s=2)}([function(e,r){},function(e,r,t){"use strict";$(".faq_list__element_close").click(function(){"block"===$(this).next().css("display")?($(this).next().hide(),$(this).find(".faq_list__element_close-arrow>img").attr("src","image/arrow_d.png"),$(this).find(".faq_list__element_close-text").removeClass("active")):($(this).next().show(),$(this).find(".faq_list__element_close-text").addClass("active"),$(this).find(".faq_list__element_close-arrow>img").attr("src","image/arrow_u.png"))}),$("#form_phone").intlTelInput({autoPlaceholder:!1,preferredCountries:["ua","ru","by","kz"],initialCountry:"auto",geoIpLookup:function(e){$.get("https://ipinfo.io",function(){},"jsonp").always(function(r){var t=r&&r.country?r.country:"UA";e(t)})}}),$("#form_phone").on("countrychange",function(e,r){$("#form_phone").intlTelInput("setNumber","+"+r.dialCode)});var s=$(".slider_block__slider-img img");$("#last_slide").text(s.length),$("#right_arr").click(function(){for(var e=-1,r=0;r<$(".slider_block__slider-img img").length;r++)"active"==$(".slider_block__slider-img img")[r].className&&(e=r,$(".slider_block__slider-img img")[r].className="",$(".slider_block__slider-text p")[r].className="");e++,e%=s.length,s[e].className+="active",$(".slider_block__slider-text p")[e].className+="active",$("#this_slide").text(e+1)}),$("#left_arr").click(function(){for(var e=-1,r=0;r<$(".slider_block__slider-img img").length;r++)"active"==$(".slider_block__slider-img img")[r].className&&(e=r,$(".slider_block__slider-img img")[r].className="",$(".slider_block__slider-text p")[r].className="");0==e&&(e=s.length),s[--e].className+="active",$(".slider_block__slider-text p")[e].className+="active",$("#this_slide").text(e+1)}),$('a[href^="#"]').click(function(e){var r=$(this).attr("href"),t=$(r).offset().top-20;$("html, body").animate({scrollTop:t},500),e.preventDefault()}),$(".workers_first_block__slider-photos img").click(function(){$(".workers_first_block__slider-photos img").removeClass("active"),this.className="active";for(var e=$(this).data("index"),r=0;r<$(".workers_first_block__slider-text").length;r++)$(".workers_first_block__slider-text")[r].id==e&&($(".workers_first_block__slider-text").removeClass("active"),$(".workers_first_block__slider-text")[r].classList.add("active"))});var i=!1,o=!1,l=!1;$("#form_name").keyup(function(){var e=$(this).val();/[A-Za-zА-Яа-яёЁ]+/.test(e)?(i=!0,$(this).css("border","1px solid green")):(i=!1,$(this).css("border","1px solid red"))}),$("#form_email").keyup(function(){var e=$(this).val();/^[A-Z0-9._%+-]+@([A-Z0-9-]+\.)+[A-Z]{2,4}$/i.test(e)?(o=!0,$(this).css("border","1px solid green")):(o=!1,$(this).css("border","1px solid red"))}),$("#form_phone").keyup(function(){var e=$(this).val();/^[0-9\-\+]{9,15}$/.test(e)?(l=!0,$(this).css("border","1px solid green")):(l=!1,$(this).css("border","1px solid red"))}),$(".form_block__form").submit(function(){var e=$("#form_name").val();/[A-Za-zА-Яа-яёЁ]+/.test(e)?(i=!0,$("#form_name").css("border","1px solid green")):(i=!1,$("#form_name").css("border","1px solid red"));var r=$("#form_email").val();/^[A-Z0-9._%+-]+@([A-Z0-9-]+\.)+[A-Z]{2,4}$/i.test(r)?(o=!0,$("#form_email").css("border","1px solid green")):(o=!1,$("#form_email").css("border","1px solid red"));var t=$("#form_phone").val();return/^[0-9\-\+]{9,15}$/.test(t)?(l=!0,$("#form_phone").css("border","1px solid green")):(l=!1,$("#form_phone").css("border","1px solid red")),l&&i&&o})},function(e,r,t){t(1),e.exports=t(0)}]);
//# sourceMappingURL=minScripts.js.map