<template>
    <the-card>
        <div class="form-box">
            <h1 class="form-title">Zaloguj się</h1>
            <form class="form">
                <div class="form-row">
                    <label for="mail" class="form-label">
                        Email:
                    </label>
                    <input
                        type="email"
                        placeholder="adriana@gmail.com"
                        id="mail"
                        required
                        class="form-input"
                        pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,63}$"
                    />
                </div>
                <div class="form-row">
                    <label for="password" class="form-label">
                        Hasło:
                    </label>
                    <input
                        type="text"
                        required
                        pattern="/^[a-zA-Z0-9!@#\$%\^\&*_=+-]{8,12}$/g"
                        class="form-input"
                        id="password"
                        placeholder="np. asdzxc123!"
                    />
                </div>
                <div class="form-row">
                    <button
                        type="submit"
                        class="form-submit"
                    >
                        Zaloguj
                    </button>
                </div>
            </form>
        </div>
    </the-card>
</template>

<script>
import TheCard from '../UI/TheCard/TheCard.vue'
export default {
  components: { TheCard }
}
</script>

<style lang="scss" scoped>
.form-box {
    .form-title {
        text-align: center;
        font-size: 32px;
        margin-bottom: 32px;
    }
    .form-row {
        display: flex;
        flex-direction: column;
        & + .form-row {
            margin-top: 16px;
        }
        &--last {
            margin-top: 4px;
        }
    }
    .form-label {
        font-size: 16px;
        margin-bottom: 4px;
    }
    .form-input {
        outline: 0;
        background-color: #f2f2f2;
        width: 100%;
        border: 0;
        margin: 0 0 15px;
        padding: 15px;
        box-sizing: border-box;
        font-size: 14px;
    }
    .form-submit {
        appearance: none;
        border: none;
        color: #ffffff;
        font-weight: 600;
        cursor: pointer;
        background-color: #40916c;
        padding: 12px 20px;
        text-transform: uppercase;
    }
    .register {
        text-align: center;
        font-size: 13px;
        color: #787777;
        a {
            color: inherit;
            font-size: inherit;
        }
    }
}
</style>