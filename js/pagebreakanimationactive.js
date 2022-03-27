// Declare animated elements
const letstart_container = document.getElementById('jsMoveDown_LS-container'); // Container contain "Let's start"
const blackrectangle = document.getElementById('jsDecreaseWidth_BlackRectangle'); // Black rectangle on the right of 'body__breakPage__textheader-container'
const MoveLeft_Text_TheJourneyHasBegun = document.getElementById('jsMoveLeft_Text_TJHB'); // 'The journey has begun" container
const blackrectangle_Tjhb = document.getElementById('jsIncreaseWidth_BlackRectangle-TJHB'); // Black rectangle on the left of 'The journey has begun'
const blackrectangle_Teoj = document.getElementById('jsDecreaseWidth_BlackRectangle_TEOJ'); // Black rectangle near by 'The end of journey'

// Set transition value for animated elements
letstart_container.style.transition = 'ease 1.4s';
blackrectangle.style.transition = 'ease 1.4s';
MoveLeft_Text_TheJourneyHasBegun.style.transition = 'ease 1.4s';
blackrectangle_Tjhb.style.transition = 'ease 1.4s';
blackrectangle_Teoj.style.transition = 'ease 1.4s';

// Value to active animation
var firstpagebreak_ani_active_value = pageOne.offsetHeight + pageBreak_1.offsetHeight * 1.2;
var secondpagebreak_ani_active_value = pageOne.offsetHeight + pageBreak_1.offsetHeight * 1.2 + pageTwo.offsetHeight + pageBreak_2.offsetHeight * 1.2;

// Condition Function, if window.pageYOffset reach over iw_tjhb_container_ani_active_value, It returns true, else false
var AnimationTriggerFirstPageBreak = () => {
    if(window.pageYOffset + pageOne.offsetHeight > firstpagebreak_ani_active_value) {
        return true;
    } else {
        return false;
    }
}

var AnimationTriggerSecondPageBreak = () => {
    if(window.pageYOffset + pageOne.offsetHeight > secondpagebreak_ani_active_value) {
        return true;
    } else {
        return false;
    }
}



// Set translateX for 'letstart_container' depend on result of 'AnimatedIncreaseWidth_TheJourneyHasBegun_Container()'
var jsMoveLeft_LS = () => {
    if(AnimationTriggerFirstPageBreak()) {
        letstart_container.style.transform = 'translateY(0)';
    } else {
        letstart_container.style.transform = 'translateY(-80%)';
    }
}

var jsDecreaseWidth_BlackRectangle = () => {
    if(AnimationTriggerFirstPageBreak()) {
        blackrectangle.style.width = '3.125%';
    } else {
        blackrectangle.style.width = '9.375%';
    }
}

var jsMoveLeft_Text_TJHB = () => {
    if(AnimationTriggerFirstPageBreak()) {
        MoveLeft_Text_TheJourneyHasBegun.style.left = '0';
    } else {
        MoveLeft_Text_TheJourneyHasBegun.style.left = '-120px';
    }
}

var jsIncreaseWidth_BlackRectangle_TJHB = () => {
    if(AnimationTriggerFirstPageBreak()) {
        blackrectangle_Tjhb.style.width = '120px';
    } else {
        blackrectangle_Tjhb.style.width = '0px';
    }
}

var jsDecreaseWidth_BlackRectangle_TEOJ = () => {
    if(AnimationTriggerSecondPageBreak()) {
        blackrectangle_Teoj.style.width = '2%';
    } else {
        blackrectangle_Teoj.style.width = '105%';
    }
}
/*
// The second
const MoveX_Container_TheJourneyHasBegun_after = window.getComputedStyle(IncreaseWidth_TheJourneyHasBegun_Container, ':after');

window.addEventListener('load', function(event) {
    MoveX_Container_TheJourneyHasBegun_after.setProperty('background-color', 'red');
});
*/