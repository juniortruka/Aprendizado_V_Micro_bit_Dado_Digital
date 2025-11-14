// Dado digital APRIMORADO

     let resultado = 0 
     
    basic.showIcon(IconNames.Target)

     input.onButtonPressed(Button.A, function () {
    // Exibe numero em um certo intervalo
    // Aqui os numero de 1 à 6 corresponde as faces de um dado.
    // 1: Primeira face , 2: Segunda face etc.
    resultado = randint(1, 6)
    // Mostrar resultado do dado
    basic.showNumber(resultado)
    basic.clearScreen()
    basic.pause(2000)

    // Se sair a primeira face do dado
    if (resultado ==1) {
      
      basic.showString("UM")
 
    }
    // Se sair a segunda face do dado
    if (resultado == 2) {

        basic.showString("DOIS")

    }
    // Se sair a terceira face do dado
    if (resultado == 3) {

        basic.showString("TRES")

    }
    // Se sair a quarta face do dado
    if (resultado == 4) {

        basic.showString("QUATRO")

    }
    // // Se sair a quinta face do dado
    if (resultado == 5) {

        basic.showString("CINCO")

    }
    // Se sair a sexta face do dado
    if (resultado == 6) {

        basic.showString("SEIS")

    }

})

input.onButtonPressed(Button.B, function () {

    // Exibe numero em um certo intervalo
    // Aqui os numero de 1 à 6 corresponde as faces de um dado.
    // 1: Primeira face , 2: Segunda face etc.
    
    resultado = randint(1, 6)
    basic.showNumber(resultado)
    basic.clearScreen()
    basic.pause(2000)
    // Se sair a primeira face do dado
    if (resultado == 1) {

        basic.showString("UM")

    }
    // Se sair a segunda face do dado
    if (resultado == 2) {

        basic.showString("DOIS")

    }
    // Se sair a terceira face do dado
    if (resultado == 3) {

        basic.showString("TRES")

    }
    // Se sair a quarta face do dado
    if (resultado == 4) {

        basic.showString("QUATRO")

    }
    // // Se sair a quinta face do dado
    if (resultado == 5) {

        basic.showString("CINCO")

    }
    // Se sair a sexta face do dado
    if (resultado == 6) {

        basic.showString("SEIS")

    }
})

