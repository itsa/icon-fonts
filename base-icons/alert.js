"use strict";
/**
 * Creating floating Panel-nodes which can be shown and hidden.
 *
 *
 * <i>Copyright (c) 2014 ITSA - https://github.com/itsa</i>
 * New BSD License - http://choosealicense.com/licenses/bsd-3-clause/
 *
 *
 * @module panel
 * @class Panel
 * @since 0.0.1
*/

require('../css/alert.css');
module.exports = function (window) {
    window.document.defineIcon('alert', '<path class="path1" d="M512 92.774l429.102 855.226h-858.206l429.104-855.226zM512 0c-22.070 0-44.14 14.882-60.884 44.648l-437.074 871.112c-33.486 59.532-5 108.24 63.304 108.24h869.308c68.3 0 96.792-48.708 63.3-108.24h0.002l-437.074-871.112c-16.742-29.766-38.812-44.648-60.882-44.648v0z"></path><path class="path2" d="M576 832c0 35.346-28.654 64-64 64s-64-28.654-64-64c0-35.346 28.654-64 64-64s64 28.654 64 64z"></path><path class="path3" d="M512 704c-35.346 0-64-28.654-64-64v-192c0-35.346 28.654-64 64-64s64 28.654 64 64v192c0 35.346-28.654 64-64 64z"></path>');
};