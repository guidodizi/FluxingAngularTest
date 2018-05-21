import { Component, OnInit, OnDestroy } from "@angular/core";
import { Observable, Subscription } from "rxjs";
import { PetTag } from "../../models/pet-tag.model";
import { Store } from "@ngrx/store";
import { RESET } from "../../actions/pet-tag.actions";

@Component({
  selector: "app-complete",
  templateUrl: "./complete.component.html",
  styleUrls: ["./complete.component.css"]
})
export class CompleteComponent implements OnInit, OnDestroy {
  private tagState$: Observable<PetTag>;
  private tagStateSubscription: Subscription;
  petTag: PetTag;

  constructor(private store: Store<PetTag>) {
    this.tagState$ = store.select("petTag");
  }

  ngOnInit() {
    this.tagStateSubscription = this.tagState$.subscribe(state => {
      this.petTag = state;
    });
  }

  ngOnDestroy() {
    this.tagStateSubscription.unsubscribe();
  }

  newTag() {
    this.store.dispatch({
      type: RESET
    });
  }
}
