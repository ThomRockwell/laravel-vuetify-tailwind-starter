<template>

    <div class="page-title-header-container">

        <h1 class="text-5xl w-max px-4 mx-auto mb-4 font-bold">
            <a :href="href" class="font-border text-4xl">
                <slot>Page Title Header</slot>
            </a>
        </h1>

    </div>

</template>

<script>

    export default {

        name: "PageTitleHeader",

        props: {
            href: {
                default: './'
            }
        }

    }

</script>

<style scoped>

    .page-title-header-container {

        text-align: center;
        padding-top:2em;

    }

    .page-title-header-container h1 a {

        color: black;

    }

    .page-title-header-container h1 a:hover {

        color: blue;
        text-decoration: none;

    }



</style>