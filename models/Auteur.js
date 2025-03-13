// models/Auteur.js

function estDateValide(dateStr) {
  const date = new Date(dateStr);
  return !isNaN(date.getTime());
}

export class Auteur {
    constructor(id, nom, prenom,date_naissance, nationalite) {
      this.id = id;
      this.nom = nom;
      this.prenom = prenom;
      this.date_naissance = date_naissance;
      this.nationalite = nationalite;      
    }
  
    // Validation
    estValide() {
      if (!this.nom || this.nom.trim() === '') {
        return { valide: false, erreur: "Le nom de l'auteur est requis" };
      }

      if (!this.prenom || this.prenom.trim() === '') {
        return { valide: false, erreur: "Le prenom de l'auteur est requis" };
      }
  
      if (this.date_naissance && !estDateValide(this.date_naissance)) {
         return { valide: false, erreur: "La date de naissance n'est pas valide" };      }

      if (this.nationalite && isNaN(this.nationalite)) {        
        return { valide: false, erreur: "La nationalite n'est pas valide" };
      }
  
      return { valide: true };
    }
  }
  