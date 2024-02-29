"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
var _CreateAccessToken200Response = _interopRequireDefault(require("../model/CreateAccessToken200Response"));
var _ErrorResponse = _interopRequireDefault(require("../model/ErrorResponse"));
var _ValidateSuccessToken200Response = _interopRequireDefault(require("../model/ValidateSuccessToken200Response"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
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
* Authentication service.
* @module api/AuthenticationApi
* @version 0.1.2
*/
var AuthenticationApi = exports["default"] = /*#__PURE__*/function () {
  /**
  * Constructs a new AuthenticationApi. 
  * OnlyAuth Javascript Library
  * @alias module:api/AuthenticationApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function AuthenticationApi(apiClient) {
    _classCallCheck(this, AuthenticationApi);
    this.apiClient = apiClient || _ApiClient["default"].instance;
  }

  /**
   * Creates a short-lived JWT token to integrate the widget
   * @param {String} appId Uuid of the OnlyAuth App (APPX-XXX)
   * @param {String} clientId Uuid of you in the OnlyAuth Platform (CLNT-XXX)
   * @param {String} endUserPhoneNumber Phone number of the end user (E164 format)
   * @param {String} endUserUuid Uuid of the end user (any type)
   * @param {String} redirectUri URL to redirect to after authentication
   * @param {String} language Language code (e.g., en-US)
   * @param {String} region Region code (us-1)
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/CreateAccessToken200Response} and HTTP response
   */
  _createClass(AuthenticationApi, [{
    key: "createAccessTokenWithHttpInfo",
    value: function createAccessTokenWithHttpInfo(appId, clientId, endUserPhoneNumber, endUserUuid, redirectUri, language, region) {
      var postBody = null;
      // verify the required parameter 'appId' is set
      if (appId === undefined || appId === null) {
        throw new Error("Missing the required parameter 'appId' when calling createAccessToken");
      }
      // verify the required parameter 'clientId' is set
      if (clientId === undefined || clientId === null) {
        throw new Error("Missing the required parameter 'clientId' when calling createAccessToken");
      }
      // verify the required parameter 'endUserPhoneNumber' is set
      if (endUserPhoneNumber === undefined || endUserPhoneNumber === null) {
        throw new Error("Missing the required parameter 'endUserPhoneNumber' when calling createAccessToken");
      }
      // verify the required parameter 'endUserUuid' is set
      if (endUserUuid === undefined || endUserUuid === null) {
        throw new Error("Missing the required parameter 'endUserUuid' when calling createAccessToken");
      }
      // verify the required parameter 'redirectUri' is set
      if (redirectUri === undefined || redirectUri === null) {
        throw new Error("Missing the required parameter 'redirectUri' when calling createAccessToken");
      }
      // verify the required parameter 'language' is set
      if (language === undefined || language === null) {
        throw new Error("Missing the required parameter 'language' when calling createAccessToken");
      }
      // verify the required parameter 'region' is set
      if (region === undefined || region === null) {
        throw new Error("Missing the required parameter 'region' when calling createAccessToken");
      }
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {
        'app_id': appId,
        'client_id': clientId,
        'end_user_phone_number': endUserPhoneNumber,
        'end_user_uuid': endUserUuid,
        'redirect_uri': redirectUri,
        'language': language,
        'region': region
      };
      var authNames = ['BearerAuth'];
      var contentTypes = ['application/x-www-form-urlencoded'];
      var accepts = ['application/json'];
      var returnType = _CreateAccessToken200Response["default"];
      return this.apiClient.callApi('/server/access-tokens/new', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }

    /**
     * Creates a short-lived JWT token to integrate the widget
     * @param {String} appId Uuid of the OnlyAuth App (APPX-XXX)
     * @param {String} clientId Uuid of you in the OnlyAuth Platform (CLNT-XXX)
     * @param {String} endUserPhoneNumber Phone number of the end user (E164 format)
     * @param {String} endUserUuid Uuid of the end user (any type)
     * @param {String} redirectUri URL to redirect to after authentication
     * @param {String} language Language code (e.g., en-US)
     * @param {String} region Region code (us-1)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/CreateAccessToken200Response}
     */
  }, {
    key: "createAccessToken",
    value: function createAccessToken(appId, clientId, endUserPhoneNumber, endUserUuid, redirectUri, language, region) {
      return this.createAccessTokenWithHttpInfo(appId, clientId, endUserPhoneNumber, endUserUuid, redirectUri, language, region).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Validates a success token after user completes authentication
     * @param {String} authorization Bearer token for authentication (your API Secret)
     * @param {String} appId Uuid of the OnlyAuth App (APPX-XXX)
     * @param {String} clientId Uuid of you in the OnlyAuth Platform  (CLNT-XXX)
     * @param {String} token The success token to be validated (TOKN-XXX)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ValidateSuccessToken200Response} and HTTP response
     */
  }, {
    key: "validateSuccessTokenWithHttpInfo",
    value: function validateSuccessTokenWithHttpInfo(authorization, appId, clientId, token) {
      var postBody = null;
      // verify the required parameter 'authorization' is set
      if (authorization === undefined || authorization === null) {
        throw new Error("Missing the required parameter 'authorization' when calling validateSuccessToken");
      }
      // verify the required parameter 'appId' is set
      if (appId === undefined || appId === null) {
        throw new Error("Missing the required parameter 'appId' when calling validateSuccessToken");
      }
      // verify the required parameter 'clientId' is set
      if (clientId === undefined || clientId === null) {
        throw new Error("Missing the required parameter 'clientId' when calling validateSuccessToken");
      }
      // verify the required parameter 'token' is set
      if (token === undefined || token === null) {
        throw new Error("Missing the required parameter 'token' when calling validateSuccessToken");
      }
      var pathParams = {};
      var queryParams = {
        'app_id': appId,
        'client_id': clientId,
        'token': token
      };
      var headerParams = {
        'Authorization': authorization
      };
      var formParams = {};
      var authNames = ['BearerAuth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _ValidateSuccessToken200Response["default"];
      return this.apiClient.callApi('/server/success-tokens', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }

    /**
     * Validates a success token after user completes authentication
     * @param {String} authorization Bearer token for authentication (your API Secret)
     * @param {String} appId Uuid of the OnlyAuth App (APPX-XXX)
     * @param {String} clientId Uuid of you in the OnlyAuth Platform  (CLNT-XXX)
     * @param {String} token The success token to be validated (TOKN-XXX)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ValidateSuccessToken200Response}
     */
  }, {
    key: "validateSuccessToken",
    value: function validateSuccessToken(authorization, appId, clientId, token) {
      return this.validateSuccessTokenWithHttpInfo(authorization, appId, clientId, token).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
  }]);
  return AuthenticationApi;
}();