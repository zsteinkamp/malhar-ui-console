/*
 * Copyright (c) 2014 DataTorrent, Inc. ALL Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

var path = require('path');
var Backbone = require('backbone');
var BaseCollection = DT.lib.BaseCollection;
var Notifier = DT.lib.Notifier;

var ConfigIPAddressCollection = BaseCollection.extend({

    debugName: 'ConfigIPAddressCollection',

    responseTransform: 'ipAddresses',

    initialize: function(attributes, options) {
        BaseCollection.prototype.initialize.call(this, attributes, options);
    },

    url: function() {
        return this.resourceURL('ConfigIPAddresses');
    },

    fetch: function(options) {
        options = options || {};
        options.reset = true;
        BaseCollection.prototype.fetch.call(this, options);
    },

    fetchError: null
});

exports = module.exports = ConfigIPAddressCollection;