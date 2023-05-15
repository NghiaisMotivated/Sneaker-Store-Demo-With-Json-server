/*
    Bài toán đặt ra: Cần viết ra 1 lần và sử dụng cho hầu hết tất cả 
    các form, chỉ cần chỉnh sửa và dùng - không bị lặp lại code 

console.log(options.rules); // return array include #email and #fullanme

 console.log(formElement); // get form: #form-1

console.log(rule); // return two time || 1. {selector: '#fullname', test: ƒ} || 2. {selector: '#email', test: ƒ} 

rule.selector === #fullname

 console.log(inputElement) // return 2 input element email and fullname
*/


// defind functino Validator - constructor function
Validator = (options) => {
    getParent = (element, selector) => {
        while (element.parentElement) { // incase exists
            // element tượng trưng cho thẻ cha thẻ cuối cùng bao thẻ input
            // Khi vòng lặp tới thẻ cha thì break, kết thúc vòng lặp 
            // có parentElement thì chúng ta mới lặp 
            // lặp ta sẽ kiểm tra parentElement có match với class này hay không selector


            // matches sẽ kiểm tra selector có match với css selector hay không 

            if (element.parentElement.matches(selector)) {
                return element.parentElement;
                // Nếu matches với form group thì ta sẽ return 
            }
            element = element.parentElement;
            // Nếu tìm ra thẻ nếu mà k match với form group
            // thì chúng ta sẽ gán element chính thẻ cha của thẻ input
            //  lúc này element là thẻ div 
            // sau đó nó lại thực hiện vòng lặp 
            // lúc này là div.parentElement 
            // khi kiểm tra đúng thẻ cha thì nó sẽ return 
        }
    }





    // get form element 
    let formElement = document.querySelector(options.form);

    // save all rule for input not override
    var selectRules = {}; // after loop forEach run and save all rule in here 

    // this func do show error or remove 
    Validate = (inputElement, rule) => {
        // Hàm lọt qua qua tất cả các rules và input đều phải lặp qua hàm Validator này 
        // đều đc đưa hàm này để validate 
        // var errorElement = getParent(inputElement, 'form-group0 )

        let errorMessage;

        // inputElement.value: value of user type 
        // errorMessage 
        // 1. will return nothing - undefined when no error 
        // 2. Will return message error when user blur 
        // console.log(errorMessage)


        let errorElement = getParent(inputElement, options.formGroupSelector).querySelector(options.errorSelector)
        console.log(errorElement);

        // Take rules of selector
        var rules = selectRules[rule.selector];
        console.log(rules);

        // Lặp qua từng rule and check 
        // if error stop check
        // Trên cùng selector nếu kiểm tra thấy lỗi đầu tiên thì nó sẽ dừng việc kiểm tra ở lỗi đuầ tiên mà nó tìm được 
        for (let i = 0; i < rules.length; i++) {

            switch (inputElement.type) {
                case 'radio':
                case 'checkbox':
                    errorMessage = rules[i](formElement.querySelector(rule.selector + ':checked'));
                    console.log(errorMessage);

                    break;
                default:
                    errorMessage = rules[i](inputElement.value);
                    console.log(errorMessage);


            }

            // errorMessage = rules[i](inputElement.value);
            // // nó sẽ chạy qua lần lượt từng rules để nó kiểm tra
            // console.log(errorMessage);
            if (errorMessage) break;
        }

        // Và nó sẽ kiểm tra và hiển thị lỗi 
        if (errorMessage) { // have error 
            errorElement.innerText = errorMessage; // add paragraph 
            getParent(inputElement, options.formGroupSelector).classList.add('invalid')
        } else { // no error 
            errorElement.innerText = '';
            getParent(inputElement, options.formGroupSelector).classList.remove('invalid')
        }

        // if error 
        return !errorMessage; // convert to bolean 

        // if Validate has error => false 
        // no error => true 
    }


    if (formElement) {

        // when user submit 
        formElement.onsubmit = (e) => { // e: event
            e.preventDefault(); // disable behavior default form

            let isFormValid = true; // in case: true no error 

            // loop every rules and validate
            options.rules.forEach((rule) => {
                var inputElement = formElement.querySelector(rule.selector);
                var isValid = Validate(inputElement, rule);

                if (!isValid) { // nếu 1 ông mà không invalid thì tôi sẽ sửa thành isFormValid = false 
                    isFormValid = false;
                }
            });





            if (isFormValid) {
                // console.log('Have Error');
                if (typeof options.onSubmit === 'function') {
                    // Lấy ra tất cả trạng thái enable của input 
                    // Lấy field Input
                    // select element have name
                    // in case, submit with JS 
                    var enableInputs = formElement.querySelectorAll('[name]'); // select all field attribute is name not disable 
                    console.log(enableInputs);

                    // Get information
                    var formValues = Array.from(enableInputs).reduce((values, input) => { // v: convert nodeList to array to use reduce 
                        // console.log(values, input);

                        switch (input.type) {
                            case 'radio':
                                values[input.name] = formElement.querySelector('input[name="' + input.name + '"]:checked');
                                break;
                            case 'checkbox':
                                if (!input.matches(':checked')) {
                                    values[input.name] = [];
                                    return values;
                                }
                                // TRong trường hợp check box không được check 

                                // Kiểm tra xem có phải là array hay k
                                if (!Array.isArray(values[input.name])) { // Trong trường hợp  không phải array
                                    values[input.name] = [];
                                }
                                values[input.name].push(input.value);
                                break;
                            case 'file':
                                values[input.name] = input.files;
                                break;
                            default:
                                values[input.name] = input.value;
                                // when we do this, in case email not type 
                        }


                        return values;
                        // values will receive the object include information of user values
                        // if user type email, the values will update 
                    }, {});
                    options.onSubmit(formValues);


                    let popup = document.getElementById('popup');
                    console.log(popup);

                    openPopup = () => {
                        popup.classList.add("open-popup")
                    }
                    closePopup = () => {
                        popup.classList.remove("open-popup")
                    }
                }
                // in case, submit with default behavior of browser  
                else {
                    // console.log('No Error ');
                    formElement.submit();
                }
            }

        }



        // Loop for every rule and process (listen event: blur, oninput,..)
        options.rules.forEach((rule) => {
            // Save rules in inputs 
            // selectRules[rule.selector] = rule.test; // return oject include 4 elements  #email: f(value)

            if (Array.isArray(selectRules[rule.selector])) { // if array
                selectRules[rule.selector].push(rule.test);
            } else { // if not array
                selectRules[rule.selector] = [rule.test];
                // loop first run, nó sẽ  lọt vào đây, nó sẽ gán rule của selector lọt vào bằng 1 mảng với phần tử 
                // lần 2 chạy nó sẽ lọt vào điều kiện array vì trước đó đã gán mảng hết 
            }

            // Do có nhiều thuộc tính name là gender thành ra sẽ bị lỗi 
            // k sử dụng được queryselector => xài  querySelectorAll
            let inputElements = formElement.querySelectorAll(rule.selector);

            Array.from(inputElements).forEach((inputElement) => {
                // Process case blur out input 
                // listen event 
                inputElement.onblur = () => {
                    // get Value: inputElement.value
                    // test func: rule.test 
                    // console.log(rule); // return 

                    Validate(inputElement, rule);
                }


                // process when user type to remove invalid border 
                inputElement.oninput = () => {
                    // console.log(inputElement.value)

                    // take event when user type 
                    var errorElement = getParent(inputElement, options.formGroupSelector).querySelector('.form-message')
                    errorElement.innerText = '';
                    getParent(inputElement, options.formGroupSelector).classList.remove('invalid');
                }
            })
        })
    }
}



// Defind rules 
// Rules for all 
// 1. when error, return error message 
// 2. when no error, return no thing, it's mean undefined
Validator.isRequired = (selector, message) => {
    return {
        selector: selector, // selector: #fullname
        test: (value) => {
            if (typeof value === 'string') {
                return value.trim() ? undefined : message || 'Please Type Your Full Name '
            } else {
                return value ? undefined : message || 'Please Type Your Full Name '
            }
        }
    }
}

Validator.isEmail = (selector, message) => {
    return {
        selector: selector, // // selector: #email
        test: (value) => {
            let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
            return regex.test(value) ? undefined : message || 'Type Must Be Email'

        }
    }
}

Validator.minLength = (selector, min, message) => {
    return {
        selector: selector, // // selector: #email
        test: (value) => {
            return value.length >= min ? undefined : message || `Please Type Your Password Minimum 6 Charactor`

        }
    }
}

Validator.isConfirm = (selector, getConfirmValue, message) => { // getConfirmValue is func - callback
    return {
        selector: selector,
        test: (value) => {
            return value === getConfirmValue() ? undefined : message || 'Password Incorrect'
        }
    }
}