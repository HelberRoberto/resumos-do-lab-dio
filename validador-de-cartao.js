// Validador de cartões baseado nos padrões de bandeiras
function identificarBandeira(numero) {
    numero = numero.replace(/\D/g, ''); // Remove caracteres não numéricos

    // Visa (padrão e 16 dígitos)
    if (/^4\d{15}$/.test(numero)) return 'Visa (16 dígitos)';
    if (/^4\d{12}(\d{3})?$/.test(numero)) return 'Visa';

    // MasterCard
    if (/^(5[1-5]\d{14}|222[1-9]\d{12}|22[3-9]\d{13}|2[3-6]\d{14}|27[01]\d{13}|2720\d{12})$/.test(numero)) return 'MasterCard';

    // Elo (intervalos comuns)
    if (/^(4011|4312|4389)\d{12}$/.test(numero)) return 'Elo';

    // American Express
    if (/^3[47]\d{13}$/.test(numero)) return 'American Express';

    // Discover
    if (/^(6011\d{12}|65\d{14}|64[4-9]\d{13})$/.test(numero)) return 'Discover';

    // Hipercard
    if (/^6062\d{12}$/.test(numero)) return 'Hipercard';

    // Diners Club (300-305, 36, 38, 39)
    if (/^3(0[0-5]|[68]|9)\d{11}$/.test(numero)) return 'Diners Club';

    // EnRoute (2014, 2149)
    if (/^(2014|2149)\d{11}$/.test(numero)) return 'EnRoute';

    // Voyager (8699)
    if (/^8699\d{11,15}$/.test(numero)) return 'Voyager';

    // Aura (50)
    if (/^50\d{14,17}$/.test(numero)) return 'Aura';

    // Elo (outros intervalos possíveis)
    if (/^(5067|4576|4011|6362|5041|4389|4514|6504|6505|6509|6516|6550)\d{12,15}$/.test(numero)) return 'Elo';

    return 'Bandeira não identificada';
}

// Exemplo de uso:
// console.log(identificarBandeira('4111111111111111')); // Visa (16 dígitos)
// console.log(identificarBandeira('6011111111111117')); // Discover
// console.log(identificarBandeira('201400000000009')); // EnRoute
// console.log(identificarBandeira('8699123456789012')); // Voyager
// console.log(identificarBandeira('5067000000000000')); // Elo
// console.log(identificarBandeira('5018000000000000')); // Aura
