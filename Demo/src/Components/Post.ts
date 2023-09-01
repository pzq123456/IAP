
export class Post extends HTMLElement{
  constructor(){
    // Always call super first in constructor
    super();
    // Create a shadow root
    const shadow = this.attachShadow({mode: 'open'});
    // get text
    this.text = this.getAttribute('text');
    // get imgURL
    this.imgURL = this.getAttribute('imgURL');

    // create div
    const div = document.createElement('div');  
    div.setAttribute('class', 'post');

    // create p
    const p = document.createElement('p');
    p.textContent = this.text;
    // Add the p element to the shadow root
    div.appendChild(p);

    // create image
    const img = document.createElement('img');
    img.alt = 'MDN';
    img.src = this.imgURL;
    img.width = 100;
    img.height = 100;

    // Add the image to the shadow root
    div.appendChild(img);

    // Attach the created elements to the shadow dom
    shadow.appendChild(div);
  }
}