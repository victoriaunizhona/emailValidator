import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AppComponent } from "./app.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { GmailPageComponent } from "./gmail-page/gmail-page.component";
import { AuthGuard } from "./auth-guard.service";

const routes: Routes = [
  {
    path: "",
    redirectTo: "/",
    pathMatch: "full"
  },
  {
    path: "dashboard",
    component: DashboardComponent
  },
  {
    path: "gmailPage",
    canActivate: [AuthGuard],
    component: GmailPageComponent,
    pathMatch: "full"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule {}
