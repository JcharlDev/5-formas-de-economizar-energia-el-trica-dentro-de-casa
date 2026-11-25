let estado = "desligada";
let acendimentos = 0;
 
        function ligarLampada(){
            if(estado == "desligada"){
                document.getElementById("lampada").src = "lampada_ligada (1).jpeg"
                estado = "ligada";
                acendimentos++;
                document.getElementById("mensagem").innerText = `total de acendimentos: ${acendimentos}`;
            }
        }
        function desligarLampada (){
            if(estado == "ligada"){
                document.getElementById("lampada").src = "lampada_desligada (1).jpeg"
                estado = "desligada";
                acendimentos++;
            }
        }
        function quebrarLampada (){
            if(estado == "desligada" || estado == "ligada"){
                document.getElementById("lampada").src = "lampada_quebrada (1).jpeg"
                estado = "quebrada";
            }
        }
