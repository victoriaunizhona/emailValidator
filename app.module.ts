import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { ReactiveFormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { GmailPageComponent } from "./gmail-page/gmail-page.component";
import { AppRoutingModule } from "./app-routing.module";
import { AuthService } from "./app-auth.service";
import { AuthGuard } from "./auth-guard.service";

@NgModule({
  imports: [BrowserModule, ReactiveFormsModule, AppRoutingModule],
  declarations: [AppComponent, DashboardComponent, GmailPageComponent],
  bootstrap: [AppComponent],
  providers: [AuthService, AuthGuard]
})
export class AppModule {}
