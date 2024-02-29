# Onlyauth.GetApps200ResponseAppsInner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**sandboxMode** | **Boolean** | Indicates if the app is in sandbox mode | 
**allowSmsChannel** | **Boolean** | Indicates if SMS channel is allowed for guests | 
**clientId** | **String** | Client identifier (CLNT-XXX) | [optional] 
**friendlyName** | **String** | Friendly name of the app | [optional] 
**icon** | **String** | URL to the app&#39;s icon | 
**allowTotpChannel** | **Boolean** | Indicates if TOTP channel is allowed for guests | 
**enabled** | **Number** | Indicates if the app is enabled | 
**webauthnRedirectAllowed** | **Boolean** | Indicates if WebAuthn redirect is allowed when webauthn_enabled is set to true | [optional] 
**appDomain** | **String** | Domain of the app | 
**webauthnEnabled** | **Boolean** | Indicates if WebAuthn is enabled | 
**id** | **String** | Uuid of the app (APPX-XXX) | 
**supportedFactors** | **String** | Supported factors for the app | [optional] 
**webauthEnabled** | **Boolean** | Indicates if WebAuth is enabled | [optional] 


