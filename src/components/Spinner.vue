<template>
   <!-- <div class="spinner-border" role="status"> </div> -->
    <ProgressSpinner style="width: 18px; height: 18px" strokeWidth="4" />

</template>

<script>
    export default {
        name: 'Spinner',
        data() {
            return {
                loading: false,
            }
        },
        methods: {
            showSpinner() {
                this.loading = true;
            },
            hideSpinner() {
                this.loading = false;
            }
        }
    }
</script>