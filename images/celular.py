import numpy as np

def automata_1D(estado_inicial, pasos, reglas):
    """
    Autómata celular unidimensional con frontera circular.

    estado_inicial: lista o arreglo que define el PRIMER paso.
    pasos: número de generaciones a calcular.
    reglas: diccionario con las reglas para cada vecindario.
    """
    estado = np.array(estado_inicial, dtype=int)
    largo = len(estado)

    historial = [estado.copy()]   # Se guarda el primer estado

    for _ in range(pasos):
        nuevo = np.zeros_like(estado)

        for i in range(largo):
            # FRONTERA CIRCULAR
            izquierda = estado[(i - 1) % largo]
            centro    = estado[i]
            derecha   = estado[(i + 1) % largo]

            vec = f"{izquierda}{centro}{derecha}"
            nuevo[i] = reglas[vec]  # Aplicar regla

        estado = nuevo
        historial.append(estado.copy())

    return np.array(historial)


def imprimir(historial):
    for fila in historial:
        print("".join("█" if cel == 1 else " " for cel in fila))


# ------------------------------------------
# EJEMPLO: estado inicial definido por el usuario
# ------------------------------------------

estado_inicial = [
    0,0,0,0,0,
    0,0,0,0,0,
    0,0,0,0,0,
    0,0,0,0,0,
    1,
    0,0,0,0,0,
    0,0,0,0,0,
    0,0,0,0,0,
    0,0,0,0,0
]

# Reglas manuales (ejemplo: regla 30)
reglas = {
    "111": 1,
    "110": 0,
    "101": 0,
    "100": 1,
    "011": 0,
    "010": 1,
    "001": 1,
    "000": 0
}

pasos = 20

historial = automata_1D(estado_inicial, pasos, reglas)
imprimir(historial)
