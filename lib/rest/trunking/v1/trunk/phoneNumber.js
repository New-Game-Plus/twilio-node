'use strict';

/* jshint ignore:start */
/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */
/* jshint ignore:end */

var Q = require('q');  /* jshint ignore:line */
var _ = require('lodash');  /* jshint ignore:line */
var util = require('util');  /* jshint ignore:line */
var Page = require('../../../../base/Page');  /* jshint ignore:line */
var deserialize = require(
    '../../../../base/deserialize');  /* jshint ignore:line */
var values = require('../../../../base/values');  /* jshint ignore:line */

var PhoneNumberList;
var PhoneNumberPage;
var PhoneNumberInstance;
var PhoneNumberContext;

/* jshint ignore:start */
/**
 * Initialize the PhoneNumberList
 *
 * @constructor Twilio.Trunking.V1.TrunkContext.PhoneNumberList
 *
 * @param {Twilio.Trunking.V1} version - Version of the resource
 * @param {string} trunkSid -
 *          The SID of the Trunk that handles calls to the phone number
 */
/* jshint ignore:end */
PhoneNumberList = function PhoneNumberList(version, trunkSid) {
  /* jshint ignore:start */
  /**
   * @function phoneNumbers
   * @memberof Twilio.Trunking.V1.TrunkContext#
   *
   * @param {string} sid - sid of instance
   *
   * @returns {Twilio.Trunking.V1.TrunkContext.PhoneNumberContext}
   */
  /* jshint ignore:end */
  function PhoneNumberListInstance(sid) {
    return PhoneNumberListInstance.get(sid);
  }

  PhoneNumberListInstance._version = version;
  // Path Solution
  PhoneNumberListInstance._solution = {trunkSid: trunkSid};
  PhoneNumberListInstance._uri = `/Trunks/${trunkSid}/PhoneNumbers`;
  /* jshint ignore:start */
  /**
   * create a PhoneNumberInstance
   *
   * @function create
   * @memberof Twilio.Trunking.V1.TrunkContext.PhoneNumberList#
   *
   * @param {object} opts - Options for request
   * @param {string} opts.phoneNumberSid -
   *          The SID of the Incoming Phone Number that you want to associate with the trunk
   * @param {function} [callback] - Callback to handle processed record
   *
   * @returns {Promise} Resolves to processed PhoneNumberInstance
   */
  /* jshint ignore:end */
  PhoneNumberListInstance.create = function create(opts, callback) {
    if (_.isUndefined(opts)) {
      throw new Error('Required parameter "opts" missing.');
    }
    if (_.isUndefined(opts.phoneNumberSid)) {
      throw new Error('Required parameter "opts.phoneNumberSid" missing.');
    }

    var deferred = Q.defer();
    var data = values.of({'PhoneNumberSid': _.get(opts, 'phoneNumberSid')});

    var promise = this._version.create({uri: this._uri, method: 'POST', data: data});

    promise = promise.then(function(payload) {
      deferred.resolve(new PhoneNumberInstance(
        this._version,
        payload,
        this._solution.trunkSid,
        this._solution.sid
      ));
    }.bind(this));

    promise.catch(function(error) {
      deferred.reject(error);
    });

    if (_.isFunction(callback)) {
      deferred.promise.nodeify(callback);
    }

    return deferred.promise;
  };

  /* jshint ignore:start */
  /**
   * Streams PhoneNumberInstance records from the API.
   *
   * This operation lazily loads records as efficiently as possible until the limit
   * is reached.
   *
   * The results are passed into the callback function, so this operation is memory
   * efficient.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @function each
   * @memberof Twilio.Trunking.V1.TrunkContext.PhoneNumberList#
   *
   * @param {object} [opts] - Options for request
   * @param {number} [opts.limit] -
   *         Upper limit for the number of records to return.
   *         each() guarantees never to return more than limit.
   *         Default is no limit
   * @param {number} [opts.pageSize] -
   *         Number of records to fetch per request,
   *         when not set will use the default value of 50 records.
   *         If no pageSize is defined but a limit is defined,
   *         each() will attempt to read the limit with the most efficient
   *         page size, i.e. min(limit, 1000)
   * @param {Function} [opts.callback] -
   *         Function to process each record. If this and a positional
   *         callback are passed, this one will be used
   * @param {Function} [opts.done] -
   *          Function to be called upon completion of streaming
   * @param {Function} [callback] - Function to process each record
   */
  /* jshint ignore:end */
  PhoneNumberListInstance.each = function each(opts, callback) {
    if (_.isFunction(opts)) {
      callback = opts;
      opts = {};
    }
    opts = opts || {};
    if (opts.callback) {
      callback = opts.callback;
    }
    if (_.isUndefined(callback)) {
      throw new Error('Callback function must be provided');
    }

    var done = false;
    var currentPage = 1;
    var currentResource = 0;
    var limits = this._version.readLimits({
      limit: opts.limit,
      pageSize: opts.pageSize
    });

    function onComplete(error) {
      done = true;
      if (_.isFunction(opts.done)) {
        opts.done(error);
      }
    }

    function fetchNextPage(fn) {
      var promise = fn();
      if (_.isUndefined(promise)) {
        onComplete();
        return;
      }

      promise.then(function(page) {
        _.each(page.instances, function(instance) {
          if (done || (!_.isUndefined(opts.limit) && currentResource >= opts.limit)) {
            done = true;
            return false;
          }

          currentResource++;
          callback(instance, onComplete);
        });

        if (!done) {
          currentPage++;
          fetchNextPage(_.bind(page.nextPage, page));
        } else {
          onComplete();
        }
      });

      promise.catch(onComplete);
    }

    fetchNextPage(_.bind(this.page, this, _.merge(opts, limits)));
  };

  /* jshint ignore:start */
  /**
   * Lists PhoneNumberInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @function list
   * @memberof Twilio.Trunking.V1.TrunkContext.PhoneNumberList#
   *
   * @param {object} [opts] - Options for request
   * @param {number} [opts.limit] -
   *         Upper limit for the number of records to return.
   *         list() guarantees never to return more than limit.
   *         Default is no limit
   * @param {number} [opts.pageSize] -
   *         Number of records to fetch per request,
   *         when not set will use the default value of 50 records.
   *         If no page_size is defined but a limit is defined,
   *         list() will attempt to read the limit with the most
   *         efficient page size, i.e. min(limit, 1000)
   * @param {function} [callback] - Callback to handle list of records
   *
   * @returns {Promise} Resolves to a list of records
   */
  /* jshint ignore:end */
  PhoneNumberListInstance.list = function list(opts, callback) {
    if (_.isFunction(opts)) {
      callback = opts;
      opts = {};
    }
    opts = opts || {};
    var deferred = Q.defer();
    var allResources = [];
    opts.callback = function(resource, done) {
      allResources.push(resource);

      if (!_.isUndefined(opts.limit) && allResources.length === opts.limit) {
        done();
      }
    };

    opts.done = function(error) {
      if (_.isUndefined(error)) {
        deferred.resolve(allResources);
      } else {
        deferred.reject(error);
      }
    };

    if (_.isFunction(callback)) {
      deferred.promise.nodeify(callback);
    }

    this.each(opts);
    return deferred.promise;
  };

  /* jshint ignore:start */
  /**
   * Retrieve a single page of PhoneNumberInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @function page
   * @memberof Twilio.Trunking.V1.TrunkContext.PhoneNumberList#
   *
   * @param {object} [opts] - Options for request
   * @param {string} [opts.pageToken] - PageToken provided by the API
   * @param {number} [opts.pageNumber] -
   *          Page Number, this value is simply for client state
   * @param {number} [opts.pageSize] - Number of records to return, defaults to 50
   * @param {function} [callback] - Callback to handle list of records
   *
   * @returns {Promise} Resolves to a list of records
   */
  /* jshint ignore:end */
  PhoneNumberListInstance.page = function page(opts, callback) {
    if (_.isFunction(opts)) {
      callback = opts;
      opts = {};
    }
    opts = opts || {};

    var deferred = Q.defer();
    var data = values.of({
      'PageToken': opts.pageToken,
      'Page': opts.pageNumber,
      'PageSize': opts.pageSize
    });

    var promise = this._version.page({uri: this._uri, method: 'GET', params: data});

    promise = promise.then(function(payload) {
      deferred.resolve(new PhoneNumberPage(this._version, payload, this._solution));
    }.bind(this));

    promise.catch(function(error) {
      deferred.reject(error);
    });

    if (_.isFunction(callback)) {
      deferred.promise.nodeify(callback);
    }

    return deferred.promise;
  };

  /* jshint ignore:start */
  /**
   * Retrieve a single target page of PhoneNumberInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @function getPage
   * @memberof Twilio.Trunking.V1.TrunkContext.PhoneNumberList#
   *
   * @param {string} [targetUrl] - API-generated URL for the requested results page
   * @param {function} [callback] - Callback to handle list of records
   *
   * @returns {Promise} Resolves to a list of records
   */
  /* jshint ignore:end */
  PhoneNumberListInstance.getPage = function getPage(targetUrl, callback) {
    var deferred = Q.defer();

    var promise = this._version._domain.twilio.request({method: 'GET', uri: targetUrl});

    promise = promise.then(function(payload) {
      deferred.resolve(new PhoneNumberPage(this._version, payload, this._solution));
    }.bind(this));

    promise.catch(function(error) {
      deferred.reject(error);
    });

    if (_.isFunction(callback)) {
      deferred.promise.nodeify(callback);
    }

    return deferred.promise;
  };

  /* jshint ignore:start */
  /**
   * Constructs a phone_number
   *
   * @function get
   * @memberof Twilio.Trunking.V1.TrunkContext.PhoneNumberList#
   *
   * @param {string} sid - The unique string that identifies the resource
   *
   * @returns {Twilio.Trunking.V1.TrunkContext.PhoneNumberContext}
   */
  /* jshint ignore:end */
  PhoneNumberListInstance.get = function get(sid) {
    return new PhoneNumberContext(this._version, this._solution.trunkSid, sid);
  };

  /* jshint ignore:start */
  /**
   * Provide a user-friendly representation
   *
   * @function toJSON
   * @memberof Twilio.Trunking.V1.TrunkContext.PhoneNumberList#
   *
   * @returns Object
   */
  /* jshint ignore:end */
  PhoneNumberListInstance.toJSON = function toJSON() {
    return this._solution;
  };

  PhoneNumberListInstance[util.inspect.custom] = function inspect(depth, options)
      {
    return util.inspect(this.toJSON(), options);
  };

  return PhoneNumberListInstance;
};


