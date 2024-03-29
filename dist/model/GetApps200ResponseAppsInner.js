"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); } /**
 * OnlyAuth API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 0.1.2
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */
/**
 * The GetApps200ResponseAppsInner model module.
 * @module model/GetApps200ResponseAppsInner
 * @version 0.1.2
 */
var GetApps200ResponseAppsInner = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>GetApps200ResponseAppsInner</code>.
   * @alias module:model/GetApps200ResponseAppsInner
   * @param sandboxMode {Boolean} Indicates if the app is in sandbox mode
   * @param allowSmsChannel {Boolean} Indicates if SMS channel is allowed for guests
   * @param icon {String} URL to the app's icon
   * @param allowTotpChannel {Boolean} Indicates if TOTP channel is allowed for guests
   * @param enabled {Number} Indicates if the app is enabled
   * @param appDomain {String} Domain of the app
   * @param webauthnEnabled {Boolean} Indicates if WebAuthn is enabled
   * @param id {String} Uuid of the app (APPX-XXX)
   */
  function GetApps200ResponseAppsInner(sandboxMode, allowSmsChannel, icon, allowTotpChannel, enabled, appDomain, webauthnEnabled, id) {
    _classCallCheck(this, GetApps200ResponseAppsInner);
    GetApps200ResponseAppsInner.initialize(this, sandboxMode, allowSmsChannel, icon, allowTotpChannel, enabled, appDomain, webauthnEnabled, id);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  _createClass(GetApps200ResponseAppsInner, null, [{
    key: "initialize",
    value: function initialize(obj, sandboxMode, allowSmsChannel, icon, allowTotpChannel, enabled, appDomain, webauthnEnabled, id) {
      obj['sandbox_mode'] = sandboxMode;
      obj['allow_sms_channel'] = allowSmsChannel;
      obj['icon'] = icon;
      obj['allow_totp_channel'] = allowTotpChannel;
      obj['enabled'] = enabled;
      obj['app_domain'] = appDomain;
      obj['webauthn_enabled'] = webauthnEnabled;
      obj['id'] = id;
    }

    /**
     * Constructs a <code>GetApps200ResponseAppsInner</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetApps200ResponseAppsInner} obj Optional instance to populate.
     * @return {module:model/GetApps200ResponseAppsInner} The populated <code>GetApps200ResponseAppsInner</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new GetApps200ResponseAppsInner();
        if (data.hasOwnProperty('sandbox_mode')) {
          obj['sandbox_mode'] = _ApiClient["default"].convertToType(data['sandbox_mode'], 'Boolean');
        }
        if (data.hasOwnProperty('allow_sms_channel')) {
          obj['allow_sms_channel'] = _ApiClient["default"].convertToType(data['allow_sms_channel'], 'Boolean');
        }
        if (data.hasOwnProperty('client_id')) {
          obj['client_id'] = _ApiClient["default"].convertToType(data['client_id'], 'String');
        }
        if (data.hasOwnProperty('friendly_name')) {
          obj['friendly_name'] = _ApiClient["default"].convertToType(data['friendly_name'], 'String');
        }
        if (data.hasOwnProperty('icon')) {
          obj['icon'] = _ApiClient["default"].convertToType(data['icon'], 'String');
        }
        if (data.hasOwnProperty('allow_totp_channel')) {
          obj['allow_totp_channel'] = _ApiClient["default"].convertToType(data['allow_totp_channel'], 'Boolean');
        }
        if (data.hasOwnProperty('enabled')) {
          obj['enabled'] = _ApiClient["default"].convertToType(data['enabled'], 'Number');
        }
        if (data.hasOwnProperty('webauthn_redirect_allowed')) {
          obj['webauthn_redirect_allowed'] = _ApiClient["default"].convertToType(data['webauthn_redirect_allowed'], 'Boolean');
        }
        if (data.hasOwnProperty('app_domain')) {
          obj['app_domain'] = _ApiClient["default"].convertToType(data['app_domain'], 'String');
        }
        if (data.hasOwnProperty('webauthn_enabled')) {
          obj['webauthn_enabled'] = _ApiClient["default"].convertToType(data['webauthn_enabled'], 'Boolean');
        }
        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'String');
        }
        if (data.hasOwnProperty('supported_factors')) {
          obj['supported_factors'] = _ApiClient["default"].convertToType(data['supported_factors'], 'String');
        }
        if (data.hasOwnProperty('webauth_enabled')) {
          obj['webauth_enabled'] = _ApiClient["default"].convertToType(data['webauth_enabled'], 'Boolean');
        }
      }
      return obj;
    }

    /**
     * Validates the JSON data with respect to <code>GetApps200ResponseAppsInner</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>GetApps200ResponseAppsInner</code>.
     */
  }, {
    key: "validateJSON",
    value: function validateJSON(data) {
      // check to make sure all required properties are present in the JSON string
      var _iterator = _createForOfIteratorHelper(GetApps200ResponseAppsInner.RequiredProperties),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var property = _step.value;
          if (!data.hasOwnProperty(property)) {
            throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
          }
        }
        // ensure the json data is a string
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
      if (data['client_id'] && !(typeof data['client_id'] === 'string' || data['client_id'] instanceof String)) {
        throw new Error("Expected the field `client_id` to be a primitive type in the JSON string but got " + data['client_id']);
      }
      // ensure the json data is a string
      if (data['friendly_name'] && !(typeof data['friendly_name'] === 'string' || data['friendly_name'] instanceof String)) {
        throw new Error("Expected the field `friendly_name` to be a primitive type in the JSON string but got " + data['friendly_name']);
      }
      // ensure the json data is a string
      if (data['icon'] && !(typeof data['icon'] === 'string' || data['icon'] instanceof String)) {
        throw new Error("Expected the field `icon` to be a primitive type in the JSON string but got " + data['icon']);
      }
      // ensure the json data is a string
      if (data['app_domain'] && !(typeof data['app_domain'] === 'string' || data['app_domain'] instanceof String)) {
        throw new Error("Expected the field `app_domain` to be a primitive type in the JSON string but got " + data['app_domain']);
      }
      // ensure the json data is a string
      if (data['id'] && !(typeof data['id'] === 'string' || data['id'] instanceof String)) {
        throw new Error("Expected the field `id` to be a primitive type in the JSON string but got " + data['id']);
      }
      // ensure the json data is a string
      if (data['supported_factors'] && !(typeof data['supported_factors'] === 'string' || data['supported_factors'] instanceof String)) {
        throw new Error("Expected the field `supported_factors` to be a primitive type in the JSON string but got " + data['supported_factors']);
      }
      return true;
    }
  }]);
  return GetApps200ResponseAppsInner;
}();
GetApps200ResponseAppsInner.RequiredProperties = ["sandbox_mode", "allow_sms_channel", "icon", "allow_totp_channel", "enabled", "app_domain", "webauthn_enabled", "id"];

