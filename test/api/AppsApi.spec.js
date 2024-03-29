/**
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

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', process.cwd()+'/src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require(process.cwd()+'/src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.Onlyauth);
  }
}(this, function(expect, Onlyauth) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new Onlyauth.AppsApi();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('AppsApi', function() {
    describe('deleteApp', function() {
      it('should call deleteApp successfully', function(done) {
        //uncomment below and update the code to test deleteApp
        //instance.deleteApp(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getAppById', function() {
      it('should call getAppById successfully', function(done) {
        //uncomment below and update the code to test getAppById
        //instance.getAppById(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getApps', function() {
      it('should call getApps successfully', function(done) {
        //uncomment below and update the code to test getApps
        //instance.getApps(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('newApp', function() {
      it('should call newApp successfully', function(done) {
        //uncomment below and update the code to test newApp
        //instance.newApp(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateApp', function() {
      it('should call updateApp successfully', function(done) {
        //uncomment below and update the code to test updateApp
        //instance.updateApp(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
