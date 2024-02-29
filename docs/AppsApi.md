# Onlyauth.AppsApi

OnlyAuth Javascript Library

All URIs are relative to *https://api.onlyauth.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deleteApp**](AppsApi.md#deleteApp) | **DELETE** /apps/{app_id} | Delete an app
[**getAppById**](AppsApi.md#getAppById) | **GET** /apps/{app_id} | Get an app by uuid
[**getApps**](AppsApi.md#getApps) | **GET** /apps | Get all apps
[**newApp**](AppsApi.md#newApp) | **POST** /apps | Create a new app
[**updateApp**](AppsApi.md#updateApp) | **POST** /apps/{app_id} | Update an app



## deleteApp

> DeleteApp200Response deleteApp(appId, clientId)

Delete an app

### Example

```javascript
import Onlyauth from 'onlyauth';
let defaultClient = Onlyauth.ApiClient.instance;
// Configure Bearer (API Secret) access token for authorization: BearerAuth
let BearerAuth = defaultClient.authentications['BearerAuth'];
BearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new Onlyauth.AppsApi();
let appId = "appId_example"; // String | Unique identifier of the app to be deleted (APPX-XXX)
let clientId = "clientId_example"; // String | Client identifier for authentication (CLNT-XXX)
apiInstance.deleteApp(appId, clientId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **appId** | **String**| Unique identifier of the app to be deleted (APPX-XXX) | 
 **clientId** | **String**| Client identifier for authentication (CLNT-XXX) | 

### Return type

[**DeleteApp200Response**](DeleteApp200Response.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getAppById

> NewApp200Response getAppById(appId, clientId)

Get an app by uuid

### Example

```javascript
import Onlyauth from 'onlyauth';
let defaultClient = Onlyauth.ApiClient.instance;
// Configure Bearer (API Secret) access token for authorization: BearerAuth
let BearerAuth = defaultClient.authentications['BearerAuth'];
BearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new Onlyauth.AppsApi();
let appId = "appId_example"; // String | Unique identifier of the app to be fetched (APPX-XXX)
let clientId = "clientId_example"; // String | Client identifier for authentication (CLNT-XXX)
apiInstance.getAppById(appId, clientId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **appId** | **String**| Unique identifier of the app to be fetched (APPX-XXX) | 
 **clientId** | **String**| Client identifier for authentication (CLNT-XXX) | 

### Return type

[**NewApp200Response**](NewApp200Response.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getApps

> GetApps200Response getApps(clientId)

Get all apps

### Example

```javascript
import Onlyauth from 'onlyauth';
let defaultClient = Onlyauth.ApiClient.instance;
// Configure Bearer (API Secret) access token for authorization: BearerAuth
let BearerAuth = defaultClient.authentications['BearerAuth'];
BearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new Onlyauth.AppsApi();
let clientId = "clientId_example"; // String | Uuid of you in the OnlyAuth Platform (CLNT-XXX)
apiInstance.getApps(clientId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **clientId** | **String**| Uuid of you in the OnlyAuth Platform (CLNT-XXX) | 

### Return type

[**GetApps200Response**](GetApps200Response.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## newApp

> NewApp200Response newApp(opts)

Create a new app

### Example

```javascript
import Onlyauth from 'onlyauth';
let defaultClient = Onlyauth.ApiClient.instance;
// Configure Bearer (API Secret) access token for authorization: BearerAuth
let BearerAuth = defaultClient.authentications['BearerAuth'];
BearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new Onlyauth.AppsApi();
let opts = {
  'clientId': "clientId_example" // String | Client identifier
};
apiInstance.newApp(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **clientId** | **String**| Client identifier | [optional] 

### Return type

[**NewApp200Response**](NewApp200Response.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: application/x-www-form-urlencoded
- **Accept**: application/json


## updateApp

> NewApp200Response updateApp(appId, clientId, opts)

Update an app

### Example

```javascript
import Onlyauth from 'onlyauth';
let defaultClient = Onlyauth.ApiClient.instance;
// Configure Bearer (API Secret) access token for authorization: BearerAuth
let BearerAuth = defaultClient.authentications['BearerAuth'];
BearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new Onlyauth.AppsApi();
let appId = "appId_example"; // String | Unique identifier of the app to be updated (APPX-XXX)
let clientId = "clientId_example"; // String | Client identifier for authentication (CLNT-XXX)
let opts = {
  'clientId2': "clientId_example" // String | Client identifier
};
apiInstance.updateApp(appId, clientId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **appId** | **String**| Unique identifier of the app to be updated (APPX-XXX) | 
 **clientId** | **String**| Client identifier for authentication (CLNT-XXX) | 
 **clientId2** | **String**| Client identifier | [optional] 

### Return type

[**NewApp200Response**](NewApp200Response.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: application/x-www-form-urlencoded
- **Accept**: application/json

