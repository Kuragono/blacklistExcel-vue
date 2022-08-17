<template lang="">
  <div>
    <activate-button @activate-button="$emit('activate-button', $event)"></activate-button>
    <get-Data></get-Data>
  </div>
</template>

<script>
export default {
  data() {
    return {
      
    }
  }
}
</script>

<style lang="">
</style>