import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './components/login/login.component';
import { SegurosComponent } from './components/seguros/seguros.component';
import { SeguroComponent } from './components/seguro/seguro.component';

export const appRoutes: Routes = [
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'seguro/:id',
        component: SeguroComponent
    },
    {
        path: 'seguro',
        component: SeguroComponent
    },
    {
        path: 'seguros',
        component: SegurosComponent
    },
    {
        path: '',
        redirectTo: '/login',
        pathMatch: 'full'
    },
    
];