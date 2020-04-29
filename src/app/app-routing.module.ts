import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {UserGuard, AdminGuard} from '@security/guards';

const routingSchematics: Routes = [
  {
    path: '',
    redirectTo: 'courses',
    pathMatch: 'full'
  },
  {
    path: 'courses',
    pathMatch: 'full',
    loadChildren: () => import('./user/courses-page/courses-page.module').then(m => m.CoursesPageModule)
  },
  {
    path: 'courses/:courseId',
    canActivate: [UserGuard],
    loadChildren: () => import('./user/course-page/course-page.module').then(m => m.CoursePageModule)
  },
  {
    path: 'lessons/:lessonId',
    canActivate: [UserGuard],
    loadChildren: () => import('./user/lesson-page/lesson-page.module').then(m => m.LessonPageModule)
  },
  {
    path: 'admin',
    pathMatch: 'full',
    canActivate: [AdminGuard, UserGuard],
    loadChildren: () => import('./admin/main-admin/main-admin.module').then(m => m.MainAdminModule)
  },
  {
    path: 'admin/course/:id',
    redirectTo: 'courses/:id'
  },
  {
    path: 'admin/courses/:id',
    canActivate: [AdminGuard, UserGuard],
    loadChildren: () => import('./admin/course-admin/course-admin.module').then(m => m.CourseAdminModule)
  },
  {
    path: 'admin/lessons/:id',
    canActivate: [AdminGuard, UserGuard],
    loadChildren: () => import('./admin/admin-lesson/admin-lesson.module').then(m => m.AdminLessonModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./user/login/login.module').then(m => m.LoginModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./user/register/register.module').then(m => m.RegisterModule)
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
