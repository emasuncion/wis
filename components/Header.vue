<template>
  <div id="wis-header-container">
    <v-app-bar
      id="wis-header-app-bar"
      dense
      dark
    >
      <v-toolbar-title id="wis-header-logo">
        WIS
      </v-toolbar-title>
      <v-spacer />

      <v-menu
        left
        bottom
      >
        <template #activator="{on, attrs}">
          <v-btn
            id="wis-header-account"
            icon
            v-bind="attrs"
            v-on="on"
          >
            <v-icon>
              mdi-account
            </v-icon>
          </v-btn>
        </template>

        <v-list>
          <v-list-item
            v-for="option in accountOptions"
            :key="option.name"
            @click="() => {}"
          >
            <v-list-item-title>
              {{ option.name }}
            </v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  name: 'Header',
  data () {
    return {
      accountOptions: [
        { name: 'Account', url: '/' },
        { name: 'Settings', url: '/' },
        { name: 'Log out', url: '/' }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
  #wis-header {
    &-app-bar {
      background-color: $primary;
    }

    &-logo,
    &-account {
      margin: 0 5em;
    }
  }
</style>
