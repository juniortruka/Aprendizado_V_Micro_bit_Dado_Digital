# Dado digital APRIMORADO
resultado = 0
basic.show_icon(IconNames.TARGET)

def on_button_pressed_a():
    global resultado
    # Exibe numero em um certo intervalo
    # Aqui os numero de 1 à 6 corresponde as faces de um dado.
    # 1: Primeira face , 2: Segunda face etc.
    resultado = randint(1, 6)
    # Mostrar resultado do dado
    basic.show_number(resultado)
    basic.clear_screen()
    basic.pause(2000)
    # Se sair a primeira face do dado
    if resultado == 1:
        basic.show_string("UM")
    # Se sair a segunda face do dado
    if resultado == 2:
        basic.show_string("DOIS")
    # Se sair a terceira face do dado
    if resultado == 3:
        basic.show_string("TRES")
    # Se sair a quarta face do dado
    if resultado == 4:
        basic.show_string("QUATRO")
    # // Se sair a quinta face do dado
    if resultado == 5:
        basic.show_string("CINCO")
    # Se sair a sexta face do dado
    if resultado == 6:
        basic.show_string("SEIS")
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_b():
    global resultado
    # Exibe numero em um certo intervalo
    # Aqui os numero de 1 à 6 corresponde as faces de um dado.
    # 1: Primeira face , 2: Segunda face etc.
    resultado = randint(1, 6)
    basic.show_number(resultado)
    basic.clear_screen()
    basic.pause(2000)
    # Se sair a primeira face do dado
    if resultado == 1:
        basic.show_string("UM")
    # Se sair a segunda face do dado
    if resultado == 2:
        basic.show_string("DOIS")
    # Se sair a terceira face do dado
    if resultado == 3:
        basic.show_string("TRES")
    # Se sair a quarta face do dado
    if resultado == 4:
        basic.show_string("QUATRO")
    # // Se sair a quinta face do dado
    if resultado == 5:
        basic.show_string("CINCO")
    # Se sair a sexta face do dado
    if resultado == 6:
        basic.show_string("SEIS")
input.on_button_pressed(Button.B, on_button_pressed_b)