/* jshint ignore:start */
/**
 * Initialize the PhoneNumberPage
 *
 * @constructor Twilio.Trunking.V1.TrunkContext.PhoneNumberPage
 *
 * @param {V1} version - Version of the resource
 * @param {Response<string>} response - Response from the API
 * @param {PhoneNumberSolution} solution - Path solution
 *
 * @returns PhoneNumberPage
 */
/* jshint ignore:end */
PhoneNumberPage = function PhoneNumberPage(version, response, solution) {
  // Path Solution
  this._solution = solution;

  Page.prototype.constructor.call(this, version, response, this._solution);
};

_.extend(PhoneNumberPage.prototype, Page.prototype);
PhoneNumberPage.prototype.constructor = PhoneNumberPage;

/* jshint ignore:start */
/**
 * Build an instance of PhoneNumberInstance
 *
 * @function getInstance
 * @memberof Twilio.Trunking.V1.TrunkContext.PhoneNumberPage#
 *
 * @param {PhoneNumberPayload} payload - Payload response from the API
 *
 * @returns PhoneNumberInstance
 */
/* jshint ignore:end */
PhoneNumberPage.prototype.getInstance = function getInstance(payload) {
  return new PhoneNumberInstance(this._version, payload, this._solution.trunkSid);
};

/* jshint ignore:start */
/**
 * Provide a user-friendly representation
 *
 * @function toJSON
 * @memberof Twilio.Trunking.V1.TrunkContext.PhoneNumberPage#
 *
 * @returns Object
 */
