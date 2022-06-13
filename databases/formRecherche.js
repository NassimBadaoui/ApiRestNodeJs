const oracledb = require('oracledb');
const database = require('./database.js');


const INSERT_SIA_FORM_RECHERCHE =
  "INSERT INTO SIA_FORM_RECHERCHE\n"+
  "(ID_SIA_FORM_RECHERCHE, DATE_DEMANDE, NOM_DEMANDE, NOM, PRENOM,\n"+
  "IDENTIFICATION_FONCTION_CHEFSERVICE_POLE, IDENTIFICATION_FONCTION_MEDECIN, IDENTIFICATION_FONCTION_INTERNE, IDENTIFICATION_FONCTION_CADRE,\n"+
  "IDENTIFICATION_FONCTION_CADRE_GESTIONNAIRE, IDENTIFICATION_FONCTION_DIRECTEUR, IDENTIFICATION_FONCTION_AUTRE,\n"+
  "SERVICE_RATTACHEMENT, COORDONNEES, MAIL, TELEPHONE, FINALITE_RECHERCHE, REFERENT_MEDICAL,\n"+
  "PROJET_CONTEXTE_POSITIONNEMENT, PROJET_OBJECTIF_PRINCIPAL, CRITERE_INCLUSION, CRITERE_EXCLUSION, PERIODE_DONNEES_DEMANDEES, PERIMETRE_ETUDE_VOTRE_SERVICE,\n"+
  "PERIMETRE_PLUSIEURS_SERVICES_CHU, PERIMETRE_PLUSIEURS_ETABLISSEMENT_FRANCE, PERIMETRE_PLUSIEURS_ETABLISSEMENT_FRANCE_ETRANGER,\n"+
  "DETAIL_TYPE_DONNEES, PUBLICATION_FORM_RESULTAT, PROJET_MOYEN_HUMAIN_FINANCIER, DELAI_ETUDE)\n"+
  "VALUES (SEQ_SIA_FORM_RECHERCHE.NEXTVAL, SYSDATE, :nom_demande, :nom, :prenom, :idft_fct_chefservice_pole, :idft_fct_medecin, :idft_fct_interne, :idft_fct_cadre, \n"+
  ":idft_fct_cadre_gestionnaire, :idft_fct_directeur, :idft_fct_autre, :service_rattachement, :coordonnees, :mail, :telephone, :finalite_recherche, :referent_medical, \n"+
  ":contexte, :objectif, :critere_inclusion, :critere_exclusion, :periode_donnees_demandees, :perimetre_etude_votre_service, :perimetre_plusieurs_services_chu, \n"+
  ":perimetre_plusieurs_etab_france, :perimetre_plusieurs_etab_france_etranger, :detail_types_donnees, :publication_resultat, :moyens_humains_financiers, :delai_etude)";
  /*"RETURNING UTIL INTO :conId";*/

async function insertFormRecherche(data) {
  const dataFormRecherche = Object.assign({}, data); 
  const result = await database.simpleDimExecute(INSERT_SIA_FORM_RECHERCHE, dataFormRecherche);
  //conDesc.conId = result.outBinds.conId[0];
  return dataFormRecherche;
}

module.exports.insertFormRecherche = insertFormRecherche;

