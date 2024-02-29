# Onlyauth.AuthenticationApi

OnlyAuth Javascript Library

All URIs are relative to *https://api.onlyauth.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createAccessToken**](AuthenticationApi.md#createAccessToken) | **POST** /server/access-tokens/new | Creates a short-lived JWT token to integrate the widget
[**validateSuccessToken**](AuthenticationApi.md#validateSuccessToken) | **GET** /server/success-tokens | Validates a success token after user completes authentication



## createAccessToken

> CreateAccessToken200Response createAccessToken(appId, clientId, endUserPhoneNumber, endUserUuid, redirectUri, language, region)

Creates a short-lived JWT token to integrate the widget

### Example

```javascript
import Onlyauth from 'onlyauth';
let defaultClient = Onlyauth.ApiClient.instance;
// Configure Bearer (API Secret) access token for authorization: BearerAuth
let BearerAuth = defaultClient.authentications['BearerAuth'];
BearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new Onlyauth.AuthenticationApi();
let appId = "appId_example"; // String | Uuid of the OnlyAuth App (APPX-XXX)
let clientId = "clientId_example"; // String | Uuid of you in the OnlyAuth Platform (CLNT-XXX)
let endUserPhoneNumber = "endUserPhoneNumber_example"; // String | Phone number of the end user (E164 format)
let endUserUuid = "endUserUuid_example"; // String | Uuid of the end user (any type)
let redirectUri = "redirectUri_example"; // String | URL to redirect to after authentication
let language = "language_example"; // String | Language code (e.g., en-US)
let region = "region_example"; // String | Region code (us-1)
apiInstance.createAccessToken(appId, clientId, endUserPhoneNumber, endUserUuid, redirectUri, language, region).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **appId** | **String**| Uuid of the OnlyAuth App (APPX-XXX) | 
 **clientId** | **String**| Uuid of you in the OnlyAuth Platform (CLNT-XXX) | 
 **endUserPhoneNumber** | **String**| Phone number of the end user (E164 format) | 
 **endUserUuid** | **String**| Uuid of the end user (any type) | 
 **redirectUri** | **String**| URL to redirect to after authentication | 
 **language** | **String**| Language code (e.g., en-US) | 
 **region** | **String**| Region code (us-1) | 

### Return type

[**CreateAccessToken200Response**](CreateAccessToken200Response.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: application/x-www-form-urlencoded
- **Accept**: application/json


## validateSuccessToken

> ValidateSuccessToken200Response validateSuccessToken(authorization, appId, clientId, token)

Validates a success token after user completes authentication

### Example

```javascript
import Onlyauth from 'onlyauth';
let defaultClient = Onlyauth.ApiClient.instance;
// Configure Bearer (API Secret) access token for authorization: BearerAuth
let BearerAuth = defaultClient.authentications['BearerAuth'];
BearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new Onlyauth.AuthenticationApi();
let authorization = "authorization_example"; // String | Bearer token for authentication (your API Secret)
let appId = "appId_example"; // String | Uuid of the OnlyAuth App (APPX-XXX)
let clientId = "clientId_example"; // String | Uuid of you in the OnlyAuth Platform  (CLNT-XXX)
let token = "token_example"; // String | The success token to be validated (TOKN-XXX)
apiInstance.validateSuccessToken(authorization, appId, clientId, token).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**| Bearer token for authentication (your API Secret) | 
 **appId** | **String**| Uuid of the OnlyAuth App (APPX-XXX) | 
 **clientId** | **String**| Uuid of you in the OnlyAuth Platform  (CLNT-XXX) | 
 **token** | **String**| The success token to be validated (TOKN-XXX) | 

### Return type

[**ValidateSuccessToken200Response**](ValidateSuccessToken200Response.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