/**
 * Indicates if the app is in sandbox mode
 * @member {Boolean} sandbox_mode
 */
GetApps200ResponseAppsInner.prototype['sandbox_mode'] = undefined;

/**
 * Indicates if SMS channel is allowed for guests
 * @member {Boolean} allow_sms_channel
 */
GetApps200ResponseAppsInner.prototype['allow_sms_channel'] = undefined;

/**
 * Client identifier (CLNT-XXX)
 * @member {String} client_id
 */
GetApps200ResponseAppsInner.prototype['client_id'] = undefined;

/**
 * Friendly name of the app
 * @member {String} friendly_name
 */
GetApps200ResponseAppsInner.prototype['friendly_name'] = undefined;

/**
 * URL to the app's icon
 * @member {String} icon
 */
GetApps200ResponseAppsInner.prototype['icon'] = undefined;

/**
 * Indicates if TOTP channel is allowed for guests
 * @member {Boolean} allow_totp_channel
 */
GetApps200ResponseAppsInner.prototype['allow_totp_channel'] = undefined;

/**
 * Indicates if the app is enabled
 * @member {Number} enabled
 */
GetApps200ResponseAppsInner.prototype['enabled'] = undefined;

/**
 * Indicates if WebAuthn redirect is allowed when webauthn_enabled is set to true
 * @member {Boolean} webauthn_redirect_allowed
 */
GetApps200ResponseAppsInner.prototype['webauthn_redirect_allowed'] = undefined;

/**
 * Domain of the app
 * @member {String} app_domain
 */
GetApps200ResponseAppsInner.prototype['app_domain'] = undefined;

/**
 * Indicates if WebAuthn is enabled
 * @member {Boolean} webauthn_enabled
 */
GetApps200ResponseAppsInner.prototype['webauthn_enabled'] = undefined;

/**
 * Uuid of the app (APPX-XXX)
 * @member {String} id
 */
GetApps200ResponseAppsInner.prototype['id'] = undefined;

/**
 * Supported factors for the app
 * @member {String} supported_factors
 */
GetApps200ResponseAppsInner.prototype['supported_factors'] = undefined;

/**
 * Indicates if WebAuth is enabled
 * @member {Boolean} webauth_enabled
 */
GetApps200ResponseAppsInner.prototype['webauth_enabled'] = undefined;
var _default = exports["default"] = GetApps200ResponseAppsInner;