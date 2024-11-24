console.log("Content script running");

document.addEventListener("click", function (event) {
  // Handle Input Focus
  const TARGET_TYPE = event.target.tagName;
  console.log(TARGET_TYPE);
  let TARGET_METHOD = "name";
  if (TARGET_TYPE === "INPUT" || TARGET_TYPE === "TEXTAREA") {
    let labelFor = event.target.name;

    // Get the label element
    let label = document.querySelector("label[for='" + labelFor + "']");

    if (!label) {
      labelFor = event.target.id;
      TARGET_METHOD = "id";
      label = document.querySelector("label[for='" + labelFor + "']");
    }

    (async () => {
      const message = {
        ACTION: "generate",
        QUESTION: label.innerText,
        TARGET: labelFor,
        TARGET_TYPE: TARGET_TYPE,
        TARGET_METHOD: TARGET_METHOD,
      };
      await chrome.runtime.sendMessage(message);
    })();
  }

  if (TARGET_TYPE === "SELECT") {
    let labelFor = event.target.name;
    // Get the label element
    let label = document.querySelector("label[for='" + labelFor + "']");

    if (!label) {
      labelFor = event.target.id;
      TARGET_METHOD = "id";
      label = document.querySelector("label[for='" + labelFor + "']");
    }

    //const options = [...(event.target.options != null ? event.target.options : [])].map(o => o.value);

    (async () => {
      const message = {
        ACTION: "generate",
        QUESTION: label.innerText,
        TARGET: labelFor,
        TARGET_TYPE: TARGET_TYPE,
        TARGET_METHOD: TARGET_METHOD,
        TARGET_OPTIONS: [
          ...(event.target.options != null ? event.target.options : []),
        ].map((o) => o.value),
      };
      console.log(message);
      await chrome.runtime.sendMessage(message);
    })();
  }
});
