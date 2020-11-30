var app = new Vue({
   el: "#app",
   data: {
      lista: []
   },
   methods: {
      genera: function () {
         // faccio 10 richieste di 10 email
         for (let i = 0; i < 10; i++) {
            axios.get("https://flynn.boolean.careers/exercises/api/random/mail")
            .then(risposta => {
               let email = risposta.data.response;

               // pusha solo se non è già contenuta l'email
               if (!this.lista.includes(email)) {
                  return this.lista.push(email);
               }
            });
         }
      }
   }
})
