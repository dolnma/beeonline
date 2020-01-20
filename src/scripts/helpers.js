import $ from 'jquery'

export const isEmpty = (element) => {
    let $element = $(element)
    return $.trim($element.val()) === ''
}

export const getUrlHash = () => {
    let url = window.location.href
    return url.substring(url.indexOf("#") + 1)
}

export const elementExists = (element) => {
    return $(element).length > 0
}

export const $elementExists = ($element) => {
    return elementExists($element[0])
}

export const elementIsVisible = (element) => {
    return $(element).is(':visible') && !$(element).is(':hidden')
}

export const elementsLabelIsVisible = (element) => {
    return elementIsVisible($(element).parents('label')[0])
}

export const elementIsRadio = (element) => {
    return $(element).attr('type') === 'radio'
}

export const elementIsCheckbox = (element) => {
    return $(element).attr('type') === 'checkbox'
}

export const elementIsInput = (element) => {
    let elementType = $(element).attr('type')
    return elementType === 'text' ||
        elementType === 'tel' ||
        elementType === 'number' ||
        elementType === 'email'
}

export const elementIsTextArea = (element) => {
    return $(element).is('textarea')
}

export const elementIsScrolledTo = (element) => {
    if (!elementExists(element) || !elementIsVisible(element)) {
        return false
    }

    let $element = $(element)
    let hT = $element.offset().top,
        hH = $element.outerHeight(),
        wH = $(window).height(),
        wS = $(window).scrollTop()

    return (wS > (hT + hH - 100 - wH))
}

$.fn.rotate = function (degrees) {
    $(this).css({'-webkit-transform' : 'rotate('+ degrees +'deg)',
        '-moz-transform' : 'rotate('+ degrees +'deg)',
        '-ms-transform' : 'rotate('+ degrees +'deg)',
        'transform' : 'rotate('+ degrees +'deg)'})
    return $(this)
}

export const formatNumber = (num) => {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1 ")
}
export const formatInt = (num) => {
    return parseInt(num.replace(/[^0-9 ]/g, '').replace(/ /g, ''))
}
