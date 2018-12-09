<template>
  <div class="home">
    <div class="container">
        <Grid class="grid-cmp" @editName="editName" @remove="remove" :data="gridData" :columns="gridColumns" />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Grid from '@/components/Grid.vue'
import dataServices from '@/services/dataService.js'

export default {
  name: 'home',
   data() {
      return {
        gridData:null,
        gridColumns: ['type', 'topic_name', 'doc_num'],        
      }
  },
  created(){
    dataServices.getData()
    .then(res => {
      this.gridData = res
      
    })
  },
  methods:{
    remove(entryId){
      dataServices.remove(entryId)
        .then( data => this.gridData = data)
      
    },
    editName(data) {
      dataServices.update(data)
        .then(data => this.gridData = data)
    }
  },
  components: {
    Grid
  }
}
</script>

<style lang="scss" scoped>
   
</style>

