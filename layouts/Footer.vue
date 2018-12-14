<template>
    <section>
        <p class="footer">GitHub: <a href="https://github.com/SkyLightQP/Hello2019" target="_blank">https://github.com/SkyLightQP/Hello2019</a>, Designed by AlTaDex</p>
    </section>
</template>

<script>
    export default {
        name: "Footer"
    }
</script>

<style lang="scss">
    .footer {
        font-size: 12px;
        color: #000000;
        position: absolute;
        bottom: 0;
        margin: 0;
        left: 0;
    }

    a:visited {
        color: black;
        text-decoration: none;
    }

    @media screen and (max-width: 600px) {
        .footer {
            font-size: 10px;
        }
    }
</style>