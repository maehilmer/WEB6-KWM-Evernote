import {Component, OnInit} from '@angular/core';
import {Note} from "../shared/note";
import {NoteListItemComponent} from "../note-list-item/note-list-item.component";
import {KwmevernoteStoreService} from "../shared/kwmevernote-store.service";
import {ActivatedRoute, Router, RouterLink} from "@angular/router";
import {SearchComponent} from "../search/search.component";
import {AuthenticationService} from "../shared/authentication.service";

@Component({
  selector: 'kwmen-note-list',
  standalone: true,
  imports: [NoteListItemComponent, RouterLink, SearchComponent],
  templateUrl: './note-list.component.html',
  styles: ``
})
export class NoteListComponent implements OnInit{
  notes: Note[] = [];

  constructor(private kwmen: KwmevernoteStoreService,
              public authService: AuthenticationService){ }

  ngOnInit() {
    this.kwmen.getAllNotes().subscribe(res => this.notes = res);
  }
}
