async function recupJ1() {
    const liste = document.querySelector(".j1");
  ;
    let actualItems = [];

    for (let index = 0; index < liste.children.length; index++) {       //stocke tt les id déjà existant
        const element = liste.children[index];
        actualItems.push(element.id);
    }

    await fetch("/recupAdver").then(reponse => reponse.json())
        .then(async data => {
            data.forEach(async game => {

                await actualItems.splice(actualItems.indexOf(game._id), 1); // retire l'élément de la liste

                if (document.getElementById(game._id)) {
                    
                    liste.innerHTML = game.Username
                    
                }
                else {
                
                    liste.innerHTML = game.Username
                   
                    
                }

            });
        })
    }

