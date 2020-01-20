import '../styles/index.scss'
import $ from 'jquery'
import UAParser from 'ua-parser-js'
import './form'
const parser = new UAParser()
let parserResult = parser.getResult()
import { initFloatLabel } from './forms'
import {formInit} from "./form";
import lozad from "lozad";

const observer = lozad()
observer.observe()

$(function() {
    initFloatLabel.init()
    formInit('#contactForm')

    $('.hover-info').hide()
    $('.hover-info').first().show()

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
})

