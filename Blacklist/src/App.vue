<template lang="">
  <div>
    <activate-button @activate-button="$emit('activate-button', $event)"></activate-button>
    <br>
    <get-data @get-data="$emit('get-data', $event)"></get-data>
    <br>
    <img src="/logo_copy.png" alt="definemedia logo" id="definelogo">
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