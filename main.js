var req = new XMLHttpRequest();
req.onreadystatechange = function a(){
    if (this.readyState == 4 && this.status == 200) {
        var data = JSON.parse(this.response);
        var mung = document.querySelector("img");
        var btn = document.querySelector("button");
        btn.addEventListener("click", function() {
            mung.setAttribute("src", data.message);
        });
        
    }
}
req.open("GET", "https://dog.ceo/api/breeds/image/random");
req.send();