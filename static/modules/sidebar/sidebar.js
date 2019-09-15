import { sidebarContainer, sidebarItem } from './html.js';
import { navbarContainer } from '../header/html.js';
export { Sidebar };

function Sidebar() {
    const sidebar = new DOMParser().parseFromString(sidebarContainer, "text/html");
    sidebar.querySelector(".nav").innerHTML = sidebarItem

    return sidebar.body.innerHTML;
} 