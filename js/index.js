window.onscroll = function() {
    if(!match.matches) {
        sticky_active();
    }
    jsMoveLeft_LS();
    jsDecreaseWidth_BlackRectangle();
    jsMoveLeft_Text_TJHB();
    jsIncreaseWidth_BlackRectangle_TJHB();
    jsDecreaseWidth_BlackRectangle_TEOJ();
}

/*
    if(AnimatedIncreaseWidth_TheJourneyHasBegun_Container()) {
        IncreaseWidth_TheJourneyHasBegun_Container.animate([
            {width: '0'}, {width: '120px'}
        ], {
            duration: 1400,
            iterations: 1,
            easing: 'ease',
            pseudoElement: ':after'
        });
    }
    */