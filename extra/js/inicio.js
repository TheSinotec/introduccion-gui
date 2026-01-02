var data = JSON.parse(localStorage.getItem('data'));
for (let index = 1; index < 5; index++) {
    var par = document.getElementById("part-" + index);
    var pon = document.getElementById("pon-" + index);
    pon.innerText = data["ev-" + index]["ponentes"].length;
    par.innerText = data["ev-" + index]["asistentes"].length;
}