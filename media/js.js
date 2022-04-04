(function(){
    let elements;
    let windowHeight;

    function init(){
        elements = document.querySelectorAll('.swipeIn');
        windowHeight = window.innerHeight;
    }

    function checkPosition(){
        for(let i = 0; i < elements.length; i++){
            let element = elements[i];
            let positionFromTop = elements[i].getBoundingClientRect().top;

            if(positionFromTop - windowHeight <= 0){
                element.classList.add("swipeTransition");
            }
            if(positionFromTop - windowHeight > 0 || positionFromTop - windowHeight < -windowHeight){
                element.classList.remove("swipeTransition");
            }
        }
    }

    window.addEventListener('scroll', checkPosition);
    window.addEventListener('resize', init);

    init();
    checkPosition();
})();