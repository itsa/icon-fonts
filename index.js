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
    require('./extra-icons/animatedaudio.js')(window);
    require('./extra-icons/animatedaudiocenter.js')(window);
    require('./extra-icons/animatedgrid.js')(window);
    require('./extra-icons/animatedradar.js')(window);
    require('./extra-icons/animatedspinnercircles.js')(window);
    require('./extra-icons/animatedspinneroval.js')(window);
    require('./extra-icons/animatedspinnertail.js')(window);
};