const questions = [
    "Q1.\nIndole ring is present in:",
    "Q2.\nAlbumins and globulins are _________ protiens.",
    "Q3.\nBiuret test is confirmatory test for:",
    "Q4.\nDigestion of proteins is initiated by:",
    "Q5.\nAmino acid carrier defect is found in:",
    "Q6.\nGlycine is present in:",
    "Q7.\nHistidine is converted to histamine by:",
    "Q8.\nWhich one of the following amino acids is purely ketogenic?",
    "Q9.\nDecarboxylation of which of the following amino acids results in formation of a vasodilator:",
    "Q10.\nAll of the following are globular proteins except:",
    "Q11.\nAmmonia is detoxified in liver to form:",
    "Q12.\nAmino acid carrier defect is found in:",
    "Q13.\nAmino acid carrier defect is found in:",
    "Q14.\nAmino acid carrier defect is found in:",
    "Q15.\nAmino acid carrier defect is found in:",
    "Q16.\nAmino acid carrier defect is found in:",
    "Q17.\nAmino acid carrier defect is found in:",
    "Q18.\nAmino acid carrier defect is found in:",
    "Q19.\nAmino acid carrier defect is found in:",
    "Q20.\nAmino acid carrier defect is found in:",
    "Q21.\nAmino acid carrier defect is found in:",
    "Q22.\nAmino acid carrier defect is found in:",
    "Q23.\nAmino acid carrier defect is found in:",
    "Q24.\nAmino acid carrier defect is found in:",
    "Q25.\nAmino acid carrier defect is found in:"
];
const options = [
    "a)Tryptophan\nb)Valine\nc)Methionine\nd)Histidine",
    "a)Simple\nb)Derived\nc)Conjugated\nd)Structural",
    "a)Protein\nb)Fat\nc)Carbohydrate\nd)None Of The Above",
    "a)Amylase\nb)Sucrase\nc)Chymotrypsin\nd)Pepsin",
    "a)Maple syrup urine disease\nb)Alkaptonuria\nc)Phenylketonuria\nd)Cystinuria",
    "a)Hemoglobin\nb)Glutathione\nc)Purines\nd)Creatine\ne)All of the above",
    "a)Transamination\nb)Hydroxylation\nc)Decarboxylation\nd)Reduction",
    "a)Proline\nb)Phenylaline\nc)Isoleucine\nd)Leucine",
    "a)Valine\nb)Arginine\nc)Histidine\nd)Glutamic Acid",
    "a)Prolamines\nb)Albumin\nc)Globulin\nd)Myosin",
    "a)Uric Acid\nb)Glutamine\nc)Creatinine\nd)Urea",
    "a)\nb)\nc)\nd)",
    "a)\nb)\nc)\nd)",
    "a)\nb)\nc)\nd)",
    "a)\nb)\nc)\nd)",
    "a)\nb)\nc)\nd)",
    "a)\nb)\nc)\nd)",
    "a)\nb)\nc)\nd)",
    "a)\nb)\nc)\nd)",
    "a)\nb)\nc)\nd)",
    "a)\nb)\nc)\nd)",
    "a)\nb)\nc)\nd)",
    "a)\nb)\nc)\nd)",
    "a)\nb)\nc)\nd)",
    "a)\nb)\nc)\nd)"
];
const answers = [
    "a",
    "a",
    "a",
    "d",
    "d",
    "e",
    "c",
    "d",
    "c",
    "d",
    "d",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
];
document.getElementById("share-btn").onclick = function copylink(){
    var link = document.createElement("textarea");
    document.body.appendChild(link);
    link.value = "https://keshav-bajaj.github.io/biochemquiz/";
    link.select();
    link.setSelectionRange(0, 99999);
    document.execCommand("copy");
    link.setAttribute("class", "off");
    alert("Copied To Clipoard");
}
document.getElementById("start-btn").onclick = function quiz() {
    document.getElementById("name").innerHTML = "Name:\n\n" + window.prompt("Your Name");
    document.getElementById("start-box").classList.add("off");
    document.getElementById("ques-box").classList.remove("off");
}
const element = document.getElementById("question");
const option = document.getElementById("options");
var score = 0; 
element.innerHTML = questions[0];
option.innerText = options[0];
document.getElementsByClassName("submit")[0].onclick = function name() {
    var response = document.forms["form1"]["ans"].value;
    if (response == "") {
        alert("You Have To Answer All Questions !!");
        return false;
    } else if (response == answers[0]){
        score++;
        document.getElementsByClassName("submit")[1].classList.remove("off");
        this.classList.add("off");
        element.innerHTML = questions[1];
        option.innerText = options[1];
        document.getElementsByClassName("your opt")[0].innerHTML = "Your option:\n\n" + response;
        document.getElementsByClassName("result-box")[0].classList.add("correct");
        document.forms["form1"]["ans"].value = "";
        return false;
    } else{
        document.getElementsByClassName("submit")[1].classList.remove("off");
        this.classList.add("off");
        element.innerHTML = questions[1];
        option.innerText = options[1];
        document.getElementsByClassName("your opt")[0].innerHTML = "Your option:\n\n" + response;
        document.getElementsByClassName("result-box")[0].classList.add("incorrect");
        document.forms["form1"]["ans"].value = "";
        return false;
    }
}

