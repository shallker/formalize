var ok = function (v) {if (!v) throw v + ' is not ok'},
    eq = function (a, b) {if (a !== b) throw a + ' not equal ' + b},
    s = function (data) {eq(Object.prototype.toString.call(data), '[object String]')},
    f = function (data) {eq(Object.prototype.toString.call(data), '[object Function]')},
    a = function (data) {eq(Object.prototype.toString.call(data), '[object Array]')},
    b = function (data) {eq(Object.prototype.toString.call(data), '[object Boolean]')},
    o = function (data) {eq(Object.prototype.toString.call(data), '[object Object]')};

var $ = jQuery = require('jquery');
var Checkbox = require('formalize').Checkbox;


$(function () {
  new Checkbox(document.getElementById('my-checkbox'))
  window.cb = document.getElementById('my-checkbox')
  s(cb.type)
  s(cb.name)
  s(cb.value)
  b(cb.defaultChecked)
  b(cb.checked)
  b(cb.disabled)
  // o(cb.form)

  eq(cb.defaultChecked, true)
  cb.defaultChecked = false
  eq(cb.defaultChecked, true)

  eq(cb.checked, true);
  cb.checked = false
  eq(cb.checked, false);

})
