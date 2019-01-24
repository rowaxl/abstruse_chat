<template>
  <div class="hello">
    <h2>{{ title }}</h2>
    <div>
      <ul>
        <li
          v-for="message in messages"
          v-bind:key=message.id>
          {{ message }}
        </li>
      </ul>
    </div>
    <div class="ui segment input_bar">
        <form class="ui form"
          @submit.prevent="addMessage">
            <div class="field">
                <input type="text" v-model="newMessage"/>
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
      messages: ['message1', 'message2'],
      newMessage: ''
    }
  },
  methods: {
    addMessage: function() {
      this.messages.push(this.newMessage);
      this.newMessage = '';
    }
  }
}
</script>

<style scoped>
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
  position: absolute;
  bottom: 5%;
  width: 80vw;
}
</style>
