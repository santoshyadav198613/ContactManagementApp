import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { CompletedPipe } from '../customPipes/completed.pipe';
import { PricePipe } from '../customPipes/price.pipe';
import { HoverDirective } from '../customDirective/hover.directive';
import { PasswordValidatorDirective } from '../customDirective/password-validator.directive';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
    CompletedPipe,
    PricePipe,
    HoverDirective,
    PasswordValidatorDirective],
  declarations: [
    CompletedPipe,
    PricePipe,
    HoverDirective,
    PasswordValidatorDirective]
})
export class SharedModule { }
