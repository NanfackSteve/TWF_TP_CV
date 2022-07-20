//Recuperation de l'element <img> par son ID
var profilePicture = document.getElementById('profile-picture');

profilePicture.onclick = changePicture;

//Creation de la fonction qui change l'image
function changePicture() {
    profilePicture.src = "./assets/profil-cv1.png";
}

var addExp = document.getElementById('btn-add-exp');
var newexp = document.getElementById('experience-row');

addExp.addEventListener('click',
    function () {
        //On récupère nos 2 champs Annee et Experience
        var annee = document.getElementById('annee');
        var exper = document.getElementById('experience');

        if (annee.value == "" || exper.value == "") {
            alert("Erreur de saisie");
        }
        else {
            var element = document.createElement("div"); // On cré une section Div
            element.setAttribute('class', 'col-12'); //On ajoute une classe au DIV
            //On ajoute du contenu HTML à notre Div qu'on a créé
            element.innerHTML =
                '<div class="row">\n' +
                '   <div class="col-12 col-lg-3 border-lg-end border-lg-secondary border-lg-3" > \n' +
                '       <h5 class="text-start">' + annee.value + '</h5>\n' +
                '   </div > \n' +
                '   <div class="col-12 col-lg-9">\n' +
                '       <p class="ps-3 border-top">' + exper.value + '</p>' +
                '   </div>' +
                '</div >';

            //On ajoute notre Div créé à la Ligne ID="experience-row" contenant les expériences
            newexp.appendChild(element);
            //On vide nos champs apèrs avoir ajouté
            annee.value = "";
            exper.value = "";
        }
    });

var allProgress = document.getElementsByClassName('progress');

for (let i = 0; i < allProgress.length; i++) {

    allProgress[i].addEventListener('click',
        function () {
            var child = this.firstElementChild;
            if (child.getAttribute('style').match("100%")) {
                child.setAttribute('style', 'width: 00%');
            }
            else if (child.getAttribute('style').match("00%")) {
                child.setAttribute('style', 'width: 25%');
            }
            else if (child.getAttribute('style').match("25%")) {
                child.setAttribute('style', 'width: 50%');
            }
            else if (child.getAttribute('style').match("50%")) {
                child.setAttribute('style', 'width: 75%');
            }
            else if (child.getAttribute('style').match("75%")) {
                child.setAttribute('style', 'width: 100%');
            }
        });

    /*

    var e = child.style.getPropertyValue("width"));
        e.replace("%","")
        e = parseInt(e) + 15
        e.setAttribute('style', 'width: '+e+'%');

    */
}
