import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'first-app';

  constructor(private toastr: ToastrService, private spinner: NgxSpinnerService) { }
  ngOnInit(): void {
    this.showError();
    this.spinner.show();
    setTimeout(() => {
      /** spinner ends after 5 seconds */
      this.spinner.hide();
    }, 5000);
  }

  showSuccess() {
    this.toastr.success('Salam Dünya!', 'Giriş baçarılı!');
  }
  showError(){
    this.toastr.error('Bu bir hata mesaji!', 'Hata mesaji basligi!')
  }

}
