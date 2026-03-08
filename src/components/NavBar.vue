<script setup lang="ts">
import { RouterLink } from 'vue-router';
</script>

<template>
    <nav class="menu">
      <RouterLink class="menu-item" to="/">Início</RouterLink>
      <RouterLink class="menu-item" to="/about">Sobre</RouterLink>
    </nav>
</template>

<style scoped>
    .menu {
        align-items: center;
        display: flex;
        flex-basis: 1;
        flex-direction: row;
        gap: 2rem;
        justify-content: end;
    }

    .menu-item {
        color: var(--text-color);
        border-radius: 5%;
        text-decoration: none;
        padding: 8px 20px;
    }

    .menu-item:hover {
        background-color: var(--color-slate-300);
    }

    @media (prefers-color-scheme: dark) {
        .menu-item:hover {
            background-color: var(--color-gray-700);
        }
    }
</style>