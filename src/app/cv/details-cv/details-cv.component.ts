import { Component, inject, OnInit } from "@angular/core";
import { Cv } from "../model/cv.model";
import { CvService } from "../services/cv.service";
import { ActivatedRoute, Router } from "@angular/router";
import { APP_ROUTES } from "src/app/config/routes.config";


@Component({
  selector: 'app-details-cv',
  templateUrl: './details-cv.component.html',
  styleUrls: ['./details-cv.component.css'],
})
export class DetailsCvComponent {
  cv: Cv | null = null;
  cvService = inject(CvService);
  acr = inject(ActivatedRoute);
  router = inject(Router);
  constructor() {
    // On récupére l'id de la route à travers le activatedRoute
    const id = this.acr.snapshot.params['id'];
    this.cvService.getCvById(id).subscribe({
      next: (cv) => this.cv = cv,
      error: (e) => this.router.navigate([APP_ROUTES.cv])
    });
    // Si l'id ne correspond à aucun cv on redirige notre user vers la liste des cvs
  }

  deleteCv() {
    if (this.cv) {
      this.cvService.deleteCv(this.cv.id).subscribe({
        next: (response) => this.router.navigate([APP_ROUTES.cv]),
        error: (e) => console.log({e})
      });
    }
  }
}
