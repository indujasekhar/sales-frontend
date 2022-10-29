import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {DailybookComponent} from './dailybook/dailybook.component';
import {SalesorderComponent} from './salesorder/salesorder.component';

const routes: Routes = [
    {
        path: '',
        data: {
          title: 'Sales',
        },
        children: [
            {
                path: 'dailybook',
                component: DailybookComponent,
                data: {
                  title: 'Daily Book',
                },
            },
            {
                path: 'salesorder',
                component: SalesorderComponent,
                data: {
                  title: 'Sales Order',
                },
            }
        ],
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class SalesRoutingModule {}