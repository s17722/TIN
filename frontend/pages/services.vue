<template>
    <main class="main wrapper">
        <the-card>
            <h1>Usługi</h1>
            <table class="table">
            <tr class="table__row">
                <th class="table__cell table__head-cell">Usługa</th>
                <th class="table__cell table__head-cell">Cena</th>
                <th v-if="admin" class="table__cell table__head-cell">Opcje</th>
            </tr>
            <tr class="table__row">
                <td class="table__cell">Strzyżenie</td>
                <td class="table__cell">50zł</td>
                <td v-if="admin" class="table__cell">
                <button class="btn btn-info">Szczegóły</button>
                <button class="btn btn-edit">Edytuj</button>
                <button class="btn btn-delete">Usuń</button>
                </td>
            </tr>
            <tr class="table__row">
                <td class="table__cell">Kapiel</td>
                <td class="table__cell">35zł</td>
                <td v-if="admin" class="table__cell">
                <button class="btn btn-info">Szczegóły</button>
                <button class="btn btn-edit">Edytuj</button>
                <button class="btn btn-delete">Usuń</button>
                </td>
            </tr>
            </table>
        </the-card>
        <the-card
            v-if="admin"
        >
            <div
                class="">
                <h2 class="decorator">Tworzenie nowej usługi</h2>
                <form class="form">
                <label class="form__label" for="name">Usługa:</label>
                <input required type="text" id="name" class="form__input" />
                <label class="form__label" for="price">Cena:</label>
                <input required type="number" id="price" class="form__input" />
                <label class="form__label" for="description">Opis:</label>
                <textarea
                    required
                    type="text"
                    id="description"
                    class="form__input"
                ></textarea>
                <button class="btn">Dodaj usługę</button>
                </form>
            </div>
        </the-card>
    </main>
</template>

<script>
import TheCard from '~/components/UI/TheCard/TheCard.vue'
export default {
    components: { TheCard },
    data () {
        return {
            admin: false
        }
    }
}
</script>

<style>

</style>