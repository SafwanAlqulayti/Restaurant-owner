import { NgModule,CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { LogInComponent } from './log-in/log-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonModule } from 'primeng/button';
import { AppRoutingModule } from './app-routing.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { MaterialModule } from './matrial-module';
import { HttpClientModule } from '@angular/common/http';
import { MyrestaurantComponent } from './myrestaurant/myrestaurant.component';
import {MatTableModule} from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
import { OneOrderComponent } from './one-order/one-order.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    AppComponent,
    LogInComponent,
    SignUpComponent,
    MyrestaurantComponent,
    OneOrderComponent,
    
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ButtonModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FlexLayoutModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MaterialModule,
    HttpClientModule,
    FormsModule,// read more
    ReactiveFormsModule,// read more
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    // RouterModule.forRoot(
    //   [
    //     {path:'login', component:LogInComponent},
    //     {path:'orders', component:MyrestaurantComponent},
    //     {path:'order/:orderId', component:OneOrderComponent}
    //   ]
    // )   
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
