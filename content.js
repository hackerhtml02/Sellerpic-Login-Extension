var element = document.evaluate('/html/body/div[1]/div/header/div/div/div[1]/section/div/button', document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;

if (element) {
    element.click();
} else {
    console.log("Element not found!");
}
setTimeout(function() {
    var element = document.evaluate('/html/body/div[2]/div/div[2]/div/div[1]/section/section[2]/div[2]/section/a', document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;

    if (element) {
        element.click();
    } else {
        console.log("Element not found!");
    }
}, 2000); // 2000 milliseconds = 2 seconds
