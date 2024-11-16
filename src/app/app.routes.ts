import { Routes } from '@angular/router';

import { HeroComponent } from './shared/reusable/hero/hero.component';
import { AboutComponent } from './pages/about/about.component';
import { ServicesComponent } from './pages/services/services.component';
import { BlogsComponent } from './pages/blogs/blogs.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
    {
        path: '', redirectTo: 'home', pathMatch: 'full'
    },
    {
        path: 'home', component: HomeComponent
    },
    {
        path: 'about', component: AboutComponent
    },
    {
        path: 'services', component: ServicesComponent
    },
    {
        path: 'blogs', component: BlogsComponent
    },
    {
        path: 'contact', component: ContactComponent
    },
];
