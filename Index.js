let nome = "RonaldinhoSoccer";
let QuantidadeDeTroféu = 9001
let Rank

    switch(true){
    case(QuantidadeDeTroféu <= 1000):
        Rank = "Bronze"   
    break;
    case(QuantidadeDeTroféu >= 2001 && QuantidadeDeTroféu <= 5000):
        Rank = "Prata"
    break;
    case(QuantidadeDeTroféu >= 5001 && QuantidadeDeTroféu <= 6000):
        Rank = "Ouro"
    break;
    case(QuantidadeDeTroféu >= 6001 && QuantidadeDeTroféu <= 7000):
        Rank = "Platina"
    break;
    case(QuantidadeDeTroféu >= 7001 && QuantidadeDeTroféu <= 8000):
        Rank = "Ascendente"
    break;
    case(QuantidadeDeTroféu >= 8001 && QuantidadeDeTroféu <= 9000):
        Rank = "Imortal"
    break;
    case(QuantidadeDeTroféu > 9000):
        Rank = "Radiante"
    break;

 }

 console.log("O usuário " + nome + " tem: " + QuantidadeDeTroféu + " De trófeus")
 console.log("Ele é Rank: " + Rank)



