<template>
    <div class="plans" id="plans">
        <div class="container" data-aos="fade-right" data-aos-duration="1000" >
            <h6 class="headings">
                 {{ $t('s2_m_hd') }}
            </h6>
            <p class="text">{{ $t('s2_text1') }}</p>
            <p class="text"> {{ $t('s2_text2') }}</p>

            <div class="mt-3">
                <p class="text">{{ $t('s2_text3') }}</p>
                <p class="text"> {{ $t('s2_text4') }}</p>
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