/* jshint ignore:end */
PhoneNumberPage.prototype.toJSON = function toJSON() {
  let clone = {};
  _.forOwn(this, function(value, key) {
    if (!_.startsWith(key, '_') && ! _.isFunction(value)) {
      clone[key] = value;
    }
  });
  return clone;
};

PhoneNumberPage.prototype[util.inspect.custom] = function inspect(depth,
    options) {
  return util.inspect(this.toJSON(), options);
};


/* jshint ignore:start */
/**
 * Initialize the PhoneNumberContext
 *
 * @constructor Twilio.Trunking.V1.TrunkContext.PhoneNumberInstance
 *
 * @property {string} accountSid - The SID of the Account that created the resource
 * @property {phone_number.address_requirement} addressRequirements -
 *          Whether the phone number requires an Address registered with Twilio
 * @property {string} apiVersion -
 *          The API version used to start a new TwiML session
 * @property {boolean} beta -
 *          Whether the phone number is new to the Twilio platform
 * @property {object} capabilities -
 *          Indicate if a phone can receive calls or messages
 * @property {Date} dateCreated -
 *          The RFC 2822 date and time in GMT when the resource was created
 * @property {Date} dateUpdated -
 *          The RFC 2822 date and time in GMT when the resource was last updated
 * @property {string} friendlyName -
 *          The string that you assigned to describe the resource
 * @property {string} links - The URLs of related resources
 * @property {string} phoneNumber - The phone number in E.164 format
 * @property {string} sid - The unique string that identifies the resource
 * @property {string} smsApplicationSid -
 *          The SID of the application that handles SMS messages sent to the phone number
 * @property {string} smsFallbackMethod -
 *          The HTTP method used with sms_fallback_url
 * @property {string} smsFallbackUrl -
 *          The URL that we call when an error occurs while retrieving or executing the TwiML
 * @property {string} smsMethod - The HTTP method to use with sms_url
 * @property {string} smsUrl -
 *          The URL we call when the phone number receives an incoming SMS message
 * @property {string} statusCallback -
 *          The URL to send status information to your application
 * @property {string} statusCallbackMethod -
 *          The HTTP method we use to call status_callback
 * @property {string} trunkSid -
 *          The SID of the Trunk that handles calls to the phone number
 * @property {string} url - The absolute URL of the resource
 * @property {string} voiceApplicationSid -
 *          The SID of the application that handles calls to the phone number
 * @property {boolean} voiceCallerIdLookup - Whether to lookup the caller's name
 * @property {string} voiceFallbackMethod -
 *          The HTTP method that we use to call voice_fallback_url
 * @property {string} voiceFallbackUrl -
 *          The URL we call when an error occurs in TwiML
 * @property {string} voiceMethod - The HTTP method used with the voice_url
 * @property {string} voiceUrl -
 *          The URL we call when the phone number receives a call
 *
 * @param {V1} version - Version of the resource
 * @param {PhoneNumberPayload} payload - The instance payload
 * @param {sid} trunkSid -
 *          The SID of the Trunk that handles calls to the phone number
 * @param {sid} sid - The unique string that identifies the resource
 */
