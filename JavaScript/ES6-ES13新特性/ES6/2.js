function test() {
    console.log('2.-----test');
}
function B1() {
    console.log('B1');
}
function _b1() {
    console.log('_b1');
}

// 导出
export default {
    B1,
    test
}

export {
    _b1
}