import { createToolBar } from './helpers/toolBar.ts'
import * as Fun from './funs.ts'
// components
import { Yield } from './Components/Chart1.ts';
import { Post } from './Components/Post.ts';
import { Flow } from './Components/Chart2.ts';


declare const BMapGL: any;

// =============初始化代码区域================ 
const map = initMap(); // 初始化地图并返回地图实例
// map.setMapStyleV2({     
//   styleId: 'dbe14c2d25e7b5be5876be5de4fe5039'
// });

// 注册组件 

const componentsArr = [
  ['yield-info', Yield],
  ['post-card', Post],
  ['flow-info', Flow],
] as [string, any][]; 

registerComponents(componentsArr);
createToolBar(document.querySelector<HTMLDivElement>('#toolBar')!, [
  // { name: 'Point', action: () =>  draw('marker')},
  // { name: 'Polyline', action: () =>  draw('polyline')},
  // { name: 'rectangle', action: () =>  draw('rectangle')},
  // { name: 'polygon', action: () =>  draw('polygon')},
  // { name: 'circle', action: () =>  draw('circle')},
  // { name: '绘制多点及其重心', action: () =>  example1()},
  // { name: '绘制三角网', action: () =>  example2()},
  // { name: '绘制凸包', action: () =>  example3()},
  // { name: '计算面积', action: () =>  example4()},
  // { name: '绘制Voronoi', action: () =>  example5()}, 
  // { name: '多边形求交', action: () =>  example6()},
  // { name: '线段求交', action: () =>  example7()},
  // { name: '点线关系', action: () =>  example8()},
  // { name: 'k-means', action: () =>  example9(map)},
  // { name: '图文信息窗口', action: () =>  example10(map)},
  { name: 'LM', action: () =>  Fun.function3()},
  { name: 'zqy', action: () =>  Fun.function4()},
  { name: 'LJY', action: () =>  Fun.function5()},
  { name: 'QSF', action: () =>  Fun.function6(map)},
  { name: 'PZQ', action: () =>  Fun.function7(map)},
  { name: '组件', action: () =>  components1()},
  { name: '组件2', action: () =>  components2()},
  { name: '清除组件', action: () =>  removeComponents()},
  { name: 'toggle组件', action: () =>  toggleComponent()}
],10)
// =============END================ 

// =============功能函数区域================

function components1(
  fatherContainer: HTMLDivElement = document.querySelector<HTMLDivElement>('#components')!
){
  // 以 innerHTML 的方式创建组件
  fatherContainer.innerHTML = `
    <yield-info data="[6.324077729,6.469937242,6.615796755,6.761656267,6.90751578,7.053375293,5.946300571,6.075002944,6.110244193,7.127886541]" labels="[2005,2006,2007,2008,2009,2010,2011,2012,2013,2014]" name="test" id="yieldInfo"></yield-info>
    <post-card
      Text = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!"
      imgURL = "logo.svg"
    ></post-card>
  `
}

function components2(
  fatherContainer: HTMLDivElement = document.querySelector<HTMLDivElement>('#components')!
){
  // 首先实例化组件
  const flowInfo = new Flow([1,2,3,4,5,6,7,8,9,10],['2005','2006','2007','2008','2009','2010','2011','2012','2013','2014'],'test');
  // 然后将组件添加到页面中
  fatherContainer.appendChild(flowInfo);
}

function removeComponents(
  fatherContainer: HTMLDivElement = document.querySelector<HTMLDivElement>('#components')!
){
  // 从页面中移除所有组件
  fatherContainer.innerHTML = '';
}

/**
 * 调整样式以打开组件
 */
function toggleComponent(
  fatherContainer: HTMLDivElement = document.querySelector<HTMLDivElement>('#components')!
){
    fatherContainer.style.display = fatherContainer.style.display === 'none' ? 'block' : 'none';
}

function initMap(){
// GL版命名空间为BMapGL
// 按住鼠标右键，修改倾斜角和角度
var map = new BMapGL.Map("allmap"); // 创建Map实例
  map.centerAndZoom(new BMapGL.Point( -107.88471436035084,
    38.666533188351195), 15);  // 初始化地图,设置中心点坐标和地图级别
  map.enableScrollWheelZoom(true);     //开启鼠标滚轮缩放
  return map;
}

function registerComponents(
  componentsArr: [string, any][]
){
  componentsArr.forEach(([name, component]) => {
    customElements.define(name, component);
  })
}