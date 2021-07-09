const submeterFormulario = () => {
    const rangeInicial = document.getElementById("rangeIncial").value;
    const rangeFinal = document.getElementById("rangeFinal").value;
    const minhaAposta = document.getElementById("minhaAposta").value;

    realizarSorteio(+rangeInicial, +rangeFinal, +minhaAposta);
}

const realizarSorteio = (rangeInicial, rangeFinal, minhaAposta) => {

    if (!rangeInicial) {
            alert("Informe o Range inicial!");
            return;   
    }

    if (!rangeFinal) {
        alert("Informe o Range final!");
        return;   
}

    if (!minhaAposta) {
        alert("Informe a sua aposta!");  
        return;  
    }

        const numeroSorteado = novoSorteio(rangeInicial, rangeFinal);

            if (numeroSorteado === minhaAposta) {
                alert("Parabéns você acertou");
                return;
            }
            
                alert(`Errou! o número sorteado foi: ${numeroSorteado}` );
}

const novoSorteio = (rangeInicial, rangeFinal) => {
    return (Math.floor(Math.random() * (rangeFinal - rangeInicial + 1 + rangeInicial)));
}