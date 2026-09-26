document.getElementById('btnSpocitej').addEventListener('click', function() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const vysledekEl = document.getElementById('vysledek');

    if (isNaN(num1) || isNaN(num2)) {
        vysledekEl.textContent = 'Zadejte prosím platná čísla!';
        return;
    }

    const soucet = num1 + num2;
    vysledekEl.textContent = `Výsledek: ${soucet}`;
});
