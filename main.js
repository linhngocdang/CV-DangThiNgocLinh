const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const tabLinks = $$('.tab_link'); 
const tabItems = $$('.tab_item'); 

tabLinks.forEach((tab, index) => {
    var tabItemActive = tabItems[index]; 

    tab.onclick = function () {
        $('.tab_link.active').classList.remove('active');
        $('.tab_item.active').classList.remove('active');
        tab.classList.add('active'); 
        tabItemActive.classList.add('active');
    }
});

const navItems = $$('.nav-item')
navItems.forEach((item)=> {
    item.onclick = function() {
        $('.nav-item.active').classList.remove('active');
        item.classList.add('active');
    }
})

const scroll = $('.progress')

let scrollBtn = () => {
    var scrollTop = document.documentElement.scrollTop;
    // console.log(scrollTop)
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrollHeight = Math.round(scrollTop * 100 / height)

    if(scrollTop > 0) {
        scroll.style.display = 'flex';
    }else {
        scroll.style.display = 'none';
    }

    scroll.addEventListener('click', () =>{
        document.documentElement.scrollTop = 0
        $('.nav-item.active').classList.remove('active');
        $('.home').classList.add('active');
    })

    scroll.style.background =  `conic-gradient(#1A2980 ${scrollHeight}%, #26D0CE ${scrollHeight}%)`
}

window.onscroll = scrollBtn;

function start() {
    const section = $('.start_light')
    const count = 800;
    var i = 0;
    while (i < count) {
        const start = document.createElement('i');
        const x = Math.floor(Math.random() *window.innerWidth);
        const y = Math.floor(Math.random() *window.innerHeight);
        const size = Math.random() * 4;
        const duration = Math.random() * 2;

        start.style.left = x + 'px';
        start.style.top = y + 'px';
        start.style.width = 1 + size + 'px';
        start.style.height= 1+ size + 'px';
        start.style.animationDuration = duration * 2 +'s';
        start.style.animationDelay = duration +'s';

        section.appendChild(start);
        i++;
    }
}

start();


function handleNav() {
    const closeBtn = $('.nav-close-icon');
    const barBtn = $('.nav-bar-icon');

    barBtn.addEventListener('click',() => {
        console.log(this)
        $('.nav_list').style.right = '0px'
    })

    closeBtn.addEventListener('click',() => {
        console.log(this)
        $('.nav_list ').style.right = '-200px'
    })
}

handleNav();