<template>
    <section>
        <img src="~/assets/img/SplitShire-09495.jpg"/>
        <div class="text">
            <p id="top">2019년 까지...</p>
            <p id="time">00일 00시 00분 00초</p>
        </div>
    </section>
</template>

<style lang="scss">
    img {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: -1;
    }

    .text {
        text-align: center;
        margin-top: 230px;

        #top {
            font-size: 50px;
        }
        #time {
            font-size: 80px;
        }
    }
</style>