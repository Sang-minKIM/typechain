interface Config {
    url:string
}
declare module "myPackage" {
    function init(config:Config):boolean;
    function exit(code:number):number;
}
// 정의파일 작성하기. 정의파일에는 구현을 할 필요는 없고 타입만 정해주면 된다. 