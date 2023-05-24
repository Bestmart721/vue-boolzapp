const { createApp } = Vue;

createApp({

  data() {

    return {

        active: 0,
        newMessage: '',
        search: '',
        contacts: [
          {
              name: 'Michele',
              avatar: './img/avatar_1.png',
              visible: true,
              messages: [
                  {
                      date: '10/01/2020 15:30:55',
                      message: 'Hai portato a spasso il cane?',
                      status: 'sent'
                  },
                  {
                      date: '10/01/2020 15:50:00',
                      message: 'Ricordati di stendere i panni',
                      status: 'sent'
                  },
                  {
                      date: '10/01/2020 16:15:22',
                      message: 'Tutto fatto!',
                      status: 'received'
                  }
              ],
          },
          {
              name: 'Fabio',
              avatar: './img/avatar_2.png',
              visible: true,
              messages: [
                  {
                      date: '20/03/2020 16:30:00',
                      message: 'Ciao come stai?',
                      status: 'sent'
                  },
                  {
                      date: '20/03/2020 16:30:55',
                      message: 'Bene grazie! Stasera ci vediamo?',
                      status: 'received'
                  },
                  {
                      date: '20/03/2020 16:35:00',
                      message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                      status: 'sent'
                  }
              ],
          },
          {
              name: 'Samuele',
              avatar: './img/avatar_3.png',
              visible: true,
              messages: [
                  {
                      date: '28/03/2020 10:10:40',
                      message: 'La Marianna va in campagna',
                      status: 'received'
                  },
                  {
                      date: '28/03/2020 10:20:10',
                      message: 'Sicuro di non aver sbagliato chat?',
                      status: 'sent'
                  },
                  {
                      date: '28/03/2020 16:15:22',
                      message: 'Ah scusa!',
                      status: 'received'
                  }
              ],
          },
          {
              name: 'Alessandro B.',
              avatar: './img/avatar_4.png',
              visible: true,
              messages: [
                  {
                      date: '10/01/2020 15:30:55',
                      message: 'Lo sai che ha aperto una nuova pizzeria?',
                      status: 'sent'
                  },
                  {
                      date: '10/01/2020 15:50:00',
                      message: 'Si, ma preferirei andare al cinema',
                      status: 'received'
                  }
              ],
          },
          {
              name: 'Alessandro L.',
              avatar: './img/avatar_5.png',
              visible: true,
              messages: [
                  {
                      date: '10/01/2020 15:30:55',
                      message: 'Ricordati di chiamare la nonna',
                      status: 'sent'
                  },
                  {
                      date: '10/01/2020 15:50:00',
                      message: 'Va bene, stasera la sento',
                      status: 'received'
                  }
              ],
          },
          {
              name: 'Claudia',
              avatar: './img/avatar_5.png',
              visible: true,
              messages: [
                  {
                      date: '10/01/2020 15:30:55',
                      message: 'Ciao Claudia, hai novità?',
                      status: 'sent'
                  },
                  {
                      date: '10/01/2020 15:50:00',
                      message: 'Non ancora',
                      status: 'received'
                  },
                  {
                      date: '10/01/2020 15:51:00',
                      message: 'Nessuna nuova, buona nuova',
                      status: 'sent'
                  }
              ],
          },
          {
              name: 'Federico',
              avatar: './img/avatar_7.png',
              visible: true,
              messages: [
                  {
                      date: '10/01/2020 15:30:55',
                      message: 'Fai gli auguri a Martina che è il suo compleanno!',
                      status: 'sent'
                  },
                  {
                      date: '10/01/2020 15:50:00',
                      message: 'Grazie per avermelo ricordato, le scrivo subito!',
                      status: 'received'
                  }
              ],
          },
          {
              name: 'Davide',
              avatar: './img/avatar_8.png',
              visible: true,
              messages: [
                  {
                      date: '10/01/2020 15:30:55',
                      message: 'Ciao, andiamo a mangiare la pizza stasera?',
                      status: 'received'
                  },
                  {
                      date: '10/01/2020 15:50:00',
                      message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
                      status: 'sent'
                  },
                  {
                      date: '10/01/2020 15:51:00',
                      message: 'OK!!',
                      status: 'received'
                  }
              ],
          },
          
      ],
      user: {
        name: 'Daniele',
        avatar: './img/user_avatar.png',
      }
    }

  },

  methods: {

    // Mostra l'ultimo messaggio della chat
    lastMessage(idx) {
        
        if (this.contacts[idx].messages.length > 0 ) {
            return this.contacts[idx].messages.slice(-1)[0].message;
        } else {
            return 'nessun messaggio';
        }
    },

    // Mostra l'orario dell'ultimo accesso del contatto

    lastMessageHours(idx) {
    
    if(this.contacts[idx].messages.length > 0) {

      const date =  this.contacts[idx].messages.slice(-1)[0].date;

      const dateSplit = date.split(" ");

      const hourSplit = dateSplit[1].split(":");

      return hourSplit[0] + ":" + hourSplit[1];

    }
      
    },

    // Mostra l'orario di tutti i messaggi nelle chat

    MessageHours(active, idx) {

        const date =  this.contacts[active].messages[idx].date;
  
        const dateSplit = date.split(" ");
  
        const hourSplit = dateSplit[1].split(":");
  
        return hourSplit[0] + ":" + hourSplit[1];
        
      },

    // Permette di cambiare la chat visualizzata al click

    activechat(idx) {
        this.active = idx;
    },

    // Permetti all'utente di inviare messaggi

    addMessage() {

        // Formattazzione data invio messaggio

        const date = new Date();
        let day = addZero(date.getDate())
        let month = addZero(date.getMonth()+1);
        let year = addZero(date.getFullYear());
        let h = addZero(date.getHours());
        let m = addZero(date.getMinutes());
        let s = addZero(date.getSeconds());

        data = day + "/"+ month + "/"+ year+ " " + h +":"+ m + ":" + s;

        // Aggiunta messaggio inviato nell'array dei messaggi

        this.contacts[this.active].messages.push({
            date: data,
            message: this.newMessage,
            status: 'sent'
        })
        this.newMessage = '';
        console.log(this.contacts[this.active].messages);

        // Aggiunta messaggio ricevuto nell'array dei messaggi

        setTimeout(() => {
            this.contacts[this.active].messages.push({
                date: data,
                message: 'Ok',
                status: 'received'
            })
        }, 1000);
       
    },

    // Permetti all'utente di cercare tra i contatti

    filteredUsers() {
        
        const find = (this.search).toUpperCase();
       
        
        for (let i = 0; i < this.contacts.length; i++) {
            const name = (this.contacts[i].name).toUpperCase();
            if(!name.includes(find)) {
                this.contacts[i].visible = false;
            } else {
                this.contacts[i].visible = true;
            }

        }
        
    },

    // Permetti all'utente di eliminare i messaggi inviati

    deleteMessage(idx) {
        console.log(this.contacts[this.active].messages[idx]);

        if(this.contacts[this.active].messages[idx].status === 'sent') {

            return this.contacts[this.active].messages.splice(idx, 1);

        }
        
    }, 

    // Mosta l'orario di ultimo accesso del contatto

    lastAcces(idx) {

    
        if(this.contacts[idx].messages.length > 0) {
    
            const date =  this.contacts[idx].messages.slice(-1)[0].date;
      
            const dateSplit = date.split(" ");
            
      
            const hourSplit = dateSplit[1].split(":");
      
            return 'Ultimo accesso alle: ' + hourSplit[0] + ":" + hourSplit[1];
      
          }
      }
    
  }
  
}).mount("#app")

// Aggiunge uno zero al valore di giorno/mese/anno ora/minuto dei messaggi inviati (es. 5/3/2023 1:2 => 05/03/2023 01:02) 

function addZero(i) {
    if (i < 10) {i = "0" + i}
    return i;
  }
  