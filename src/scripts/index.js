import '../styles/index.scss'
import $ from 'jquery'
import './form'
import { initFloatLabel } from './forms'
import {formInit} from "./form"
import lozad from "lozad"
import 'lightgallery.js'

const observer = lozad()
observer.observe()

$(function() {
    lightGallery(document.getElementById('lightgallery'))
    lightGallery(document.getElementById('lightgallery2'))
    lightGallery(document.getElementById('lightgallery3'))
    lightGallery(document.getElementById('lightgallery4'))
    lightGallery(document.getElementById('lightgallery5'))
    initFloatLabel.init()
    formInit('#contactForm')
})