/* jshint ignore:end */
PhoneNumberInstance = function PhoneNumberInstance(version, payload, trunkSid,
                                                    sid) {
  this._version = version;

  // Marshaled Properties
  this.accountSid = payload.account_sid; // jshint ignore:line
  this.addressRequirements = payload.address_requirements; // jshint ignore:line
  this.apiVersion = payload.api_version; // jshint ignore:line
  this.beta = payload.beta; // jshint ignore:line
  this.capabilities = payload.capabilities; // jshint ignore:line
  this.dateCreated = deserialize.iso8601DateTime(payload.date_created); // jshint ignore:line
  this.dateUpdated = deserialize.iso8601DateTime(payload.date_updated); // jshint ignore:line
  this.friendlyName = payload.friendly_name; // jshint ignore:line
  this.links = payload.links; // jshint ignore:line
  this.phoneNumber = payload.phone_number; // jshint ignore:line
  this.sid = payload.sid; // jshint ignore:line
  this.smsApplicationSid = payload.sms_application_sid; // jshint ignore:line
  this.smsFallbackMethod = payload.sms_fallback_method; // jshint ignore:line
  this.smsFallbackUrl = payload.sms_fallback_url; // jshint ignore:line
  this.smsMethod = payload.sms_method; // jshint ignore:line
  this.smsUrl = payload.sms_url; // jshint ignore:line
  this.statusCallback = payload.status_callback; // jshint ignore:line
  this.statusCallbackMethod = payload.status_callback_method; // jshint ignore:line
  this.trunkSid = payload.trunk_sid; // jshint ignore:line
  this.url = payload.url; // jshint ignore:line
  this.voiceApplicationSid = payload.voice_application_sid; // jshint ignore:line
  this.voiceCallerIdLookup = payload.voice_caller_id_lookup; // jshint ignore:line
  this.voiceFallbackMethod = payload.voice_fallback_method; // jshint ignore:line
  this.voiceFallbackUrl = payload.voice_fallback_url; // jshint ignore:line
  this.voiceMethod = payload.voice_method; // jshint ignore:line
  this.voiceUrl = payload.voice_url; // jshint ignore:line

  // Context
  this._context = undefined;
  this._solution = {trunkSid: trunkSid, sid: sid || this.sid, };
};

Object.defineProperty(PhoneNumberInstance.prototype,
  '_proxy', {
    get: function() {
      if (!this._context) {
        this._context = new PhoneNumberContext(this._version, this._solution.trunkSid, this._solution.sid);
      }

      return this._context;
    }
});

/* jshint ignore:start */
/**
 * fetch a PhoneNumberInstance
 *
 * @function fetch
 * @memberof Twilio.Trunking.V1.TrunkContext.PhoneNumberInstance#
 *
 * @param {function} [callback] - Callback to handle processed record
 *
 * @returns {Promise} Resolves to processed PhoneNumberInstance
 */
