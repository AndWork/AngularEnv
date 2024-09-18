import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { ItemListComponent } from './item-list/item-list.component';

export const routes: Routes = [
    { path: '', component: ItemListComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutesModule { }