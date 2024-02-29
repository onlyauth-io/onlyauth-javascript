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

import ApiClient from '../ApiClient';

/**
 * The DeleteApp200Response model module.
 * @module model/DeleteApp200Response
 * @version 0.1.2
 */
class DeleteApp200Response {
    /**
     * Constructs a new <code>DeleteApp200Response</code>.
     * @alias module:model/DeleteApp200Response
     */
    constructor() { 
        
        DeleteApp200Response.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>DeleteApp200Response</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DeleteApp200Response} obj Optional instance to populate.
     * @return {module:model/DeleteApp200Response} The populated <code>DeleteApp200Response</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DeleteApp200Response();

            if (data.hasOwnProperty('app')) {
                obj['app'] = ApiClient.convertToType(data['app'], Object);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>DeleteApp200Response</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>DeleteApp200Response</code>.
     */
    static validateJSON(data) {

        return true;
    }


}



/**
 * @member {Object} app
 */
DeleteApp200Response.prototype['app'] = undefined;






export default DeleteApp200Response;
