function td(){
    const myarr = JSON.parse(localStorage.getItem("users"));
    myarr.forEach(function(item){
        document.getElementById("Name").value =item.ten
        document.getElementById("UserName").value =item.tennd
        document.getElementById("Email").value =item.Gmail
        document.getElementById("SDT").value =item.Phone
        document.getElementById("DiaChi").value =item.Adr
        document.getElementById("CMND").value =item.cmndan
    });
}
