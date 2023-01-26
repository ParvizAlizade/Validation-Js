

let btn = document.body.querySelector("button")

btn.onclick = function () {
    let required1;
    let required2;
    let required3;
    let required4;
    if (Firstinput() && Lastnameinput() && Emailinput() && Passworddinput()) {
        window.location.href = "https://www.google.com"
    }
    else {
        do {
            Firstinput();
            Lastnameinput();
            Emailinput();
            Passworddinput();
        } while ((Firstinput() && Lastnameinput() && Emailinput() && Passworddinput()));
    }
}
function Firstinput() {
    let firstnameinput = document.getElementById("firstnameinput")
    if (firstnameinput.value.length < 3) {
        required1 = "Last Name must be min 3 !";
        document.getElementById("wrongalert1").innerHTML = required1;
        firstnameinput.classList.add("wrong");
        return false;
    }
    else {
        firstnameinput.classList.remove("wrong");
        firstnameinput.classList.add("true");
        required1 = "";
        document.getElementById("wrongalert1").innerHTML = required1;
        return true;
    }
}
function Lastnameinput() {
    let lastnameinput = document.getElementById("lastnameinput")
    if (lastnameinput.value.length < 3) {
        required2 = "Last Name must be min 3 !";
        document.getElementById("wrongalert2").innerHTML = required2;
        lastnameinput.classList.add("wrong");
        return false;

    }
    else {
        lastnameinput.classList.remove("wrong");
        lastnameinput.classList.add("true");
        required2 = "";
        document.getElementById("wrongalert2").innerHTML = required2;
        return true;
    }
}
function Emailinput() {
    let emailinput = document.getElementById("emailinput")
    let x = emailinput.value.includes('@')
    if (x == true) {
        required3 = " ";
        document.getElementById("wrongalert3").innerHTML = required3;
        emailinput.classList.remove("wrong");
        emailinput.classList.add("true");

        return true;
    }
    else {
        required3 = "You Must Use @ in your email !";
        document.getElementById("wrongalert3").innerHTML = required3;
        emailinput.classList.remove("true");
        emailinput.classList.add("wrong");
        return false;
    }
}
function Passworddinput() {
    let passwordinput = document.getElementById("passwordinput")
    if (passwordinput.value.length < 5) {
        required4 = "Password must be min 5 !";
        document.getElementById("wrongalert4").innerHTML = required4;
        passwordinput.classList.remove("true");
        passwordinput.classList.add("wrong");
        return false;
    }
    else {
        passwordinput.classList.remove("wrong");
        passwordinput.classList.add("true");
        required4 = "";
        document.getElementById("wrongalert4").innerHTML = required4;
        return true;
    }
}