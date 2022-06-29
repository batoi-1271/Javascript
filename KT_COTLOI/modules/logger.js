import {
    TYPE_LOG,
    TYPE_WARN,
    TYPE_ERROR } from './costance.js'

function logger(log, type = TYPE_WARN) {
    console[type](log);
}
export default logger;