
function Register() {
    var fname = document.forms.RegForm.FirstName.value;
    var lname = document.forms.RegForm.LastName.value;
    var email = document.forms.RegForm.EMail.value;
    var password = document.forms.RegForm.Password.value;

    console.log(fname);

    


    var regEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/g; //Javascript reGex for Email Validation.
    var regName = /\d+$/g;								 // Javascript reGex for Name validation

    if (fname == "" || regName.test(fname)) {
        window.alert("Please enter your first name properly.");

        return false;
    }
    if (lname == "" || regName.test(lname)) {
        window.alert("Please enter your last name properly.");

        return false;
    }
    if (email == "" || !regEmail.test(email)) {
        window.alert("Please enter a valid e-mail address.");

        return false;
    }

    if (password == "") {
        alert("Please enter your password");

        return false;
    }

    if (password.length < 6) {
        alert("Password should be atleast 6 character long");

        return false;

    }
    myfunction(fname,lname);
    return true;
    

    

}
function myfunction(fname,lname){
    window.localStorage.setItem("fname", fname);
    window.localStorage.setItem("lname", lname);
}

