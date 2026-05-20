/**
 * CloudFront Function (viewer request): 301 redirect extensionless URLs to trailing-slash form.
 * Attach to distribution E185ZBO2WGN7JH (resources.smoothhiring.com) on viewer-request.
 *
 * aws cloudfront create-function --name resources-trailing-slash-redirect \
 *   --function-config Comment="301 to trailing slash",Runtime=cloudfront-js-2.0 \
 *   --function-code fileb://deploy/cloudfront-trailing-slash-redirect.js
 */
function handler(event) {
  var request = event.request;
  var uri = request.uri;

  if (uri === "/" || uri.endsWith("/")) {
    return request;
  }

  if (uri.indexOf(".") !== -1) {
    return request;
  }

  var qs = request.querystring;
  var query = "";
  if (qs && Object.keys(qs).length > 0) {
    var parts = [];
    for (var key in qs) {
      if (!Object.prototype.hasOwnProperty.call(qs, key)) continue;
      var v = qs[key];
      if (v.multiValue) {
        for (var i = 0; i < v.multiValue.length; i++) {
          parts.push(
            encodeURIComponent(key) + "=" + encodeURIComponent(v.multiValue[i].value)
          );
        }
      } else if (v.value !== undefined) {
        parts.push(encodeURIComponent(key) + "=" + encodeURIComponent(v.value));
      }
    }
    if (parts.length > 0) {
      query = "?" + parts.join("&");
    }
  }

  return {
    statusCode: 301,
    statusDescription: "Moved Permanently",
    headers: {
      location: { value: uri + "/" + query },
      "cache-control": { value: "public, max-age=31536000, immutable" },
    },
  };
}
