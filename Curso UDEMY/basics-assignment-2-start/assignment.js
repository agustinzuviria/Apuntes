const task3Element = document.getElementById('task-3');

function plainAlert () {
alert("A general alert, no inputs")
}

function specificAlert (string) {
    alert(string)
}

function clickAlert() {
    plainAlert(),    alert("Ejemplo de alerta")
}

function concatenate3 (string1, string2, string3) {
    return string1 + string2 + string3
}

const constConcatenate3 = concatenate3 ("Es " + "un " + "ejemplo")

alert (constConcatenate3)

    

    task3Element.addEventListener("click", clickAlert);

