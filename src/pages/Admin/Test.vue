<template>
    <Message v-if="msg" />
    <button @click="msg=!msg">Toggle</button>
</template>

<script>
import Message from "@/components/Message.vue"

export default {
  name: "Test",
  components : {
    Message,
  },
  data(){
    return{
        msg : false,
    }
  },
  methods : {
    toggle(){
        this.msg = !this.msg
    }
  }
}
</script>