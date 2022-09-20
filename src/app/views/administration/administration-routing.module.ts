import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {ProductsComponent} from './products/products.component'; 
import {UsertypeComponent} from './usertype/usertype.component';

const routes: Routes = [
    {
        path: '',
        data: {
          title: 'Administration',
        },
        children: [
            {
                path: 'products',
                component: ProductsComponent,
                data: {
                  title: 'Products',
                },
            },
            {
              path: 'usertype',
              component: UsertypeComponent,
              data: {
                title: 'User Type',
              },
          },
        ],
      },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AdministrationRoutingModule {}