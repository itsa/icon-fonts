"use strict";
/**
 * Creating floating Panel-nodes which can be shown and hidden.
 *
 *
 * <i>Copyright (c) 2014 ITSA - https://github.com/itsa</i>
 * New BSD License - http://choosealicense.com/licenses/bsd-3-clause/
 *
 * SVG icon by https://icomoon.io/app/#/select
 *
 * @module panel
 * @class Panel
 * @since 0.0.1
*/

require('../css/alert.css');
module.exports = function (window) {
    window.document.defineIcon('minus', 1024, 1024, '<path class="path1" d="M694.857 548.571v-73.143q0-14.857-10.857-25.714t-25.714-10.857h-438.857q-14.857 0-25.714 10.857t-10.857 25.714v73.143q0 14.857 10.857 25.714t25.714 10.857h438.857q14.857 0 25.714-10.857t10.857-25.714zM877.714 512q0 119.429-58.857 220.286t-159.714 159.714-220.286 58.857-220.286-58.857-159.714-159.714-58.857-220.286 58.857-220.286 159.714-159.714 220.286-58.857 220.286 58.857 159.714 159.714 58.857 220.286z"></path>');
};