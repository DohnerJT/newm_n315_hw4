
import{SetLogOn, SignUp} from "../app/app.js"


const validUserName = "usernameone"
const validPassword = "Password!@12"

export function ShowLogIn() {
    console.log("Login Check is linked")

    let loginScreen = "pages/login.html"
    console.log(loginScreen)

    $.get(loginScreen, function(data){
        $("body").append(data)
        LoginListeners()
    }).fail(function(){
        console.log("failed to Load Page")
    })


}

function LoginListeners() {
    
    let loginBtn = "#logOn_Submit_Btn"
    let signUpBtn = "#logOn_SingUp_Btn"

    // Login btn
    $(loginBtn).on("mouseenter", (e) =>{
            $(loginBtn).css("background-color", "#00a8ff")
    })

    $(loginBtn).on("mouseleave", (e) =>{
        $(loginBtn).css("background-color", "#4995fd")
    })

    $(loginBtn).on("click", (e) =>{
        LoginCheck()
    })
    
    // Sign up Btn
    $(signUpBtn).on("mouseenter", (e) =>{
        $(signUpBtn).css("background-color", "#00a8ff")
    })

    $(signUpBtn).on("mouseleave", (e) =>{
        $(signUpBtn).css("background-color", "#6ec0e9")
    })
    
    $(signUpBtn).on("click", (e) =>{
        SignUp()
    })

}

function LoginCheck() {
    
    console.log("Login Check Event trigered")

    let userName = $("#u_name").val();
    let passWord = $("#p_word").val();

    if(!UserNameCheck(userName)){

        LoginFail()
        return
    }
    if(!PasswordCheck(passWord)){
        LoginFail()
        return
    }

    LoginSuccess()

    
}

function UserNameCheck(userName) {
    console.log(userName == validUserName)
    if (userName == validUserName) {
        return true
    }
    
    return false
}

function PasswordCheck(passWord) {
    console.log(`${passWord} == ${validPassword}`)
    if (passWord === validPassword) {
        return true
    }
    return false
}

function LoginSuccess() {
    $("#logOn").remove()
    alert("Welcom\nYour are loged In")
    SetLogOn()
    
}

function LoginFail() {
    
    let msg = document.createElement("h3")
    msg.innerText = "Incorect Password or Username"
    $("#logOn_Msg").empty()
    $("#u_name").val("")
    $("#p_word").val("")
    $("#logOn_Msg").append(msg)
    $("#logOn_Input").css("border", "4px solid red")
}

// function ShowSignUp(params) {
//     console.log("Sign up Event trigered")
// }