// window.onload = function () {
//     var oBtn = document.getElementById("search_flag");
//     var oTxt = document.getElementById("search_key");
//     oBtn.onclick = function () {
//         if (oTxt.value) {
//             url = "https://www.google.com/search?q=" + oTxt.value + " site:blog.soloist.ink";
//         }
//         window.location.href = url;
//     }
// }
// alert("oTxt.value");
function Search() {
    var oTxt = document.getElementById("search_key");
    // alert(oTxt.value);
    if (oTxt.value != '') {
        url = "https://www.google.com/search?q=" + oTxt.value + " site:blog.soloist.ink";
        // alert(url);
        window.open(url);
    }

}