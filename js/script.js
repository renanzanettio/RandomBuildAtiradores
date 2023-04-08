

function gerarChampion() {
    var champions = ["champ01", "champ02", "champ03", "champ04", "champ05", "champ06", "champ07", "champ08", "champ09", "champ10", "champ11", "champ12", "champ13", "champ14", "champ15", "champ16", "champ17"];
    var champion = champions[Math.floor(Math.random() * champions.length)];


    document.getElementById("gerarchampion").innerHTML = "<br><p class='text-center color1'>Champion Selecionado:</p><img src='imgs/bonecos/" + champion + ".png' class='champ-icon'>";
}


function gerarMitico() {
    var miticos = ["mythic01", "mythic02", "mythic03", "mythic04", "mythic05", "mythic06"];
    var mitico = miticos[Math.floor(Math.random() * miticos.length)];

    document.getElementById("gerarbota").innerHTML = "<img src='imgs/mitico/" + mitico + ".webp' class='icons'>"
}

function gerarBota() {
    var botas = ["boots01", "boots02", "boots03", "boots04", "boots05", "boots06", "boots07"];
    var bota = botas[Math.floor(Math.random() * botas.length)];

    document.getElementById("gerarmitico").innerHTML = "<img src='imgs/bota/" + bota + ".webp' class='icons'>"
}

function gerarLendario1() {
    var lendarios = ["legendary03", "legendary10", "legendary11", "legendary15", "legendary20"];
    var lendario = lendarios[Math.floor(Math.random() * lendarios.length)];

    document.getElementById("gerarlendario1").innerHTML = "<img src='imgs/lendarios/" + lendario + ".webp' class='icons'>"
}

function gerarLendario2() {
    var lendarios = ["legendary02", "legendary07", "legendary08", "legendary12", "legendary14"];
    var lendario = lendarios[Math.floor(Math.random() * lendarios.length)];

    document.getElementById("gerarlendario2").innerHTML = "<img src='imgs/lendarios/" + lendario + ".webp' class='icons'>"
}

function gerarLendario3() {
    var lendarios = ["legendary01", "legendary04", "legendary16", "legendary17", "legendary18"]
    var lendario = lendarios[Math.floor(Math.random() * lendarios.length)];

    document.getElementById("gerarlendario3").innerHTML = "<img src='imgs/lendarios/" + lendario + ".webp' class='icons'>"
}

function gerarLendario4() {
    var lendarios = ["legendary05", "legendary06", "legendary09", "legendary13", "legendary19"]
    var lendario = lendarios[Math.floor(Math.random() * lendarios.length)];

    document.getElementById("gerarlendario4").innerHTML = "<img src='imgs/lendarios/" + lendario + ".webp' class='icons'>"
}

function apagarConteudoInicial(){
    document.getElementById("conteudo").innerHTML = "";
}

function conteudoInicial(){
    var boasvindas = "<div class='text-center container-md conteudo-inicial'><br><p><h2>Olá invocador</h2>Seja bem vindo(a) ao site de builds aleatórias para Atiradores (ou AD carrys) do League of Legends, aqui você irá encontrar as piores e mais estranhas builds da Ranqueada brasileira.</p></div>";

    document.getElementById("conteudo").innerHTML = boasvindas;
}