
# formalize

  Formalize custom inputs to form elements, or at least let them behave like form elements.

## Installation

  Install with [component(1)](http://component.io):

    $ component install shallker/formalize

## Quick Start
```
var Radio = require('formalize').Radio;
$('.my.input[type=radio]').each(function (ele) {
  new Radio(ele);
});
```

## API
### Radio
```
var Radio = require('formalize').Radio;
$('.my.input[type=radio]').each(function (ele) {
  new Radio(ele);
})
```

### Checkbox
```
var Checkbox = require('formalize').Checkbox;
$('.my.input[type=checkbox]').each(function (ele) {
  new Checkbox(ele);
})

### Select
```
var Select = require('formalize').Select;
$('.my.input[type=select]').each(function (ele) {
  new Select(ele);
})


## License

  MIT
