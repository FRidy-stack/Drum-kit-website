var btncount = document.querySelectorAll(".drum").length;
while(btncount--){
    document.querySelectorAll(".drum")[btncount].addEventListener("click",function () {
        var val = this.innerHTML;
        soundHandle(val);
        pressHandle(val);

    })

    document.addEventListener("keypress",function(event){
        soundHandle(event.key);
        pressHandle(event.key);

    })

    function soundHandle(val){
        switch (val) {
            case "w":
                var sound1 = new Audio("sounds/crash.mp3");
                sound1.play();
                break;
            case "a":
                var sound2 = new Audio("sounds/kick-bass.mp3");
                sound2.play();
                break;
            case "s":
                var sound3 = new Audio("sounds/snare.mp3");
                sound3.play();
                break;
            case "d":
                var sound4 = new Audio("sounds/tom-1.mp3");
                sound4.play();
                break;
            case "j":
                var sound5 = new Audio("sounds/tom-2.mp3");
                sound5.play();
                break;
            case "k":
                var sound6 = new Audio("sounds/tom-3.mp3");
                sound6.play();
                break;
            case "l":
                var sound7 = new Audio("sounds/tom-4.mp3");
                sound7.play();
                break;
        
            default:
                console.log(val)
                break;
        }
    }
}

function pressHandle(val){
    var ele = document.querySelector("."+ val).classList;
    ele.add("pressed");
    setTimeout(ele.remove("pressed",100));

} 
