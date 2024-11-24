//chrome.sidePanel.setPanelBehavior({openPanelOnActionClick: true}).catch((error) => console.error(error));

function injectedFunction() {
  document.body.style.backgroundColor = "orange";
}

chrome.tabs.onUpdated.addListener(async (tabId, info, tab) => {
  if (!tab.url) return;
  const url = new URL(tab.url);
  await chrome.sidePanel.setOptions({
    tabId,
    path: "index.html",
    enabled: true,
  });
  await chrome.sidePanel
    .setPanelBehavior({ openPanelOnActionClick: true })
    .catch((error) => console.error(error));

  await chrome.action.setBadgeText({ text: "3", tabId: tab.id });
  await chrome.action.setBadgeBackgroundColor({ color: "#FF472E", tabId: tab.id });
  await chrome.action.setBadgeTextColor({ color: "#ffffff", tabId: tab.id });


});

const extensions = "http://localhost:5173";

chrome.action.onClicked.addListener(async (tab) => {
  console.log("Url Start with", tab.url.startsWith(extensions));
  if (tab.url.startsWith(extensions)) {
    // Retrieve the action badge to check if the extension is 'ON' or 'OFF'
    const prevState = await chrome.action.getBadgeText({ tabId: tab.id });
    // Next state will always be the opposite
    const nextState = prevState === "ON" ? "OFF" : "ON";

    // Set the action badge to the next state
    await chrome.action.setBadgeText({
      tabId: tab.id,
      text: nextState,
    });

    document.body.style.backgroundColor = "orange";
  }
});

function injectQuestion(value) {
  const question = document.querySelector("textarea");
  console.log(question);
  question.value = value;
}

/*
chrome.runtime.onMessage.addListener(
    function (request, sender, sendResponse) {
        console.log(sender.tab ?
            "from a content script:" + sender.tab.url :
            "from the extension");
        if (request.ACTION === "generate") {
            console.log(request.QUESTION);
            //window.document.querySelector("textarea").value = request.label;
        }
        sendResponse({VALUE: "goodbye@happly.ai"});
    }
);*/
