function adicionarGame() {
    var gameFavorito = document.getElementById("game").value
    
    var elementoListaGame = document.getElementById("listaGames")
    elementoListaGame.innerHTML = elementoListaGame.innerHTML +"<img src=" + gameFavorito + ">"
    
    document.getElementById("game").value = ""
  
  }
  
