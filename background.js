function reddenPage() {
/*  let item = document.querySelector("body > script:nth-child(2)");
  if(item && item.textContent.includes("watermark")){
    item.remove();
  }

  item = document.querySelector("body > style:nth-child(17)");
  if(item && item.textContent.includes("watermark")){
    item.remove();
  }

  item = document.querySelector("body > script:nth-child(18)")
  if(item && item.textContent.includes("watermark")){
    item.remove();
  }*/

  let items = document.querySelectorAll('body > script');
  [].forEach.call(items, function(item) {
    if(item.textContent.includes("watermark") || item.src.includes("watermark")){
      item.remove();
    }
  });

  items = document.querySelectorAll('body > style');
  [].forEach.call(items, function(item) {
    if(item.textContent.includes("watermark")){
      item.remove();
    }
  });

  items = document.querySelectorAll('body > link');
  [].forEach.call(items, function(item) {
    if(item.href.includes("watermark")){
      item.remove();
    }
  });
}

chrome.action.onClicked.addListener((tab) => {
  if(!tab.url.includes("chrome://")) {
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      function: reddenPage
    });
  }
});
