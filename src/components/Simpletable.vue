<template>
    <div class="simple_table" >
        <table class="table">
            <thead>
                <tr>
                    <th v-for="(header, index) in headers" :key="index">{{ header }}</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(row, rowIndex) in data" :key="rowIndex">
                    <td v-for="(value, colIndex) in row" :key="colIndex">{{ value }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
export default {
    name: 'Simpletable',
    props: {
        headers: {
            type: Array,
            required: true,
        },
        data: {
            type: Array,
            required: true,
        },
    },
}
</script>


<style lang="scss" >
@import '../assets/style/assets.scss';  

.simple_table{
    table{
        thead{
            th{
                background: #8F0301CC;
                color:#fff;
                font-weight: 500;
                font-size: 17.5px;
                padding-block: 15px;
            }
        }
        tbody{
            td{
                font-size: 14px;
                font-weight: 500;
                padding-block: 13px;
            }
        }
    }
}


</style>