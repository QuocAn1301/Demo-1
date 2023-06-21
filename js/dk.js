    const signUpButton = document.getElementById('signUp');
    const signInButton = document.getElementById('signIn');
    const container = document.getElementById('container');

    signUpButton.addEventListener('click', () => {
        container.classList.add('right-panel-active');
    });

    signInButton.addEventListener('click', () => {
        container.classList.remove('right-panel-active');
    });

//hiện thong tin yeu cau
function check1(){
    let ten = document.getElementById("name").value;
    if(ten.length <= 30 ){
       document.getElementById("text1").innerHTML = "Tên đúng yêu cầu!";
       text1.style.color = "green"
    }
    else if(ten.length > 30 ){
        document.getElementById("text1").innerHTML = "Tên Không được nhiều hơn 30 kí tự!";
        text1.style.color = "red"
     }
    else if(ten.length="")
    {
        document.getElementById("text1").innerHTML = "Tên Không được để trống!";
        text1.style.color = "red"
    }
}
function check2(){
    let tennd = document.getElementById("Username").value;
    if(tennd.length > 15 ){
        document.getElementById("text2").innerHTML = "Tên đăng nhập Không được nhiều hơn 15 kí tự!";
        text2.style.color = "red"
     }
    else if(tennd.length <= 15 ){
        document.getElementById("text2").innerHTML = "Tên đăng nhập đúng yêu cầu!";
        text2.style.color = "green"
     }
     else if(tennd.length="")
    {
        document.getElementById("text2").innerHTML = "Tên đăng nhập Không được để trống!";
        text2.style.color = "red"
    }
}
function check4()
{
    let cmnd = document.getElementById("CMND").value;
    regex = /(([0-9]{12}))/;
        if(cmnd.length>12)
        {
            document.getElementById("text4").innerHTML = "Số CMND của bạn không đúng định dạng!";
            text4.style.color = "red"
        }
        else if (regex.test(cmnd) == true) 
        {
            document.getElementById("text4").innerHTML = "Số CMND đúng yêu cầu!";
            text4.style.color = "green"  
        } 
        else 
        {
            document.getElementById("text4").innerHTML = "Số CMND của bạn không đúng định dạng!";
            text4.style.color = "red"
        }
}
function check5(){
    let sdt = document.getElementById("phone").value;
    regex = /((0)+([0-9]{9}))/;
        if(sdt.length>10)
        {
            document.getElementById("text5").innerHTML = "Số điện thoại của bạn không đúng định dạng!";
            text5.style.color = "red"
        }
        else if (regex.test(sdt) == true) 
        {
            document.getElementById("text5").innerHTML = "Số điện thoại đúng yêu cầu!";
            text5.style.color = "green"  
        }else{
            document.getElementById("text5").innerHTML = "Số điện thoại của bạn không đúng định dạng!";
            text5.style.color = "red"
        }
}

function check6(){
    // let regex =  ;
    // if(!regex.test(pass)){
    let pw = document.getElementById("password").value;
    regex = /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{7,})/;
        if (!regex.test(pw)) 
        {  
            document.getElementById("text6").innerHTML = "Mật khẩu chứa chữ hoa, chữ thường, số, ít nhất 6 kí tự!";
            text6.style.color = "red"
        }else{
            document.getElementById("text6").innerHTML = "Mật khẩu đúng yêu cầu!";
            text6.style.color = "green"
        }
}

function check7(){
    let text = document.getElementById("password").value;
    let text1 = document.getElementById("Confir-password").value;
    if(text1 === "")
    {
        document.getElementById("text7").innerHTML ="";
    }
    else if(text !== text1)
    {
      document.getElementById("text7").innerHTML = "Mật khẩu không trùng khớp";
      text7.style.color = "red"
    }
    else if(text === text1)
    {
      document.getElementById("text7").innerHTML = "Mật khẩu trùng khớp";
      text7.style.color = "green"
    }
}

