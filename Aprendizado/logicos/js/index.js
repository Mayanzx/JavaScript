console.log(`1 ${(true && true)}`); // E (todas verdadeiras)

console.log(`2 ${(false || true)}`); // OU (nem todas verdadeiras)

console.log(`3 ${(!true)} ${(!false)}`); // NÃO (inverterá o falso e verdadeiro)