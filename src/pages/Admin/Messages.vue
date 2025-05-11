<template>
    <div class="messages_page">
        <div class="users_side">
            <div class="hd formText f20 fw6">Messages</div>
            <Userslist/>
        </div>
        <div class="chat_side">
            <Chatbox/>
        </div>
    </div>
</template>

<script>
import Userslist from '@/components/Userslist.vue'
import Chatbox from '@/components/Chatbox.vue'
    export default{
        name : 'Messages',
        components : {
            Userslist,
            Chatbox,
        }
    }
</script>