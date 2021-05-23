// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  // 'http://api.nytimes.com/svc/mostpopular/v2/mostviewed/%7bsection%7d/%7bperiod%7d.json?apikey=YK9H5VpD74tNVW3EOwDiie4NCxCk9Ec9',

  apiUrl: 'https://api.nytimes.com/svc/mostpopular/v2',
  apiKey: 'wF3E0400L2xlFpgbCQupEIKiioc0o8by',
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
