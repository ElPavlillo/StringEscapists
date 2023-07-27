function StringEscapist() {
    const str = document.getElementById("string");
    const result = document.getElementById("result");
    const selectedChar = document.getElementById("searchChar").value;
    const additionalChar = document.getElementById("escapeChar").value;

    if (selectedChar && additionalChar) {
        const regex = new RegExp(selectedChar, "g");
        const updatedText = str.value.replace(regex, additionalChar + selectedChar);
        result.value = updatedText;
    }
}