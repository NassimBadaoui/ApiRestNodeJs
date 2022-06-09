// Imports
const formDima = require('../databases/formDima.js');

async function post(req, res, next) {

    
    let dataFormDima = getDataFormDima(req);
  
  try{  
    dataFormDima = await formDima.insertFormDima(dataFormDima);
    res.status(201).json(dataFormDima);
  } catch (err) {
    console.log("prob");
    next(err);
}
}
module.exports.post = post;


function getDataFormDima(req) {  
  const dataFormDima = {

    nom_demande : req.body.nom_demande == null ? "" : req.body.nom_demande, 
    nom :  req.body.nom == null ? "" : req.body.nom, 
    prenom :  req.body.prenom == null ? "" : req.body.prenom, 
    idft_fct_chefservice_pole :  req.body.idft_fct_chefservice_pole == null ? "" : req.body.idft_fct_chefservice_pole, 
    idft_fct_medecin :  req.body.idft_fct_medecin == null ? "" : req.body.idft_fct_medecin, 
    idft_fct_interne :  req.body.idft_fct_interne == null ? "" : req.body.idft_fct_interne, 
    idft_fct_cadre : req.body.idft_fct_cadre == null ? "" : req.body.idft_fct_cadre,      
    idft_fct_cadre_gestionnaire :  req.body.idft_fct_cadre_gestionnaire == null ? "" : req.body.idft_fct_cadre_gestionnaire, 
    idft_fct_directeur :  req.body.idft_fct_directeur == null ? "" : req.body.idft_fct_directeur, 
    idft_fct_autre :  req.body.idft_fct_autre == null ? "" : req.body.idft_fct_autre, 
    service_rattachement :  req.body.service_rattachement == null ? "" : req.body.service_rattachement, 
    coordonnees :  req.body.coordonnees == null ? "" : req.body.coordonnees, 
    mail :  req.body.mail == null ? "" : req.body.mail, 
    telephone :  req.body.telephone == null ? "" : req.body.telephone, 
    referent_medical :  req.body.referent_medical == null ? "" : req.body.referent_medical, 
    demande_travail_academique :  req.body.demande_travail_academique == null ? "" : req.body.demande_travail_academique, 
    demande_recherche :  req.body.demande_recherche == null ? "" : req.body.demande_recherche, 
    demande_suivi_activite_eprd :  req.body.demande_suivi_activite_eprd == null ? "" : req.body.demande_suivi_activite_eprd, 
    demande_controle_qualite :  req.body.demande_controle_qualite == null ? "" : req.body.demande_controle_qualite, 
    demande_analyse_thematique :  req.body.demande_analyse_thematique == null ? "" : req.body.demande_analyse_thematique, 
    demande_registre :  req.body.demande_registre == null ? "" : req.body.demande_registre, 
    demande_autre : req.body.demande_autre == null ? "" : req.body.demande_autre,
    contexte :  req.body.contexte == null ? "" : req.body.contexte, 
    critere_inclusion :  req.body.critere_inclusion == null ? "" : req.body.critere_inclusion, 
    critere_exclusion :  req.body.critere_exclusion == null ? "" : req.body.critere_exclusion, 
    periode_donnees_demandees :  req.body.periode_donnees_demandees == null ? "" : req.body.periode_donnees_demandees, 
    perimetre_etude_votre_service :  req.body.perimetre_etude_votre_service == null ? "" : req.body.perimetre_etude_votre_service, 
    perimetre_plusieurs_services_chu :  req.body.perimetre_plusieurs_services_chu == null ? "" : req.body.perimetre_plusieurs_services_chu, 
    perimetre_plusieurs_etab_france :  req.body.perimetre_plusieurs_etab_france == null ? "" : req.body.perimetre_plusieurs_etab_france, 
    perimetre_plusieurs_etab_france_etranger :  req.body.perimetre_plusieurs_etab_france_etranger == null ? "" : req.body.perimetre_plusieurs_etab_france_etranger, 
    restitution_format_liste_non_identifiante :  req.body.restitution_format_liste_non_identifiante == null ? "" : req.body.restitution_format_liste_non_identifiante, 
    restitution_format_liste_identifiante : req.body.restitution_format_liste_identifiante == null ? "" : req.body.restitution_format_liste_identifiante, 
    restitution_format_donnees_agregees :  req.body.restitution_format_donnees_agregees == null ? "" : req.body.restitution_format_donnees_agregees, 
    restitution_format_rapport :  req.body.restitution_format_rapport == null ? "" : req.body.restitution_format_rapport, 
    variables_souhaitees :  req.body.variables_souhaitees == null ? "" : req.body.variables_souhaitees, 
    delai_etude  :  req.body.delai_etude == null ? "" : req.body.delai_etude
  };

  return dataFormDima;
}
