  <template>
    <RouterView></RouterView>
  </template>

  <script>
  import { useAuthStore } from "./store/auth.js"

  export default {
    name: "App",
  }
  </script>
