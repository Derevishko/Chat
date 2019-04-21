<template>
  <div class="about">
    <button @click="isLogin = !isLogin">Change</button>
    <form @submit.prevent="send">
      <h1>{{message}}</h1>
      <input type="text" v-model='login'>
      <input type="password" v-model='password'>
      <button>
        {{message}}  
      </button>      
    </form>
  </div>
</template>


<script>
export default {
  data() {
    return {
      login:'',
      password:'',
      isLogin: false,
    }
  },
  computed: {
    message() {
      return this.isLogin ? 'Login' : 'Reg';
    },
    actions() {
      return this.isLogin ? 'log' : 'reg';
    }
  },
  methods: {
    async send() {
      let result = await this.$store.dispatch(this.actions, {login: this.login, password: this.password});
      if ( result.status === 200 ) {
        this.$store.commit('user', result.data);
        localStorage.user = result.data;
        this.$router.push({name: 'chat'});
      }
    }
  }
}
</script>
