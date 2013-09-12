var $ = jQuery = require('jquery');
var Radio = require('formalize').Radio;

$(function () {
  $('.my.input[type=radio]').each(function (index, ele) {
    new Radio(ele)
  })
})


