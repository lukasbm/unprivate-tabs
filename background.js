async function reopenTabs() {
  try {
    // get all incognito tabs from current window
    let tabs = await browser.tabs.query({
      currentWindow: true,
    });

    // create new window
    await browser.windows.create({
      focused: true,
      incognito: false,
      url: tabs.map((x) => x.url),
    });

    // TODO close old (private) window?
  } catch (e) {
    console.error(e);
  }
}

browser.browserAction.onClicked.addListener(reopenTabs);
