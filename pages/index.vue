<template>
    <section>
        <div id="box">
            <div class="text">
                <p id="top">2019년 까지...</p>
                <p id="time">00일 00시 00분 00초</p>
            </div>
            <img id="image" src="~/assets/img/SplitShire-09495.jpg"/>
        </div>
    </section>
</template>

<style lang="scss">
    body {
        overflow: hidden;
    }

    .text {
        position: absolute;
        height: 30%;
        text-align: center;
        margin: auto;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;

        #top {
            font-size: 50px;
        }
        #time {
            font-size: 80px;
            font-weight: 600;
        }
    }

    #image {
        max-width: 100%;
        height: auto;
    }
</style>

<script>
    if (process.browser) {
        let date = new Date("Jan 1, 2019 00:00:00").getTime();
        const timer = setInterval(() => {
            var now = new Date().getTime();
            var leftTime = date - now;

            var d = Math.floor(leftTime / (1000 * 60 * 60 * 24));
            var h = Math.floor((leftTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            var m = Math.floor((leftTime % (1000 * 60 * 60)) / (1000 * 60));
            var s = Math.floor((leftTime % (1000 * 60)) / 1000);

            if (leftTime <= 0) {
                document.getElementById("top").innerHTML = "2019년 까지... D-DAY";
                document.getElementById("time").innerHTML = "새해 복 많이 받으세요!";
                clearInterval(timer);
            } else {
                document.getElementById("time").innerHTML = `${d}일 ${h}시간 ${m}분 ${s}초`;
            }
        }, 1000);
    }
    export default {
        name: "index"
    }
</script>