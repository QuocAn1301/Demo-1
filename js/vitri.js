var a = document.getElementById("hien")
function getLocation() {
if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition)
} else {
    a.innerHTML = "Trình duyệt bạn không hỗ trợ Geolocation";
}
}

// function showPosition(position) {
//    
// a.innerHTML = "Vĩ độ: " + position.coords.latitude +
// "<br>Kinh độ: " + position.coords.longitude;
// }
function showError(error) {
switch(error.code) {
    case error.PERMISSION_DENIED:
    a.innerHTML = "Người dùng từ chối cấp quyền định vị."
    break;
    case error.POSITION_UNAVAILABLE:
    a.innerHTML = "Không có thông tin vị trí."
    break;
    case error.TIMEOUT:
    a.innerHTML = "Hết thời gian yêu cầu định vị."
    break;
    case error.UNKNOWN_ERROR:
    a.innerHTML = "Lỗi chưa xác định."
    break;
}
}
function showPosition(position) {
    alert("dfgd")
var latlon = position.coords.latitude+ ","+ position.coords.longitude;
var img_url = "https://maps.googleapis.com/maps/api/staticmap?center="+latlon+"&zoom=14&size400x300 &sensor=false&key=YOUR_KEY";
document.getElementById("map").innerHTML = "<img src='" + img_url + "'>";
}