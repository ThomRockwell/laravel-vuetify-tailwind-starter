<template>
    <v-app app>


        <v-container>

            <breakpoints-displayer></breakpoints-displayer>

            <page-title-header>{{ titleProp }}</page-title-header>


            <div class="bg-gray-100 p-4 mb-4">The fact that we are seeing this page means that Laravel is working as well as Vue JS and Vue Router. Boom!</div>

            <hr class="border-gray-500 border-2 my-4 rounded">

            <div class="bg-gray-100 p-4 mb-4">The three Buttons, the Slider and DatePicker below are all Vuetify elements. So clearly, Vuetify is working.</div>


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

            <hr class="border-gray-500 border-2 my-4 rounded">

            <div class="bg-gray-100 p-4 mb-4">This yellow div with the rounded corners tells us that Tailwind CSS is working fine too.</div>
            <div class="bg-yellow-400 p-4 text-xl text-center rounded-lg w-3/12 mx-auto">Testing Tailwind CSS...</div>
            <div class="bg-gray-100 p-4 mb-4">(of course, most of the elements on this page are actually styled with Tailwind CSS so....)</div>

            <hr class="border-gray-500 border-2 my-4 rounded">
            <div class="bg-gray-100 p-4 mb-4">Clicking this button and watching the number increment tells us that Vuex is doing it's job as well.</div>
            <div class="bg-blue-300 w-2/12 mx-auto text-center text-xl p-4 rounded-lg mt-4 cursor-pointer" @click="testVuex">Test Vuex: {{ getCount }}</div>

            <hr class="border-gray-500 border-2 my-4 rounded">
            <div class="bg-gray-100 p-4 mb-4">These elements are styled using custom classes created in our Sass files. It's pretty Sassy that our Sass is working too.</div>
            <div class="rockwell-container mt-4">This is the rockwell-container style from the sass modules.
                <div class="rockwell-button bg-red-300 mt-4">And this is the rockwell-button class</div>
            </div>

            <hr class="border-gray-500 border-2 my-4 rounded">
            <div class="bg-gray-100 p-4 mb-4">Lastly, I have included my BreakPoints Displayer Component to help in development. You're welcome.</div>

            <div class="mx-auto w-1/2 mt-4">
                The BreakPoints Displayer Component can be used to see how and when things change at different breakpoints.
                <breakpoints-displayer></breakpoints-displayer>
            </div>

        </v-container>


    </v-app>
</template>

<script>
    import PageTitleHeader from "./global/PageTitleHeader";
    export default {
        components: {PageTitleHeader},
        mounted() {

            console.log('Example Component mounted.');

        },

        title () {

            return `${this.titleProp}`;

        },

        props: {

            titleProp: {
                type: String,
                default: 'Pass Title as Prop'
            }
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
