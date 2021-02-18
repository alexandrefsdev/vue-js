new Vue({
    el: '#desafio',
    data: {
        valor: ''
    },
    methods: {
        exibirAlerta() {
            alert('Segundo Desafio!')
        },
        armazenaValor(event) {
            this.valor = event.target.value
        }
    }
})