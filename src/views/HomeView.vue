<script setup>
import router from '../router';
const getToken = localStorage.getItem("user");

if (getToken === null || getToken === undefined) {
  router.push("/login")
} else {
  router.push("/users")
}
</script>

<template>
  <main>
  </main>
</template>
