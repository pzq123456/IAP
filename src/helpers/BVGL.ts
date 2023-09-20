/**
 * mapvgl 封装
 */
export function Createheatmap(view:any,data:any) {
    
    var heatmap = new mapvgl.HeatmapLayer({
        size: 3000, // 单个点绘制大小
        max: 10, // 最大阈值
        height: 0, // 最大高度，默认为0
        unit: 'm', // 单位，m:米，px: 像素
        gradient: { // 对应比例渐变色
            0.25: 'rgba(255,254,202, 1)',
            0.55: 'rgba(255,199,118, 1)',
            0.85: 'rgba(250,141,62, 1)',
            1: 'rgba(232,108,41, 1)'
        }
    });
    view.addLayer(heatmap);
    heatmap.setData(data);

}