var change = 0;

document.getElementsByClassName("submit")[1].onclick = function name() {
    var response = document.forms["form1"]["ans"].value;
    if (response == "") {
        alert("You Have To Answer All Questions !!");
        return false;
    } else if (response == answers[1]){
        score++;
        document.getElementsByClassName("submit")[2].classList.remove("off");
        this.classList.add("off");
        element.innerHTML = questions[2];
        option.innerText = options[2];
        document.getElementsByClassName("your opt")[1].innerHTML = "Your option:\n\n" + response;
        document.getElementsByClassName("result-box")[1].classList.add("correct");
        document.forms["form1"]["ans"].value = "";
        return false;
    } else{
        document.getElementsByClassName("submit")[2].classList.remove("off");
        this.classList.add("off");
        element.innerHTML = questions[2];
        option.innerText = options[2];
        document.getElementsByClassName("your opt")[1].innerHTML = "Your option:\n\n" + response;
        document.getElementsByClassName("result-box")[1].classList.add("incorrect");
        document.forms["form1"]["ans"].value = "";
        return false;
    }
}

change = 1;

document.getElementsByClassName("submit")[1+change].onclick = function name() {
    var response = document.forms["form1"]["ans"].value;
    if (response == "") {
        alert("You Have To Answer All Questions !!");
        return false;
    } else if (response == answers[1+change]){
        score++;
        document.getElementsByClassName("submit")[2+change].classList.remove("off");
        this.classList.add("off");
        element.innerHTML = questions[2+change];
        option.innerText = options[2+change];
        document.getElementsByClassName("your opt")[1+change].innerHTML = "Your option:\n\n" + response;
        document.getElementsByClassName("result-box")[1+change].classList.add("correct");
        return false;
    } else{
        document.getElementsByClassName("submit")[2+change].classList.remove("off");
        this.classList.add("off");
        element.innerHTML = questions[2+change];
        option.innerText = options[2+change];
        document.getElementsByClassName("your opt")[1+change].innerHTML = "Your option:\n\n" + response;
        document.getElementsByClassName("result-box")[1+change].classList.add("incorrect");
        return false;
    }
}

document.getElementsByClassName("submit")[3].onclick = function name() {
    var response = document.forms["form1"]["ans"].value;
    if (response == "") {
        alert("You Have To Answer All Questions !!");
        return false;
    } else if (response == answers[3]){
        score++;
        document.getElementsByClassName("submit")[4].classList.remove("off");
        this.classList.add("off");
        element.innerHTML = questions[4];
        option.innerText = options[4];
        document.getElementsByClassName("your opt")[3].innerHTML = "Your option:\n\n" + response;
        document.getElementsByClassName("result-box")[3].classList.add("correct");
        return false;
    } else{
        document.getElementsByClassName("submit")[4].classList.remove("off");
        this.classList.add("off");
        element.innerHTML = questions[4];
        option.innerText = options[4];
        document.getElementsByClassName("your opt")[3].innerHTML = "Your option:\n\n" + response;
        document.getElementsByClassName("result-box")[3].classList.add("incorrect");
        return false;
    }
}

