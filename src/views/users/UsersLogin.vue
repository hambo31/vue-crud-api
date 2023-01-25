
<template>
    <div class="mt-12">
        <!-- <form @submit.prevent="storeUser(form)" class=""> -->
        <div class="space-y-6 max-w-md mx-auto p-4 bg-white shadow-md rounded-md">
            <h1 class="text-center text-2xl">LOGIN</h1>
            <div class="mb-6">
                <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nama:</label>
                <input type="text" id="name" v-model="name"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                <!-- <div v-if="errors.name">
                    <span class="text-s text-red-400"> {{ errors.name[0] }} </span>
                </div> -->
            </div>
            <div class="mb-6">
                <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email:</label>
                <input type="text" id="email" v-model="email"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                <!-- <div v-if="errors.email">
                        <span class="text-s text-red-400"> {{ errors.email[0] }} </span>
                    </div> -->
            </div>

            <div class="mb-6">
                <label for="password"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password:</label>
                <input type="text" id="password" v-model="password"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                <!-- <div v-if="errors.password">
                        <span class="text-s text-red-400"> {{ errors.password[0] }} </span>
                    </div> -->
            </div>
            <div class="mt-4">
                <button class=" px-4 py-2 bg-indigo-500 hover:bg-indigo-700 text-white rounded-md "
                    v-on:click="login">Masuk</button>
            </div>
        </div>
        <!-- </form> -->
    </div>
</template>

<script>
import router from '../../router';

import axios from 'axios';
export default {
    name: "Login",

    data() {
        return {
            name: '',
            email: '',
            password: '',
        }
    },
    methods: {
        async login() {
            let result = await axios.post(`http://127.0.0.1:8000/api/login?name=${this.name}&email=${this.email}&password=${this.password}`);
            console.log(result)

            if (result.data.status == true && result.data.message.token !== null) {
                localStorage.setItem("user", JSON.stringify(result.data.message.token))
                // console.log(result.data.message.token)
                router.push('/users');
            } else {
                alert("User not found!")
                router.push('/login');
            }

        }
    }
}</script>

