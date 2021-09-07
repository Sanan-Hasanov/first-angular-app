import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'first-app';

  constructor(private toastr: ToastrService) { }
  ngOnInit(): void {
    this.showError();
  }

  showSuccess() {
    this.toastr.success('Salam Dünya!', 'Giriş baçarılı!');
  }
  showError(){
    this.toastr.error('Bu bir hata mesaji!', 'Hata mesaji basligi!')
  }

}
