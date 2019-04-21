<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <form @submit.prevent="send">
      <input type="text" v-model="text">
      <button> > </button>
    </form>
    <div>
      <p v-for="(message,index) in messages" :key="index">{{message}}</p>
    </div>


  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

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
    this.wsConnect();
  },
  computed: {
    messageForSend() {
      return JSON.stringify({
        user_id:'5cbc2eee2f55154174b5c5ad',
        text: this.text
      })
    }
  },
  methods: {
    send() {
      this.ws.send(this.messageForSend)
    },
    wsConnect() {
      this.ws = new WebSocket("ws://localhost:3000");
      this.ws.onmessage = ({data}) => {
        console.log(data);
        this.messages.push(JSON.parse(data))
      }
      // отправляем сообщение 
      // this.ws.onopen = () => this.ws.send( JSON.stringify({user_id:'5cbc2eee2f55154174b5c5ad', text: new Date().toISOString()}) );
      }
  },
  components: {
    HelloWorld
  }
}
</script>
