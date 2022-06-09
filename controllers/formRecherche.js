// Imports
const formRecherche = require('../databases/formRecherche.js');

async function post(req, res, next) {


  let dataFormRecherche = getDataFormRecherche(req);

  try {
    dataFormRecherche = await formRecherche.insertFormRecherche(
      dataFormRecherche
    );
    res.status(201).json(dataFormRecherche);
  } catch (err) {
    console.log("prob");
    next(err);
  }
}
module.exports.post = post;


function getDataFormRecherche(req) {
  const dataFormRecherche = {

    nom_demande: req.body.nom_demande == null ? "" : req.body.nom_demande,
    nom: req.body.nom == null ? "" : req.body.nom,
    prenom: req.body.prenom == null ? "" : req.body.prenom,
    idft_fct_chefservice_pole :  req.body.idft_fct_chefservice_pole == null ? "" : req.body.idft_fct_chefservice_pole, 
    idft_fct_medecin :  req.body.idft_fct_medecin == null ? "" : req.body.idft_fct_medecin, 
    idft_fct_interne :  req.body.idft_fct_interne == null ? "" : req.body.idft_fct_interne, 
    idft_fct_cadre : req.body.idft_fct_cadre == null ? "" : req.body.idft_fct_cadre,      
    idft_fct_cadre_gestionnaire :  req.body.idft_fct_cadre_gestionnaire == null ? "" : req.body.idft_fct_cadre_gestionnaire, 
    idft_fct_directeur :  req.body.idft_fct_directeur == null ? "" : req.body.idft_fct_directeur, 
    idft_fct_autre :  req.body.idft_fct_autre == null ? "" : req.body.idft_fct_autre, 
    service_rattachement: req.body.service_rattachement == null ? "" : req.body.service_rattachement,
    coordonnees: req.body.coordonnees == null ? "" : req.body.coordonnees,
    mail: req.body.mail == null ? "" : req.body.mail,
    telephone: req.body.telephone == null ? "" : req.body.telephone,
    referent_medical: req.body.referent_medical == null ? "" : req.body.referent_medical,
    contexte: req.body.contexte == null ? "" : req.body.contexte,
    objectif: req.body.objectif == null ? "" : req.body.objectif,
    critere_inclusion: req.body.critere_inclusion == null ? "" : req.body.critere_inclusion,
    critere_exclusion: req.body.critere_exclusion == null ? "" : req.body.critere_exclusion,
    periode_donnees_demandees: req.body.periode_donnees_demandees == null ? "" : req.body.periode_donnees_demandees,
    perimetre_etude_votre_service: req.body.perimetre_etude_votre_service == null ? "" : req.body.perimetre_etude_votre_service,
    perimetre_plusieurs_services_chu: req.body.perimetre_plusieurs_services_chu == null ? "" : req.body.perimetre_plusieurs_services_chu,
    perimetre_plusieurs_etab_france: req.body.perimetre_plusieurs_etab_france == null ? "" : req.body.perimetre_plusieurs_etab_france,
    perimetre_plusieurs_etab_france_etranger: req.body.perimetre_plusieurs_etab_france_etranger == null ? "" : req.body.perimetre_plusieurs_etab_france_etranger,
    detail_types_donnees: req.body.detail_types_donnees == null ? "" : req.body.detail_types_donnees,
    publication_resultat: req.body.publication_resultat == null ? "" : req.body.publication_resultat,
    moyens_humains_financiers: req.body.moyens_humains_financiers == null ? "" : req.body.moyens_humains_financiers,
    delai_etude: req.body.delai_etude == null ? "" : req.body.delai_etude
  };

  return dataFormRecherche;
}
