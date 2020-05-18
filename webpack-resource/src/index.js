import _ from 'lodash';
import './style.css';
import singapore from './Singapore.jpg';
import data from './data.xml';

function component() {
    let element = document.createElement('div');
    
    element.innerHTML = _.join(['Hello', 'singapore'], ' ');
    element.classList.add('hello');

    let image = new Image();
    image.src = singapore;
    element.appendChild(image);

    console.log(data);

    return element;
  }

document.body.appendChild(component());