//Tạo mảng chứa các tài khoản
let userAcct = [];
//Tạo lớp chứa thông tin của một tài khoản
class Account {
    constructor(Name,username,Email,CMND,Pnumber,DC,Password,Confpassword){
        this.ten = Name;
        this.tennd = username;
        this.Gmail = Email;
        this.cmndan = CMND;
        this.Phone = Pnumber;
        this.Adr = DC;
        this.PW = Password;
        this.CPW = Confpassword;
    }
}
function xuLyDangKy(){
    let Name = document.getElementById("name").value;
    let username = document.getElementById("Username").value;
    let Email = document.getElementById("gmail").value;
    let CMND = document.getElementById("CMND").value;
    let Pnumber = document.getElementById("phone").value;
    let DC = document.getElementById("DiaChi").value;
    let Password = document.getElementById("password").value;
    let Confpassword = document.getElementById("Confir-password").value;
//Kiểm tra hợp lệ
    regex = /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{6,})/;
    regex1 = /((0)+([0-9]{9}))/;
    regex2 = /(([0-9]{12}))/;
    if(Name.length > 30){
        alert("Tên không hợp lệ")
    }
    else if (username.length > 15)
    {
        alert("Tên đăng nhập không hợp lệ")
    }
    else if (!regex.test(Password))
    {
        alert("Mật khẩu không hợp lệ")
    }
    else if(Confpassword!=Password)
    {
        alert("Mật khẩu không trùng khớp")
    }
    else if(!regex1.test(Pnumber) || Pnumber.length>10)
    {
        alert("Số điện thoại không hợp lệ")
    }
    else if(!regex2.test(CMND) || CMND.length>12)
    {
        alert("CMND không hợp lệ")
    }
    else
    {
        //Lưu thông tin tài khoản vào localStorage
        const userLocal = localStorage.getItem("users")
        //Trường hợp key "users chưa tồn tại"
        if(!userLocal){
            const newUser = new Account(Name,username,Email,CMND,Pnumber,DC,Password,Confpassword);
            userAcct.push(newUser)
            //lưu mảng thông tin vào localStorage
            localStorage.setItem("users",JSON.stringify(userAcct))
            alert("Đăng kí thành công")
        }
        //Trường hợp trong localStorage đã có tài khoản
        else{
            userAcct = JSON.parse(userLocal);
            const found = userAcct.find((user) => user.ten === Name);
            const found1 = userAcct.find((user) => user.Gmail === Email);
            if(found){
                alert("Tài khoản đã tồn tại")
            }
            else if(found1)
            {
                alert("Email đã được sử dụng")
            }
            else
            {
                 //Nếu không trùng, tại tài khoản mới
            const newUser = new Account(Name,username,Email,CMND,Pnumber,DC,Password,Confpassword);
            userAcct.push(newUser)
            //lưu mảng thông tin vào localStorage
            localStorage.setItem("users",JSON.stringify(userAcct))
            alert("Đăng kí thành công")
            }
        } 
    }

}
function xuLyDangNhap(event){
    event.preventDefault();
    let userN = document.getElementById("email1").value 
    let pass = document.getElementById("password1").value 
    if(userN.trim() ==="" || pass.trim() ===""){
        alert("Chưa nhập username/password")
        return;
    }
    //Đối chiếu với các tài khoản đang lưu trong localStorage
    const userLocal = localStorage.getItem("users")
    if(userLocal){
        //dịch từ JSON qua Javascript
        const userList = JSON.parse(userLocal)
        const found = userList.find((user) => user.Gmail === userN && user.PW === pass)
        const found1 = userList.find((user) => user.Gmail === userN && user.PW !== pass || user.Gmail !== userN && user.PW === pass)
        if(found){
            location.href = "index.html"
        }
        else if(found1)
        {
            alert("Tài khoản hoặc mật khẩu không đúng")
        }
        else{
            alert("Tài khoản không tồn tại")
        }
    }

}
//Nhớ mật khẩu
const rmCheck = document.getElementById("rememberMe"),
    emailInput = document.getElementById("email1"),
    passwordInput = document.getElementById("password1");

if (localStorage.checkbox && localStorage.checkbox !== "") {
  rmCheck.setAttribute("checked", "checked");
  emailInput.value = localStorage.username;
  passwordInput.value = localStorage.Password;
} else {
  rmCheck.removeAttribute("checked");
  emailInput.value = "";
}

function lsRememberMe() {
  if (rmCheck.checked && emailInput.value !== "") {
    localStorage.username = emailInput.value;
    localStorage.Password = passwordInput.value;
    localStorage.checkbox = rmCheck.value;
  } else {
    localStorage.username = "";
    localStorage.checkbox = "";
  }
}