document.getElementsByClassName("submit")[3+1].onclick = function name() {
    var response = document.forms["form1"]["ans"].value;
    if (response == "") {
        alert("You Have To Answer All Questions !!");
        return false;
    } else if (response == answers[3+1]){
        score++;
        document.getElementsByClassName("submit")[4+1].classList.remove("off");
        this.classList.add("off");
        element.innerHTML = questions[4+1];
        option.innerText = options[4+1];
        document.getElementsByClassName("your opt")[3+1].innerHTML = "Your option:\n\n" + response;
        document.getElementsByClassName("result-box")[3+1].classList.add("correct");
        return false;
    } else{
        document.getElementsByClassName("submit")[4+1].classList.remove("off");
        this.classList.add("off");
        element.innerHTML = questions[4+1];
        option.innerText = options[4+1];
        document.getElementsByClassName("your opt")[3+1].innerHTML = "Your option:\n\n" + response;
        document.getElementsByClassName("result-box")[3+1].classList.add("incorrect");
        return false;
    }
}

document.getElementsByClassName("submit")[3+1+1].onclick = function name() {
    var response = document.forms["form1"]["ans"].value;
    if (response == "") {
        alert("You Have To Answer All Questions !!");
        return false;
    } else if (response == answers[3+1+1]){
        score++;
        document.getElementsByClassName("submit")[4+1+1].classList.remove("off");
        this.classList.add("off");
        element.innerHTML = questions[4+1+1];
        option.innerText = options[4+1+1];
        document.getElementsByClassName("your opt")[3+1+1].innerHTML = "Your option:\n\n" + response;
        document.getElementsByClassName("result-box")[3+1+1].classList.add("correct");
        return false;
    } else{
        document.getElementsByClassName("submit")[4+1+1].classList.remove("off");
        this.classList.add("off");
        element.innerHTML = questions[4+1+1];
        option.innerText = options[4+1+1];
        document.getElementsByClassName("your opt")[3+1+1].innerHTML = "Your option:\n\n" + response;
        document.getElementsByClassName("result-box")[3+1+1].classList.add("incorrect");
        return false;
    }
}

document.getElementsByClassName("submit")[3+1+1+1].onclick = function name() {
    var response = document.forms["form1"]["ans"].value;
    if (response == "") {
        alert("You Have To Answer All Questions !!");
        return false;
    } else if (response == answers[3+1+1+1]){
        score++;
        document.getElementsByClassName("submit")[4+1+1+1].classList.remove("off");
        this.classList.add("off");
        element.innerHTML = questions[4+1+1+1];
        option.innerText = options[4+1+1+1];
        document.getElementsByClassName("your opt")[3+1+1+1].innerHTML = "Your option:\n\n" + response;
        document.getElementsByClassName("result-box")[3+1+1+1].classList.add("correct");
        return false;
    } else{
        document.getElementsByClassName("submit")[4+1+1+1].classList.remove("off");
        this.classList.add("off");
        element.innerHTML = questions[4+1+1+1];
        option.innerText = options[4+1+1+1];
        document.getElementsByClassName("your opt")[3+1+1+1].innerHTML = "Your option:\n\n" + response;
        document.getElementsByClassName("result-box")[3+1+1+1].classList.add("incorrect");
        return false;
    }
}

document.getElementsByClassName("submit")[3+1+1+2].onclick = function name() {
    var response = document.forms["form1"]["ans"].value;
    if (response == "") {
        alert("You Have To Answer All Questions !!");
        return false;
    } else if (response == answers[3+1+1+2]){
        score++;
        document.getElementsByClassName("submit")[4+1+1+2].classList.remove("off");
        this.classList.add("off");
        element.innerHTML = questions[4+1+1+2];
        option.innerText = options[4+1+1+2];
        document.getElementsByClassName("your opt")[3+1+1+2].innerHTML = "Your option:\n\n" + response;
        document.getElementsByClassName("result-box")[3+1+1+2].classList.add("correct");
        return false;
    } else{
        document.getElementsByClassName("submit")[4+1+1+2].classList.remove("off");
        this.classList.add("off");
        element.innerHTML = questions[4+1+1+2];
        option.innerText = options[4+1+1+2];
        document.getElementsByClassName("your opt")[3+1+1+2].innerHTML = "Your option:\n\n" + response;
        document.getElementsByClassName("result-box")[3+1+1+2].classList.add("incorrect");
        return false;
    }
}

