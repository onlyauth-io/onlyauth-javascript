# OnlyAuth Javascript Library

<div align="left">
    <a href="https://opensource.org/licenses/MIT">
        <img src="https://img.shields.io/badge/License-MIT-blue.svg" style="width: 100px; height: 28px;" />
    </a>
</div>

## Sign up for OnlyAuth 2FA API

Sign up for the [OnlyAuth 2FA API](https://app.onlyauth.io) to get your API credentials.

## Installation Guide
Check out the [OnlyAuth 2FA API Implementation guide](https://www.onlyauth.io/docs) for full details.


## SDK Installation

### For [Node.js](https://nodejs.org/)

#### npm
Install it via:

```shell
npm install onlyauth --save
```

Finally, you need to build the module:

```shell
npm run build
```


#### git

Install it via:

```shell
    npm install onlyauth-io/onlyauth-javascript
```

### Webpack Configuration

Using Webpack you may encounter the following error: "Module not found: Error:
Cannot resolve module", most certainly you should disable AMD loader. Add/merge
the following section to your webpack config:

```javascript
module: {
  rules: [
    {
      parser: {
        amd: false
      }
    }
  ]
}
```

## Getting Started

Please follow the [installation](#installation) instruction and execute the following JS code:

```javascript
import onlyauth from 'onlyauth';
let defaultClient = onlyauth.ApiClient.instance;
// Configure Bearer (API Secret) access token for authorization: BearerAuth
let BearerAuth = defaultClient.authentications['BearerAuth'];
BearerAuth.accessToken = "API SECRET"

let apiInstance = new onlyauth.AuthenticationApi();
let appId = "appId_example"; // String | Uuid of the OnlyAuth App (APPX-XXX)
let clientId = "clientId_example"; // String | Uuid of you in the OnlyAuth Platform (CLNT-XXX)
let endUserPhoneNumber = "endUserPhoneNumber_example"; // String | Phone number of the end user (E164 format)
let endUserUuid = "endUserUuid_example"; // String | Uuid of the end user (any type)
let redirectUri = "redirectUri_example"; // String | URL to redirect to after authentication
let language = "language_example"; // String | Language code (e.g., en-US)
let region = "region_example"; // String | Region code (us-1)
apiInstance.createAccessToken(appId, clientId, endUserPhoneNumber, endUserUuid, redirectUri, language, region).then((data) => {
  console.log('API called successfully. Token: ' + data.token);
}, (error) => {
  console.error(error);
});
```

## Documentation for API Endpoints

All URIs are relative to *https://api.onlyauth.io*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*OnlyAuth.AppsApi* | [**deleteApp**](docs/AppsApi.md#deleteApp) | **DELETE** /apps/{app_id} | Delete an app
*OnlyAuth.AppsApi* | [**getAppById**](docs/AppsApi.md#getAppById) | **GET** /apps/{app_id} | Get an app by uuid
*OnlyAuth.AppsApi* | [**getApps**](docs/AppsApi.md#getApps) | **GET** /apps | Get all apps
*OnlyAuth.AppsApi* | [**newApp**](docs/AppsApi.md#newApp) | **POST** /apps | Create a new app
*OnlyAuth.AppsApi* | [**updateApp**](docs/AppsApi.md#updateApp) | **POST** /apps/{app_id} | Update an app
*OnlyAuth.AuthenticationApi* | [**createAccessToken**](docs/AuthenticationApi.md#createAccessToken) | **POST** /server/access-tokens/new | Creates a short-lived JWT token to integrate the widget
*OnlyAuth.AuthenticationApi* | [**validateSuccessToken**](docs/AuthenticationApi.md#validateSuccessToken) | **GET** /server/success-tokens | Validates a success token after user completes authentication


## Documentation for Models

 - [Onlyauth.CreateAccessToken200Response](docs/CreateAccessToken200Response.md)
 - [Onlyauth.DeleteApp200Response](docs/DeleteApp200Response.md)
 - [Onlyauth.ErrorResponse](docs/ErrorResponse.md)
 - [Onlyauth.GetApps200Response](docs/GetApps200Response.md)
 - [Onlyauth.GetApps200ResponseAppsInner](docs/GetApps200ResponseAppsInner.md)
 - [Onlyauth.NewApp200Response](docs/NewApp200Response.md)
 - [Onlyauth.ValidateSuccessToken200Response](docs/ValidateSuccessToken200Response.md)


## Documentation for Authorization


Authentication schemes defined for the API:
### BearerAuth

- **Type**: Bearer authentication (API Secret)

