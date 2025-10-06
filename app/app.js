import {} from "../model/model.js"
import {ShowLogIn} from "../lib/login_Check.js"
import{ShowSignUp} from "../lib/new_user.js"

let logOn


function initListeners() {

    console.log("Base Init Called")
    $("#logOut").on("mouseenter", function(e){
        $("#logOut").css("background-color", "#6ec0e9")
    })

    $("#logOut").on("mouseleave", function(e){
        $("#logOut").css("background-color", "#4995fd")
    })

    $("#logOut").on("click", function(e){
        logOn = null
         sessionStorage.setItem("Log_In_State", logOn)
         console.log(logOn)
        location.reload()
    })
}

export function SetLogOn() {
    logOn = true
    sessionStorage.setItem("Log_In_State", logOn)
    initListeners()
    console.log(logOn)
}

export function SignUp(params) {
    $("#logOn").remove()
    ShowSignUp()
}

$(document).ready(function () {
   
    try {
       logOn === sessionStorage.getItem("Log_In_State")
    } catch (error) {
        
    }

    console.log(logOn)
    if (logOn) {
        
        initListeners();
    }
    else{
        ShowLogIn();
    }
    
})