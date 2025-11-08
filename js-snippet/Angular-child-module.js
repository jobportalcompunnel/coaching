//Types of Modules:
// o	Root Module: Every Angular application has one root module, which acts as the entry point for the application. It bootstraps the root component and typically imports essential BrowserModule and other core modules.
// o	Feature Modules: These modules encapsulate features or areas of the application, promoting reusability and maintainability. They can be loaded lazily or eagerly, depending on your application's needs.
// o	Shared Modules: These modules contain common components, directives, and pipes that can be shared across multiple feature modules, reducing code duplication.
//example
// @NgModule({
//   declarations: [
//     UserComponent,
//     User2Component,
//     ParentComponent
//   ],
//   imports: [
//     RouterModule.forChild([
//       { path: '', component: ParentComponent, children: childRoutes }
//     ]),
//     CommonModule
//   ]
// })
// export class OrganizationModule { }
