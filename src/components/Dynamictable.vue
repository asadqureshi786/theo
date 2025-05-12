<template>
    <div class="dynamic_table" >
        <table class="table">
             <thead>
                <tr>
                     <th v-for="(header, index) in t_head" :key="index">{{ header.label }}</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(body, index) in t_body" :key="index">
                    <td v-for="(data, index) in t_head" :class="{'fit-width' : data.key === 'checkbox' }" :key="index" v-html="body[data.key]" ></td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
export default {
    name : "Dynamictable",
    props : {
        t_head : Array,
        t_body : Array,
    }
}
</script>