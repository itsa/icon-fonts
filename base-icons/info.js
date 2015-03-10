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
    window.document.defineIcon('info', 1024, 1024, '<path class="path1" d="M585.143 786.286v-91.429q0-8-5.143-13.143t-13.143-5.143h-54.857v-292.571q0-8-5.143-13.143t-13.143-5.143h-182.857q-8 0-13.143 5.143t-5.143 13.143v91.429q0 8 5.143 13.143t13.143 5.143h54.857v182.857h-54.857q-8 0-13.143 5.143t-5.143 13.143v91.429q0 8 5.143 13.143t13.143 5.143h256q8 0 13.143-5.143t5.143-13.143zM512 274.286v-91.429q0-8-5.143-13.143t-13.143-5.143h-109.714q-8 0-13.143 5.143t-5.143 13.143v91.429q0 8 5.143 13.143t13.143 5.143h109.714q8 0 13.143-5.143t5.143-13.143zM877.714 512q0 119.429-58.857 220.286t-159.714 159.714-220.286 58.857-220.286-58.857-159.714-159.714-58.857-220.286 58.857-220.286 159.714-159.714 220.286-58.857 220.286 58.857 159.714 159.714 58.857 220.286z"></path>');
};