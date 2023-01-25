<script setup>
import useUsers from "../../composable/users";
import { onMounted } from "vue";

const { users, getUsers, destroyUser } = useUsers();

onMounted(() => getUsers());

const getToken = localStorage.getItem("user");

if (getToken === null || getToken === undefined) {
    router.push("/login")
}
</script>
<template>
    <div v-if="getToken !== null" class="mt-12">
        <div class="flex justify-end m-2 p-2">
            <RouterLink :to="{
                name: 'UsersCreate'
            }" class="px-4 py-2 bg-indigo-500 hover:bg-indigo-700 text-white rounded ">New User
            </RouterLink>
            <RouterLink v-if="getToken !== null" class="px-4 py-2 ml-4 bg-red-600 hover:bg-red-800 rounded text-white "
                @click="logout" to="/users">
                Logout
            </RouterLink>
        </div>
        <div class="relative overflow-x-auto">
            <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" class="px-6 py-3">
                            Name
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Email
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Password
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Action
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="user in     users" :key="user.id"
                        class="bg-white border-b dark:bg-gray-800 dark:border-gray-800">
                        <td class="py-4 px-6">{{ user.name }} </td>
                        <td class="py-4 px-6">{{ user.email }} </td>
                        <td class="py-4 px-6">{{ user.password }} </td>
                        <td class="py-4 px-6 space-x-2">
                            <RouterLink :to="{ name: 'UsersEdit', params: { id: user.id } }" class="text-blue-600">Edit
                            </RouterLink>
                            <button @click="destroyUser(user.id)" class="text-blue-600">Delete</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>

    </div>
</template>
<script>
import router from '../../router';
export default {
    methods: {
        logout() {
            if (window.confirm("Are you sure?")) {
                localStorage.removeItem("user");
                router.push('/login');
            }

        }
    }
}
</script>