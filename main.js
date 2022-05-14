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
    beforeTopic.classList.add('topic-start')
    topicForm.classList.add('open-form')
}

function submitTopic(){
    topicForm.classList.remove('open-form')
    topicForm.classList.add('topic-sent')
    afterForm.classList.add('topic-sent')
}

function restartForum(){
    beforeTopic.classList.remove('topic-start')
    topicForm.classList.remove('topic-sent')
    afterForm.classList.remove('topic-sent')
}

function boldText(){

}

function italicText(){

}

function likeButton(){
    if(like1.classList.contains('liked')){
        like1.classList.remove('liked');
        numLikes1.classList.remove('liked');
        removeLike1.classList.remove('liked');
        plural.classList.remove('liked')

    }
    else{
        like1.classList.add('liked');
        numLikes1.classList.add('liked');
        removeLike1.classList.add('liked');
        plural.classList.add('liked')
    }
}


function like2Button(){
    if(like2.classList.contains('liked')){
        like2.classList.remove('liked');
        numLikes2.classList.remove('liked');
        removeLike2.classList.remove('liked');

    }
    else{
        like2.classList.add('liked');
        numLikes2.classList.add('liked');
        removeLike2.classList.add('liked');
    }
}

function showReplies(){
    if(replies.classList.contains('expanded')){
        replies.classList.remove('expanded');
    }
    else{
        replies.classList.add('expanded')
    }
    
}