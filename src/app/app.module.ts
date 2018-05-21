import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { AppRoutingModule } from "./core/app-routing/app-routing.module";
import { StoreModule } from "@ngrx/store";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";

import { petTagReducer } from "./core/reducers/pet-tag.reducer";
import { AppComponent } from "./core/app.component";
import { HomeComponent } from "./core/pages/home/home.component";
import { CreateComponent } from "./core/pages/create/create.component";
import { CompleteComponent } from "./core/pages/complete/complete.component";
import { TagShapeComponent } from "./core/pages/create/tag-shape/tag-shape.component";
import { TagTextComponent } from "./core/pages/create/tag-text/tag-text.component";
import { TagExtrasComponent } from "./core/pages/create/tag-extras/tag-extras.component";
import { TagPreviewComponent } from "./core/pages/tag-preview/tag-preview.component";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CreateComponent,
    CompleteComponent,
    TagShapeComponent,
    TagTextComponent,
    TagExtrasComponent,
    TagPreviewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    StoreModule.forRoot({ petTag: petTagReducer }),
    StoreDevtoolsModule.instrument({
      maxAge: 25 // Retains last 25 states
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
