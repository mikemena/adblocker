chrome.webRequest.onBeforeRequest.addListener(
  function (details) {
    return { cancel: true };
  },
  { urls: blocked_sites },
  ["blocking"]
);
