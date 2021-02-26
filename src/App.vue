<template>
    <div id="app">
      <Create></Create>
      <Read></Read>
      <Update></Update>
      <Delete></Delete>
    </div>
</template>

<script>
import Create from './components/Create'
import Read from './components/Read'
import Update from './components/Update'
import Delete from './components/Delete'

export default {
    components: {
      'Create': Create,
      'Read': Read,
      'Update': Update,
      'Delete': Delete
    }
}
</script>

<style>

</style>
