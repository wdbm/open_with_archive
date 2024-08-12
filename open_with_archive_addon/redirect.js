function openWithArchive() {
  browser.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    const currentUrl = tabs[0].url;
    const archiveUrl = `https://archive.ph/${currentUrl}`;
    browser.tabs.update(tabs[0].id, { url: archiveUrl });
  });
}

browser.browserAction.onClicked.addListener(openWithArchive);
