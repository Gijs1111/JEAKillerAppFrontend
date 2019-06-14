<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
  <v-app id="inspire">
    <v-navigation-drawer
      v-model="drawer"
      fixed
      app>
      <v-list dense>
        <v-list-tile>
          <v-list-tile-action>
            <v-icon>person</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>
              <router-link :to="{name: 'Clients'}">Clients</router-link>
            </v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
      <v-list dense>
        <v-list-tile>
          <v-list-tile-action>
            <v-icon>person</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>
              <router-link :to="{name: 'Appointment'}">Appointments</router-link>
            </v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
      <v-list dense>
        <v-list-tile>
          <v-list-tile-action>
            <v-icon>person</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>
              <router-link :to="{name: 'Familydoctors'}">Family doctors</router-link>
            </v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar color="indigo" dark fixed app>
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title>Doctorsofffice</v-toolbar-title>
    </v-toolbar>
    <v-content>
      <v-container fluid fill-height>
        <v-layout>
         <router-view></router-view>
        </v-layout>
      </v-container>
    </v-content>
    <v-footer color="indigo" app>
      <span class="white--text">&copy; 2019</span>
    </v-footer>
  </v-app>
</template>

<script>
  export default {
    data: () => ({
      drawer: true
    }),
    props: {
      source: String
    }
  }
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
