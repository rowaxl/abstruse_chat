<template>
    <div id="chat-container" class="ui container">
        <div class="input_bar">
            <input id="message_input" type="text" />
            <button id="button_send">SEND</button>
        </div>
        <ul class="message-list">
            <li class="message" v-for="message in messages" v-bind:key="message.id">
                {{ message.user }} : {{ message.text }}
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'Chat',
    data() {
        return {
            messages: [
                { id: 1, text: 'Hello there', user: 'user1' },
                { id: 2, text: 'Is anybody there?', user: 'user1' },
                { id: 3, text: 'Helloooooo', user: 'user2' },
            ],
        };
    },
};
</script>


<style>
.input_bar {
    display: inline-block;
    width: 60vw;
    height: 10vh;
}
</style>
