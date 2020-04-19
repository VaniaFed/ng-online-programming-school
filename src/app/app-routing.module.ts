import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {CourseAdminComponent} from './course-admin/course-admin.component';
import {UserGuard} from './auth/user.guard';
import {AdminGuard} from './auth/admin.guard';

const routingSchematics: Routes = [
  {
    path: '',
    redirectTo: 'courses',
    pathMatch: 'full'
  },
  {
    path: 'courses',
    pathMatch: 'full',
    loadChildren: () => import('./courses-page/courses-page.module').then(m => m.CoursesPageModule)
  },
  {
    path: 'courses/:courseId',
    canActivate: [UserGuard],
    loadChildren: () => import('./course-page/course-page.module').then(m => m.CoursePageModule)
  },
  {
    path: 'lessons/:lessonId',
    canActivate: [UserGuard],
    loadChildren: () => import('./lesson-page/lesson-page.module').then(m => m.LessonPageModule)
  },
  {
    path: 'admin',
    pathMatch: 'full',
    canActivate: [AdminGuard],
    loadChildren: () => import('./main-admin/main-admin.module').then(m => m.MainAdminModule)
  },
  {
    path: 'admin/course/:id',
    redirectTo: 'courses/:id'
  },
  {
    path: 'admin/courses/:id',
    canActivate: [AdminGuard],
    loadChildren: () => import('./course-admin/course-admin.module').then(m => m.CourseAdminModule)
  },
  {
    path: 'admin/lessons/:id',
    canActivate: [AdminGuard],
    loadChildren: () => import('./admin-lesson/admin-lesson.module').then(m => m.AdminLessonModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then(m => m.LoginModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then(m => m.RegisterModule)
  },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routingSchematics)
  ]
})
export class AppRoutingModule { }
