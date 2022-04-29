const app = new Vue({

    el: '#app',

    data: {
        listaEmail: '',

    },


    methods: {

    },


    mounted() {

        const self = this;

        axios
            .get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then(response => {

                console.log(self);
                console.log(response);

                self.listaEmail = response.data.response





            })

    }



})