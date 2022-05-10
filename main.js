window.addEventListener('scroll', OnScroll)

onScroll()
function OnScroll(){
    showNavOnScroll()
}

function showNavOnScroll(){
    if (scrollY > 0){
        navigation.classList.add('scroll')
    }
    else {
        navigation.classList.remove('scroll')
    }
}

function openMenu(){
    document.body.classList.add('menu-expanded')
}

function closeMenu(){
    documento.body.classList.remove('menu-expanded')
}