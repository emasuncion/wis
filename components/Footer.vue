<template>
  <v-footer
    id="wis-footer-container"
    absolute
    :padless="padless"
  >
    <v-card
      id="wis-footer-card"
      flat
      tile
      width="100%"
      class="text-center"
    >
      <v-card-text class="white--text">
        &copy; {{ currentYear }} - WIS
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
export default {
  name: 'Footer',

  data () {
    return {
      padless: true
    }
  },

  computed: {
    currentYear () {
      return new Date().getFullYear()
    }
  }
}
</script>

<style lang="scss" scoped>
  #wis-footer {
    &-card {
      background-color: $primary;
    }
  }
</style>
