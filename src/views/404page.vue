<template>
  <div class="error">
    <h1>404!</h1>
    <p>Page Not Found!</p>
    <span>:(</span>
  </div>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
.error {
  width: 700px;
  height: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 1rem auto;
  background: $white;
  text-align: center;
  span{
    margin-top: 1rem;
    font-size: 2rem;
  }
}
</style>
