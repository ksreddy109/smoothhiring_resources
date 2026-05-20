// Viewer-request: 301 resources.smoothhiring.com -> smoothhiring.com (same path)
function handler(event) {
  var request = event.request;
  var host = request.headers.host && request.headers.host.value;
  if (host === "resources.smoothhiring.com") {
    var uri = request.uri;
    var qs = request.querystring;
    var q = "";
    if (qs && Object.keys(qs).length > 0) {
      var parts = [];
      for (var k in qs) {
        if (qs[k].multiValue) {
          for (var i = 0; i < qs[k].multiValue.length; i++) {
            parts.push(
              encodeURIComponent(k) +
                "=" +
                encodeURIComponent(qs[k].multiValue[i].value)
            );
          }
        } else if (qs[k].value !== undefined) {
          parts.push(
            encodeURIComponent(k) + "=" + encodeURIComponent(qs[k].value)
          );
        }
      }
      if (parts.length) q = "?" + parts.join("&");
    }
    return {
      statusCode: 301,
      statusDescription: "Moved Permanently",
      headers: {
        location: { value: "https://smoothhiring.com" + uri + q },
      },
    };
  }
  return request;
}
