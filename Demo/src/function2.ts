import { drawMultiPoint2BLMap, drawPoint2BLMap, drawPolygon2BLMap, innerIcon, removeAllOverlay } from "./helpers/BLDraw";
import { LineString, MultiPoint, Polygon } from "./packages/Geometry";
import { createPointListFromArr } from "./packages/MetaData";
import { convexHull } from "./packages/Shell";
import { mockPoints } from "./tests/Mock";

declare const BMapGL: any;

const myMBR1 = [
    -109.07111505279033,
    36.990057191562045,
    -102.06399125241506,
    40.981780653665425
] as [number, number, number, number];

let ps = mockPoints(50, myMBR1);
let mps = new MultiPoint(ps);
// 向地图中添加图文组合的信息窗口
export function example10(map: any){
    removeAllOverlay(map);
    let icon = innerIcon(0);
    let marker = drawPoint2BLMap(mps.calculateCentroid(), map);

    let sContent = `<h4 style='margin:0 0 5px 0;'>天安门</h4>
    <img style='float:right;margin:0 4px 22px' id='imgDemo' src='logo.svg' width='139' height='104'/>
    <p style='margin:0;line-height:1.5;font-size:13px;text-indent:2em'>
    天安门坐落在中国北京市中心,故宫的南侧,与天安门广场隔长安街相望,是清朝皇城的大门...
    </p></div>`;
    var infoWindow = new BMapGL.InfoWindow(sContent);
    // marker添加点击事件
    marker.addEventListener('click', function () {
        this.openInfoWindow(infoWindow);
        // 图片加载完毕重绘infoWindow
        document.getElementById('imgDemo').onload = function () {
            infoWindow.redraw(); // 防止在网速较慢时生成的信息框高度比图片总高度小，导致图片部分被隐藏
        };
    });
}
