
import{SetLogOn} from "../app/app.js"

export function ShowSignUp(params) {
    console.log("Sign up Event trigered")

    let newUserPage = "pages/new_user.html"

    $.get(newUserPage, function(data){
        $("#displayBody").empty()
        $("#displayBody").append(data)
        NewUserListeners()
    })
}

function NewUserListeners() {

    $("#submit_newuser").on("mouseenter", function(e){
        $("#submit_newuser").css("background-color", "#a0d0ec")
    })

    $("#submit_newuser").on("mouseleave", function(e){
        $("#submit_newuser").css("background-color", "#6ec0e9")
    })

    $("#submit_newuser").on("click", function(e){
        ValidateInputs()
    })
    
}

function ValidateInputs() {
    let name_First = $("#fName_in").val()
    let name_Last = $("#lName_in").val()
    let eMail = $("#email_in").val()
    let uName = $("#uName_in").val()
    let passWordIn = $("#pWord_in").val()
    let passWordValidateIn = $("#v_pWord_in").val()

    $(".failedField").remove()

   
    let namePass = ValidateName(name_First, name_Last)
    let emailPass = ValidateEmail(eMail)
    let unamePass = ValidateUsername(uName)
    let passwordPass = ValidatePassword(passWordIn, passWordValidateIn)
    

    if(namePass && emailPass && unamePass && passwordPass){
        console.log("Allert Trigered")
        alert(`Welcom ${name_First} ${name_Last}`)
        $(".newUserBox").remove()
        SetLogOn()
    }

    console.log(`Name: ${namePass} ${name_Last}\nEmail: ${emailPass}\nUsername: ${unamePass}\nPassword: ${passwordPass}\nValidate: ${passWordValidateIn}`)
}

function ValidateName(fName, lName) {

    let pass = true
    let msg = document.createElement("h3")
    msg.className = "failedField"
    $("#fName_in").css("border", "")
    $("#lName_in").css("border", "")

    if(fName == ""){
        msg.innerText = "Name fields are required"
        $("#newUser_name").after(msg)
        $("#fName_in").css("border", "2px solid red")
    }

    if(lName == ""){
        msg.innerText = "Name fields are required"
        $("#newUser_name").after(msg)
        $("#lName_in").css("border", "2px solid red")
    }

    return true
    

}

function ValidateEmail(e_mail) {

    
    let msg = document.createElement("h3")
    msg.className = "failedField"

    if(e_mail == ""){
        msg.innerText = "Email field required"
        $("#newUser_Email").after(msg)
        $("#email_in").css("border", "2px solid red")
        return false
    }
    if(!e_mail.includes('@') || !e_mail.includes(".")){
        msg.innerText = "Valid Email required"
        $("#newUser_Email").after(msg)
        $("#email_in").css("border", "2px solid red")

        return false
    }

            $("#email_in").css("border", "")

    return true
}

function ValidateUsername(uName) {
    let msg = document.createElement("h3")
    msg.className = "failedField"
    $("#uName_in").css("border", "")
    if(uName == ""){
        msg.innerText = "username field is required"
        $("#newUser_Username").after(msg)
        $("#uName_in").css("border", "2px solid red")
        return false
    }

    return true
}

function ValidatePassword(password, validate) {

    let msg = document.createElement("h3")
    msg.className = "failedField"

    $("#pWord_in").css("border", "")
    $("#v_pWord_in").css("border", "")

    if (password.length < 8) {
        msg.innerText = "Password must be 8 characters, one upper case, one lower case, one special character and or number"
        $("#newUser_Password").after(msg)
        $("#pWord_in").css("border", "2px solid red")
        return false
    }

    if (!/\d/.test(password) && !/[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/.test(password)) {
        msg.innerText = "Password must be 8 characters, one upper case, one lower case, one special character and or number"
        $("#newUser_Password").after(msg)
        $("#pWord_in").css("border", "2px solid red")
        return false
    }

    if (!/[A-Z]/.test(password) || !/[a-z]/.test(password)) {
        msg.innerText = "Password must be 8 characters, one upper case, one lower case, one special character and or number"
        $("#newUser_Password").after(msg)
        $("#pWord_in").css("border", "2px solid red")
        return false
    }

    if(!(password == validate)){
        msg.innerText = "Password miss match"
        $("#newUser_Password").after(msg)
        $("#pWord_in").css("border", "2px solid red")
        $("#v_pWord_in").css("border", "2px solid red")
        return false
    }

    return true
    
}