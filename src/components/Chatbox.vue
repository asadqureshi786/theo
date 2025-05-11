<template>
    <div class="chat_box">
        <div class="header">
            <div class="info">
                <div class="p_img active">
                    <img :src="profileImg" alt="">
                </div>
                <div>
                    <p class="name">Eion Morgan</p>
                    <p class="last_seen">Last seend 45 min ago</p>
                </div>
            </div>
        </div>

        <ul class="msg_list">
            <li v-for="(msg, index) in messages" :key="index"
                :class="[msg.type === 'receiver' ? 'recieved_msg' : 'sender_msg', 'messages']">
                <div v-if="msg.type === 'receiver'" class="profile_img">
                    <img :src="msg.profile" alt="">
                </div>

                <div>
                    <ul class="list">
                        <li v-for="(m, idx) in msg.msg" :key="idx">
                            <p class="msg">{{ m }}</p>
                        </li>
                    </ul>
                    <div class="msg_time">{{ msg.time }}</div>
                </div>

                <div v-if="msg.type === 'sender'" class="profile_img">
                    <img :src="msg.profile" alt="">
                </div>
            </li>
        </ul>

    </div>
</template>

<script>
import user1 from "@/assets/images/chatUser4.png"

export default {

    name: 'Chatbox',
    data() {
        return {
            profileImg: user1,
            messages: [
                {
                    type: 'receiver',
                    profile: user1,
                    msg: ['Hey! How are you doing today?'],
                    time: 'Friday 2:00pm'
                },
                {
                    type: 'sender',
                    profile: user1,
                    msg: ['Hey! I’m good, just working on a new project.'],
                    time: 'Friday 2:02pm'
                },
                {
                    type: 'receiver',
                    profile: user1,
                    msg: ['Oh nice! What’s the project about?'],
                    time: 'Friday 2:05pm'
                },
                {
                    type: 'sender',
                    profile: user1,
                    msg: ['It’s a new chat UI for our app.', 'Trying to make it more interactive.'],
                    time: 'Friday 2:07pm'
                },
                {
                    type: 'receiver',
                    profile: user1,
                    msg: ['Sounds interesting! Need any help?'],
                    time: 'Friday 2:10pm'
                },
                {
                    type: 'sender',
                    profile: user1,
                    msg: ['Thanks! I’ll let you know if I get stuck. 😊'],
                    time: 'Friday 2:12pm'
                },
                {
                    type: 'receiver',
                    profile: user1,
                    msg: ['Cool! What tools or frameworks are you using for this UI?'],
                    time: 'Friday 2:14pm'
                },
                {
                    type: 'sender',
                    profile: user1,
                    msg: ['Mostly Vue 3 with some custom CSS.', 'Also trying out Tailwind for styling.'],
                    time: 'Friday 2:15pm'
                },
                {
                    type: 'receiver',
                    profile: user1,
                    msg: ['Tailwind is awesome!', 'You’ll be able to move fast with it.'],
                    time: 'Friday 2:17pm'
                },
                {
                    type: 'sender',
                    profile: user1,
                    msg: ['Yeah exactly. Also thinking of adding transitions for message animations.'],
                    time: 'Friday 2:18pm'
                },
                {
                    type: 'receiver',
                    profile: user1,
                    msg: ['That’ll make it feel smooth and modern.', 'Let me know if you need help with transitions.'],
                    time: 'Friday 2:20pm'
                },
                {
                    type: 'sender',
                    profile: user1,
                    msg: ['For sure!', 'Do you have any reference or examples I can look at?'],
                    time: 'Friday 2:21pm'
                },
                {
                    type: 'receiver',
                    profile: user1,
                    msg: ['Yep, I’ll send over a GitHub repo I used in my last project.'],
                    time: 'Friday 2:22pm'
                },
                {
                    type: 'sender',
                    profile: user1,
                    msg: ['Awesome, thanks a lot! That would really help.'],
                    time: 'Friday 2:23pm'
                },
                {
                    type: 'receiver',
                    profile: user1,
                    msg: ['No problem! Glad to help.'],
                    time: 'Friday 2:24pm'
                }
            ]

        }
    }
}

</script>