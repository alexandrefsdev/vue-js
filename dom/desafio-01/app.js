new Vue({
    el: '#desafio',
    data: {
        nome: 'Alexandre Silveira',
        idade: 33,
        imagem: 'https://media-exp1.licdn.com/dms/image/C561BAQGzHl-rT6v8Fw/company-background_10000/0/1552689912932?e=2159024400&v=beta&t=RTmM6cnXUajGAH_EG8EvOowCV_przDPsGjn4OZtB14k'
    },
    methods: {
        idadeVezes3() {
            return this.idade * 3
        },
        numeroRandomico : function () {
            return Math.random()
        }
    }
})