document.getElementsByClassName("submit")[3+1+1+3].onclick = function name() {
    var response = document.forms["form1"]["ans"].value;
    if (response == "") {
        alert("You Have To Answer All Questions !!");
        return false;
    } else if (response == answers[3+1+1+3]){
        score++;
        document.getElementsByClassName("submit")[4+1+1+3].classList.remove("off");
        this.classList.add("off");
        element.innerHTML = questions[4+1+1+3];
        option.innerText = options[4+1+1+3];
        document.getElementsByClassName("your opt")[3+1+1+3].innerHTML = "Your option:\n\n" + response;
        document.getElementsByClassName("result-box")[3+1+1+3].classList.add("correct");
        return false;
    } else{
        document.getElementsByClassName("submit")[4+1+1+3].classList.remove("off");
        this.classList.add("off");
        element.innerHTML = questions[4+1+1+3];
        option.innerText = options[4+1+1+3];
        document.getElementsByClassName("your opt")[3+1+1+3].innerHTML = "Your option:\n\n" + response;
        document.getElementsByClassName("result-box")[3+1+1+3].classList.add("incorrect");
        return false;
    }
}

document.getElementsByClassName("submit")[9].onclick = function name() {
    var response = document.forms["form1"]["ans"].value;
    if (response == "") {
        alert("You Have To Answer All Questions !!");
        return false;
    } else if (response == answers[9]){
        score++;
        document.getElementsByClassName("submit")[10].classList.remove("off");
        this.classList.add("off");
        element.innerHTML = questions[10];
        option.innerText = options[10];
        document.getElementsByClassName("your opt")[9].innerHTML = "Your option:\n\n" + response;
        document.getElementsByClassName("result-box")[9].classList.add("correct");
        return false;
    } else{
        document.getElementsByClassName("submit")[10].classList.remove("off");
        this.classList.add("off");
        element.innerHTML = questions[10];
        option.innerText = options[10];
        document.getElementsByClassName("your opt")[9].innerHTML = "Your option:\n\n" + response;
        document.getElementsByClassName("result-box")[9].classList.add("incorrect");
        return false;
    }
}

document.getElementsByClassName("submit")[9+1].onclick = function name() {
    var response = document.forms["form1"]["ans"].value;
    if (response == "") {
        alert("You Have To Answer All Questions !!");
        return false;
    } else if (response == answers[9+1]){
        score++;
        document.getElementsByClassName("submit")[10+1].classList.remove("off");
        this.classList.add("off");
        element.innerHTML = questions[10+1];
        option.innerText = options[10+1];
        document.getElementsByClassName("your opt")[9+1].innerHTML = "Your option:\n\n" + response;
        document.getElementsByClassName("result-box")[9+1].classList.add("correct");
        return false;
    } else{
        document.getElementsByClassName("submit")[10+1].classList.remove("off");
        this.classList.add("off");
        element.innerHTML = questions[10+1];
        option.innerText = options[10+1];
        document.getElementsByClassName("your opt")[9+1].innerHTML = "Your option:\n\n" + response;
        document.getElementsByClassName("result-box")[9+1].classList.add("incorrect");
        return false;
    }
}

document.getElementsByClassName("submit")[9+2].onclick = function name() {
    var response = document.forms["form1"]["ans"].value;
    if (response == "") {
        alert("You Have To Answer All Questions !!");
        return false;
    } else if (response == answers[9+2]){
        score++;
        document.getElementsByClassName("submit")[10+2].classList.remove("off");
        this.classList.add("off");
        element.innerHTML = questions[10+2];
        option.innerText = options[10+2];
        document.getElementsByClassName("your opt")[9+2].innerHTML = "Your option:\n\n" + response;
        document.getElementsByClassName("result-box")[9+2].classList.add("correct");
        return false;
    } else{
        document.getElementsByClassName("submit")[10+2].classList.remove("off");
        this.classList.add("off");
        element.innerHTML = questions[10+2];
        option.innerText = options[10+2];
        document.getElementsByClassName("your opt")[9+2].innerHTML = "Your option:\n\n" + response;
        document.getElementsByClassName("result-box")[9+2].classList.add("incorrect");
        return false;
    }
}

document.getElementsByClassName("submit")[9+3].onclick = function name() {
    var response = document.forms["form1"]["ans"].value;
    if (response == "") {
        alert("You Have To Answer All Questions !!");
        return false;
    } else if (response == answers[9+3]){
        score++;
        document.getElementsByClassName("submit")[10+3].classList.remove("off");
        this.classList.add("off");
        element.innerHTML = questions[10+3];
        option.innerText = options[10+3];
        document.getElementsByClassName("your opt")[9+3].innerHTML = "Your option:\n\n" + response;
        document.getElementsByClassName("result-box")[9+3].classList.add("correct");
        return false;
    } else{
        document.getElementsByClassName("submit")[10+3].classList.remove("off");
        this.classList.add("off");
        element.innerHTML = questions[10+3];
        option.innerText = options[10+3];
        document.getElementsByClassName("your opt")[9+3].innerHTML = "Your option:\n\n" + response;
        document.getElementsByClassName("result-box")[9+3].classList.add("incorrect");
        return false;
    }
}

