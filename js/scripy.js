var dataBase = document.getElementById("dataBase")

var layer= document.querySelector(".layer")

var myHttp = new XMLHttpRequest();
myHttp.open("get", "https://api.themoviedb.org/3/trending/movie/day?api_key=24e32b480f17aca5c824d0e60c02c3d9")
myHttp.send();

myHttp.addEventListener("readystatechange", function () {
    if (myHttp.readyState == 4) {
        var allMovie = JSON.parse(myHttp.response).results
        var cartoona = ``;
        for (var i = 0; i < allMovie.length; i++) {
        cartoona += `
        <div class="col-md-3 p-3">
        <div class="item position-relative ">

        <div class="vote position-absolute">
        ${allMovie[i].vote_average}
        </div>
        <img src="https://image.tmdb.org/t/p/w500${allMovie[i].poster_path}" alt="" class="w-100">
        <h3>${allMovie[i].title}</h3>
        <p>${allMovie[i].overview.split(" ").splice(0,30).join(" ")}</p>
        </div>
        </div>`}
        dataBase.innerHTML = cartoona
    }
})


// item.addEventListener("click", function(){
//     layer.style.display="flex"
// })