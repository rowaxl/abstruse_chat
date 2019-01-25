<template>
  <div class="hello">
    <h2 class="app_title">{{ title }}</h2>
    <div class="message_container">
      <ul>
        <li class="message_text"
          v-for="message in messages"
          v-bind:key=message.id>
          {{ message.user }}: {{ message.text }}
        </li>
      </ul>
    </div>
    <div class="ui segment inverted input_bar">
        <form class="ui inverted form"
          @submit.prevent="addMessage">
            <div class="field inverted">
                <input id="input_text" type="text" v-model="text"/>
            </div>
        </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    title: String
  },
  data: function() {
    return {
      messages: [],
      text: '',
      user: 'user01'
    }
  },
  methods: {
    addMessage: function() {
      // eslint-disable-next-line
      console.log(this);
      this.messages.push({
        user: this.user,
        text: this.text
      });
      this.text= '';
    }
  }
}
</script>

<style scoped>
.app_title {
  color: #3fa;
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.input_bar {
  bottom: 5%;
  width: 80vw;
  margin: auto;
}
.message_container {
  margin: auto;
  width: 80vw;
  height: 75vh;
  overflow-y: scroll;
}
#input_text {
  background: rgba(0,0,0,0.85);
  color: #FFF;
}
.message_text {
  color: #3fa;
  font-size: 1.2em;
  text-align: left;
}
</style>
