<script setup>
import { routerKey, RouterLink, RouterView } from 'vue-router'
import router from './router';


</script>

<template>
  <header>
    <div class="max-w-7xl mx-auto">

      <nav class="m-2 p-2">
        <!-- <RouterLink v-if="getToken !== null" class="px-4 py-2 mr-4 bg-indigo-600 hover:bg-indigo-800 rounded text-white"
          @click="logout" to="/users">Logout
        </RouterLink>
        <RouterLink v-else class="px-4 py-2 mr-4 bg-indigo-600 hover:bg-indigo-800 rounded text-white" to="/login">Login
        </RouterLink> -->

      </nav>
    </div>
  </header>

  <main class="max-w-3xl mx-auto min-h-screen">
    <RouterView />
  </main>
</template>

<script>
export default {
  methods: {
    logout() {
      localStorage.removeItem("user");
      router.push('/login');
    }
  }
}
</script>

