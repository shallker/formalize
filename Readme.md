
# formalize

  Formalize custom inputs to form elements, or at least let them behave like form elements.

## Installation

  Install with [component(1)](http://component.io):

    $ component install shallker/formalize

## Quick Start
```javascript
var Radio = require('formalize').Radio;

$('.my.input[type=radio]').each(function (element) {
  new Radio(element);
});
```

## Reference
For all the properties and methods a native form element has, see [doc.md](https://raw.github.com/shallker/formalize/master/doc.md).

## API
### Radio
```javascript
var Radio = require('formalize').Radio;

$('.my.input[type=radio]').each(function (element) {
  new Radio(element);
});
```

#### .type
return 'radio'

#### .defaultChecked
return true if radio is checked by default, otherwise return false

#### .checked
return true if radio is checked by now, otherwise return false

#### .disabled
return true if radio is disabled by now, otherwise return false

#### .name
return attribute name of radio

#### .value
return attribute value of radio

#### .form
return the parent form element of radio


### Checkbox
```javascript
var Checkbox = require('formalize').Checkbox;
$('.my.input[type=checkbox]').each(function (element) {
  new Checkbox(element);
});
```

#### .type
return 'checkbox'

#### .defaultChecked
return true if checkbox is checked by default, otherwise return false

#### .checked
return true if checkbox is checked by now, otherwise return false

#### .disabled
return true if checkbox is disabled by now, otherwise return false

#### .name
return attribute name of checkbox

#### .value
return attribute value of checkbox

#### .form
return the parent form element of checkbox


## Compatibility
- IE 9+
- Firefox 3+
- Safari 4+
- Chrome 29+

## Note
`defineProperty(element, 'checked')` would replace `element.setAttribute('checked')` 's actual functionality in IE8, so technically it's impossible to manipulate element attributes in DOM afterwards, so it's not supported.

## Test
  http://shallker.github.io/formalize/test/radio.html   
  http://shallker.github.io/formalize/test/checkbox.html   


## License

  MIT