document.getElementsByClassName("submit")[9+4].onclick = function name() {
    var response = document.forms["form1"]["ans"].value;
    if (response == "") {
        alert("You Have To Answer All Questions !!");
        return false;
    } else if (response == answers[9+4]){
        score++;
        document.getElementsByClassName("submit")[10+4].classList.remove("off");
        this.classList.add("off");
        element.innerHTML = questions[10+4];
        option.innerText = options[10+4];
        document.getElementsByClassName("your opt")[9+4].innerHTML = "Your option:\n\n" + response;
        document.getElementsByClassName("result-box")[9+4].classList.add("correct");
        return false;
    } else{
        document.getElementsByClassName("submit")[10+4].classList.remove("off");
        this.classList.add("off");
        element.innerHTML = questions[10+4];
        option.innerText = options[10+4];
        document.getElementsByClassName("your opt")[9+4].innerHTML = "Your option:\n\n" + response;
        document.getElementsByClassName("result-box")[9+4].classList.add("incorrect");
        return false;
    }
}

document.getElementsByClassName("submit")[9+5].onclick = function name() {
    var response = document.forms["form1"]["ans"].value;
    if (response == "") {
        alert("You Have To Answer All Questions !!");
        return false;
    } else if (response == answers[9+5]){
        score++;
        document.getElementsByClassName("submit")[10+5].classList.remove("off");
        this.classList.add("off");
        element.innerHTML = questions[10+5];
        option.innerText = options[10+5];
        document.getElementsByClassName("your opt")[9+5].innerHTML = "Your option:\n\n" + response;
        document.getElementsByClassName("result-box")[9+5].classList.add("correct");
        return false;
    } else{
        document.getElementsByClassName("submit")[10+5].classList.remove("off");
        this.classList.add("off");
        element.innerHTML = questions[10+5];
        option.innerText = options[10+5];
        document.getElementsByClassName("your opt")[9+5].innerHTML = "Your option:\n\n" + response;
        document.getElementsByClassName("result-box")[9+5].classList.add("incorrect");
        return false;
    }
}

document.getElementsByClassName("submit")[9+6].onclick = function name() {
    var response = document.forms["form1"]["ans"].value;
    if (response == "") {
        alert("You Have To Answer All Questions !!");
        return false;
    } else if (response == answers[9+6]){
        score++;
        document.getElementsByClassName("submit")[10+6].classList.remove("off");
        this.classList.add("off");
        element.innerHTML = questions[10+6];
        option.innerText = options[10+6];
        document.getElementsByClassName("your opt")[9+6].innerHTML = "Your option:\n\n" + response;
        document.getElementsByClassName("result-box")[9+6].classList.add("correct");
        return false;
    } else{
        document.getElementsByClassName("submit")[10+6].classList.remove("off");
        this.classList.add("off");
        element.innerHTML = questions[10+6];
        option.innerText = options[10+6];
        document.getElementsByClassName("your opt")[9+6].innerHTML = "Your option:\n\n" + response;
        document.getElementsByClassName("result-box")[9+6].classList.add("incorrect");
        return false;
    }
}

document.getElementsByClassName("submit")[9+7].onclick = function name() {
    var response = document.forms["form1"]["ans"].value;
    if (response == "") {
        alert("You Have To Answer All Questions !!");
        return false;
    } else if (response == answers[9+7]){
        score++;
        document.getElementsByClassName("submit")[10+7].classList.remove("off");
        this.classList.add("off");
        element.innerHTML = questions[10+7];
        option.innerText = options[10+7];
        document.getElementsByClassName("your opt")[9+7].innerHTML = "Your option:\n\n" + response;
        document.getElementsByClassName("result-box")[9+7].classList.add("correct");
        return false;
    } else{
        document.getElementsByClassName("submit")[10+7].classList.remove("off");
        this.classList.add("off");
        element.innerHTML = questions[10+7];
        option.innerText = options[10+7];
        document.getElementsByClassName("your opt")[9+7].innerHTML = "Your option:\n\n" + response;
        document.getElementsByClassName("result-box")[9+7].classList.add("incorrect");
        return false;
    }
}

