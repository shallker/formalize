module.exports = function Checkbox(element) {

  $(element).on('click', onClick);

  function onClick(click) {
    if (element.disabled) return;
    toggleCheck();
  }

  function toggleCheck() {
    if ($(element).attr('checked')) uncheck(element);
    else check(element);
  }

  function check(ele) {
    // $(ele).prop('checked', true)
    $(ele).attr('checked', '');
    ele.checked = true;
  }

  function uncheck(ele) {
    // $(ele).prop('checked', false)
    $(ele).removeAttr('checked');
    ele.checked = false;
  }

  element.type = 'checkbox';

  element.defaultChecked = function () {
    // $(element).prop('checked')
    if ($(element).attr('checked')) return true;
    else return false;
  }();

  element.checked = element.defaultChecked;

  element.disabled = function () {
    if ($(element).attr('disabled')) return true;
    else return false;
  }();

  element.form = function () {
    return $(element).parents('form').get(0);
  }();

  element.name = function () {
    return $(element).attr('name');
  }();

  element.value = function () {
    // $(element).val()
    return $(element).attr('value');
  }();

  return element;
}
