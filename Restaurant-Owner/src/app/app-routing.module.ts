import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LogInComponent } from "./log-in/log-in.component";
import { MyrestaurantComponent } from "./myrestaurant/myrestaurant.component";
import { OneOrderComponent } from "./one-order/one-order.component";

const routes:Routes = [
    {path:'login', component:LogInComponent ,pathMatch: "full"},
    {path:'orders', component:MyrestaurantComponent},
    {path:'order/:orderId', component:OneOrderComponent}
   // {path:'**', component:notFoun}//not found



]
@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})
export class AppRoutingModule {

}