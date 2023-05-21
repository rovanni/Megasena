function megasena(){
    var jogos =document.getElementById("input_jogos").value;            
    var dezenas =document.getElementById("input_dezenas").value;
    document.getElementById("p_resultado").innerHTML = "";  
    //For que cria a quantidades de jogos selecionados para os usuários                             
    for(let j=1; j<=jogos; j++ ){
            var vetor = [];
        //For que armazena os dezenas no vetor
        for (let i = 0; i<dezenas ; i++) {//bloco de inicio for
            //sorteia um número randômico de 1 - 60.
            vetor[i]= (Math.floor(Math.random() * 60) + 1);
        }//fim do for  
        //Função para verificar números repetidos
        function hasDuplicates(arr) {
            return new Set(arr).size !== arr.length;
        }
        //contador do while
        var cont=0;
        //While chama função para verificar se o vetor possui números repitidos
        //Se a condição for verdadeira entra no 
        //enquanto até não mais existir números repetidos no vetor
        while (hasDuplicates(vetor)) {
            for (let i = 0; i<dezenas ; i++) {//bloco de inicio for
                //if para substituir valores repetidos
                if (vetor[cont] == vetor[i+1]){
                    if(cont != i+1){
                        vetor[i+1]= (Math.floor(Math.random() * 60) + 1);
                    }
                }
            }//fim do for 
            cont++;                         
            //if para não deixar cont passar do tamanho do vetor,
            //para não verificar valores fora do vetor
            if(cont>=dezenas){
                cont=0;
            }
        }//fim da verificação dos números repetidos 
        //Ordena o vetor            
        vetor.sort(function(a, b){return a - b});
        //For que imprime o vetor na tela
        for (let i = 0; i<dezenas ; i++) {//bloco de inicio for
                document.getElementById("p_resultado").innerHTML +=(" (");                    
                document.getElementById("p_resultado").innerHTML += vetor[i];
                document.getElementById("p_resultado").innerHTML +=(") ");                    
            }//fim do for   
            document.getElementById("p_resultado").innerHTML +=("<br>"); 
    }//fim do for 

}//fim da função megasena()
// Este código adiciona um event listener para o evento "keypress" no documento.
// Quando o usuário pressionar a tecla "Enter", o código verifica se a tecla pressionada é "Enter". 
// Se for, ele chama o método "click()" no botão "Calcular", que aciona a função "calcular()".    
document.addEventListener('keypress', function (e) {
        if (e.key === 'Enter') {
            document.getElementById('button').click();
        }
    })                 
