<template>
    <div class="documents">

        <ul class="all_doc mt-3" >
            <li v-for="list in lists" :key="list.name" >
                <div class="doc">
                    <img :src="doc" alt="">
                    <div class="dt">
                        <p class="name">{{list.name}}</p>
                        <p class="size">{{list.size}}</p>
                    </div>
                </div>
                <div class="download">
                    <i class="pi pi-download"></i>
                </div>
            </li>
        </ul>

    </div>
</template>

<script>
import doc from "@/assets/images/doc.png"
    export default {
        name : "Documents",
        data(){
            return(
                {
                    doc : doc,
                    lists : [
                        {
                            name: 'User flow walkthrough.mov',
                            size: '25 MB'
                        },
                        {
                            name: 'Landing page design review.mp4',
                            size: '12 MB'
                        },
                        {
                            name: 'Mobile app demo recording.mp4',
                            size: '18 MB'
                        },
                    ]
                }
            )
        }
    }
</script>

<style lang="scss" >
@import '../assets/style/assets.scss';  
.all_doc{
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap:20px;
    li{
        border:1px solid $cardBorder;
        border-radius: 12px;
        padding:16px 24px;
        display: flex;
        align-items: center;
        gap:10px;
        justify-content: space-between;
        .doc{
            display: flex;
            align-items: center;
            gap:12px;
            img{
                width: 35px;
            }
            .dt{
                .name{
                    font-size: 13.5px;
                    font-weight: 500;
                }
                .size{
                    font-size: 13px;
                    font-weight: 400;
                    color:$gtext;
                }
            }
        }
        .download{
            i{
                color: $silverCol;
                font-size: 22px;
            }
        }
    }
}
</style>