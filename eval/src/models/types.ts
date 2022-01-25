export class Statistique {
  public identifiant:string;
  public titre:string;
  public valeur:string;

  constructor(unId:string,unTitre:string,uneValeur:string){
      this.identifiant=unId
      this.titre=unTitre
      this.valeur=uneValeur
  }
};