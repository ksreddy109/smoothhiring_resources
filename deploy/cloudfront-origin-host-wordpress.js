function handler(event) {
  var request = event.request;
  request.headers.host = { value: "smoothhiring.com" };
  return request;
}
