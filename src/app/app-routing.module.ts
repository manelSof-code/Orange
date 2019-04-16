import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CvComponent} from './cvTech/cv/cv.component';
import {TodoComponent} from './todo/todo.component';
import {StyleComponent} from './directives/style/style.component';
import {DetailCvComponent} from './cvTech/detail-cv/detail-cv.component';
import {NotfoundComponent} from './notfound/notfound.component';
import {AddComponent} from './cvTech/add/add.component';
import {LoginComponent} from './login/login.component';
import { OffersComponent } from './offers/offers.component';
import { RequestsComponent } from './requests/requests.component';
import { ParticipantsComponent } from './participants/participants.component';
import { TransactionsComponent } from './transactions/transactions.component';
import { AddAssetComponent } from './add-asset/add-asset.component';
import { PostOfferComponent } from './post-offer/post-offer.component';
import { PostRequestComponent } from './post-request/post-request.component';
import { HeaderComponent } from './header/header.component';
import { RegisterComponent } from './register/register.component';
import { RestPwdComponent } from './rest-pwd/rest-pwd.component';

const routes: Routes = [
 
  {path: '',component:LoginComponent},
  {path: 'addAsset',  component:AddAssetComponent},
  {path: 'postOffer',  component:PostOfferComponent},
  {path: 'postRequest',  component:PostRequestComponent},
  {path: 'Offers', component:OffersComponent},
  {path: 'Requests', component:RequestsComponent},
  {path: 'Participants', component:ParticipantsComponent},
  {path: 'Transactions', component:TransactionsComponent},
  {path: 'cv/:id', component: DetailCvComponent},
  {path: 'style', component: StyleComponent},
  {path: 'todo', component: TodoComponent},
  {path: 'Header', component: HeaderComponent},
  {path: 'Logout', component:LoginComponent },
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'restPassword', component: RestPwdComponent},
  {path: '**', component: NotfoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
