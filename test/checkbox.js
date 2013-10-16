var ok = function (x) {if (!x) throw new Error(x + ' is not ok')},
    eq = function (x, y) {if (x !== y) throw new Error(x + ' not equal ' + y)},
    s = function (x) {eq(Object.prototype.toString.call(x), '[object String]')},
    f = function (x) {eq(Object.prototype.toString.call(x), '[object Function]')},
    a = function (x) {eq(Object.prototype.toString.call(x), '[object Array]')},
    b = function (x) {eq(Object.prototype.toString.call(x), '[object Boolean]')},
    o = function (x) {eq(Object.prototype.toString.call(x), '[object Object]')};

var Checkbox = require('formalize').Checkbox;

var checkbox = new Checkbox(document.getElementById('my-checkbox'))
var checkboxElement = document.getElementById('my-checkbox');

s(checkboxElement.type)
s(checkboxElement.name)
s(checkboxElement.value)
b(checkboxElement.defaultChecked)
b(checkboxElement.checked)
b(checkboxElement.disabled)
ok(checkboxElement.form)

eq(checkboxElement.defaultChecked, true)
checkboxElement.defaultChecked = false
eq(checkboxElement.defaultChecked, true)

eq(checkboxElement.checked, true);
checkboxElement.checked = false
eq(checkboxElement.checked, false);
