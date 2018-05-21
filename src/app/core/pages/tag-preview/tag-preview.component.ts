import { Component, OnChanges, Input } from "@angular/core";
import { PetTag } from "../../models/pet-tag.model";

@Component({
  selector: "app-tag-preview",
  templateUrl: "./tag-preview.component.html",
  styleUrls: ["./tag-preview.component.css"]
})
export class TagPreviewComponent implements OnChanges {
  @Input() petTag: PetTag;
  private imgSrc = "";
  private tagClipText: string;
  private gemsText: string;

  constructor() {}

  ngOnChanges() {
    this.imgSrc = `/assets/images/${this.petTag.shape}.svg`;
    this.tagClipText = this.boolToText(this.petTag.clip);
    this.gemsText = this.boolToText(this.petTag.gems);
  }

  private boolToText(bool: boolean) {
    return bool ? "Yes" : "No";
  }
}
