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
  }
  