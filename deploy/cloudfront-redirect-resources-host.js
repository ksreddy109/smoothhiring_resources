// Viewer-request on apex distribution (smoothhiring.com):
// 1) 301 resources.smoothhiring.com -> smoothhiring.com (same path)
// 2) 301 wrong-case /resources... -> lowercase (CloudFront path patterns are case-sensitive)
// 3) 301 /resources/... without trailing slash -> with trailing slash (canonical; matches Next export)
function handler(event) {
  var request = event.request;
  var host = request.headers.host && request.headers.host.value;
  var uri = request.uri;
  var qs = request.querystring;
  var q = buildQuery(qs);

  if (host === "resources.smoothhiring.com") {
    return redirect(canonicalResourcesUrl("smoothhiring.com", uri, q));
  }

  if (isResourcesPath(uri) && uri !== uri.toLowerCase()) {
    return redirect(canonicalResourcesUrl(host, uri.toLowerCase(), q));
  }

  if (host && isResourcesPath(uri) && needsTrailingSlash(uri)) {
    return redirect(canonicalResourcesUrl(host, uri, q));
  }

  return request;
}

function isResourcesPath(uri) {
  return uri.length >= 10 && uri.substring(0, 10).toLowerCase() === "/resources";
}

function needsTrailingSlash(uri) {
  if (uri.endsWith("/")) return false;
  var last = uri.split("/").pop() || "";
  return !/\.\w+$/.test(last);
}

function canonicalResourcesUrl(host, uri, q) {
  var path = uri;
  if (isResourcesPath(path) && needsTrailingSlash(path)) {
    path = path + "/";
  }
  return "https://" + host + path + q;
}

function buildQuery(qs) {
  if (!qs || Object.keys(qs).length === 0) return "";
  var parts = [];
  for (var k in qs) {
    if (qs[k].multiValue) {
      for (var i = 0; i < qs[k].multiValue.length; i++) {
        parts.push(encodeURIComponent(k) + "=" + encodeURIComponent(qs[k].multiValue[i].value));
      }
    } else if (qs[k].value !== undefined) {
      parts.push(encodeURIComponent(k) + "=" + encodeURIComponent(qs[k].value));
    }
  }
  return parts.length ? "?" + parts.join("&") : "";
}

function redirect(location) {
  return {
    statusCode: 301,
    statusDescription: "Moved Permanently",
    headers: {
      location: { value: location },
    },
  };
}
