var match = window.matchMedia("(max-width: 1440px)");
// Declare elements
const pageOne = document.getElementById('jsPageOne'); // Page One's div tag
const pageBreak_1 = document.getElementById('jsPageBreak-1'); // The first Page Break's div tag
const pageBreak_2 = document.getElementById('jsPageBreak-2'); // The second Page Break's div tag
const map = document.getElementById('jsMap'); // Img (Map)
const pageTwoSide = document.getElementById('jsPageTwoSide'); // Side container of Page Two
const container = document.getElementById('page2__information-container');
const pageTwo = document.getElementById('jsPageTwo'); // The second Page

var topValue = container.offsetTop;
var stickyValue = pageBreak_1.offsetHeight + pageOne.offsetHeight;
var unStickyValue = pageBreak_1.offsetHeight + pageOne.offsetHeight + map.offsetHeight - container.offsetHeight - top.topValue;

var sticky_active = () => {
    if(window.pageYOffset > stickyValue && window.pageYOffset < unStickyValue) {
        container.style.position = 'fixed';
        container.style.top = topValue + 'px';
        container.style.zIndex = '1';
        container.style.marginTop = '0px';
    } else if(window.pageYOffset > unStickyValue) {
        container.style.position = 'absolute';
        container.style.top = pageTwoSide.offsetHeight - container.offsetHeight + 'px';
        container.style.zIndex = '1';
        container.style.marginTop = '0px';
    } else {
        container.style.position = 'absolute';
    }
}