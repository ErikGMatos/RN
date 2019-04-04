export default (pesos = {
    peso1: 2,
    peso2: 2,
    peso3: 2
});

const questoesProvaFinal = {
    numeroQuestoes: 16,
    pesoProvaFinal: 4
};

const valorPorQuestao = 10 / questoesProvaFinal.numeroQuestoes;
const resultado = questoesProvaFinal.pesoProvaFinal / valorPorQuestao;

export { valorPorQuestao, resultado };
