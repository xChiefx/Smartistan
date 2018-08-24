window对象:
属性:
	history
	document
	location
	navigator
	screen
	frames
	所有用var创建的全局变量
方法:
	alert()
	confirm()
	prompt()
	setInterval()
	setTimeout()
	所有全局函数
	
document对象:
属性:
	title
	cookie
方法:
	getElementById()
	getElementsByTagName()
	getElementsByName()
	getElementsByClassName() (兼容)
	querySelector()
	querySelectorAll()

history对象:
方法:
	go()
navigator对象:
属性:
	userAgent
location对象
属性: 
	href
方法:
	reload()
	reload(true)

Array对象:
属性: 
	length
方法:
	unshift(元素,……) :数组开头增加元素,返回增加后数组的长度,会改变原数组
	push(元素,……) : 数组结尾增加元素,返回增加后数组的长度,会改变原数组
	shift() : 删除数组开头的元素,一次只删除一个元素,返回被删除的元素,会改变原数组
	pop() : 删除数组结尾的元素,一次只删除一个元素,返回被删除的元素,会改变原数组
	splice(start,length,newEle,……) : 在数组任意位置增加/删除/修改元素,返回被删除的元素数组,会改变原数组
	slice(start,end) : 截取数组中指定范围的元素形成新的数组,返回新数组,不会改变原数组
	concat(元素,……) : 在指定的数组末尾拼接元素形成新的数组,返回新数组,不会改变原数组
	reverse() : 将指定的数组逆序存放,返回逆序后的数组,会改变原数组
	sort() : 将指定的数组按编码排序,返回排序后的数组,会改变原数组
	sort(function(a,b){return a-b;}) : 将指定的数组按数字从小到大排序,返回排序后的数组,会改变原数组
	sort(function(a,b){return b - a;}) : 将指定的数组按数字从大到小排序,返回排序后的数组,会改变原数组
	toString() : 将数组转为字符串,字符之间以逗号分隔,返回字符串,不会改变原数组
	join('分隔符') : 将数组转为字符串,可以指定字符之间的分隔符,返回字符串,不会改变原数组
	forEach(function(value,index,array){}) : 遍历数组
	map(function(value,index,array){return ...}) : 遍历数组
	reduce(function(pre,next,index,array){return ...}) : 归并数组
	filter(function(value,index,array){return ...}) : 过滤数组
	indexOf(元素,start) : 查找元素在数组中第一次出现的位置,返回下标 ,查找失败,返回-1
	lastIndexOf(元素,start) : 查找元素在数组中最后一次出现的位置,返回下标,查找失败,返回-1

String对象:
属性: 
	length
方法:
	charAt(下标) : 返回指定下标位置的字符
	charCodeAt(下标) : 返回指定下标位置的字符编码
	indexOf('字符串',start) : 查找子串在父串中第一次出现的位置,返回下标 ,查找失败,返回-1
	lastIndexOf('字符串',start) : 查找子串在父串中最后一次出现的位置,返回下标 ,查找失败,返回-1
	replace(旧串,新串) : 替换父串中指定的字符串
	substring(start,end) : 截取指定范围的字符串
	substr(start,length) : 截取指定长度的字符串
	slice(start,end) : 截取指定范围的字符串
	toUpperCass() : 将小写字母转为大写字母
	toLowerCase() : 将大写字母转为小写字母
	split('切割符',length) : 将字符串切割成数组
	includes('字符串',start) : 判断父串中是否包含子串,返回布尔值
	startsWith('字符串',start) : 判断父串中是否以指定的字符串开头,返回布尔值
	endsWith('字符串',start) : 判断父串中是否以指定的字符串结尾,返回布尔值
	repeat(n) : 将指定的字符串重复n次
	match() : 判断字符串中包含的正则表达式,返回数组
	search() : 判断字符串中包含的正则表达式首次出现的下标位置.
静态方法:
	String.fromCharCode() : 将编码转为字符串

Math对象:
属性:
	PI    : 求圆周率
方法:
	abs() : 求绝对值
	round() : 求四舍五入
	floor() : 向下取整
	ceil() : 向上取整
	max() : 求最大值
	max.apply(null,array) : 求数组中的最大值
	min() : 求最小值
	min.apply(null,array) : 求数组中的最小值
	random() : 求随机数
	Math.floor(Math.random() * (max - min + 1) + min) : 求任意两个数范围的随机数
	pow(m,n) : 求m的n次方
	sqrt() : 求开方
	
