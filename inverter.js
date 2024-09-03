
function inverterString(string) {
    let stringInvertida = '';
    for ( let i = string.length - 1; i >= 0; i--) {
        stringInvertida += string[i];
    }

    return stringInvertida;
}

let stringOriginal = "amayiroT arikA PIR";

console.log(inverterString(stringOriginal)); // RIP Akira Toriyama.

console.log(inverterString('Hello World!')); // !dlroW olleH