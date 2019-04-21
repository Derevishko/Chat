<template>
  <div class="chat">
    <ul>
      <li v-for="(message,index) in messages" :key="index">
        <b>{{message.user}}:</b>
        <span>{{message.text}} </span>
      </li>
    </ul>
    <form @submit.prevent="send" class="message">
      <textarea type="text" :placeholder="'Введите сообщение....'" @keyup.shift.enter="send" v-model="text"></textarea>
    </form>
  </div>
</template>

<script>
export default {
  name: 'home',
  data() {
    return {
      messages:[],
      text: '',
      ws: {}
    }
  },
  created() {
    this.$store.commit('user', localStorage.user);
    this.wsConnect();
  },
  computed: {
    user() {
      return this.$store.getters.user;
    },
    messageForSend() {
      return JSON.stringify({
        user_id: this.user,
        text: this.text
      })
    }
  },
  methods: {
    send() {
      this.text = this.text.trim();
      if(!this.text) return null;
      if ( this.user ) {
        this.ws.send(this.messageForSend)
        this.text = '';
      } else {
        alert('Need Authorization.')
        this.$router.push({name: 'log-reg'})
      }
    },
    wsConnect() {
      this.ws = new WebSocket("ws://localhost:3000");
      this.ws.onmessage = ({data}) => {
        this.messages.push(JSON.parse(data))
      }
    }
  },
}
</script>
