import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {CourseAdminComponent} from './course-admin/course-admin.component';

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
    loadChildren: () => import('./course-page/course-page.module').then(m => m.CoursePageModule)
  },
  {
    path: 'lessons/:lessonId',
    loadChildren: () => import('./lesson-page/lesson-page.module').then(m => m.LessonPageModule)
  },
  {
    path: 'admin',
    pathMatch: 'full',
    loadChildren: () => import('./main-admin/main-admin.module').then(m => m.MainAdminModule)
  },
  {
    path: 'admin/course/:id',
    redirectTo: 'courses/:id'
  },
  {
    path: 'admin/courses/:id',
    loadChildren: () => import('./course-admin/course-admin.module').then(m => m.CourseAdminModule)
  },
  {
    path: 'admin/lessons/:id',
    loadChildren: () => import('./admin-lesson/admin-lesson.module').then(m => m.AdminLessonModule)
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routingSchematics)
  ]
})
export class AppRoutingModule { }
