<template>
    <div class="comment_list">
        <div class="head">
            <p class="title">Comments</p>
            <div class="count">{{count}}</div>
        </div>
        <ul class="list">
            <li class="comment d-flex justify-content-between align-items-start" v-for="item in comments" :key="item.id">
                <div class="item">
                    <div class="info">
                        <img :src="user1" class="profile"/>
                        <div class="m_sec" >
                            <p class="name">{{ item.user.name }} <p class="time">{{ }}</p> </p>
                            <p class="msg">{{ item.comment }}</p>
                        </div>
                    </div>
                    
                </div>
                <div class="cursor-pointer trash-icon" type="" @click="deleteComment(item.id)" >
                    <svg
                    width="18"
                    height="18"
                    viewBox="0 0 23 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    >
                    <path
                        d="M19.75 5.48177C16.6975 5.17927 13.6267 5.02344 10.565 5.02344C8.75 5.02344 6.935 5.1151 5.12 5.29844L3.25 5.48177"
                        fill="#8F0301"
                    />
                    <path
                        d="M19.75 5.48177C16.6975 5.17927 13.6267 5.02344 10.565 5.02344C8.75 5.02344 6.935 5.1151 5.12 5.29844L3.25 5.48177"
                        stroke="#8F0301"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    />
                    <path
                        d="M8.29166 4.55551L8.49332 3.35467C8.63999 2.48384 8.74999 1.83301 10.2992 1.83301H12.7008C14.25 1.83301 14.3692 2.52051 14.5067 3.36384L14.7083 4.55551"
                        stroke="#8F0301"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    />
                    <path
                        d="M17.7792 8.37793L17.1833 17.6088C17.0825 19.0479 17 20.1663 14.4425 20.1663H8.55749C5.99999 20.1663 5.91749 19.0479 5.81666 17.6088L5.22083 8.37793"
                        stroke="#8F0301"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    />
                    <path
                        d="M9.96918 15.125H13.0217"
                        stroke="#8F0301"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    />
                    <path
                        d="M9.20834 11.458H13.7917"
                        stroke="#8F0301"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    />
                    </svg>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
import user1 from '@/assets/images/users/user1.png'

// Toast
import { useToast } from "vue-toastification";
const toast = useToast();

// Spinner
import Spinner from "@/components/Spinner.vue";

// import Axios
import axios from "axios";

    export default {
        name: 'Commentlist',
        props: {
            comments: Array,
            count: String,
            id : String,
        },
        data() {
            return {
                user1: user1,
                token : localStorage.getItem("token"),
                
            }
        },
        methods : {
            async deleteComment(commentID){
                try {
                    const response = await axios.delete(this.$baseURL+`theo/api/agent/posts/${this.id}/comment/${commentID}`,{
                          headers: {
                            Authorization: `Bearer ${this.token}`,
                        },
                    })
                    if(response.status == 200){
                        toast.error("Comment deleted successfully!")
                    }
                } catch (error) {
                    toast.error(error.response.data.message)
                    
                }
            }
        }
  
    } 
</script>