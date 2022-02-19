<template>
    <v-app app>
        <v-container>
            <v-btn color="primary">
                Primary
            </v-btn>
            <v-btn color="secondary">
                Secondary
            </v-btn>
            <v-btn color="error">
                Error
            </v-btn>
            <v-slider></v-slider>
            <v-date-picker></v-date-picker>
            <div class="bg-yellow-400 p-8 text-4xl text-center rounded-xl">Testing Tailwind CSS...</div>
        </v-container>
    </v-app>
</template>

<script>
    export default {
        mounted() {
            console.log('Component mounted.')
        }
    }
</script>
