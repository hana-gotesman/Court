import { Routes } from '@angular/router';
import { CaseComponent } from './comonents/cases/case.component';

export const routes: Routes =  [
    { path: '', redirectTo: 'cases', pathMatch: 'full' },
    { path: 'cases', component: CaseComponent }
];