class Nodo{
    constructor(valor){
        this.valor = valor;
        this.derecha = null;
        this.izquierda = null;
    }
}

class Arbol {
    constructor(){
        this.ruta = null;
    }

    // Método para verificar si el árbol está vacío
    isEmpty(){
        return this.ruta === null;
    };

    // Método para agregar un valor al árbol
    add(valor){
        if(this.isEmpty()){
            this.ruta = new Nodo(valor);
            return;
        }

        let aux = this.ruta;

        while(aux){
            if(valor < aux.valor){
                if(aux.izquierda){
                    aux = aux.izquierda;
                }else{
                    aux.izquierda = new Nodo(valor);
                    return;
                }
            }else{
                if(aux.derecha){
                    aux = aux.derecha;
                }else{
                    aux.derecha = new Nodo(valor);
                    return;
                }
            }
        }
    }

    // Método para buscar un nodo por valor
    buscar(valor){
        let aux = this.ruta;

        while(aux){
            if(valor < aux.valor){
                aux = aux.izquierda;
            }else if(valor > aux.valor){
                aux = aux.derecha;
            }else{
                return aux;  // Nodo encontrado
            }
        }

        return null;  // Nodo no encontrado
    }

    // Método para eliminar un nodo con el valor dado
    eliminar(valor){
        this.ruta = this._eliminarNodo(this.ruta, valor);
    }

    // Método privado recursivo para eliminar un nodo
    _eliminarNodo(nodo, valor){
        if (nodo === null) return nodo;

        // Si el valor es menor que el valor del nodo actual, buscamos en el subárbol izquierdo
        if (valor < nodo.valor) {
            nodo.izquierda = this._eliminarNodo(nodo.izquierda, valor);
        }
        // Si el valor es mayor que el valor del nodo actual, buscamos en el subárbol derecho
        else if (valor > nodo.valor) {
            nodo.derecha = this._eliminarNodo(nodo.derecha, valor);
        }
        // Si encontramos el nodo a eliminar
        else {
            // Caso 1: El nodo no tiene hijos (es una hoja)
            if (nodo.izquierda === null && nodo.derecha === null) {
                return null;
            }
            // Caso 2: El nodo tiene un solo hijo
            if (nodo.izquierda === null) {
                return nodo.derecha;
            } else if (nodo.derecha === null) {
                return nodo.izquierda;
            }

            // Caso 3: El nodo tiene dos hijos
            // Encontramos el nodo más pequeño en el subárbol derecho (sucesor)
            let sucesor = this._minNodo(nodo.derecha);

            // Reemplazamos el valor del nodo con el valor del sucesor
            nodo.valor = sucesor.valor;

            // Eliminamos el sucesor en el subárbol derecho
            nodo.derecha = this._eliminarNodo(nodo.derecha, sucesor.valor);
        }

        return nodo;
    }

    // Método privado para encontrar el nodo más pequeño en el subárbol derecho
    _minNodo(nodo){
        while (nodo.izquierda !== null) {
            nodo = nodo.izquierda;
        }
        return nodo;
    }
}
const arbol = new Arbol();
arbol.add(10);
arbol.add(5);
arbol.add(15);
arbol.add(3);
arbol.add(7);
arbol.add(13);
arbol.add(17);


