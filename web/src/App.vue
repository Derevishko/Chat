<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Chat</router-link> |
      <router-link :to="{name:'log-reg'}">Log/Reg</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  font-size: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
button {
  font-size: 30px;
  background: none;
  border: none;
  padding: 10px;
  background-color: #aaa;
  border-radius: 10px;
  width: 250px;
  box-shadow: 3px 3px 5px;
  cursor: pointer;
  outline: none;
  /* max-width: 250px; */
}
button:hover {
  box-shadow: 1px 1px 2px;
} 
.log-reg {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.log-reg > label {
  width: 400px;
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
  margin-bottom: 20px;
} 
label > b {
  margin-right: 10px;
  font-size: 20px
}
input {
  border: none;
  border-bottom: 1px solid #aaa;
  font-size: 20px;
  outline: none;
  padding: 5px 0 0 0;
  width: 100%;
}

.chat {
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}
ul {
  width: 1000px;
  box-sizing: border-box;
  border: 1px solid #aaa;  
  height: 70vh;
  overflow: auto;
}
li {
  text-align: left;
  font-size: 20px;
}
li > b {
  margin-right: 10px;
}
form.message {
  display: flex;
  flex-direction: row;
  width: 1000px;
}
.message > textarea {
  min-width: 100%;
  padding: 10px 5px;
  outline: none;
  box-sizing: border-box;
}
</style>
