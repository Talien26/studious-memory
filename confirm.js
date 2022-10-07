function accept(){
    localStorage.removeItem("player1_name")
    localStorage.removeItem("player2_name")

    window.location = "index.html";
}
function decline(){
    window.location = "game_page.html";
}