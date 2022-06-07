const oracledb = require('oracledb');
const database = require('./database.js');


const INSERT_SIA_FORM_RECHERCHE =
  "INSERT INTO SIA_FORM_RECHERCHE\n"+
  "(ID_SIA_FORM_DIMA, DATE_DEMANDE, NOM_DEMANDE, NOM, PRENOM,\n"+
  "IDENTIFICATION_FONCTION_CHEFSERVICE_POLE, IDENTIFICATION_FONCTION_MEDECIN, IDENTIFICATION_FONCTION_INTERNE, IDENTIFICATION_FONCTION_CADRE,\n"+
  "IDENTIFICATION_FONCTION_CADRE_GESTIONNAIRE, IDENTIFICATION_FONCTION_DIRECTEUR, IDENTIFICATION_FONCTION_AUTRE, SERVICE_RATTACAHEMENT,\n"+
  "COORDONNEES, MAIL, TELEPHONE, REFERENT_MEDICAL, DEMANDE_TRAVAIL_ACADEMIQUE, DEMANDE_RECHERCHE, DEMANDE_SUIVI_ACTIVITE_EPRD, DEMANDE_CONTROLE_QUALITE,\n"+
  "DEMANDE_ANALYSE_THEMATIQUE, DEMANDE_REGISTRE, DEMANDE_AUTRE, CONTEXTE, CRITERE_INCLUSION, CRITERE_EXCLUSION, PERIODE_DONNEES_DEMANDEES, PERIMETRE_ETUDE_VOTRE_SERVICE,\n"+
  "PERIMETRE_PLUSIEURS_SERVICES_CHU, PERIMETRE_PLUSIEURS_ETABLISSEMENT_FRANCE, PERIMETRE_PLUSIEURS_ETABLISSEMENT_FRANCE_ETRANGER, RESTITUTION_FORMAT_LISTE_NON_IDENTIFIANTE,\n"+
  "RESTITUTION_FORMAT_LISTE_IDENTIFIANTE, RESTITUTION_FORMAT_DONNEES_AGREGEES, RESTITUTION_FORMAT_RAPPORT, VARIABLES_SOUHAITEES, DELAI_ETUDE)\n"+
  "VALUES (SEQ_SIA_FORM_DIMA.NEXTVAL, SYSDATE, :nom_demande, :nom, :prenom, :idft_fct_chefservice_pole, :idft_fct_medecin, :idft_fct_interne, :idft_fct_cadre, \n"+
  ":idft_fct_cadre_gestionnaire, :idft_fct_directeur, :idft_fct_autre, :service_rattachement, :coordonnees, :mail, :telephone, :referent_medical, \n"+
  ":demande_travail_academique, :demande_recherche, :demande_suivi_activite_eprd, :demande_controle_qualite, :demande_analyse_thematique, :demande_registre,\n"+
  ":demande_autre, :contexte, :critere_inclusion, :critere_exclusion, :periode_donnees_demandees, :perimetre_etude_votre_service, :perimetre_plusieurs_services_chu, \n"+
  ":perimetre_plusieurs_etab_france, :perimetre_plusieurs_etab_france_etranger, :restitution_format_liste_non_identifiante, :restitution_format_liste_identifiante, \n"+
  ":restitution_format_donnees_agregees, :restitution_format_rapport, :variables_souhaitees, :delai_etude)";
  /*"RETURNING UTIL INTO :conId";*/

async function insertFormRecherche(data) {
  const dataFormRecherche = Object.assign({}, data); 
  const result = await database.simpleDimExecute(INSERT_SIA_FORM_RECHERCHE, dataFormRecherche);
  //conDesc.conId = result.outBinds.conId[0];
  return dataFormRecherche;
}

module.exports.insertFormRecherche = insertFormRecherche;

