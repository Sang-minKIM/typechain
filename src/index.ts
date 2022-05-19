import crypto from "crypto";

//import * as crypto from "crypto";
// 모듈에 default export가 없다고 표시될 때의 한가지 해결법 다른 하나는 tsconfig파일에 "esModuleInterop": true를 추가하는 것 

interface BlockShape {
    hash: string;
    prevHash: string;
    height: number;
    data: string;
}
class Block implements BlockShape {
    public hash:string;
    constructor(
        public prevHash:string,
        public height:number,
        public data: string
    ) {
        this.hash = Block.calculateHash(prevHash, height, data);
    }
    static calculateHash(prevHash:string,height:number,data:string){
        const toHash = `${prevHash}${height}${data}`;
    }
}