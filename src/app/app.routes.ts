import { Routes } from '@angular/router';
import { Home } from './component/shared/home/home';
import { RoutedAdminPlist } from './component/blog/routed-admin-plist/routed-admin-plist';
import { RoutedAdminView } from './component/blog/routed-admin-view/routed-admin-view';
import { RoutedUserPlist } from './component/blog/routed-user-plist/routed-user-plist';
import { RoutedUserView } from './component/blog/routed-user-view/routed-user-view';
import { RoutedAdminEdit } from './component/blog/routed-admin-edit/routed-admin-edit';
import { RoutedAdminNew } from './component/blog/routed-admin-new/routed-admin-new';
import { RoutedAdminRemove } from './component/blog/routed-admin-remove/routed-admin-remove';
import { RoutedAdminPlist as TablonRoutedAdminPlist } from './component/contreras/tablon/routed-admin-plist/routed-admin-plist';
import { RoutedAdminView as TablonRoutedAdminView } from './component/contreras/tablon/routed-admin-view/routed-admin-view';
import { RoutedUserPlist as TablonRoutedUserPlist } from './component/contreras/tablon/routed-user-plist/routed-user-plist';
import { RoutedUserView as TablonRoutedUserView } from './component/contreras/tablon/routed-user-view/routed-user-view';
import { RoutedAdminEdit as TablonRoutedAdminEdit } from './component/contreras/tablon/routed-admin-edit/routed-admin-edit';
import { RoutedAdminNew as TablonRoutedAdminNew } from './component/contreras/tablon/routed-admin-new/routed-admin-new';
import { RoutedAdminRemove as TablonRoutedAdminRemove } from './component/contreras/tablon/routed-admin-remove/routed-admin-remove';


export const routes: Routes = [
  { path: '', component: Home },
  { path: 'blog', component: RoutedUserPlist },
  { path: 'blog/post/:id', component: RoutedUserView },
  { path: 'blog/plist', component: RoutedAdminPlist },
  { path: 'blog/view/:id', component: RoutedAdminView },
  { path: 'blog/new', component: RoutedAdminNew },
  { path: 'blog/edit/:id', component: RoutedAdminEdit },
  { path: 'blog/remove/:id', component: RoutedAdminRemove },
  { path: 'tablon', component: TablonRoutedUserPlist },
  { path: 'tablon/post/:id', component: TablonRoutedUserView },
  { path: 'tablon/plist', component: TablonRoutedAdminPlist },
  { path: 'tablon/view/:id', component: TablonRoutedAdminView },
  { path: 'tablon/new', component: TablonRoutedAdminNew },
  { path: 'tablon/edit/:id', component: TablonRoutedAdminEdit },
  { path: 'tablon/remove/:id', component: TablonRoutedAdminRemove },
];
