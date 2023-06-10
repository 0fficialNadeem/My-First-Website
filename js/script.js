window.onload = function () {
    const btn = document.getElementById("send-btn");
    btn.onclick = confirmation;
    const date = new Date().toJSON().slice(0, 10);
    let pickedDate = document.getElementById("date");
    pickedDate.setAttribute("min",date);
}

function popUp() {
    let names = document.getElementById("name");
    let email = document.getElementById("email");
    let phone = document.getElementById("phone");
    let conf = document.getElementById("confirmation");
    let date = document.getElementById("date");
    let radiobtn = document.getElementsByName("Preference");
    let finalradiobtnVal;
    let duration = document.getElementById("dateDuration");

    for (i = 0; i < radiobtn.length; i++) {
        if (radiobtn[i].checked) {
            console.log(finalradiobtnVal = radiobtn[i].value);

        }

    }

    alert(`Summary:\nName: ${names.value}\nEmail: ${email.value}\nPhone: ${phone.value}\nDate: ${date.value}\nProject Duration (Hours): ${duration.value}\nContact Preference: ${finalradiobtnVal} `)
}

function confirmation() {
    const btn = document.getElementById("send-btn");
    const date = new Date().toJSON().slice(0, 10);
    let pickedDate = document.getElementById("date");
    let email = document.getElementById("email");
    let conf = document.getElementById("confirmation-email");
    let names = document.getElementById("name");
    let phone = document.getElementById("phone");
    let phone1 = document.getElementById("phone1");
    let duration = document.getElementById("dateDuration");




    let radiobtn = document.getElementsByName("Preference");
    let finalradiobtnVal;

    for (i = 0; i < radiobtn.length; i++) {
        if (radiobtn[i].checked) {
            console.log(finalradiobtnVal = radiobtn[i].value);

        }

    }
    if (email.value == conf.value && pickedDate.value > date && names.value !== "" && phone.value !== "" && email.value !== "" && conf.value !== "" && pickedDate !== undefined && finalradiobtnVal !== undefined && duration.value !== "") {
        popUp();
        conf.setCustomValidity("");
        names.setCustomValidity("");
        pickedDate.setCustomValidity("");
        email.setCustomValidity("");
        phone.setCustomValidity("");
        radiobtn.setCustomValidity("");
        duration.setCustomValidity("");

    } else if (email.value !== conf.value) {
        conf.setCustomValidity("email does not match!");
        email.setCustomValidity("");
        names.setCustomValidity("");
        pickedDate.setCustomValidity("");
        phone.setCustomValidity("");
        radiobtn.setCustomValidity("");
        duration.setCustomValidity("");

    } else if (pickedDate.value <= date) {
        pickedDate.setCustomValidity("Requires an appropriate date of at least 1 day prior to today");
        conf.setCustomValidity("");
        names.setCustomValidity("");
        phone.setCustomValidity("");
        radiobtn.setCustomValidity("");
        duration.setCustomValidity("");
        


    } else if (names.value === "") {
        names.setCustomValidity("please fill in this field.")
        conf.setCustomValidity("");
        pickedDate.setCustomValidity("");
        phone.setCustomValidity("");
        radiobtn.setCustomValidity("");
        duration.setCustomValidity("");
        
    } else if (email.value === "") {
        email.setCustomValidity("please fill in this field.");
        conf.setCustomValidity("");
        names.setCustomValidity("");
        pickedDate.setCustomValidity("");
        phone.setCustomValidity("");
        radiobtn.setCustomValidity("");
        duration.setCustomValidity("");
    }else if(conf.value === ""){
        conf.setCustomValidity("please fill in this field.");
        names.setCustomValidity("");
        pickedDate.setCustomValidity("");
        phone.setCustomValidity("");
        radiobtn.setCustomValidity("");
        duration.setCustomValidity("");
    }else if (phone.value === ""){
        phone.setCustomValidity("please fill in this field.");
        conf.setCustomValidity("");
        names.setCustomValidity("");
        pickedDate.setCustomValidity("");
        radiobtn.setCustomValidity("");
        duration.setCustomValidity("");
    }else if(finalradiobtnVal === undefined){
       phone1.setCustomValidity("please fill in this field.");
        conf.setCustomValidity("");
        names.setCustomValidity("");
        pickedDate.setCustomValidity("");
        phone.setCustomValidity("");
        duration.setCustomValidity("");
    }else if(duration.value === ""){
        phone1.setCustomValidity("");
        conf.setCustomValidity("");
        names.setCustomValidity("");
        pickedDate.setCustomValidity("");
        phone.setCustomValidity("");
        duration.setCustomValidity("please fill in this field.");


    }

    else {
        alert("Please fill in the required fields");
        conf.setCustomValidity("");
        names.setCustomValidity("");
        pickedDate.setCustomValidity("");
        email.setCustomValidity("");
        phone.setCustomValidity("");
        radiobtn.setCustomValidity("");

    }
    
    names.reportValidity();
    conf.reportValidity();
    pickedDate.reportValidity();
    email.reportValidity();
    phone.reportValidity();
    radiobtn.reportValidity();
    duration.reportValidity();



}