Date对象:
方法:
	getFullYear() : 获取年
	getMonth() : 获取月
	getDate() : 获取日
	getDay() : 获取星期
	getHours() :获取小时
	getMinutes() :获取分钟
	getSeconds() : 获取秒钟
	getMilleseconds() : 获取毫秒
	getTime() :获取时间戳
	setFullYear() : 设置年
	setMonth() : 设置月
	setDate() : 设置日
	setHours() : 设置小时
	setMinutes() : 设置分钟
	setSeconds() : 设置秒钟
	setMilliseconds() : 设置毫秒
	toLocaleString() : 本地格式的日期时间
	toLocaleDateString() : 本地格式的日期
	toLocaleTimeString() : 本地格式的时间

节点对象:
创建元素节点对象: document.createElement()
创建文本节点对象: document.createTextNode()
属性:
	nodeName : 元素节点: 元素名      属性节点:  属性名       文本节点 :  #text
	nodeType : 元素节点 :  1     属性节点:  2      文本节点 :   3
	nodeValue: 元素节点 :  null  属性节点:  属性值      文本节点:   文本内容(纯文本)
	标签中的属性(getAttribute)(setAttribute)(removeAttribute)
	
	firstChild  : 设置或获取第一个子节点
	firstElementChild : 设置或获取第一个元素子节点
	lastChild : 设置或获取最后一个子节点
	lastElementChild : 设置或获取最后一个元素子节点
	previousSibling : 设置或获取前一个兄弟节点
	previousElementSibling : 设置或获取前一个元素兄弟节点
	nextSibling : 设置或获取后一个兄弟节点
	nextElementSibling : 设置或获取后一个元素兄弟节点
	parentNode : 设置或获取父节点
	parentElementNode : 设置或获取元素父节点
	
	offsetLeft : 获取当前对象相对于父对象的left值
	offsetTop : 获取当前对象相对于父对象的top值
	offsetWidth : 获取当前对象的相对宽度(width + padding + border)
	offsetHeight : 获取当前对象的相对高度(height + padding + border)
	
	
方法:
	appendChild() : 在当前节点的子节点末尾追加节点
	insertBefore() : 在当前节点的子节点中的某个子节点前插入节点
	removeChild() : 删除当前节点中的某个子节点
	cloneNode() : 克隆当前节点(不含节点中的内容)
	cloneNode(true) : 克隆当前节点(包含节点中的内容)
	
Event对象:
属性:
	button : 获取鼠标按键的编码值
	offsetX : 获取鼠标的相对坐标值
	offsetY 
	clientX : 获取鼠标的可视区坐标值
	clientY
	pageX : 获取鼠标的页面(绝对)坐标值
	pageY
	screenX : 获取鼠标的屏幕坐标值
	screenY
	keyCode : 获取键盘按键的编码值
	charCode : 获取键盘按键的编码值
	which : 获取键盘按键的编码值
	shiftKey : 组合键
	altKey
	ctrlKey
	returnValue : returnValue = false 阻止默认行为
	cancelBubble : cancelBubble = true 阻止事件冒泡 
	target : 获取事件源
	srcElement : 获取事件源
	
方法:
	stopPropagation() : 阻止事件冒泡
	preventDefault() : 阻止默认行为
	
RegExp对象:
	test() : 检测字符中是否包含正则,返回布尔值
	exec() : 检测字符中是否包含正则,返回数组
	
事件:
	onclick : 点击事件,点击鼠标时触发
	ondblclick : 双击事件,双击鼠标时触发
	onmouseup : 鼠标抬起事件,抬起鼠标时触发
	onmousedown : 鼠标按下事件,按下鼠标时触发
	onmouseover : 鼠标移入事件,移入目标区域时触发,该事件会继续向祖先元素传递
	onmouseout : 鼠标移出事件,移出目标区域时触发,该事件会继续向祖先元素传递
	onmouseenter : 鼠标移入事件,移入目标区域时触发,该事件传递到当前对象为止,不再向上传递
	onmouseleave : 鼠标移出事件,移出目标区域时触发,该 事件传递到当前对象为止,不再向上传递
	onmousemove : 鼠标移动事件,在目标区域移动鼠标时触发
	onkeyup : 键盘抬起事件,按键抬起时触发
	onkeydown : 键盘按下事件,按下按键时触发
	onkeypress : 键盘按过事件,按下按键时触发
	onload : 加载事件,当前对象全部加载完成后触发
	oncontextmenu : 右键菜单事件,按下鼠标右键时触发
	ondragstart : 拖拽事件,在当前对象上拖拽时触发
	onresize : 尺寸改变事件,当前对象的尺寸变化时触发
	onblur : 失焦事件,当前对象失去焦点时触发
	onfocus : 得焦事件,当前对象得到焦点时触发
	onchange : 表单中内容改变事件,当表单中内容发生变化且失去焦点时触发
	onsubmit : 表单提交事件,提交时触发

事件监听:
	addEventListener() :给当前对象添加事件监听器
	removeEventListener() : 给当前对象移除事件监听器
	attachEvent()
	detachEvent()
	
	
	
