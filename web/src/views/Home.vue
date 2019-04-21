<template>
  <div class="home">
    <ul>
      <li v-for="(message,index) in messages" :key="index">
        <b>{{message.user}}:</b>
        <span>{{message.text}} </span>
      </li>
    </ul>
    <form @submit.prevent="send">
      <input type="text" v-model="text">
      <button v-if="user"> > </button>
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
  components: {
  }
}
</script>
