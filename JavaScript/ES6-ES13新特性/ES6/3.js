// 因为 这个js文件夹里面没有给 A1 B1 定义函数，如果需要调用，需要先引入obj1 和 obj2 里面的
import obj1 from './1.js'
import obj2 from './2.js'
obj1.A1()
obj2.B1()

export default {}