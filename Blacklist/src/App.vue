<template lang="">
  <div>
    <activate-button @activate-button="$emit('activate-button', $event)" v-model:keywordlist="keywordlist"></activate-button>
    <br>
    <get-data v-model:keywordlist="keywordlist"></get-data>
    <br>
    <img src="/logo_copy.png" alt="definemedia logo" id="definelogo">
  </div>
</template>

<script>
export default {
  data() {
    return {
      keywordlist: [],
    }
  }
}
</script>