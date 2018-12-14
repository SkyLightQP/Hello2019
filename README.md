# Hello2019
> 2019년까지 남은 시간을 카운트합니다.

[2019년.me](http://xn--2019-yy8p.me/)

## Build
```
$ git clone https://github.com/SkyLightQP/Hello2019.git
# 코드를 다운로드합니다.

$ npm run build
# 빌드를 진행합니다.
```

## Getting started
시작 시 빌드가 진행됩니다.
```
$ git clone https://github.com/SkyLightQP/Hello2019.git
# 코드를 다운로드합니다.

$ docker build --tag hello2019 .
# Docker 이미지를 빌드합니다.

$ docker run --name hello2019 -d -p 80:80 hello2019
# 웹서버를 시작합니다.
```

### Without Docker
사전에 빌드가 필요합니다.
```
$ npm run start
# 웹서버를 시작합니다.

$ npm run dev
# 개발 모드로 시작합니다.
```

## Author
- 하늘빛QP (개발)
- AltaDex (디자인)

## License
[MIT License](https://github.com/SkyLightQP/Hello2019/blob/master/LICENSE)

