<template>
    <table>
        <tr>
            <td>제목</td>
            <td>내용</td>
        </tr>
        <tr :key="index" v-for="(value, index) in data">
            <td>{{value.title}}</td>
            <td>{{value.content}}</td>
        </tr>
    </table>
</template>

<script>
import data from '@/data/data'

export default {
    name: 'Read',
    data () {
        return {
            data: data
        }
    }
}
</script>

<style>

</style>
