import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { CreateMember } from 'src/app/_interfaces/create-member';
import { MemberService } from 'src/app/_services/member.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styles: [],
})
export class RegisterComponent implements OnInit {
  addForm: FormGroup = new FormGroup({});
  createMember: CreateMember = {
    name: '',
    email: '',
    semester: -1,
    career: ''
  }
  errorMessage: string = '';

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private memberService: MemberService
  ) {}

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm() {
    this.addForm = this.fb.group({
      name: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(20),
        ],
      ],
      email: ['', [Validators.required, Validators.email]],
      semester: [
        '',
        [
          Validators.required,
          Validators.minLength(1),
          Validators.maxLength(10),
        ]
      ],
      career: ['', [Validators.required]]
    });
  }


  add() {
    this.createMember.name = this.addForm.get('name')?.value;
    this.createMember.email = this.addForm.get('email')?.value;
    this.createMember.semester = this.addForm.get('semester')?.value;
    this.createMember.career = this.addForm.get('career')?.value;

    this.memberService.createMember(this.createMember).subscribe({
      next: () => {
        this.router.navigateByUrl('/members')
      },
      error: (result) => {
        if (typeof result.error === 'string') {
          this.errorMessage = result.error;
        } else {
          this.errorMessage = 'Intente nuevamente';
        }
      }
    })
  }
}