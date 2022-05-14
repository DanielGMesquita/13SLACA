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

function openSummary(){
    summary.classList.add('text-expanded')
}

function closeSummary(){
    summary.classList.remove('text-expanded')
}

function favoriteButton(){
    if(favorite.classList.contains('fav')){
        favorite.classList.remove('fav');
    }
    else{
        favorite.classList.add('fav')
    }
}

function createTopic(){
    forum.classList.add('topic-start')
}

function submitTopic(){
    forum.classList.remove('topic-start')
    forum.classList.add('topic-sent')
}

function boldText(){

}

function italicText(){

}

function likeButton(){
    if(like.classList.contains('liked')){
        like.classList.remove('liked');
        plural.classList.remove('plus');
    }
    else{
        like.classList.add('liked');
        plural.classList.add('plus');
    }
}