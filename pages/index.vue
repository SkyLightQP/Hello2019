<template>
    <section>
        <div id="box">
            <div id="text">
                <span id="top">2019년 까지...</span>
                <div id="time">
                    <span id="d">일</span>
                    <span id="h">시간</span>
                    <span id="m">분</span>
                    <span id="s">초</span>
                </div>
            </div>
            <img src="~/assets/background.png"/>
        </div>
    </section>
</template>

<style lang="scss">
    body {
        overflow-x: hidden;
        overflow-y: hidden;
        max-width: 100%;
        height: 100%;
        margin: 0;
    }

    #box {
        position: relative;

        #text {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            color: #000000;
            margin-top: -190px;
            margin-left: 140px;
            width: 1000px;

            #top {
                font-size: 40px;
            }
            #time {
                font-size: 70px;
                font-weight: 600;
            }
        }
    }

    @media screen and (min-width: 1500px) {
        #box {
            #text {
                margin-top: -120px;
            }
        }
    }

    @media screen and (max-width: 630px) {
        #box {
            #text {
                width: 60%;
                margin-top: -225px;
                margin-left: 15px;
                #top {
                    font-size: 20px;
                }
                #time {
                    font-size: 40px;
                    font-weight: 600;
                }
            }
        }
    }
</style>

<script>
    if (process.browser) {
        let date = new Date("Jan 1, 2019 00:00:00").getTime();
        const numberFormat = (number) => {
            return ("0" + number).slice(-2);
        }
        const timer = setInterval(() => {
            let now = new Date().getTime();
            let leftTime = date - now;

            let d = numberFormat(Math.floor(leftTime / (1000 * 60 * 60 * 24)));
            let h = numberFormat(Math.floor((leftTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
            let m = numberFormat(Math.floor((leftTime % (1000 * 60 * 60)) / (1000 * 60)));
            let s = numberFormat(Math.floor((leftTime % (1000 * 60)) / 1000));

            if (leftTime <= 0) {
                document.getElementById("top").innerHTML = "2019년 까지... D-DAY";
                document.getElementById("time").innerHTML = "새해 복 많이 받으세요!";
                clearInterval(timer);
            } else {
                document.getElementById("d").innerHTML = `${d}일`;
                document.getElementById("h").innerHTML = `${h}시간`;
                document.getElementById("m").innerHTML = `${m}분`;
                document.getElementById("s").innerHTML = `${s}초`;
            }
        }, 1000);
    }
    export default {
        name: "index"
    }
</script>