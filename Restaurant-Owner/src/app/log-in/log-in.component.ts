import { Input, Component, Output, EventEmitter,OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-log-in',
  templateUrl: 'log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {
  form: FormGroup = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });
  constructor(
    private primengConfig:PrimeNGConfig
  ) { }
  submit() {
  if (this.form.valid) {
    this.submitEM.emit(this.form.value);
  }
}
@Input()
 error: string | null | undefined;

@Output() submitEM = new EventEmitter();
  ngOnInit(): void {
    this.primengConfig.ripple = true;
  }

}
