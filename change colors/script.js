let index=0;

function changeColors(){
    let colors=["red", "black", "yellow", "green", "purple", "white", "orange", "red"];

    document.getElementsByTagName("body")[0].
    style.background=colors[index++];

    if(index >colors.length-1)
    index=0;
}