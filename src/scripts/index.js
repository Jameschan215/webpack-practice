import '../styles/style.css';
import { greeting } from './greeting.js';

const header = document.querySelector('h1');
header.textContent = greeting;

const imgWrapper = document.createElement('div');
imgWrapper.classList.add('img-wrapper');

const img = document.createElement('img');
img.src =
	'https://plus.unsplash.com/premium_photo-1675006717262-a8f9aed248a3?q=80&w=1364&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';
img.alt = 'Bamboo';

imgWrapper.appendChild(img);

document.body.appendChild(imgWrapper);
