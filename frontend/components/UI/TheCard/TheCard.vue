<template>
  <div
    class="card"
    :style="{maxWidth: width}"
  >
      <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    width: {
      type: String,
      default: '600px'
    }
  }
}
</script>

<style>
.card {
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  margin-top: 40px;
  box-shadow: 0 2px 20px #d4cae2;
  padding: 32px;
}
</style>