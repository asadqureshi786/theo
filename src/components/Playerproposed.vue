<template>
    <div class="player_proposed" >
        <div class="img">
          <img v-for="(smImg, index) in proposedImages" key="index" :src="smImg" :class="'img' + index" alt="">
        </div>
        <p class="text">{{allProposals?.length}} players Proposed </p>
      </div>
</template>

<script>
    export default {
        name  : 'Playerproposed',
        props : {
            proposedImages : Array,
            allProposals : Array,
        }
    }
</script>