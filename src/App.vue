<script setup>
import { RouterLink, RouterView } from 'vue-router'

</script>

<template>
 <header class="header">
        <a class="logo" id="reloadPage" href="#">
            <span>Country</span>Guesser
        </a>
    </header>

  <RouterView />
</template>

<style scoped>
.header {
    position: fixed;
    display: flex;
    top: 0;
    left: 0;
    width: 100%;
    height: 70px;
    padding: 35px 12%;
    background-color: #639f38;
    backdrop-filter: blur(5px);
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 100;
}

.logo {
    font-size: 25px;
    color: #F5F5F5;
    font-weight: 600;
}

span {
    color: #154b6b;
}
</style>
