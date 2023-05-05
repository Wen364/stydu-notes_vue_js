const div = document.querySelector('div')
console.log(div);

function A1() {
    _a1()
    console.log('A1');
}

function test() {
    console.log('1.-----test');
}

function _a1() {
    console.log('_a1');
}



// 导出方法
// 把 A1 导出去
// export default A1
export default {
    A1,
    test
}

// 第二种导出方法
export {
    _a1
}