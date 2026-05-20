"use strict";
exports.handler = (event, context, callback) => {
  const request = event.Records[0].cf.request;
  request.headers.host = [{ key: "host", value: "smoothhiring.com" }];
  callback(null, request);
};
