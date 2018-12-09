<template>
    <section>
        <nuxt/>
        <Footer/>
    </section>
</template>

<script>
    import Footer from "./Footer";

    export default {
        name: "default",
        components: {Footer}
    }
</script>