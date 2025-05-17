<template>
    <div class="comment_list">
        <div class="head">
            <p class="title">Comments</p>
            <div class="count">{{comments.length}}</div>
        </div>
        <ul class="list">
            <li class="comment" v-for="comment in comments" :key="comment.id">
                <div class="item">
                    <div class="info">
                        <img :src="user1" class="profile"/>
                        <div class="m_sec" >
                            <p class="name">{{ comment.name }} <p class="time">{{ comment.time }}</p> </p>
                            <p class="msg">{{ comment.text }}</p>
                        </div>
                    </div>
                    
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
import user1 from '@/assets/images/users/user1.png'

    export default {
        name: 'Commentlist',
        props: {
            comments: {
                type: Array,
                required: true
            }
        },
        data() {
            return {
                user1: user1
            }
        }
    } 
</script>