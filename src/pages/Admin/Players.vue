<template>
    <div class="page_header">
        <h4>All Players</h4>
        <div class="searchBox">
            <input type="text" class="form-control" >
            <InputText type="text" v-model="value" />

        </div>
        <button class="btn btn-primary">
            <i class="pi pi-users" ></i>
            Add Players</button>
    </div>
</template>

<script>
    export default {
        name : 'Players',
        datat(){
            return(
                {
                    // value: '',s
                }
            )
        }
    }
</script>