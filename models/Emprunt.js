// models/Emprunt.js

function estDateValide(dateStr) {
    const date = new Date(dateStr);
    return !isNaN(date.getTime());
  }

export class Emprunt {
    constructor(date_emprunt, exemplaire, membre, date_retour_prevue, date_retour_effective) {
      this.date_emprunt = date_emprunt;
      this.exemplaire = exemplaire;
      this.membre = membre;
      this.date_retour_prevue = date_retour_prevue;
      this.date_retour_effective = date_retour_effective;
    }
  
    // Validation
    estValide() {
            
    if (this.date_emprunt && !estDateValide(this.date_emprunt)) {
        //Date répresentée comme un timestamp
        return { valide: false, erreur: "La date d'emprunt n'est pas une date" };
    }

    if (this.exemplaire && isNaN(this.exemplaire)) {
        
        return { valide: false, erreur: "L'exemplaire n'est pas valide" };
    }

    if (this.membre && isNaN(this.membre)) {
        return { valide: false, erreur: "Le membre n'est pas valide" };
    }

    if (this.date_retour_prevue && !estDateValide(this.date_emprunt)) {
        //Date répresentée comme un timestamp
        return { valide: false, erreur: "La date de retour pruevue n'est pas valide" };
    }

    if (this.date_retour_effective && !estDateValide(this.date_emprunt)) {
        //Date répresentée comme un timestamp
        return { valide: false, erreur: "La date de retour effective n'est pas valide" };
    } 

    return { valide: true, data: this };
    }
  }
  