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
            <div class="bg-yellow-400 p-4 text-xl text-center rounded-lg w-3/12 mx-auto">Testing Tailwind CSS...</div>
            <div class="bg-blue-300 w-2/12 mx-auto text-center text-xl p-4 rounded-lg mt-4 cursor-pointer" @click="testVuex">Test Vuex: {{ getCount }}</div>



            <div class="rockwell-container">This is the rockwell-container style from the sass modules.
                <div class="rockwell-button bg-red-300 mt-4">And this is the rockwell-button class</div>
            </div>

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

        },

        computed: {
            getCount(){
                return this.$store.state.count;
            }
        }

    }
</script>
