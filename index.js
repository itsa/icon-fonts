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

module.exports = function (window) {
    require('./base.js')(window);
    require('./base-icons/error.js')(window);
    require('./base-icons/alert.js')(window);
    require('./base-icons/exclamation.js')(window);
    require('./base-icons/info.js')(window);
    require('./base-icons/minus.js')(window);
    require('./base-icons/plus.js')(window);
    require('./base-icons/question.js')(window);
    require('./base-icons/printer.js')(window);
    require('./base-icons/cart.js')(window);
    require('./extra-animated-icons/audio-anim.js')(window);
    require('./extra-animated-icons/speaking-anim.js')(window);
    require('./extra-animated-icons/grid-anim.js')(window);
    require('./extra-animated-icons/radar-anim.js')(window);
    require('./extra-animated-icons/spinnercircle-anim.js')(window);
};