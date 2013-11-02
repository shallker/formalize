var $ = require('jquery');
var eventy = require('eventy');

module.exports = function Radio(element) {

  if (element.__initRadio) throw new Error('initialized element already');

  eventy(element);

  element.addEventListener('click', onClick, true);

  function onClick(click) {
    if (element.disabled) return;
    if (element.checked) return;
    check(element);
  }

  function check(ele) {
    uncheckOthers();
    ele.checked = true;
  }

  function uncheck(ele) {
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

  function getParents(ele) {
    var ancestors = [],
        parent = ele.parentNode;

    while (parent && (parent.nodeType !== parent.DOCUMENT_NODE)) {
      ancestors.push(parent);
      parent = parent.parentNode;
    }

    return ancestors;
  }

  /*
    Returns which type of form element this radio button is
    @return String
  */
  Object.defineProperty(element, 'type', {
    value: 'radio'
  })

  /*
    The default value of the checked attribute, returns true if this radio
    button is checked by default, otherwise false.
    @return Boolean
  */
  Object.defineProperty(element, 'defaultChecked', {
    value: (function () {
      if (element.hasAttribute('checked')) return true;
      else return false;
    }())
  })

  /*
    Sets or returns the checked state of this radio button
    @return Boolean
  */
  Object.defineProperty(element, 'checked', {
    get: function () {
      if (element.hasAttribute('checked')) return true;
      else return false;
    },

    set: function (value) {
      if (value) {
        element.setAttribute('checked', '');
        element.trigger('checked').trigger('change');
      } else {
        element.removeAttribute('checked');
        element.trigger('unchecked').trigger('change');
      }
    }
  })

  /*
    Sets or returns whether this radio button is disabled or not
    @return Boolean
  */
  Object.defineProperty(element, 'disabled', {
    get: function () {
      if (element.hasAttribute('disabled')) return true;
      else return false;
    },

    set: function (value) {
      if (value) {
        element.setAttribute('disabled', '');
        element.trigger('disabled').trigger('change');
      } else {
        element.removeAttribute('disabled');
        element.trigger('enabled').trigger('change');
      }
    }
  })

  /*
    Returns a reference to the form that contains this radio button
    @return Object
  */
  Object.defineProperty(element, 'form', {
    value: (function () {
      var parents = getParents(element);

      for (var i in parents) {
        if (parents[i].tagName === 'FORM') return parents[i];
      }

      return null;
    }())
  })

  /*
    Sets or returns the value of the name atrribute of this radio button
    @return String
  */
  Object.defineProperty(element, 'name', {
    get: function () {
      if (element.hasAttribute('name')) return element.getAttribute('name');
      else return '';
    },

    set: function (value) {
      element.setAttribute('name', value);
      element.trigger('change');
    }
  })

  /*
    Sets or returns the value of the value atrribute of the radio button
    @return String
  */
  Object.defineProperty(element, 'value', {
    get: function () {
      if (element.hasAttribute('value')) return element.getAttribute('value');
      else return '';
    },

    set: function (value) {
      element.setAttribute('value', value);
      element.trigger('change');
    }
  })

  /**
   * For some browsers that don't redraw the element after changing its attribute
   */
  element.on('change', function () {
    element.className = element.className;
  });

  element.__initRadio = true;
  return element;
}
