function beautifyDate(date) {


    //Basicos anteontem, ontem, hoje e amanha
    if (date.getTime() == Date.today().add(-2).days().getTime())
        return "anteontem";
    if (date.getTime() == Date.today().add(-1).days().getTime())
        return "ontem";
    if (date.getTime() == Date.today().getTime())
        return "hoje";
    if (date.getTime() == Date.today().add(1).days().getTime())
        return "amanhã";


    //Se ainda estivermos na mesma semana, da pra usar so o dia da semana
    if (date.getTime() == Date.parse('next monday').getTime() && Date.parse('next monday').getTime() < Date.parse('next sunday').getTime())
        return "segunda";
    if (date.getTime() == Date.parse('next tuesday').getTime() && Date.parse('next tuesday').getTime() < Date.parse('next sunday').getTime())
        return "terça";
    if (date.getTime() == Date.parse('next wednesday').getTime() && Date.parse('next wednesday').getTime() < Date.parse('next sunday').getTime())
        return "quarta";
    if (date.getTime() == Date.parse('next thursday').getTime() && Date.parse('next thursday').getTime() < Date.parse('next sunday').getTime())
        return "quinta";
    if (date.getTime() == Date.parse('next friday').getTime() && Date.parse('next friday').getTime() < Date.parse('next sunday').getTime())
        return "sexta";
    if (date.getTime() == Date.parse('next saturday').getTime() && Date.parse('next saturday').getTime() < Date.parse('next sunday').getTime())
        return "sábado";
    if (date.getTime() == Date.parse('next sunday').getTime() && Date.parse('next sunday').getTime() < Date.parse('next monday').getTime())
        return "domingo";

    //Se for na semana seguinte, da pra escrever QUE VEM
    if (date.getTime() == Date.parse('next monday').getTime())
        return "segunda que vem";
    if (date.getTime() == Date.parse('next tuesday').getTime())
        return "terça que vem";
    if (date.getTime() == Date.parse('next wednesday').getTime())
        return "quarta que vem";
    if (date.getTime() == Date.parse('next thursday').getTime())
        return "quinta que vem";
    if (date.getTime() == Date.parse('next friday').getTime())
        return "sexta que vem";
    if (date.getTime() == Date.parse('next saturday').getTime())
        return "sábado que vem";
    if (date.getTime() == Date.parse('next sunday').getTime())
        return "domingo que vem";


    var meses = ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro'];

    return date.getDate() + " de " + meses[date.getMonth()];

}