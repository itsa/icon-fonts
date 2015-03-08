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

require('polyfill/polyfill-base.js');
require('./css/base.css');

var NAME = '[icons]: ',
    DEFAULT_SIZE = 1024,
    createHashMap = require('js-ext/extra/hashmap.js').createMap;

module.exports = function (window) {

    var DOCUMENT = window.document,
        Icons, Event, iconContainer, upgradeDOM, upgradeIconElement;

    window._ITSAmodules || Object.protectedProp(window, '_ITSAmodules', createHashMap());

/*jshint boss:true */
    if (Icons=window._ITSAmodules.Icons) {
/*jshint boss:false */
        return Icons; // Dialog was already created
    }

    require('vdom')(window);
    Event = require('event-dom')(window);

    // Start with inserting the `svg-container` which holds all definitions
    // will be inserted as a system-node:
    iconContainer = DOCUMENT.body.getElement('>#itsa-icons-container', true) || DOCUMENT.body.addSystemElement('<svg id="itsa-icons-container"></svg>');

    upgradeIconElement = function(element) {
        // `element` is supposed to have the form: icon-`iconname`
        var iconName = element.getTagName().substr(5).toLowerCase();
        element.setHTML('<svg><use xlink:href="#itsa-'+iconName+'-icon"></use></svg>', true); // silently: no need to inform anyone about this system-upgrade
        element.setClass('itsa-icon-element', null, null, true); // also silent
    };

    upgradeDOM = function() {
        var upgrade = function(vnode) {
            var vChildren = vnode.vChildren,
                len = vChildren.length,
                i, vChild;
            for (i=0; i<len; i++) {
                vChild = vChildren[i];
                if (vChild.tag.substr(0, 5)==='ICON-') {
                    upgradeIconElement(vChild.domNode);
                }
                else {
                    upgrade(vChild);
                }
            }
        };
        upgrade(DOCUMENT.body.vnode);
    };

    Event.after(
        'UI:nodeinsert',
        function(e) {
            upgradeIconElement(e.target);
        },
        function(e) {
            return (e.target.vnode.tag.substr(0, 5)==='ICON-');
        }
    );

    DOCUMENT.defineIcon = function(iconName, svgContent, viewBoxWidth, viewBoxHeight) {
        var viewBoxDimension = '0 0 ',
            iconId, currentDefinition;
        viewBoxWidth || (viewBoxWidth = DEFAULT_SIZE);
        viewBoxHeight || (viewBoxHeight = DEFAULT_SIZE);
        viewBoxDimension = '0 0 '+viewBoxWidth+' '+viewBoxHeight;
        iconId = 'itsa-'+iconName.toLowerCase()+'-icon';
        currentDefinition = iconContainer.getElement('#'+iconId);
        if (currentDefinition) {
            currentDefinition.setHTML(svgContent);
        }
        else {
            iconContainer.append('<symbol id="'+iconId+'" viewBox="'+viewBoxDimension+'">'+svgContent+'</symbol>');
        }
    };

    upgradeDOM();

    window._ITSAmodules.Icons = true;
};