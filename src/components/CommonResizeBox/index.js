
export function Resize(ResizeOption) {
    //对其方式
    let translate = ResizeOption.alignType == 'middle' ? '-50%, -50%' : '-50%, 0'
    // * 定时函数
    let timeout
    // * 默认缩放值
    const scale= {
        width: '1',
        height: '1',
    }
    // * 设计稿尺寸（px）
    const baseWidth = ResizeOption.width
    const baseHeight = ResizeOption.height
    let parentWidth = ResizeOption.parentNode.clientWidth
    let parentHeight = ResizeOption.parentNode.clientHeight
    // * 需保持的比例（默认1.77778）
    const baseProportion = parseFloat((baseWidth / baseHeight).toFixed(5))
    //固定比例缩放
    const ratio = () => {
        // 当前宽高比
        const currentRate = parseFloat((parentWidth / parentHeight).toFixed(5))
        if (ResizeOption.target) {
            if (currentRate > baseProportion) {
                // 表示更宽
                scale.width = ((parentHeight * baseProportion) / baseWidth).toFixed(5)
                scale.height = (parentHeight / baseHeight).toFixed(5)
                ResizeOption.target.style.transform = `scale(${scale.width}, ${scale.height}) translate(${translate})`
            } else {
                // 表示更高
                scale.height = ((parentWidth / baseProportion) / baseHeight).toFixed(5)
                scale.width = (parentWidth / baseWidth).toFixed(5)
                ResizeOption.target.style.transform = `scale(${scale.width}, ${scale.height}) translate(${translate})`
            }
        }
    }
    //固定窗口大小拉伸缩放
    const stretch = () => {
        if (ResizeOption.target) {
            scale.height = (parentHeight / baseHeight).toFixed(5)
            scale.width = (parentWidth / baseWidth).toFixed(5)
            ResizeOption.target.style.transform = `scale(${scale.width}, ${scale.height}) translate(${translate})`
        }
    }

    const resize = () => {
        clearTimeout(timeout)
        timeout = setTimeout(() => {
            switch (ResizeOption.mode) {
                case 0:
                    stretch()
                    break;
                case 1:
                    ratio()
                    break;
                default:
                    stretch();
                    break;
            }
        }, 200)
    }
    let timer
    // 监听窗口大小重新绘制
    const parentResize = () => {
        parentWidth = ResizeOption.parentNode.clientWidth
        parentHeight = ResizeOption.parentNode.clientHeight
        timer = setInterval(() => {
            let queryParentWidth = ResizeOption.parentNode.clientWidth
            let queryParentHeight = ResizeOption.parentNode.clientHeight
            if (parentWidth == queryParentWidth && parentHeight == queryParentHeight) {
                return
            } else {
                resize()
                parentWidth = queryParentWidth
                parentHeight = queryParentHeight
            }
        }, 600)
    }
    // 关闭监听窗口大小
    const unWindowResize = () => {
        clearInterval(timer)
    }
    return {
        ratio,
        stretch,
        parentResize,
        unWindowResize
    }
}
