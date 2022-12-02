import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/interfaces/users.interface';
import { CountriesService } from 'src/app/services/countries.service';
import { UsersService } from 'src/app/services/users.service';
import { ValidatorsService } from 'src/app/services/validators.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit, OnChanges {

  countries: any[] = [];
  @Input() userForUpdate: User | undefined;

  get emailError(): string {
    const errors = this.formUsers.get('email')?.errors;
    if (errors?.['required']) {
      return 'Campo requerido';
    } else if (errors?.['pattern']) {
      return 'Email no válido';
    }
    return '';
  }

  formUsers: FormGroup = this.fb.group({
    id: [, []],
    name: ['', [Validators.required, Validators.pattern(this.vs.nombrePattern)]],
    password: [, [Validators.required, Validators.minLength(6)]],
    repeatPassword: [, [Validators.required]],
    email: ['', [Validators.required, Validators.pattern(this.vs.emailPattern)]],
    offers: [, []],
    country: [, []],
    city: [, []],
  }, {
    validators: [this.vs.passwordMatch('password', 'repeatPassword')]
  });

  constructor(
    private countriesService: CountriesService,
    private usersService: UsersService,
    private fb: FormBuilder,
    private vs: ValidatorsService
  ) { }

  ngOnInit(): void {
    this.countriesService.getAllCountries().subscribe(resp => this.countries = resp);
  };

  ngOnChanges(changes: SimpleChanges): void {
    this.userForUpdate = changes['userForUpdate'].currentValue

    this.formUsers.controls['id'].setValue(this.userForUpdate?.id)
    this.formUsers.controls['name'].setValue(this.userForUpdate?.name)
    this.formUsers.controls['password'].setValue(this.userForUpdate?.password)
    this.formUsers.controls['repeatPassword'].setValue(this.userForUpdate?.repeatPassword)
    this.formUsers.controls['email'].setValue(this.userForUpdate?.email)
    this.formUsers.controls['offers'].setValue(this.userForUpdate?.offers)
    this.formUsers.controls['country'].setValue(this.userForUpdate?.country)
    this.formUsers.controls['city'].setValue(this.userForUpdate?.city)
  };

  validField(field: string) {
    return this.formUsers.get(field)?.invalid
      && this.formUsers.get(field)?.touched;
  }

  getDataForm(): void {
    if (this.formUsers.valid) {
      if (this.userForUpdate) {
        this.usersService.updateUser(this.formUsers.value);
        this.userForUpdate = undefined;
      } else {
        this.usersService.insert(this.formUsers.value);
      }
      this.formUsers.reset();
    } else {
      this.formUsers.markAllAsTouched();
      return;
    };
  };
};
