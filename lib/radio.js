module.exports = function Radio(element) {

  $(element).on('click', onClick);

  function onClick(click) {
    if (element.disabled) return;
    toggleCheck();
  }

  function toggleCheck() {
    if ($(element).attr('checked')) return;
    uncheckOthers();
    check(element);
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

  function uncheckOthers() {
    var scope = element.form || document;
    $(scope)
      .find('[type=radio][name="' + element.name + '"]')
      .not($(element))
      .each(function (index, ele) {
        uncheck(ele);
      });
  }

  element.type = 'radio';

  element.defaultChecked = function () {
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
    return $(element).attr('value');
  }();

  return element;
}
