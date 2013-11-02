var test = require('simple-test');
var Checkbox = require('formalize').Checkbox;

var checkbox = new Checkbox(document.getElementById('my-checkbox'))
var checkboxElement = document.getElementById('my-checkbox');

test('checkbox.type', function () {
  test.eq(checkboxElement.type, 'checkbox');
});

test('checkbox.name', function () {
  test.eq(checkboxElement.name, 'foo');
});

test('checkbox.value', function () {
  test.eq(checkboxElement.value, 'bar');
});

test('checkbox.defaultChecked', function () {
  test.eq(checkboxElement.defaultChecked, true);
});

test('checkbox.checked', function () {
  test.eq(checkboxElement.checked, true);
});

test('checkbox.disabled', function () {
  test.eq(checkboxElement.disabled, false);
});

test('checkbox.form', function () {
  test.ok(checkboxElement.form);
});
