import { data, activePage } from '../../../common/variables.js';

document.querySelector(".active-page-content").innerHTML = `Incoming Message: ${data.data}`;
document.querySelector(".active-page-header").innerHTML = `${activePage}`;

