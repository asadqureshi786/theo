<template>
    <div class="users_list">
        <div class="search_user">
            <div class="searchBox icon_box">
                <span class="icon">
                    <i class="pi pi-search"></i>
                </span>
                <InputText type="text" class="form-control" placeholder="Search" v-model="searchQuery" />
            </div>
        </div>

        <ul class="list">
            <li v-for="item in users" :key="item.name" >
                <div class="item" :class="{'active': item.active === true , 'online': item.online === true  }" >
                    <div class="info">
                        <div class="p_img">
                            <img :src="item.img" alt="">
                        </div>
                        <div>
                              <p class="name">{{item.name}}</p>
                             <p class="msg">{{item.msg}}</p>
                        </div>
                    </div>
                    <div class="time">{{item.time}}</div>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
import user1 from "@/assets/images/chatUser1.png"
import user2 from "@/assets/images/chatUser2.png"
import user3 from "@/assets/images/chatUser3.png"
import user4 from "@/assets/images/chatUser4.png"
import user5 from "@/assets/images/chatUser5.png"
export default {
    name: 'Userslist',
    data(){
        return{
            users : [
                { img : user1 , name : 'Eion Morgan' , msg : 'This player is really cool.', time : '5h' , active : true , online : true },
                { img : user2 , name : 'Ian Bell' , msg : 'This player is really cool.', time : '5h' , active : false , online : true },
                { img : user3 , name : 'Shane Watson' , msg : 'This player is really cool.', time : '5h' , active : false , online : false },
                { img : user4 , name : 'Ricky Ponting' , msg : 'This player is really cool.', time : '5h' , active : false , online : true },
                { img : user5 , name : 'Chris Gayle' , msg : 'This player is really cool.', time : '5h' , active : false , online : false },
            ]
        }
    }
}
</script>