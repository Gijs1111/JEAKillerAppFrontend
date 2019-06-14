<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
  <div class="hello">
    <v-btn :to="{name: 'Familydoctors'}" color="info">Family doctors</v-btn>
    <v-data-table
      v-model="selected"
      :headers="headers"
      :items="familyDoctors"
      :pagination.sync="pagination"
      select-all
      item-key="name"
      class="elevation-1"
    >
      <template v-slot:headers="props">
        <tr>
          <th>
            <v-checkbox
              :input-value="props.all"
              :indeterminate="props.indeterminate"
              primary
              hide-details
              @click.stop="toggleAll"
            ></v-checkbox>
          </th>
          <th
            v-for="header in props.headers"
            :key="header.text"
            :class="['column sortable', pagination.descending ? 'desc' : 'asc', header.value === pagination.sortBy ? 'active' : '']"
            @click="changeSort(header.value)"
          >
            <v-icon small>arrow_upward</v-icon>
            {{ header.text }}
          </th>
        </tr>
      </template>
      <template v-slot:items="props">
        <tr :active="props.selected" @click="props.selected = !props.selected">
          <td>
            <v-checkbox
              :input-value="props.selected"
              primary
              hide-details
            ></v-checkbox>
          </td>
          <td class="text-xs-right">{{ props.item.id }}</td>
          <td class="text-xs-right">{{ props.item.name }}</td>
          <td class="text-xs-right">{{ props.item.lastname }}</td>
        </tr>
      </template>
    </v-data-table>
  </div>
</template>

<script>
  import API from '@/lib/API';

  export default {
    data() {
      return {
        pagination: {
          sortBy: 'name'
        },
        selected: [],
        headers: [
          { text: 'ID #', value: 'id' },
          { text: 'Firstname', value: 'firstname' },
          { text: 'Lastname', value: 'lastname' }
        ],
        familyDoctors: []
      }
    },
    name: 'landing',
    mounted() {
      this.load();
    },
    methods: {
      load() {
        API.getFamilyDoctors().then(products => {
          this.familyDoctors = products
          console.log(this.familyDoctors)
        });
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1, h2 {
    font-weight: normal;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    display: inline-block;
    margin: 0 10px;
  }
  a {
    color: #42b983;
  }
</style>
