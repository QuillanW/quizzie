function toggleNav(idNav, idToggle) {
    let nav = document.getElementById(idNav);
    let toggle = document.getElementById(idToggle);
    nav.classList.toggle('hidden');
    // console.log(nav.classList.contains('hidden'))
    if (nav.classList.contains('hidden')) { toggle.innerText = 'show' }
    else { toggle.innerText = 'hide' }
}