import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { Message } from '../message-model';
import { Observable } from 'rxjs/internal/Observable';

@Component({
  selector: 'app-chat-list',
  templateUrl: './chat-list.component.html',
  styleUrls: ['./chat-list.component.css']
})
export class ChatListComponent implements OnInit {

  items: Observable<any[]>;

  constructor(protected db: AngularFirestore) {
  }

  ngOnInit() {
    this.items = this.db.collection('messages').valueChanges();
  }
}