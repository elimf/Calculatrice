function ajouter(nb1, nb2) {

    return nb1+nb2;
}
function soustraire(nb1, nb2 ) {
    return nb1-nb2;
}
function multiplier(nb1, nb2) {
    return nb1*nb2;
}
function diviser(nb1, nb2 ){
    return nb1/nb2;
}
function operate(op, nb1, nb2) {
    var result;
    switch (op) {
      case "+":
        result = ajouter(nb1, nb2);
        break;
      case "-":
        result = soustraire(nb1, nb2);
        break;
      case "*":
        result = multiplier(nb1, nb2);
        break;
      case "/":
        result = diviser(nb1, nb2);
        break;

      default:
         console.log("error");
        break;
    }
    
return result;
}