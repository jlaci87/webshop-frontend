var $range = $(".js-range-slider")
//----------------------------- 1. choose from an array ------------------------------------------//

var custom_values = [0, 10, 100, 1000, 10000, 100000, 1000000];
    
// be careful! FROM and TO should be index of values array
var my_from = custom_values.indexOf(10);
var my_to = custom_values.indexOf(10000);

//----------------------------- 2. extended with inpit field ------------------------------------------//
// 
//     $from = $(".input-from"),
//     $to = $(".input-to"),
//     instance,
//     min = 0,
//     max = 1000;

$range.ionRangeSlider({
    type: "double",
    grid: false,
    prettify_enabled: true,
    prettify_separator: ".",
    max_postfix: "+",
    prefix: "$",
    // postfix: " €/ ₽",il
    //----------------------------- 1. choose from an array ------------------------------------------//
    from: my_from,
    to: my_to,
    values: custom_values
    //----------------------------- 2. extended with inpit fields ------------------------------------------//
    // min: min,
    // max: max,
    // from: 500,
    // to: 750,
    // fromOnStart: function (data) {
    //     $from.prop("value", data.from);
    // },
    // fromOnChange: function (data) {
    //     $from.prop("value", data.from);
    // },
    
    // toOnStart: function (data) {
    //     $to.prop("value", data.to);
    // },
    // toOnChange: function (data) {
    //     $to.prop("value", data.to);
    // }
});

//----------------------------- 2. extended with inpit field ------------------------------------------//
// instance = $range.data("ionRangeSlider");

// $from.on("change keyup", function () {
//     var fromVal = $(this).prop("value");
    
//     // validate
//     if (fromVal < min) {
//         fromVal = min;
//     } 
//     else if (fromVal > max) {
//         fromVal = max;
//     }

//     instance.update({
//         from: fromVal
//     });
// });

// $to.on("change keyup", function () {
//     var toVal = $(this).prop("value");
    
//     // validate
//     if (toVal < max) {
//         toVal = max;
//     } 
//     else if (toVal > min) {
//         toVal = min;
//     }

//     instance.update({
//         to: toVal
//     });
// });