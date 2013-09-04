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

  /*
    Sets or returns the value of the value atrribute of this radio button.
    @return String
  */
  element.type = 'radio';

  /*
    The default value of the checked attribute, returns true if this radio
    button is checked by default, otherwise false.
    @return Boolean
  */
  element.defaultChecked = function () {
    if ($(element).attr('checked')) return true;
    else return false;
  }();

  /*
    Sets or returns the checked state of this radio button.
    @return Boolean
  */
  element.checked = element.defaultChecked;

  /*
    Sets or returns whether this radio button is disabled or not.
    @return Boolean
  */
  element.disabled = function () {
    if ($(element).attr('disabled')) return true;
    else return false;
  }();

  /*
    Returns a reference to the form that contains this radio button.
    @return Object
  */
  element.form = function () {
    return $(element).parents('form').get(0);
  }();

  /*
    Sets or returns the value of the name atrribute of this radio button.
    @return String
  */
  element.name = function () {
    return $(element).attr('name');
  }();

  /*
    Sets or returns the value of the value atrribute of the radio button.
    @return String
  */
  element.value = function () {
    return $(element).attr('value');
  }();

  return element;
}
