<template>
  <header class="header header-wrapper header-background">
      <div class="header-top">
        <img
          class="header-top__image"
          src="@/assets/fox.png"
          alt="Logo strony"
        />
        <p class="header-top__text">Spa dla zwierzaków</p>
      </div>
      <nav class="header__nav">
        <ul class="header__list">
          <li class="header__item">
            <nuxt-link class="header__link" to="/">Strona główna</nuxt-link>
          </li>
          <li
             v-if="admin"
            class="header__item"
          >
            <nuxt-link class="header__link" to="/clients">Klienci</nuxt-link>
          </li>
          <li class="header__item">
            <nuxt-link class="header__link" to="/services">Usługi</nuxt-link>
          </li>
          <li
            v-if="admin"
            class="header__item">
            <nuxt-link class="header__link" to="/visits">Wizyty</nuxt-link>
          </li>
          <li class="header__item">
            <nuxt-link class="header__link" to="/signin">Zaloguj się</nuxt-link>
          </li>
          <li
            v-if="admin"
            class="header__item"
          >
            <nuxt-link class="header__link" to="/signup">Zarejestruj klienta</nuxt-link>
          </li>
          <li class="header__item">
            <nuxt-link class="header__link" to="/contactus">Kontakt</nuxt-link>
          </li>
        </ul>
      </nav>
    </header>
</template>

<script>
export default {
  data () {
    return {
      admin: false
    }
  }
}
</script>

<style>
.header {
  display: flex;
  flex-direction: column;
}

.header-top {
  display: flex;
  align-items: center;
  margin-bottom: 24px;
}

.header-top__image {
  max-height: 70px;
}

.header-top__text {
  margin-left: 16px;
  font-size: 20px;
  text-transform: uppercase;
  color: #ffffff;
}

.header-wrapper {
  padding: 8px 16px 32px;
}

.header-background {
  background-color: #1d3557;
}

.header__list {
  margin: 0;
  padding: 16px 0;
  display: flex;
  justify-content: center;
  color: #f1faee;
  font-size: 24px;
  list-style-type: none;
}

.header__link {
  padding: 24px;
  text-decoration: none;
  color: inherit;
}

.header__link:hover {
  text-decoration: underline;
}
</style>