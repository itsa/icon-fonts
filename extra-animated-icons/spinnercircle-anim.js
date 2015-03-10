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

require('../css/spinnercircle-anim.css');
module.exports = function (window) {
    window.document.defineIcon('spinnercircle-anim', 58, 58, '<g fill="none" fill-rule="evenodd"><g transform="translate(2 1)" stroke="#FFF" stroke-width="1.5"><circle cx="42.601" cy="11.462" r="5" fill-opacity="1" fill="#fff"><animate attributeName="fill-opacity" begin="0s" dur="1.3s" values="1;0;0;0;0;0;0;0" calcMode="linear" repeatCount="indefinite" /></circle><circle cx="49.063" cy="27.063" r="5" fill-opacity="0" fill="#fff"><animate attributeName="fill-opacity" begin="0s" dur="1.3s" values="0;1;0;0;0;0;0;0" calcMode="linear" repeatCount="indefinite" /></circle><circle cx="42.601" cy="42.663" r="5" fill-opacity="0" fill="#fff"><animate attributeName="fill-opacity" begin="0s" dur="1.3s" values="0;0;1;0;0;0;0;0" calcMode="linear" repeatCount="indefinite" /></circle><circle cx="27" cy="49.125" r="5" fill-opacity="0" fill="#fff"><animate attributeName="fill-opacity" begin="0s" dur="1.3s" values="0;0;0;1;0;0;0;0" calcMode="linear" repeatCount="indefinite" /></circle><circle cx="11.399" cy="42.663" r="5" fill-opacity="0" fill="#fff"><animate attributeName="fill-opacity" begin="0s" dur="1.3s" values="0;0;0;0;1;0;0;0" calcMode="linear" repeatCount="indefinite" /></circle><circle cx="4.938" cy="27.063" r="5" fill-opacity="0" fill="#fff"><animate attributeName="fill-opacity" begin="0s" dur="1.3s" values="0;0;0;0;0;1;0;0" calcMode="linear" repeatCount="indefinite" /></circle><circle cx="11.399" cy="11.462" r="5" fill-opacity="0" fill="#fff"><animate attributeName="fill-opacity" begin="0s" dur="1.3s" values="0;0;0;0;0;0;1;0" calcMode="linear" repeatCount="indefinite" /></circle><circle cx="27" cy="5" r="5" fill-opacity="0" fill="#fff"><animate attributeName="fill-opacity" begin="0s" dur="1.3s" values="0;0;0;0;0;0;0;1" calcMode="linear" repeatCount="indefinite" /></circle></g></g>');
};