<template>
    <main class="main wrapper">
        <the-card>
            <form class="form">
                <label class="form__label" for="clients">Klient</label>
                <select class="form__select" id="clients">
                <option>Jan Kowalski</option>
                <option>Joanna Witakrska</option>
                </select>
                <label class="form__label" for="animals">Klient</label>
                <select class="form__select" id="animals">
                <option>Pies - Azor</option>
                </select>
                <div class="form__date">
                <div class="form__date-cell">
                    <label for="day" class="form__label">Dzień:</label>
                    <input id="day" class="form__input" type="number" min="1" max="31" placeholder="1" />
                </div>
                <div class="form__date-cell">
                    <label for="month" class="form__label">Miesiąc:</label>
                    <input id="month" class="form__input" type="number" min="1" max="12" placeholder="02" />
                </div>
                <div class="form__date-cell">
                    <label for="year" class="form__label">Rok:</label>
                    <input id="year" class="form__input" type="number" min="2020" placeholder="2020" />
                </div>
                </div>
                <label class="form__label" for="services">Wybierz usługę:</label>
                <select class="form__select" id="animals">
                <option>Strzyżenie</option>
                <option>Kąpiel</option>
                </select>
                </div>
                <p class="form__result">Cena do zapłaty: <span>50 zł</span></p>
                <button class="btn">Wyślij formularz</button>    
            </form>
        </the-card>
    </main>
</template>

<script>
import TheCard from '~/components/UI/TheCard/TheCard.vue'
export default {
  components: { TheCard },

}
</script>

<style>
</style>
