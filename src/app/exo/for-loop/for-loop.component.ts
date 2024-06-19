import { Component } from '@angular/core';

@Component({
  selector: 'app-for-loop',
  templateUrl: './for-loop.component.html',
  styleUrls: ['./for-loop.component.css'],
})
export class ForLoopComponent {
  users: any[] = [
    {
      nom: 'Dupont',
      prenom: 'Jean',
      age: 30,
      gender: 'f',
      email: 'jean.dupont@example.com',
      avatar:
        'https://img.freepik.com/photos-gratuite/jolie-fille-blonde-chemise-rayee-montrant-signe-paix-vue-face-dame-francaise-riant-posant-mur-bleu_197531-14466.jpg',
    },
    {
      nom: 'Martin',
      prenom: 'Marie',
      age: 25,
      gender: 'f',
      email: 'marie.martin@example.com',
      avatar:
        'https://img.freepik.com/photos-gratuite/plan-interieur-femme-parisienne-sympathique-large-sourire-pointe-cote-gauche_273609-17138.jpg?size=626&ext=jpg&ga=GA1.1.1788614524.1718668800&semt=sph',
    },
    {
      nom: 'Durand',
      prenom: 'Paul',
      age: 40,
      gender: 'm',
      email: 'paul.durand@example.com',
      avatar:
        'https://img.freepik.com/psd-gratuit/personne-celebrant-son-orientation-sexuelle_23-2150115662.jpg',
    },
  ];
}
