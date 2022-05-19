//@ts-check
/**
 * Initializes the project
 * @param {object} config
 * @param {boolean} config.debug
 * @param {string} config.url 
 * @returns {boolean}
 */
export function init(config){
    return true
}

/**
 * Exit the program
 * @param {number} code 
 * @returns {number}
 */
export function exit(code){
    return code +1;
}
/*프로젝트 안에 자바스크립트와 타입스크립트 파일이 같이 들어있는 경우, 자바스크립트에서 타입스크립트로 이전하는 경우를 많이 맞딱드릴 것이다. 
이 떄 JSDoc을 사용하면 파일은 JS그대로 두고 TS의 보호만 받을 수 있다.*/