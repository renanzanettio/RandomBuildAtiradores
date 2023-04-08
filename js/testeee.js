
function gerarBuild() {
    var champions = ["champ01", "champ02", "champ03", "champ04", "champ05", "champ06", "champ07", "champ08", "champ09", "champ10", "cham11", "champ12", "champ13", "champ14", "champ15", "champ16", "champ17"];
    var champion = champions[Math.floor(Math.random() * champions.length)];
    var gerarChampion = "<img src='imgs/bonecos/" + champion + ".png' class='champ-icon'>"


    var miticos = ["mythic01", "mythic02", "mythic03", "mythic04", "mythic05", "mythic06"];
    var mitico = miticos[Math.floor(Math.random() * miticos.length)];
    var gerarMitico = "<img src='imgs/mitico/" + mitico + ".webp' class='icons'>"


    var botas = ["boots01", "boots02", "boots03", "boots04", "boots05", "boots06", "boots07"];
    var bota = botas[Math.floor(Math.random() * botas.length)];
    var gerarBota = "<img src='imgs/bota/" + bota + ".webp' class='icons'>"


    var lendarios1 = ["legendary03", "legendary10", "legendary11", "legendary15", "legendary20"];
    var lendario1 = lendarios1[Math.floor(Math.random() * lendarios1.length)];
    var gerarLendario1 = "<img src='imgs/lendarios/" + lendario1 + ".webp' class='icons'>"


    var lendarios2 = ["legendary02", "legendary07", "legendary08", "legendary12", "legendary14"];
    var lendario2 = lendarios2[Math.floor(Math.random() * lendarios2.length)];
    var gerarLendario2 = "<img src='imgs/lendarios/" + lendario2 + ".webp' class='icons'>"


    var lendarios3 = ["legendary01", "legendary04", "legendary16", "legendary17", "legendary18"]
    var lendario3 = lendarios3[Math.floor(Math.random() * lendarios3.length)];
    var gerarLendario3 = "<img src='imgs/lendarios/" + lendario3 + ".webp' class='icons'>"


    var lendarios4 = ["legendary05", "legendary06", "legendary09", "legendary13", "legendary19"]
    var lendario4 = lendarios4[Math.floor(Math.random() * lendarios4.length)];
    var gerarLendario4 = "<img src='imgs/lendarios/" + lendario4 + ".webp' class='icons'>"


    var build = "<br><div class='champ-icon'><p class='text-center color1'>Champion Selecionado:</p><script>" + gerarChampion + "</script></div><div style='display: flex; align-items: center;'><div class='row items'><div class='div-icons'><script>" + gerarBota + "</script></div><div class='div-icons'><script>" + gerarMitico +"</script></div><div class='div-icons'><script>" + gerarLendario1 +"</script></div><div class='div-icons'><script>" + gerarLendario2 +"</script></div><div class='div-icons'><script>" + gerarLendario3 + "</script></div><div class='div-icons'><script>" + gerarLendario4 + "</script></div></div></div>"

    document.getElementById("conteudo").innerHTML = build;
}