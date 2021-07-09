# TODO

## Preparer le terrain pour les Services

1. Creer une Class QcmService qui dispose d'un objet `qcms` representant la liste des qcms
2. Dans la class QcmService :
    []=> Creer une methode `initQcm()` qui permet de charger par defaut une liste de qcm
    []=> Creer une methode `add(q: Qcm)` qui prend en entre un Qcm et qui le supprime au niveau de la liste
    []=> Creer une methode `deleteQcm(id: number)` qui prend en entree un id et supprimme dans le tableau l'element avec l'id correspondant
    []=> Creer une methode `dupliquerQcm(id: number)` qui permet de dupliquer un element dans le tableau
    []=> Creer une methode `rechercheQuestion(el: string)` qui permet de rechercher dans toutes les questions du qcm
    []=> Creer une methode `plusGrande()` qui permet de retourner le qcm avec la plus grande note
    []=> Creer une methode `moyenneQCM(e)` qui permet de retourner la notes moyenne
   
## Utilisation de la base de donnees distance

1. Creer une base de donnees `tp_angular`
2. Creer la table `qcm` avec la structure suivance : 
 ```
{
    id: int, question: varchar(255), reponse: varchar(255), note: int
}
```
3. Faire quelques insertions
4. Creer un fichier donnees.php permettant de se connecter à la base de donnees afin de recuperer les donnees
 

## Creation d'une API RestFull