/* jshint ignore:end */
PhoneNumberInstance.prototype.fetch = function fetch(callback) {
  return this._proxy.fetch(callback);
};

/* jshint ignore:start */
/**
 * remove a PhoneNumberInstance
 *
 * @function remove
 * @memberof Twilio.Trunking.V1.TrunkContext.PhoneNumberInstance#
 *
 * @param {function} [callback] - Callback to handle processed record
 *
 * @returns {Promise} Resolves to processed PhoneNumberInstance
 */
/* jshint ignore:end */
PhoneNumberInstance.prototype.remove = function remove(callback) {
  return this._proxy.remove(callback);
};

/* jshint ignore:start */
/**
 * Provide a user-friendly representation
 *
 * @function toJSON
 * @memberof Twilio.Trunking.V1.TrunkContext.PhoneNumberInstance#
 *
 * @returns Object
 */
/* jshint ignore:end */
PhoneNumberInstance.prototype.toJSON = function toJSON() {
  let clone = {};
  _.forOwn(this, function(value, key) {
    if (!_.startsWith(key, '_') && ! _.isFunction(value)) {
      clone[key] = value;
    }
  });
  return clone;
};

PhoneNumberInstance.prototype[util.inspect.custom] = function inspect(depth,
    options) {
  return util.inspect(this.toJSON(), options);
};


/* jshint ignore:start */
/**
 * Initialize the PhoneNumberContext
 *
 * @constructor Twilio.Trunking.V1.TrunkContext.PhoneNumberContext
 *
 * @param {V1} version - Version of the resource
 * @param {sid} trunkSid -
 *          The SID of the Trunk from which to fetch the PhoneNumber resource
 * @param {sid} sid - The unique string that identifies the resource
 */
/* jshint ignore:end */
PhoneNumberContext = function PhoneNumberContext(version, trunkSid, sid) {
  this._version = version;

  // Path Solution
  this._solution = {trunkSid: trunkSid, sid: sid, };
  this._uri = `/Trunks/${trunkSid}/PhoneNumbers/${sid}`;
};

/* jshint ignore:start */
/**
 * fetch a PhoneNumberInstance
 *
 * @function fetch
 * @memberof Twilio.Trunking.V1.TrunkContext.PhoneNumberContext#
 *
 * @param {function} [callback] - Callback to handle processed record
 *
 * @returns {Promise} Resolves to processed PhoneNumberInstance
 */
/* jshint ignore:end */
PhoneNumberContext.prototype.fetch = function fetch(callback) {
  var deferred = Q.defer();
  var promise = this._version.fetch({uri: this._uri, method: 'GET'});

  promise = promise.then(function(payload) {
    deferred.resolve(new PhoneNumberInstance(
      this._version,
      payload,
      this._solution.trunkSid,
      this._solution.sid
    ));
  }.bind(this));

  promise.catch(function(error) {
    deferred.reject(error);
  });

  if (_.isFunction(callback)) {
    deferred.promise.nodeify(callback);
  }

  return deferred.promise;
};

/* jshint ignore:start */
/**
 * remove a PhoneNumberInstance
 *
 * @function remove
 * @memberof Twilio.Trunking.V1.TrunkContext.PhoneNumberContext#
 *
 * @param {function} [callback] - Callback to handle processed record
 *
 * @returns {Promise} Resolves to processed PhoneNumberInstance
 */
/* jshint ignore:end */
PhoneNumberContext.prototype.remove = function remove(callback) {
  var deferred = Q.defer();
  var promise = this._version.remove({uri: this._uri, method: 'DELETE'});

  promise = promise.then(function(payload) {
    deferred.resolve(payload);
  }.bind(this));

  promise.catch(function(error) {
    deferred.reject(error);
  });

  if (_.isFunction(callback)) {
    deferred.promise.nodeify(callback);
  }

  return deferred.promise;
};

/* jshint ignore:start */
/**
 * Provide a user-friendly representation
 *
 * @function toJSON
 * @memberof Twilio.Trunking.V1.TrunkContext.PhoneNumberContext#
 *
 * @returns Object
 */
/* jshint ignore:end */
PhoneNumberContext.prototype.toJSON = function toJSON() {
  return this._solution;
};

PhoneNumberContext.prototype[util.inspect.custom] = function inspect(depth,
    options) {
  return util.inspect(this.toJSON(), options);
};

module.exports = {
  PhoneNumberList: PhoneNumberList,
  PhoneNumberPage: PhoneNumberPage,
  PhoneNumberInstance: PhoneNumberInstance,
  PhoneNumberContext: PhoneNumberContext
};