document.getElementsByClassName("submit")[9+8].onclick = function name() {
    var response = document.forms["form1"]["ans"].value;
    if (response == "") {
        alert("You Have To Answer All Questions !!");
        return false;
    } else if (response == answers[9+8]){
        score++;
        document.getElementsByClassName("submit")[10+8].classList.remove("off");
        this.classList.add("off");
        element.innerHTML = questions[10+8];
        option.innerText = options[10+8];
        document.getElementsByClassName("your opt")[9+8].innerHTML = "Your option:\n\n" + response;
        document.getElementsByClassName("result-box")[9+8].classList.add("correct");
        return false;
    } else{
        document.getElementsByClassName("submit")[10+8].classList.remove("off");
        this.classList.add("off");
        element.innerHTML = questions[10+8];
        option.innerText = options[10+8];
        document.getElementsByClassName("your opt")[9+8].innerHTML = "Your option:\n\n" + response;
        document.getElementsByClassName("result-box")[9+8].classList.add("incorrect");
        return false;
    }
}

document.getElementsByClassName("submit")[9+9].onclick = function name() {
    var response = document.forms["form1"]["ans"].value;
    if (response == "") {
        alert("You Have To Answer All Questions !!");
        return false;
    } else if (response == answers[9+9]){
        score++;
        document.getElementsByClassName("submit")[10+9].classList.remove("off");
        this.classList.add("off");
        element.innerHTML = questions[10+9];
        option.innerText = options[10+9];
        document.getElementsByClassName("your opt")[9+9].innerHTML = "Your option:\n\n" + response;
        document.getElementsByClassName("result-box")[9+9].classList.add("correct");
        return false;
    } else{
        document.getElementsByClassName("submit")[10+9].classList.remove("off");
        this.classList.add("off");
        element.innerHTML = questions[10+9];
        option.innerText = options[10+9];
        document.getElementsByClassName("your opt")[9+9].innerHTML = "Your option:\n\n" + response;
        document.getElementsByClassName("result-box")[9+9].classList.add("incorrect");
        return false;
    }
}

document.getElementsByClassName("submit")[19].onclick = function name() {
    var response = document.forms["form1"]["ans"].value;
    if (response == "") {
        alert("You Have To Answer All Questions !!");
        return false;
    } else if (response == answers[19]){
        score++;
        document.getElementsByClassName("submit")[20].classList.remove("off");
        this.classList.add("off");
        element.innerHTML = questions[20];
        option.innerText = options[20];
        document.getElementsByClassName("your opt")[19].innerHTML = "Your option:\n\n" + response;
        document.getElementsByClassName("result-box")[19].classList.add("correct");
        return false;
    } else{
        document.getElementsByClassName("submit")[20].classList.remove("off");
        this.classList.add("off");
        element.innerHTML = questions[20];
        option.innerText = options[20];
        document.getElementsByClassName("your opt")[19].innerHTML = "Your option:\n\n" + response;
        document.getElementsByClassName("result-box")[19].classList.add("incorrect");
        return false;
    }
}

document.getElementsByClassName("submit")[19+1].onclick = function name() {
    var response = document.forms["form1"]["ans"].value;
    if (response == "") {
        alert("You Have To Answer All Questions !!");
        return false;
    } else if (response == answers[19+1]){
        score++;
        document.getElementsByClassName("submit")[20+1].classList.remove("off");
        this.classList.add("off");
        element.innerHTML = questions[20+1];
        option.innerText = options[20+1];
        document.getElementsByClassName("your opt")[19+1].innerHTML = "Your option:\n\n" + response;
        document.getElementsByClassName("result-box")[19+1].classList.add("correct");
        return false;
    } else{
        document.getElementsByClassName("submit")[20+1].classList.remove("off");
        this.classList.add("off");
        element.innerHTML = questions[20+1];
        option.innerText = options[20+1];
        document.getElementsByClassName("your opt")[19+1].innerHTML = "Your option:\n\n" + response;
        document.getElementsByClassName("result-box")[19+1].classList.add("incorrect");
        return false;
    }
}

