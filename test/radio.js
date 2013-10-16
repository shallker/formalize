var ok = function (x) {if (!x) throw new Error(x + ' is not ok')},
    eq = function (x, y) {if (x !== y) throw new Error(x + ' not equal ' + y)},
    s = function (x) {eq(Object.prototype.toString.call(x), '[object String]')},
    f = function (x) {eq(Object.prototype.toString.call(x), '[object Function]')},
    a = function (x) {eq(Object.prototype.toString.call(x), '[object Array]')},
    b = function (x) {eq(Object.prototype.toString.call(x), '[object Boolean]')},
    o = function (x) {eq(Object.prototype.toString.call(x), '[object Object]')};

var Radio = require('formalize').Radio;
var elements = document.querySelectorAll('.my.input[type=radio]');
var radioElement = document.querySelector('.my.input[type=radio]');

for (var i = 0; i < elements.length; i++) {
  new Radio(elements.item(i));
}

s(radioElement.type)
s(radioElement.name)
s(radioElement.value)
b(radioElement.defaultChecked)
b(radioElement.checked)
b(radioElement.disabled)
ok(radioElement.form)
eq(radioElement.defaultChecked, true)
eq(radioElement.checked, true);
