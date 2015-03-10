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
    window.document.defineIcon('exclamation', 1024, 1024, '<path class="path1" d="M438.857 73.143q119.429 0 220.286 58.857t159.714 159.714 58.857 220.286-58.857 220.286-159.714 159.714-220.286 58.857-220.286-58.857-159.714-159.714-58.857-220.286 58.857-220.286 159.714-159.714 220.286-58.857zM512 785.714v-108.571q0-8-5.143-13.429t-12.571-5.429h-109.714q-7.429 0-13.143 5.714t-5.714 13.143v108.571q0 7.429 5.714 13.143t13.143 5.714h109.714q7.429 0 12.571-5.429t5.143-13.429zM510.857 589.143l10.286-354.857q0-6.857-5.714-10.286-5.714-4.571-13.714-4.571h-125.714q-8 0-13.714 4.571-5.714 3.429-5.714 10.286l9.714 354.857q0 5.714 5.714 10t13.714 4.286h105.714q8 0 13.429-4.286t6-10z"></path>');
};