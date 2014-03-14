/*jshint node:true, quotmark:false*/
"use strict";
module.exports = function () {
    return Math.ceil(Math.random() * (65535-1024)) + 1024;
};