document.getElementsByClassName("submit")[21].onclick = function name() {
    var response = document.forms["form1"]["ans"].value;
    if (response == "") {
        alert("You Have To Answer All Questions !!");
        return false;
    } else if (response == answers[21]){
        score++;
        document.getElementsByClassName("submit")[22].classList.remove("off");
        this.classList.add("off");
        element.innerHTML = questions[22];
        option.innerText = options[22];
        document.getElementsByClassName("your opt")[21].innerHTML = "Your option:\n\n" + response;
        document.getElementsByClassName("result-box")[21].classList.add("correct");
        return false;
    } else{
        document.getElementsByClassName("submit")[22].classList.remove("off");
        this.classList.add("off");
        element.innerHTML = questions[22];
        option.innerText = options[22];
        document.getElementsByClassName("your opt")[21].innerHTML = "Your option:\n\n" + response;
        document.getElementsByClassName("result-box")[21].classList.add("incorrect");
        return false;
    }
}

document.getElementsByClassName("submit")[21+1].onclick = function name() {
    var response = document.forms["form1"]["ans"].value;
    if (response == "") {
        alert("You Have To Answer All Questions !!");
        return false;
    } else if (response == answers[21+1]){
        score++;
        document.getElementsByClassName("submit")[22+1].classList.remove("off");
        this.classList.add("off");
        element.innerHTML = questions[22+1];
        option.innerText = options[22+1];
        document.getElementsByClassName("your opt")[21+1].innerHTML = "Your option:\n\n" + response;
        document.getElementsByClassName("result-box")[21+1].classList.add("correct");
        return false;
    } else{
        document.getElementsByClassName("submit")[22+1].classList.remove("off");
        this.classList.add("off");
        element.innerHTML = questions[22+1];
        option.innerText = options[22+1];
        document.getElementsByClassName("your opt")[21+1].innerHTML = "Your option:\n\n" + response;
        document.getElementsByClassName("result-box")[21+1].classList.add("incorrect");
        return false;
    }
}

document.getElementsByClassName("submit")[21+2].onclick = function name() {
    var response = document.forms["form1"]["ans"].value;
    if (response == "") {
        alert("You Have To Answer All Questions !!");
        return false;
    } else if (response == answers[21+2]){
        score++;
        document.getElementsByClassName("submit")[22+2].classList.remove("off");
        this.classList.add("off");
        element.innerHTML = questions[22+2];
        option.innerText = options[22+2];
        document.getElementsByClassName("your opt")[21+2].innerHTML = "Your option:\n\n" + response;
        document.getElementsByClassName("result-box")[21+2].classList.add("correct");
        return false;
    } else{
        document.getElementsByClassName("submit")[22+2].classList.remove("off");
        this.classList.add("off");
        element.innerHTML = questions[22+2];
        option.innerText = options[22+2];
        document.getElementsByClassName("your opt")[21+2].innerHTML = "Your option:\n\n" + response;
        document.getElementsByClassName("result-box")[21+2].classList.add("incorrect");
        return false;
    }
}

document.getElementsByClassName("submit")[21+3].onclick = function name() {
    var response = document.forms["form1"]["ans"].value;
    if (response == "") {
        alert("You Have To Answer All Questions !!");
        return false;
    } else if (response == answers[21+3]){
        score++;
        this.classList.add("off");
        document.getElementsByClassName("your opt")[21+3].innerHTML = "Your option:\n\n" + response;
        document.getElementsByClassName("result-box")[21+3].classList.add("correct");
        document.getElementById("ques-box").style.display = "none";
        document.getElementById("results").classList.remove("off");
        document.getElementById("marks").innerHTML = "Your Score:\n" + score*4 + "\n/\n100";
        return false;
    } else{
        this.classList.add("off");
        document.getElementsByClassName("your opt")[21+3].innerHTML = "Your option:\n\n" + response;
        document.getElementsByClassName("result-box")[21+3].classList.add("incorrect");
        document.getElementById("ques-box").style.display = "none";
        document.getElementById("results").classList.remove("off");
        document.getElementById("marks").innerHTML = "Your Score:\n" + score*4 + "\n/\n100";
        return false;
    }
}

for (i=0; i<questions.length; i++){
    document.getElementsByClassName("result-ques")[i].innerHTML = questions[i];
    document.getElementsByClassName("result-options")[i].innerText = options[i];
    document.getElementsByClassName("right-opt")[i].innerHTML = "Correct Answer:\n" + answers[i];
}

