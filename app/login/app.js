function login() {
    felhasznalonev = document.getElementById("uname").value;
    jelszo = document.getElementById("pword").value;

    if (felhasznalonev == "TomTom" ) {
        if (jelszo == "TomTom") {
            location.assign("/app/index.html"); 
        }
        else{
            alert("szar a jelszo, segítek: TomTom");
        }
    }
    else{
        alert("szar a felhasznalonév, segítek: TomTom");
    }

}