window.onload = () => {
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