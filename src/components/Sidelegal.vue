<template>
    <div class="news_feed">
        <div class="hd pb-3">
            <p class="heading f22  fw5">{{ playerHeading }}</p>
        </div>

        <ul class="list">
            <li v-for="item in Legalupdates" :key="item.id">
                <div class="item">
                    <img :src="`${$baseURL}theo/public/uploads/images/${item.image}`" class="img-fluid">
                    <div class="content p-1 px-3">
                        <p class="name fw5 primaryCol">{{ item.title }}</p>
                        <p class="location f12 mb-1">{{ item.description.length >= 120 ? item.description.slice(0,120) + '...' : item.description }}</p>
                        <p class="date silverCol f13">{{ item.created_at_human }}</p>
                    </div>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
import newsfeed from "@/assets/images/newsfeed.jpg";
export default {
    name: 'Newsfeed',
    props: {
        playerHeading: String,
        Legalupdates: Array
    },
    data() {
        return {

        }
    }
}
</script>