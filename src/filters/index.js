/**
 * 此处须把所有过滤器全局化
 */
import Vue from 'vue'
import dateTimeFormatter from './dateTimeFormatter'
import longDataFormatter from './longDataFormatter'

Vue.filter('dateFormat', dateTimeFormatter)
Vue.filter('dataFormat', longDataFormatter)
