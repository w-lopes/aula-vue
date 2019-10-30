<template>
  <div>
    <pre>{{ output }}</pre>
  </div>
</template>

<script>

export default {
  name: "Output",
  props: {
    output: String
  }
};

</script>

<style scoped>
pre {
  text-align: left;
  width: 50%;
  margin-left: 25%;
}
</style>