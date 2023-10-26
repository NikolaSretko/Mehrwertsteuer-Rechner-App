//============================================================
//                          globa scope           
//============================================================
const amountInput = document.getElementById("amount");
const nettoToBruttoRadio = document.getElementById("nettoToBrutto");
const bruttoToNettoRadio = document.getElementById("bruttoToNetto");
const mwst19Radio = document.getElementById("mwst19");
const mwst7Radio = document.getElementById("mwst7");
const calculateButton = document.getElementById("calculate");
const result = document.getElementById("result");
//============================================================
//                          calculation
//============================================================
calculateButton.addEventListener("click", function () {
    const amount = parseFloat(amountInput.value);
    const mwstSatz = parseFloat(
        mwst19Radio.checked ? mwst19Radio.value : mwst7Radio.value
    );

    if (!isNaN(amount) && (nettoToBruttoRadio.checked || bruttoToNettoRadio.checked)) {
        if (nettoToBruttoRadio.checked) {
            const brutto = amount * (1 + mwstSatz);
            const mwstBetrag = brutto - amount;
            result.innerHTML = `<p>Bruttobetrag: € ${brutto.toFixed(2)} <br>Mehrwertsteuer: € ${mwstBetrag.toFixed(2)})</p>`;
        } else if (bruttoToNettoRadio.checked) {
            const netto = amount / (1 + mwstSatz);
            const mwstBetrag = amount - netto;
            result.innerHTML = `<p>Nettobetrag: € ${netto.toFixed(2)} <br>Mehrwertsteuer: € ${mwstBetrag.toFixed(2)})</p>`;
        }
    } else {
        result.textContent = "Bitte füllen Sie alle Felder aus.";
    }
});
//============================================================
