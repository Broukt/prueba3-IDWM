import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { EditMember } from 'src/app/_interfaces/edit-member';
import { MemberService } from 'src/app/_services/member.service';
@Component({
  selector: 'app-member-edit',
  templateUrl: './member-edit.component.html',
  styles: [
  ]
})
export class MemberEditComponent implements OnInit{
  editForm: FormGroup = new FormGroup({});
  editMember: EditMember = {
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
    this.editForm = this.fb.group({
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


  edit() {
    this.editMember.name = this.editForm.get('name')?.value;
    this.editMember.email = this.editForm.get('email')?.value;
    this.editMember.semester = this.editForm.get('semester')?.value;
    this.editMember.career = this.editForm.get('career')?.value;

    this.memberService.editMember(1, this.editMember).subscribe({
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