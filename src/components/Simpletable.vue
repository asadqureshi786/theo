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


