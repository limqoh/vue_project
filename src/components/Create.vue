<template>
    <div>
        <input v-model="title" placeholder="title"/>
        <input v-model="content" placeholder="content"/>
        <button @click="add">추가</button>
    </div>
</template>

<script>
import data from '@/data/data'

export default {
    name: 'Create',
    data () {
        return {
            data: data,
            title: '',
            content: ''
        }
    },
    methods: {
        add () {
            this.data.push({
                title: this.title,
                content: this.content
            })
        }
    }
}
</script>

<style>

</style>
