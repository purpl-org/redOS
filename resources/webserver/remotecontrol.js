//i dont know javascript but im just gonna see what i can do...

function doFunction() {
    alert('Test');
}

var el = document.getElementById("remoteControl");


if (el.addEventListener) {
    el.addEventListener("click", doRemoteControl);
} else if (el.attachEvent) {
    el.attachEvent("onclick", doRemoteControl);
}
