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

  /*
    Sets or returns the value of the value atrribute of this checkbox button.
    @return String
  */
  element.type = 'checkbox';

  /*
    The default value of the checked attribute, returns true if this checkbox
    button is checked by default, otherwise false.
    @return Boolean
  */
  element.defaultChecked = function () {
    if ($(element).attr('checked')) return true;
    else return false;
  }();

  /*
    Sets or returns the checked state of this checkbox button.
    @return Boolean
  */
  element.checked = element.defaultChecked;

  /*
    Sets or returns whether this checkbox button is disabled or not.
    @return Boolean
  */
  element.disabled = function () {
    if ($(element).attr('disabled')) return true;
    else return false;
  }();

  /*
    Returns a reference to the form that contains this checkbox button.
    @return Object
  */
  element.form = function () {
    return $(element).parents('form').get(0);
  }();

  /*
    Sets or returns the value of the name atrribute of this checkbox button.
    @return String
  */
  element.name = function () {
    return $(element).attr('name');
  }();

  /*
    Sets or returns the value of the value atrribute of the checkbox button.
    @return String
  */
  element.value = function () {
    return $(element).attr('value');
  }();

  return element;
}
