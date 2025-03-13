// routes/routes.js
import { livreController } from '../controllers/livreController.js';
import { auteurController } from '../controllers/auteurController.js';
import { empruntController } from '../controllers/empruntController.js';
import { logger } from '../utils/logger.js';

export const routes = (req, res) => {
  const url = req.url;
  const method = req.method;

  // Routes pour les livres
  if (url === '/api/livres' && method === 'GET') {//ok
    livreController.getAllLivres(req, res);
  }
  else if (url === '/api/livres' && method === 'POST') {//ok
    livreController.createLivre(req, res);
  }
  else if (url.match(/^\/api\/livres\/([0-9]+)$/) && method === 'GET') {//ok
    const id = url.split('/')[3];
    livreController.getLivreById(req, res, parseInt(id));
  }
  else if (url.match(/^\/api\/livres\/([0-9]+)$/) && method === 'PUT') {//ok
    const id = url.split('/')[3];
    livreController.updateLivre(req, res, parseInt(id));
  }
  else if (url.match(/^\/api\/livres\/([0-9]+)$/) && method === 'DELETE') {//ok
    const id = url.split('/')[3];
    livreController.deleteLivre(req, res, parseInt(id));
  }

  // Routes pour les auteurs (à implémenter)
  else  if (url === '/api/auteurs' && method === 'GET') { //ok
    auteurController.getAllAuteurs(req, res);
  }
  else if (url === '/api/auteurs' && method === 'POST') { //ok
    auteurController.createAuteur(req, res);
  }
  else if (url.match(/^\/api\/auteurs\/([0-9]+)$/) && method === 'GET') {//ok
    const id = url.split('/')[3];
    auteurController.getAuteurById(req, res, parseInt(id));
  }
  else if (url.match(/^\/api\/auteurs\/([0-9]+)$/) && method === 'PUT') {//ok
    const id = url.split('/')[3];
    auteurController.updateAuteur(req, res, parseInt(id));
  }
  else if (url.match(/^\/api\/auteurs\/([0-9]+)$/) && method === 'DELETE') {//ok
    const id = url.split('/')[3];
    auteurController.deleteAuteur(req, res, parseInt(id));
  }  
  // Routes pour les auteurs (à implémenter) *******************************
  else  if (url === '/api/emprunts' && method === 'GET') {//ok
    empruntController.getAllEmprunts(req, res);
  }
  else if (url.match(/^\/api\/emprunts\/([0-9]+)$/) && method === 'GET') { //ok
    const id = url.split('/')[3];    
    empruntController.getEmpruntByLivre(req, res, parseInt(id));
  }
  else if (url === '/api/emprunts' && method === 'POST') { //ok
    empruntController.createEmprunt(req, res);
  }
  else if (url === '/api/emprunts' && method === 'PATCH') { //ok
    const id = url.split('/')[3];
    empruntController.updateEmprunt(req, res, parseInt(id));
  }
  else if ('/api/emprunts' && method === 'DELETE') { //ok
    const id = url.split('/')[3];
    empruntController.deleteEmprunt(req, res);
  }
  else if(url.match(/^\/api\/livres\?categorie=\d+$/) && method === 'GET'){
    const categorie = url.split('=')[1];
    livreController.getAllLivresByCategorie(req, res, parseInt(categorie));       
  }
  else if(url.match(/^\/api\/livres\?auteur=\d+$/) && method === 'GET'){
    const auteur = url.split('=')[1];
    livreController.getAllLivresByAuteur(req, res, parseInt(auteur));       
  }
  // Routes pour les emprunts **********************************

  // Route non trouvée
  else {
    logger.warn(`Route non trouvée: ${method} ${url}`);
    res.writeHead(404, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ success: false, error: 'Route non trouvée' }));
  }
};
