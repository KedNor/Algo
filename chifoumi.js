//creation d'une fonction choix qui a pour parametre choix1 et choix2

function choix(choix1, choix2) {
    if (choix1 === choix2) {
      return 'Egalité';
    } else if (choix1 === 'pierre') {
      if (choix2 === 'ciseaux') {
        return 'pierre';
      } else if (choix2 === 'feuille') {
        return 'feuille';
      }
    } else if (choix1 === 'feuille') {
      if (choix2 === 'pierre') {
        return 'feuille';
      } else if (choix2 === 'ciseaux') {
        return 'ciseaux';
      }
    } else if (choix1 === 'ciseaux') {
      if (choix2 === 'pierre') {
        return 'pierre';
      } else if (choix2 === 'feuille') {
        return 'ciseaux';
      }
    }
  }
  
  // On commence la partie le joueur choisi en premier
  let scoreJoueur = 0;
  let scoreCPU = 0;

 
  //La partie se déroule en 3 manches
  //On boucle sur 3 manche 
  for (let manche = 0; manche < 3; manche++) {
    

    //Utilisation de Math.random pour générer un nombre aleatoire entre 0 et 1
    let tourDuCPU = Math.random();
    if (tourDuCPU < 0.33) {
        tourDuCPU = 'pierre';
    } else if(tourDuCPU <= 0.66) {
        tourDuCPU = 'feuille';
    } else {
        tourDuCPU = 'ciseaux';
    }
  
    console.log('ordi', tourDuCPU);
  
    // Menu pour le choix du joueur
    const tourJoueur = prompt('Choisi pierre, feuille, ou ciseaux ?');
  
    const resultat = choix(tourJoueur, tourDuCPU);
  
    // Resultat de la manche
  
    if (resultat === 'Egalité!') {
      console.log('=> Egalité !');
    } else if (resultat === tourJoueur) {
      console.log('=> Gagnant de la manche:', resultat, '(joueur)');
      scoreJoueur++;
    } else {
      console.log('=> Gagnant de la manche:', resultat, '(ordi)');
      scoreCPU++;
    }
  
  }
  
  //Afficher les Resultats
  
  let message;
  if (scoreCPU === scoreJoueur) {
    message = 'Egalité!';
  } else if (scoreCPU > scoreJoueur) {
    message = 'Perdu!';
  } else {
    message = 'Gagné!';
  }
  
  alert(message + ' ton score: ' + scoreJoueur + ', ordi: ' + scoreCPU);
