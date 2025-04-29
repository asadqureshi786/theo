<template>
    <div class="plans" id="plans">
        <div class="container">
            <h6 class="headings">
                Plans Coming Soon
            </h6>
            <p class="text">We’re getting ready to launch flexible subscription</p>
            <p class="text"> plans designed specifically for football agents.</p>

            <div class="mt-3">
                <p class="text">From solo scouting to managing a full squad of elite</p>
                <p class="text"> talent — THEO has you covered.</p>
            </div>
            <button label="Show" @click="visible = true" class="btn d-none btn-simple mt-3">Get Notified</button>
            <div class="modal_box d-none">
                <Dialog v-model:visible="visible" modal header="We will send you email when plans go live" :style="{ width: '35rem' }"
                :breakpoints="{ '1199px': '75vw', '575px': '90vw' }">
                <div class="from-group">
                    <label for="">Email</label>
                    <input type="text" class="form-control" >
                </div>
                <div class="flex footer_md justify-end gap-2">
                    <Button type="button" label="Cancel" class="btn btn-white" severity="secondary" @click="visible = false">Cancel</Button>
                    <Button type="button" class="btn btn-simple" label="Save" @click="visible = false">Send</Button>
                </div>
            </Dialog>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Plans",
    data(){
            return(
                {
                    visible: false,
                }
            )
        }
}
</script>