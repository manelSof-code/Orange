// Modules imports
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgBoostedModule } from 'ng-boosted';
import { Ng2SmartTableModule } from 'ng2-smart-table';
// Components imports
import { AppComponent } from './app.component';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { ThirdComponent } from './third/third.component';
import { CvComponent } from './cvTech/cv/cv.component';
import { ListeComponent } from './cvTech/liste/liste.component';
import { DetailComponent } from './cvTech/detail/detail.component';
import { ItemComponent } from './cvTech/item/item.component';
import { StyleComponent } from './directives/style/style.component';
import { HighlightDirective } from './directives/highlight.directive';
import { RainbowDirective } from './directives/rainbow.directive';
import { DefaultImagePipe } from './cvTech/default-image.pipe';
import { TodoComponent } from './todo/todo.component';
import {TodoService} from './service/todo.service';
import { EmbaucheComponent } from './embauche/embauche.component';
import { HeaderComponent } from './header/header.component';
import { DetailCvComponent } from './cvTech/detail-cv/detail-cv.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { AddComponent } from './cvTech/add/add.component';
import { LoginComponent } from './login/login.component';
import { ReactiveProgComponent } from './reactive-prog/reactive-prog.component';
import {HttpClientModule} from '@angular/common/http';
import {AuthentificationInterceptorProvider} from './interceptors/auth.interceptors';
import { OffersComponent } from './offers/offers.component';
import { RequestsComponent } from './requests/requests.component';
import { ParticipantsComponent } from './participants/participants.component';
import { TransactionsComponent } from './transactions/transactions.component';
import { AddAssetComponent } from './add-asset/add-asset.component';
import { PostOfferComponent } from './post-offer/post-offer.component';
import { PostRequestComponent } from './post-request/post-request.component';
import { FooterComponent } from './footer/footer.component';
import { RegisterComponent } from './register/register.component';
import { RestPwdComponent } from './rest-pwd/rest-pwd.component';
@NgModule({
  declarations: [
    OffersComponent,
    AppComponent,
    FirstComponent,
    SecondComponent,
    ThirdComponent,
    CvComponent,
    ListeComponent,
    DetailComponent,
    ItemComponent,
    StyleComponent,
    HighlightDirective,
    RainbowDirective,
    DefaultImagePipe,
    TodoComponent,
    EmbaucheComponent,
    HeaderComponent,
    DetailCvComponent,
    NotfoundComponent,
    AddComponent,
    LoginComponent,
    ReactiveProgComponent,
    OffersComponent,
    RequestsComponent,
    ParticipantsComponent,
    TransactionsComponent,
    AddAssetComponent,
    PostOfferComponent,
    PostRequestComponent,
    FooterComponent,
    RegisterComponent,
    RestPwdComponent,
    
  ],
  imports: [
    Ng2SmartTableModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgbModule.forRoot(),
    NgBoostedModule ,
   
    
    
],
  providers: [
    TodoService,
    AuthentificationInterceptorProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
