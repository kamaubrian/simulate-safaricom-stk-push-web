<template>
  <v-app>
    <v-toolbar app class="secondary" dark>
      <v-toolbar-title class="headline text-uppercase">
        <span class="font-weight-light">Systems Security</span>
      </v-toolbar-title>

    </v-toolbar>

    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data () {
    return {
      //
    }
  }
}
</script>
