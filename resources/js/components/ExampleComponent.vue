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
            <div class="bg-yellow-400 p-8 text-xl text-center rounded-xl w-max mx-auto">Testing Tailwind CSS...</div>
            <div class="bg-blue-300 w-2/12 mx-auto text-center text-xl p-4 rounded-lg mt-4 cursor-pointer" @click="testVuex">Test Vuex</div>
        </v-container>
    </v-app>
</template>

<script>
    export default {
        mounted() {
            console.log('Component mounted.')
        },

        methods: {

            testVuex(){
                console.log("testVuex method triggered");
                this.$store.dispatch('increment');
            }

        }

    }
</script>
