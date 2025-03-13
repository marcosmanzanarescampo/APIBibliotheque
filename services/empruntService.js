// services/livreService.js
import { empruntRepository } from '../repositories/empruntRepository.js';
import { Emprunt } from '../models/Emprunt.js';

export const empruntService = {
  getAllEmprunts() {
    try{
      // Récuperation de tous les emprunts de la BBDD
      return empruntRepository.findAllEmprunts();      
    }
    catch(error){
      console.log('Error || empruntService || getAllEmprunts:' + error);
      throw new Error('Error || empruntService || getAllEmprunts' + error);
    }
  },
  
  getEmpruntByLivre(id) {
    try{
    // Récuperation d'un emprunt de la BBDD par son id
    return empruntRepository.findEmpruntByLivre(id);
    }
    catch(error){
      console.log('Error || empruntService || getAllEmprunts:' + error);
      throw new Error('Error || empruntService || getAllEmprunts:' + error);
    }
  },

  createEmprunt(empruntData) {
    try{
      const nouveauEmprunt = new Emprunt(        
        empruntData.date_emprunt,
        empruntData.exemplaire,
        empruntData.membre,
        empruntData.date_retour_prevue,
        empruntData.date_retour_effective,
      );

      // Validation via la méthode du modèle
      const validation = nouveauEmprunt.estValide();
      if (!validation.valide) {
        throw new Error(validation.erreur);
      }
  
      // Sauvegarde via repository
      return empruntRepository.createEmprunt(nouveauEmprunt);    
    }
    catch(error){
      console.log('Error || empruntService || createEmprunt:' + error);
      throw new Error('Error || empruntService || createEmprunt:' + error);
    }
  },

  deleteEmprunt(emprunt){
    try{
      // Suppresion du emprunt passé par paramètre
      return empruntRepository.deleteEmprunt(emprunt);
    }
    catch(error){
      console.log("Error supprimant l'emprunt");
      throw new Error("Error supprimant l'emprunt");
    }
  },

  updateEmprunt(empruntData) {
    try{
      const nouveauEmprunt = new Emprunt(
        empruntData.date_emprunt,
        empruntData.exemplaire,
        empruntData.membre,
        empruntData.date_retour_prevue,
        empruntData.date_retour_effective,
      );
  
      // Validation via la méthode du modèle
      const validation = nouveauEmprunt.estValide();
      if (!validation.valide) {
        throw new Error(validation.erreur);
      }
  
      // Sauvegarde via repository
      return empruntRepository.updateEmprunt(nouveauEmprunt);     
    }
    catch(error)
    {
      console.log('Error || empruntService || updateEmprunt:' + error);
      throw new Error('Error || empruntService || updateEmprunt:' + error);
    }
  }
};