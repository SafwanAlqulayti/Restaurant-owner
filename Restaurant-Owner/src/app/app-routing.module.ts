import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LogInComponent } from "./log-in/log-in.component";
import { MyrestaurantComponent } from "./myrestaurant/myrestaurant.component";

const routes:Routes = [
    {path:'ss', component:LogInComponent},
    {path:'', component:MyrestaurantComponent}

]
@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[]
})
export class AppRoutingModule {

}