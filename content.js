var button = document.evaluate("//*[@id='root']/div/div/div[2]/div[1]/form/button[2]", document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;

if (button) {
    button.click();
} else {
    console.error("Button not found!");
}
