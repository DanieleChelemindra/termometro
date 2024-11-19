function termometro(){
    temperatura = $("#temperatura").val();
    if (temperatura < 35){
        $("#termometroImmagine").attr("src","./images/termometro-bassa.png")
        $("#responso").html("stai male!!!(e hai freddo)")
    } else if ( temperatura > 38){
        $("#termometroImmagine").attr("src","./images/termometro-alta.png")
        $("#responso").html("stai male!!!(e hai caldo)")
    } else {
        $("#termometroImmagine").attr("src","./images/termometro-normale.png")
        $("#responso").html("stai bene!!!")
    }
}