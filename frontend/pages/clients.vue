<template>
    <main class="main wrapper">
        <the-card
            width="1000px"
        >
            <h1>Lista klientów</h1>
            <table class="table">
            <tr class="table__row">
                <th class="table__cell table__head-cell">Imię</th>
                <th class="table__cell table__head-cell">Nazwisko</th>
                <th class="table__cell table__head-cell">Numer telefonu</th>
                <th class="table__cell table__head-cell">Opcje</th>
            </tr>
            <tr class="table__row">
                <td class="table__cell">Jan</td>
                <td class="table__cell">Kowalski</td>
                <td class="table__cell">812-386-123</td>
                <td class="table__cell">
                <button class="btn btn-animals">Zwierzęta</button>
                <button class="btn btn-info">Wizyty</button>
                <button class="btn btn-edit">Edytuj</button>
                <button class="btn btn-delete">Usuń</button>
                </td>
            </tr>
            <tr class="table__row">
                <td class="table__cell">Joanna</td>
                <td class="table__cell">Witakrska</td>
                <td class="table__cell">672-136-233</td>
                <td class="table__cell">
                <button class="btn btn-animals">Zwierzęta</button>
                <button class="btn btn-info">Wizyty</button>
                <button class="btn btn-edit">Edytuj</button>
                <button class="btn btn-delete">Usuń</button>
                </td>
            </tr>
            </table>
        </the-card>
        <the-card>
            <h2 class="decorator">Zwierzęta klienta - Jan Kowalski</h2>
            <table class="table">
            <tr class="table__row">
                <th class="table__cell table__head-cell">Typ</th>
                <th class="table__cell table__head-cell">Imię</th>
                <th class="table__cell table__head-cell">Wiek</th>
                <th class="table__cell table__head-cell">Opcje</th>
            </tr>
            <tr class="table__row">
                <td class="table__cell">Pies</td>
                <td class="table__cell">Azor</td>
                <td class="table__cell">8 lat</td>
                <td class="table__cell">
                <button class="btn btn-delete" type="button">Usuń</button>
                </td>
            </tr>
            </table>
        </the-card>
        <the-card>
            <button class="btn" type="button">Dodaj zwierzę</button>
            <form class="form">
            <label class="form__label" for="type">Typ:</label>
            <input required type="text" id="type" class="form__input" />
            <label class="form__label" for="name">Imię:</label>
            <input required type="text" id="name" class="form__input" />
            <label class="form__label" for="age">Wiek:</label>
            <input required type="text" id="age" class="form__input" />
            <button class="btn">Dodaj zwierzę</button>
            </form>
        </the-card>
        <the-card>
            <h2 class="decorator">Wizyty klienta - Jan Kowalski</h2>
            <table class="table">
            <tr class="table__row">
                <th class="table__cell table__head-cell">Zwierzę</th>
                <th class="table__cell table__head-cell">Typ wizyty</th>
                <th class="table__cell table__head-cell">Ostatnia wizyta</th>
            </tr>
            <tr class="table__row">
                <td class="table__cell">Pies</td>
                <td class="table__cell">Czesanie</td>
                <td class="table__cell">12 / 11 / 2020</td>
            </tr>
            </table>
        </the-card>
        <the-card>
            <h2 class="decorator">Dodanie nowego klienta</h2>
            <form class="form">
                <label class="form__label" for="name">Imię:</label>
                <input required type="text" id="name" class="form__input" />
                <label class="form__label" for="surname">Nazwisko:</label>
                <input required type="text" id="surname" class="form__input" />
                <label class="form__label" for="tel">Numer telefonu:</label>
                <input required type="text" id="tel" class="form__input" />
                <button class="btn">Dodaj klienta</button>
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