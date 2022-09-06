import { ViewBeanComponent } from './beans/view-bean/view-bean.component';
import { BeansListComponent } from './beans/beans-list/beans-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'beans', pathMatch: 'full' },
  {
    path: 'beans',
    component: BeansListComponent,
    children: [{ path: 'view/:id', component: ViewBeanComponent }],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
