import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MemberListComponent } from './_pages/member-list/member-list.component';
import { MemberAddComponent } from './_pages/member-add/member-add.component';
import { MemberEditComponent } from './_pages/member-edit/member-edit.component';

const routes: Routes = [
  {
    path: 'members',
    component: MemberListComponent,
  },
  {
    path: 'members-add',
    component: MemberAddComponent,
  },
  {
    path: 'members-edit',
    component: MemberEditComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
