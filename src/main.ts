// 禁用 TS2304 检查器，因为我们将使用 require 语句
// @ts-nocheck
import { createToolBar } from './helpers/toolBar.ts'
import * as Fun from './funs.ts'
// components
import { Yield } from './Components/Chart1.ts';
import { Post } from './Components/Post.ts';
import { Flow } from './Components/Chart2.ts';
import { About } from './Components/About.ts';
import { PathsCom } from './Components/Paths.ts';
import { Weather } from './Components/weather.ts';
import { TOD, TODNode } from './Components/Tod.ts';
import { BtnList, BtnNode, createBtnList } from './Components/BtnList.ts';

declare const BMapGL: any;

// =============初始化代码区域================ 
const map = initMap(); // 初始化地图并返回地图实例
const view = initview(map);
// map.setMapStyleV2({     
//   styleId: 'dbe14c2d25e7b5be5876be5de4fe5039'
// });

// 注册组件 

const componentsArr = [
  ['yield-info', Yield],
  ['post-card', Post],
  ['flow-info', Flow],
  ['about-info', About],
  ['paths-info', PathsCom],
  ['weather-info', Weather],
  ['tod-node',TODNode],
  ['to-d',TOD],
  ['btn-list',BtnList],
  ['btn-node',BtnNode]
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
  { name: '景点客流展示', action: () =>  Fun.function3(map)},
  { name: '餐饮查询', action: () =>  Fun.function4(map)},
  { name: '热力图', action: () =>  Fun.function5(map,view)},
  { name: '最短路径查询', action: () =>  Fun.function6(map)},
  { name: '栅格', action: () =>  Fun.function8(map)},
  { name: 'toggle组件', action: () =>  toggleComponent()},
  { name: '关于', action: () =>  about()},
  { name: '清除组件', action: () =>  removeComponents()},
  // { name: 'test', action: () =>  testPost()},
],20)
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
  const flowInfo = new Flow([1,2,3,4,5,6,7,8,9,10],['2005','2006','2007','2008','2009','2010','2011','2012','2013','2014'],'test','时间');
  // 然后将组件添加到页面中
  fatherContainer.appendChild(flowInfo);
}

function removeComponents(
  fatherContainer: HTMLDivElement = document.querySelector<HTMLDivElement>('#components')!
){
  // 从页面中移除所有组件
  fatherContainer.innerHTML = '';
  // 顺便清空画布
  map.clearOverlays();
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
function initview(map:any){
  //创建view
  var view = new mapvgl.View({
    map: map
  });
    return view;
  }

function registerComponents(
  componentsArr: [string, any][]
){
  componentsArr.forEach(([name, component]) => {
    customElements.define(name, component);
  })
}

function about(
  fatherContainer: HTMLDivElement = document.querySelector<HTMLDivElement>('.diolague')!
){
  fatherContainer.style.display = 'block' ;
  // 使用 dark图层 
  let DarkLayer = document.querySelector<HTMLDivElement>('.DarkLayer')!;
  DarkLayer.style.display = 'block';

  let member = [
    [
      'LM','https://github.com/lm17865996839','https://avatars.githubusercontent.com/u/137787028?v=4'
    ],
    [
      'ZQY','https://github.com/zqy716','https://avatars.githubusercontent.com/u/137897135?v=4'
    ],
    [
      'LJY','',''
    ],
    [
      'pzq','https://github.com/pzq123456',"https://avatars.githubusercontent.com/u/82391775?s=400&u=97bc1bb95645ba4706c8098649a8b7f8642f2cbd&v=4"
    ]
  ]

  let posts = [
    [
      '景点1',
      'Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. ',
      'https://th.bing.com/th/id/OIP.wJTY76nSSoIuGgPMirHxOwHaE6?w=281&h=186&c=7&r=0&o=5&pid=1.7'
    ],
    [
      '景点2',
      'Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. ',
      'https://th.bing.com/th/id/OIP.olcJsUUpkoQZS5_XVWKP9AHaEL?w=330&h=186&c=7&r=0&o=5&pid=1.7'
    ],
    [
      '景点3',
      'Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. ',
      'https://th.bing.com/th/id/OIP.01UVN2O7t0CZWrc5QP0IyAHaD6?w=300&h=180&c=7&r=0&o=5&pid=1.7'
    ],
  ]

  // 创建组件
  const about = new About(member,posts,fatherContainer);
  // 然后将组件添加到页面中
  fatherContainer.appendChild(about);
}

function testPost(){
  let btnInfo = [
    {name:'test1',action:()=>{console.log('test1')}},
    {name:'test2',action:()=>{console.log('test2')}},
    {name:'test3',action:()=>{console.log('test3')}},
    {name:'test4',action:()=>{console.log('test4')}},
    {name:'test5',action:()=>{console.log('test5')}},
  ]
  const btnList = new BtnList(btnInfo);
  // conponent.appendChild(btnList);
  // let compo = document.querySelector<HTMLDivElement>('#components')!;
  // compo.appendChild(btnList);
  createBtnList(btnInfo);
}