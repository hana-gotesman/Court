import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Case } from '../models/case.module';
import { BehaviorSubject, Observable, map } from 'rxjs';
import { log } from 'console';


@Injectable({
  providedIn: 'root'
})
export class CaseService {

  constructor(private _http: HttpClient) { }

  gatAllCases2(): Observable<Case> {
    return this._http.get<Case>('https://localhost:7229/');
  }
  gatAllCases() {
    return [{
      "userId": 1,
      "statusId": 1,
      "numCase": "108/2024",
      "topic": "בדיקת שמירה החלטה 3",
      "type": "ערר חרבות ברזל",
      "entitlement": " 2023 ספטמבר - אוקטובר",
      "dateCreate": "11/07/2024",
      "nextDiscussion": "15.07.2024",
      "submitsExcitation": "אברהם אברהמי",
      "chairmanCommittee": "ציון ציוני",
      "publicRepresentative": "עדיין לא מונה"
    },
    {
      "userId": 2,
      "statusId": 0,
      "numCase": "107/2024",
      "topic": "בדיקת שמירה החלטה 2",
      "type": "ערר חרבות ברזל",
      "entitlement": "נובמבר - דצמבר 2023",
      "dateCreate": "10/07/2024",
      "nextDiscussion": "17.07.2024",
      "submitsExcitation": "ישראל ישראלי",
      "chairmanCommittee": "שמואל שמואלי",
      "publicRepresentative": "עדיין לא מונה"
    }]
      ;
  }
  getCaseById(id: number): Observable<Case> {
    return this._http.get<Case>(`https://localhost:7229/user/id?id=${id}`)
  }
}

