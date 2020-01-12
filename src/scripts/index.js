import '../styles/index.scss'
import UAParser from 'ua-parser-js'
import $ from 'jquery'

const parser = new UAParser()
let parserResult = parser.getResult()

console.log(parser.getResult())

$('.box-service').click(function() {
    $('.hover-info').hide()
    let getDataId = $(this).data('infoid')
    let infoEl = $('.hover-info[data-info="' + getDataId + '"]')
    let infoId = $('#services-info')
    infoEl.show()
    if (parserResult.os.name === "iOS") {
        infoId.scrollIntoView()
    }
})

$('.box-service').mouseover(function() {
    $('.hover-info').hide()
    let getDataId = $(this).data('infoid')
    let infoEl = $('.hover-info[data-info="' + getDataId + '"]')
    infoEl.show()
})

$(function() {
    $('.hover-info').hide()
    $('.hover-info').first().show()
})
