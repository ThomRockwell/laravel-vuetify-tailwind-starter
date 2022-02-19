<template>

    <div class="flex relative w-full bg-blue-600 mb-12">

        <div class="displayer visible sm:invisible bg-purple-300">Extra Small (default breakpoint)</div>
        <div class="displayer invisible sm:visible md:invisible bg-green-300">Small</div>
        <div class="displayer invisible md:visible lg:invisible bg-blue-300">Medium</div>
        <div class="displayer invisible lg:visible xl:invisible bg-red-300">Large</div>
        <div class="displayer invisible xl:visible bg-indigo-300">Extra Large</div>

    </div>

</template>

<script>

    export default {

        name: "BreakpointsDisplayer"

    }

</script>

<style scoped>

    .displayer{

        @apply w-full absolute p-4;

    }

</style>
