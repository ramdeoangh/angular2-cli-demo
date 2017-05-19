import { Routes } from '@angular/router';

import { CicularComponent } from './cicular/cicular.component';
import { SearchComponent } from './search/search.component';
import { UserComponent } from './user/user.component';

export const appRoutes: Routes = [
    { path: 'cicular', component: CicularComponent },
    { path: 'search', component: SearchComponent },
    { path: 'user/:userId', component: UserComponent },


]