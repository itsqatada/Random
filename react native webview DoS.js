const log = msg =>
  document.getElementById("log").textContent += "\n" + msg;

try {
  if (window.webkit?.messageHandlers?.ReactNativeWebView) {
    log("ReactNativeWebView handler detected.");

    // Malformed JSON
    const payload = "{unclosed_json:";

    window.webkit.messageHandlers.ReactNativeWebView.postMessage(payload);
    log("Payload sent: " + payload);
  } else {
    log("ReactNativeWebView handler not available.");
  }
} catch (e) {
  log("JS Exception: " + e.message);
}
