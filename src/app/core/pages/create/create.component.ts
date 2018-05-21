// src/app/pages/create/create.component.ts
import { Component, OnInit, OnDestroy } from '@angular/core';

import { Store, select } from '@ngrx/store';
import { SELECT_SHAPE, SELECT_FONT, ADD_TEXT, TOGGLE_CLIP, TOGGLE_GEMS, COMPLETE } from '../../actions/pet-tag.actions';
import { PetTag } from '../../models/pet-tag.model';
import { Observable } from 'rxjs';

interface AppState {
  petTag: PetTag
}

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html'
})
export class CreateComponent implements OnInit {
  tagState$: Observable<PetTag>;
  petTag: PetTag;
  done = false;

  constructor(private store: Store<AppState>) {
    this.tagState$ = store.select('petTag');
  }

  ngOnInit() {
  }


  selectShapeHandler(shape: string) {
    this.store.dispatch({
      type: SELECT_SHAPE,
      payload: shape
    });
  }

  selectFontHandler(fontType: string) {
    this.store.dispatch({
      type: SELECT_FONT,
      payload: fontType
    });
  }

  addTextHandler(text: string) {
    this.store.dispatch({
      type: ADD_TEXT,
      payload: text
    });
  }

  toggleClipHandler() {
    this.store.dispatch({
      type: TOGGLE_CLIP
    });
  }

  toggleGemsHandler() {
    this.store.dispatch({
      type: TOGGLE_GEMS
    });
  }

  submit() {
    this.store.dispatch({
      type: COMPLETE,
      payload: true
    });
  }

}