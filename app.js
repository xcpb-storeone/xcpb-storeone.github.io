var toggle_btn,big_wrapper,hamburger_menu;function declare(){toggle_btn=document.querySelector(".toggle-btn"),big_wrapper=document.querySelector(".big-wrapper"),hamburger_menu=document.querySelector(".hamburger-menu")}const main=document.querySelector("main");declare();let dark=!1;function toggleAnimation(){dark=!dark;let e=big_wrapper.cloneNode(!0);dark?(e.classList.remove("light"),e.classList.add("dark")):(e.classList.remove("dark"),e.classList.add("light")),e.classList.add("copy"),main.appendChild(e),document.body.classList.add("stop-scrolling"),e.addEventListener("animationend",()=>{document.body.classList.remove("stop-scrolling"),big_wrapper.remove(),e.classList.remove("copy"),declare(),events()})}function events(){toggle_btn.addEventListener("click",toggleAnimation),hamburger_menu.addEventListener("click",()=>{big_wrapper.classList.toggle("active")})}events();
                                                       /* 
  ██████╗ ██╗     ██████╗ ███╗   ███╗██╗  ██╗███╗   ██╗
 ██╔═████╗██║     ██╔══██╗████╗ ████║██║  ██║████╗  ██║
 ██║██╔██║██║     ██║  ██║██╔████╔██║███████║██╔██╗ ██║
 ████╔╝██║██║     ██║  ██║██║╚██╔╝██║╚════██║██║╚██╗██║
 ╚██████╔╝███████╗██████╔╝██║ ╚═╝ ██║     ██║██║ ╚████║
  ╚═════╝ ╚══════╝╚═════╝ ╚═╝     ╚═╝     ╚═╝╚═╝  ╚═══╝ 
                                                      */