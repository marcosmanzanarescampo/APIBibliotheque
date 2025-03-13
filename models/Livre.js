// models/Livre.js

export class Livre {
    constructor(id, titre, isbn, annee_Publication, nb_Pages, editeur) {
      this.id = id;
      this.titre = titre;
      this.ISBN = isbn;
      this.annee_Publication = annee_Publication;
      this.nb_Pages = nb_Pages;
      this.editeur = editeur;
    }
  
    // Validation
    estValide() {
      if (!this.titre || this.titre.trim() === '') {
        return { valide: false, erreur: 'Le titre est requis' };
      }

      if (this.ISBN && this.ISBN.trim() === '') {
        return { valide: false, erreur: "format de l\'ISBN pas valide ou c'est vide" };
      }

      const date = new Date();
      if ((this.annee_Publication && isNaN(this.annee_Publication)) || (this.annee_Publication >= date.getFullYear()) || this.annee_Publication <= 0) {
        return { valide: false, erreur: "L\'année n'est pas valide" };
      }
      
      if (this.nb_Pages && isNaN(this.nb_Pages) || (this.nb_Pages <= 0)) {
        return { valide: false, erreur: "Le numèro de pages n'est pas valide" };
      }   
  
      if (this.editeur && isNaN(this.editeur) || this.editeur <= 0) {
        return { valide: false, erreur: "Le numèro de pages n'est pas valide" };
      } 

      return { valide: true };
    }
  
    // Méthodes métier
    estEmpruntable() {
      // Logique pour déterminer si le livre peut être emprunté
      return true;
    }
  }
  