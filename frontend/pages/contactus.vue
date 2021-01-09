<template>
  <div>
    <the-card>
      <div class="contact">
        <h1 class="title">W razie pytań prosimy o kontakt pod numerem telefonu:</h1>
        <p class="tel">888-821-432</p>
        <div class="image-box">
          <img
            class="image"
            src="@/assets/otter.png"
            alt="Wyderki"
          />
        </div>
      </div>
    </the-card>
    <the-card>
      <p>Siedziba:</p>
      <p>ul. Warszawska 1A</p>
      <p>00-000</p>
      <p>Warszawa</p>
    </the-card>
  </div>
</template>

<script>
import TheCard from '~/components/UI/TheCard/TheCard.vue'
export default {
  components: { TheCard },

}
</script>

<style lang="scss" scoped>
.contact {
  .title {
    font-size: 24px;
    text-align: center;
  }
  .tel {
    text-align: center;
    font-weight: bold;
    font-size: 24px;
    color: red;
  }
  .image-box {
    max-width: 256px;
    margin-left: auto;
    margin-right: auto;

  }
  .image {}
}
</style>