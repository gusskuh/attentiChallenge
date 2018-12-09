<template>
<div class="wrapper">
    <form id="search">
        Search <input name="query" v-model="searchQuery" style="overflow-x:auto;" 
        placeholder="Search topic name">
    </form>
    <!-- <button>Export All</button> -->
    <hr>
    <div id="grid-template" >
        <div class="table-header-wrapper"  >
        <table class="table-header">
            <thead>
             <th>
                Type 
            </th>
            <th >
                Topic Name 
            </th>
            <th>
                Positive 
            </th>
             <th>
                Actions
            </th>
            </thead>
        </table>
        </div>
        <div class="table-body-wrapper">
        <table class="table-body">
            <tbody>
            <tr v-for="(entry, idx) in data" :key=idx>
                <td v-for="(key,idx) in columns" :key=idx> {{entry[key]}}</td>
                <td class="action-icons">
                    <img src="@/assets/icons/zip.png" alt="" @click="custom(entry.type, 'zip', entry._id)">
                    <img src="@/assets/icons/edit.png" alt="" @click="custom(entry.type, 'edit', entry._id)">
                    <img src="@/assets/icons/tag.png" alt="" @click="custom(entry.type, 'tag', entry._id)">
                    <img src="@/assets/icons/del.png" alt=""  @click="custom(entry.type, 'del', entry._id)">
                </td>
            </tr>
            <td v-if="isEditMode">
                <form @submit.prevent="editEntry">
                    <input type="text" placeholder="Edit topic name" v-model="nameToEdit">
                    <button tpye="submit">Save!</button>
                </form>
            </td>
            </tbody>
        </table>
        </div>
    </div>
</div>
</template>

<script>
export default {
  name: "grid",
  props: {
    data: Array,
    columns: Array
  },
  data() {
    return {
      searchQuery: "",
      isEditMode: false,
      nameToEdit:'',
      clickedEntry: '',
    };
  },
  methods: {
    
     custom(type, str, entryId){
          if(type === '1' && str === 'zip') alert('heyyy!!')
          if(type === '3' && str === 'del') this.$emit('remove', entryId)
          if(type === '2' && str === 'edit') {
              this.clickedEntry = entryId
              this.isEditMode = !this.isEditMode;
          } 
      },
      editEntry(){
          this.$emit('editName', {entryId: this.clickedEntry, val: this.nameToEdit})
            this.isEditMode = false
            this.nameToEdit = ''
      }
  },
  created() {
    
  }
};
</script>

<style lang="scss" scoped>
.action-icons{
    img{
        width: 20px;
        height: 20px;
        margin:0 5px 0 5px;
        cursor: pointer;
    }
}

table {
  border-spacing: 0;
  width: 100%;

}

th {
  background-color: #008f68;
  color: rgba(255,255,255,0.66);
  cursor: pointer;
  user-select: none;
}

td {
  border-bottom: 1px #008f68 solid;
}

th, td {
  min-width: 150px;
  padding: 10px 20px;
}

</style>

