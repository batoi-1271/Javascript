function Validator(options) {

  function getParent(element, selector) {
    while (element.parentElement) {
      if (element.parentElement.matches(selector)) {
        return element.parentElement;
      }
      element = element.parentElement;
    }
  }

  var selectorRules = {};

  function validate(inputElement, rule) {

    // var errorElement = getParent(inputElement, '.form-group');
    var errorElement = getParent(inputElement, options.formGroupSelector).querySelector(
      options.errorSelector
    );
    var errorMessage;

    // Lay ra cac rule cua selector
    var rules = selectorRules[rule.selector];

    // lap qua tung rule va kiem tra
    // neu co loi thi dung viec kiem tra
    for (var i = 0; i < rules.length; ++i) {
      switch (inputElement.type) {
        case 'checkbox':
        case 'radio':
          errorMessage = rules[i](
            formElement.querySelector(rule.selector + ':checked')
          );
          break;
        default:
          errorMessage = rules[i](inputElement.value);


      }
      if (errorMessage) break;
    }

    if (errorMessage) {
      errorElement.innerText = errorMessage;
      getParent(inputElement, options.formGroupSelector).classList.add("invalid");
    } else {
      errorElement.innerText = "";
      getParent(inputElement, options.formGroupSelector).classList.remove("invalid");
    }

    return !errorMessage;
  }

  // Lấy elements của form can validate
  var formElement = document.querySelector(options.form);

  if (formElement) {
    formElement.onsubmit = function (e) {
      e.preventDefault();

      var isFormValid = true;

      // thuc hien lap qua tung rule va validate
      options.rules.forEach(function (rule) {
        var inputElement = formElement.querySelector(rule.selector);

        var isValid = validate(inputElement, rule);
        if (!isValid) {
          isFormValid = false;
        }
      });

      if (isFormValid) {
        // TH submit voi Javascript
        if (typeof options.onSubmit === "function") {
          var enableInputs = formElement.querySelectorAll('[name]');
          var formValues = Array.from(enableInputs).reduce(function (values, input) {
            
            switch (input.type) {
              case 'radio':
              case 'checkbox':
                values[input.name] = formElement.querySelector('input[name="' + input.name + '"]:checked').value;
                
                break;
              default:
                values[input.name] = input.value;

            }
            return values;
          }, {});

          // console.log(formValues);
          options.onSubmit(formValues);
          // TH submit voi hanh vi mac dinh
        }
      }
    };

    // Lặp qua mỗi rule và xử lý (lắng nghe sự kiện blur, input, ..)
    options.rules.forEach(function (rule) {
      // luu lai cac rules cho moi inputs
      // selectorRules[rule.selector] = rule.test;
      if (Array.isArray(selectorRules[rule.selector])) {
        selectorRules[rule.selector].push(rule.test);
      } else {
        selectorRules[rule.selector] = [rule.test];
      }

      var inputElements = formElement.querySelectorAll(rule.selector);

      Array.from(inputElements).forEach(function (inputElement) {
        // XỬ lí TH blur khỏi input
        inputElement.onblur = function () {
          validate(inputElement, rule);
        };

        // XỬ lí khi người dùng nhập vào input
        inputElement.oninput = function () {
          var errorElement = getParent(inputElement, options.formGroupSelector).querySelector(
            options.errorSelector
          );

          errorElement.innerText = "";
          getParent(inputElement, options.formGroupSelector).classList.remove("invalid");
        };
      })

    });
  }
}

Validator.isRequired = function (selector, message) {
  return {
    selector,
    test: function (value) {
      return value ? undefined : message || "Vui lòng nhập trường này";
    },
  };
};

Validator.isEmail = function (selector, message) {
  return {
    selector,
    test: function (value) {
      var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
      return regex.test(value) ? undefined : message || "Trường này phải là email";
    },
  };
};

Validator.minLength = function (selector, min, message) {
  return {
    selector,
    test: function (value) {
      return value.length >= min ? undefined : message || `Vui lòng nhập tối thiểu ${min}`;
    },
  };
};

Validator.isConfirmed = function (selector, getConfirmValue, message) {
  return {
    selector,
    test: function (value) {
      return value === getConfirmValue ? undefined : message || "Giá trị nhập vào không đúng";
    },
  };
};
