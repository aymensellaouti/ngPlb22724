import { inject, Injectable } from '@angular/core';
import { Cv } from '../model/cv.model';
import { Observable, Subject } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { APP_API } from 'src/app/config/api.config';

@Injectable({
  providedIn: 'root',
})
export class CvService {
  #cvs: Cv[] = [
    new Cv(1, 'lepauvre', 'Martial', 'Dev', '123', 22, '    '),
    new Cv(2, 'codet', 'Marie', 'Dev', '1234', 20, 'rotating_card_profile.png'),
  ];

  // C'est le flux des cv sélectionnés Cv1 Cv2 Cv3 Cv2 Cv3 Cv3 Cv1 ....
  #selectedCvSubject = new Subject<Cv>();
  // Définir le flux visible des Cv Sélectionné
  selectCv$ = this.#selectedCvSubject.asObservable();
  http = inject(HttpClient);
  constructor() {}

  /**
   * Retourne l'observable des cvs retournée par l'API
   * @returns Observable<Cv[]>
   */
  getCvs(): Observable<Cv[]> {
    return this.http.get<Cv[]>(APP_API.cv);
  }

  /**
   *
   * Cherche un cv avec son id dans l'api
   *
   * @param id
   * @returns Observable<Cv>
   */
  getCvById(id: number): Observable<Cv> {
    return this.http.get<Cv>(APP_API.cv + id);
  }

  getFakeCvs(): Cv[] {
    return this.#cvs;
  }

  /**
   *
   * Cherche un cv avec son id dans lai liste fictive de cvs
   *
   * @param id
   * @returns Cv | null
   */
  findCvById(id: number): Cv | null {
    return this.#cvs.find((cv) => cv.id == id) ?? null;
  }

  /**
   *
   * Supprime un cv s'il le trouve depuis l'api
   *
   * @param id : number
   * @returns {count: number}
   */
  deleteCv(id: number): Observable<{count: number}> {
        // Todo : Récupérer le Token et l'injecter soit en
        // HttpParams ou en HttpHeaders
        // const params = new HttpParams().set(
        //   'access_token',
        //   localStorage.getItem('token') ?? ''
        // );

        return this.http.delete<{ count: number }>(APP_API.cv + id);
  }

  /**
   *
   * Supprime un cv s'il le trouve
   *
   * @param cv : Cv
   * @returns boolean
   */
  deleteFakeCv(cv: Cv): boolean {
    const index = this.#cvs.indexOf(cv);
    if (index > -1) {
      this.#cvs.splice(index, 1);
      return true;
    }
    return false;
  }

  selectCv(cv: Cv) {
    // J'ajoute un cv dans le flux
    this.#selectedCvSubject.next(cv);
  }
}
