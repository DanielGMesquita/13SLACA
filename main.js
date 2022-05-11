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
    document.body.classList.remove('menu-expanded')
}

function favoriteButton(){
    if(favorite.classList.contains('fav')){
        favorite.classList.remove('fav');
    }
    else{
        favorite.classList.add('fav')
    }
}