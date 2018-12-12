<template>
    <section>
        <div id="text">
            <p id="top">2019년 까지...</p>
            <p id="time">00일 00시 00분 00초</p>
        </div>
    </section>
</template>

<style lang="scss">
    #text {
        text-align: center;
        margin-top: 240px;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;
        color: #FFFFFF;

        #top {
            font-size: 50px;
            text-shadow: 2px 2px 10px #000000;
        }
        #time {
            font-size: 80px;
            font-weight: 600;
            text-shadow: 2px 2px 3px #000000;
        }
    }

    @media screen and (max-width: 600px) {
        .text {
            margin-top: 40%;
            #top {
                font-size: 30px;
            }
            #time {
                font-size: 45px;
                font-weight: 600;
            }
        }
    }
</style>

<script>
    if (process.browser) {
        const color = [
            "linear-gradient(to right, #F5CBFF 10%, #C346C2 100%)",
            "linear-gradient(to right, #FFF720 10%, #3CD500 100%)",
            "linear-gradient(to right, #FD6E6A 10%, #FFC600 100%)",
            "linear-gradient(to right, #2AFADF 10%, #4C83FF 100%)"
        ]
        let rand = Math.floor(Math.random() * color.length);
        document.getElementsByTagName("body")[0].style.backgroundImage = color[rand]

        let date = new Date("Jan 1, 2019 00:00:00").getTime();
        const numberFormat = (number) => {
            return ("0" + number).slice(-2);
        }
        const timer = setInterval(() => {
            let now = new Date().getTime();
            let leftTime = date - now;

            let d = Math.floor(leftTime / (1000 * 60 * 60 * 24));
            let h = Math.floor((leftTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            let m = Math.floor((leftTime % (1000 * 60 * 60)) / (1000 * 60));
            let s = Math.floor((leftTime % (1000 * 60)) / 1000);

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