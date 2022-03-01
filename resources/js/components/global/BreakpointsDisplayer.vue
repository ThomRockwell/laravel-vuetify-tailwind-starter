<template>

    <div>

        <div class="flex relative w-full bg-blue-600 mb-12">

            <div class="flex displayer visible sm:invisible bg-purple-300 justify-between">
                <div class="w-max">Extra Small (default breakpoint)</div>
                <div class="w-max">w:{{ width }} | h: {{ height}}</div>
            </div>

            <div class="flex displayer invisible sm:visible md:invisible bg-green-300 justify-between">
                <div class="w-max">Small</div>
                <div class="w-max">w:{{ width }} | h: {{ height}}</div>
            </div>

            <div class="flex displayer invisible md:visible lg:invisible bg-blue-300 justify-between">
                <div class="w-max">Medium</div>
                <div class="w-max">w:{{ width }} | h: {{ height}}</div>
            </div>

            <div class="flex displayer invisible lg:visible xl:invisible bg-red-300 justify-between">
                <div class="w-max">Large</div>
                <div class="w-max">w:{{ width }} | h: {{ height}}</div>
            </div>

            <div class="flex displayer invisible xl:visible bg-indigo-300 justify-between">
                <div class="w-max">Extra Large</div>
                <div class="w-max">w:{{ width }} | h: {{ height}}</div>
            </div>

        </div>

    </div>


</template>

<script>

    export default {

        name: "BreakpointsDisplayer",

        data() {
            return { width: window.innerWidth, height: window.innerHeight };
        },
        created() {
            window.addEventListener("resize", this.onResize);
        },
        destroyed() {
            window.removeEventListener("resize", this.onResize);
        },
        methods: {
            onResize(e) {
                this.width = window.innerWidth;
                this.height = window.innerHeight;
            },
        },

    }

</script>

<style scoped>

    .displayer{

        @apply w-full absolute p-4;

    }

</style>
