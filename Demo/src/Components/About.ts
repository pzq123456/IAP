import 'https://cdn.jsdelivr.net/npm/chart.js';
declare var Chart: any;
export class About extends HTMLElement {
    member: string[][];
    posts: string[][];
    constructor(
        member: string[][],
        posts: string[][],
        fatherContainer: HTMLDivElement = document.querySelector<HTMLDivElement>('.diolague')!
    ) {
        // Always call super first in constructor
        super();
        this.member = member;
        this.posts = posts;
        // 首先创建一个 shadow root
        const shadow = this.attachShadow({ mode: 'open' });

        // 然后在右上角添加一个关闭按钮
        const closeButton = document.createElement('button');
        closeButton.setAttribute('class', 'closeButton');
        closeButton.textContent = 'X';
        closeButton.addEventListener('click', () => {
            fatherContainer.style.display = 'none';
            // 使用 dark图层
            let DarkLayer = document.querySelector<HTMLDivElement>('.DarkLayer')!;
            DarkLayer.style.display = 'none';
            // 清空
            shadow.innerHTML = '';
        });

        const wrapper = document.createElement('div');
        wrapper.setAttribute('class', 'wrapper');
        let style = document.createElement('style');
        style.textContent = `
        .wrapper{
            width: 100%;
            height: 920px;
            background-color: rgb(255, 255, 255, 0.5);
            border-radius: 10px;
            box-shadow: 0 0 10px rgba(0,0,0,0.5);
            overflow: auto;

        }
        
        .closeButton{
            position: absolute;
            top: 0;
            right: 0;
            border: none;
            background-color: red;
            border-radius: 30%;
            width: 30px;
            height: 30px;
            font-size: 20px;
            color: white;
        }

        .closeButton:hover{
            background-color: rgb(255, 0, 0, 0.5);
        }

        `;
        shadow.appendChild(style);
        wrapper.appendChild(closeButton);
        shadow.appendChild(wrapper);

        let memberArr = []; // 存放成员的div
        let postsArr = []; // 存放景点的div

        for(let i = 0; i < this.member.length; i++){
            let memberDiv = document.createElement('div');
            memberDiv.setAttribute('class', 'memberDiv');
            let memberName = document.createElement('div');
            memberName.setAttribute('class', 'memberName');
            memberName.textContent = this.member[i][0];
            let memberLink = document.createElement('a');
            memberLink.setAttribute('class', 'memberLink');
            memberLink.setAttribute('href', this.member[i][1]);
            memberLink.setAttribute('target', '_blank');
            let memberImg = document.createElement('img');
            memberImg.setAttribute('class', 'memberImg');
            memberImg.setAttribute('src', this.member[i][2]);
            memberLink.appendChild(memberImg);
            memberDiv.appendChild(memberName);
            memberDiv.appendChild(memberLink);
            memberArr.push(memberDiv);
        }

        for(let i = 0; i < this.posts.length; i++){
            let postDiv = document.createElement('div');
            postDiv.setAttribute('class', 'postDiv');
            let postName = document.createElement('div');
            postName.setAttribute('class', 'postName');
            postName.textContent = this.posts[i][0];
            let postText = document.createElement('div');
            postText.setAttribute('class', 'postText');
            postText.textContent = this.posts[i][1];
            let postImg = document.createElement('img');
            postImg.setAttribute('class', 'postImg');
            postImg.setAttribute('src', this.posts[i][2]);
            postDiv.appendChild(postName);
            postDiv.appendChild(postText);
            postDiv.appendChild(postImg);
            postsArr.push(postDiv);
        }

        let memberWrapper = document.createElement('div');
        memberWrapper.setAttribute('class', 'memberWrapper');
        let memberTitle = document.createElement('div');
        memberTitle.setAttribute('class', 'memberTitle');
        memberTitle.textContent = '成员介绍';
        memberWrapper.appendChild(memberTitle);
        memberArr.forEach((member) => {
            memberWrapper.appendChild(member);
        }
        );

        let postWrapper = document.createElement('div');
        postWrapper.setAttribute('class', 'postWrapper');
        let postTitle = document.createElement('div');
        postTitle.setAttribute('class', 'postTitle');
        postTitle.textContent = '景点介绍';
        postWrapper.appendChild(postTitle);
        postsArr.forEach((post) => {
            postWrapper.appendChild(post);
        }
        );
        wrapper.appendChild(postWrapper);
        wrapper.appendChild(memberWrapper);

        let memberStyle = document.createElement('style');
        memberStyle.textContent = `
        .memberWrapper{
            width: 100%;
            height: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
          }

          .memberTitle{
            font-size: 30px;
            font-weight: bold;
          }

          .memberDiv{
            width: 100%;
            height: 100px;
            display: flex;
            align-items: center;
            justify-content: center;
          }

          .memberName{
            font-size: 20px;
            font-weight: bold;
            margin-right: 20px;
          }

          .memberLink{
            width: 100px;
            height: 100px;
            display: flex;
            align-items: center;
            justify-content: center;
          }

          .memberImg{
            width: 100px;
            height: 100px;
            border-radius: 50%;
          }          
          `;

        let postStyle = document.createElement('style');
        postStyle.textContent = `
        .postWrapper{
            width: 100%;
            height: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
          }

          .postTitle{
            font-size: 30px;
            font-weight: bold;
          }

          .postDiv{
            width: 100%;
            height: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
          }

          .postName{
            font-size: 20px;
            font-weight: bold;
            margin-bottom: 20px;
          }

          .postText{
            border: 1px solid black;
            border-radius: 10px;
            background-color: rgb(255, 255, 255, 0.5);
          }

          .postImg{
            border-radius: 10px;
          }

          `;

        shadow.appendChild(memberStyle);
        shadow.appendChild(postStyle);

    }
}




/**
 * let member = [
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
 */
/**
 *   let posts = [
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
 */