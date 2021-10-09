const appJukebox = {
    data(){
        return{
            persons: [],
            form: {
                name: '',
                surname: '',
                email: '',
                telephone: '',
                cpf: '',
                cpnj: ''
            },
            legalPerson: false,
        };
    },
    methods:{
        addPerson(form){
            form.id = Date.now()
            this.persons.push(form)
        }
    }
}

Vue.createApp(appJukebox).mount("#appJukebox")