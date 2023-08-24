// toggle navbar-nav
const navbarNav = document.querySelector('.navbar .navbar-nav')

document.querySelector('#menu').onclick = (e) => {
    navbarNav.classList.toggle('active')
    e.preventDefault()
}

// click any to close
const menu = document.querySelector('#menu')

document.addEventListener('click', function(e) {
    if(!menu.contains(e.target) && !navbarNav.contains(e.target)) {
        navbarNav.classList.remove('active')
    }
})

// stretched-link
function redirectTo(url) {
    window.location.href = url
}

// waifu
const waifu = document.getElementById('waifu')
const waifuList = [
    'MifuneShioriko',
    'YukiSetsuna',
    'NakanoItsuki',
    // 'FuruhashiFumino',
    'Pareo',
]
const random = Math.floor(Math.random() * waifuList.length)

waifu.innerHTML = waifuList[random]

// greeting
const greeting = document.getElementById('greeting')
const hour = new Date().getHours()

if(hour >= 18 || hour < 5) {
    greeting.innerHTML = 'Konbanwa!'
} else if(hour >= 11) {
    greeting.innerHTML = 'Konnichiwa!'
} else if(hour >= 5) {
    greeting.innerHTML = 'Ohayou gozaimasu!'
} else {
    greeting.innerHTML = 'Error desu.'
}

// theme
const toggleBtn = document.getElementById('theme-toggle')
const body = document.body

toggleBtn.addEventListener('click', (e) => {
    body.classList.toggle('dark-theme')

    if(body.classList.contains('dark-theme')) {
        localStorage.setItem('theme', 'dark')
        toggleBtn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-moon"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>'
    } else {
        localStorage.setItem('theme', 'light')
        toggleBtn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-sun"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>'
    }

    e.preventDefault()
})

const savedTheme = localStorage.getItem('theme')

if(savedTheme === 'dark') {
    body.classList.add('dark-theme')
    toggleBtn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-moon"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>'
} else {
    toggleBtn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-sun"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>'
}