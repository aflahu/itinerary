import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import {Tujuan } from '../../model/Tujuan'

@Component({
  selector: 'app-itinerary',
  templateUrl: './itinerary.component.html',
  styleUrls: ['./itinerary.component.scss']
})
export class ItineraryComponent implements OnInit, OnDestroy {
  firstFormGroup = this._formBuilder.group({
    nama_tempat: ['', Validators.required],
    tanggal: ['', Validators.required],
    mulai_pada: ['', Validators.required],
    akhir_pada: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });
  isLinear = false;
  tujuan2: Tujuan[] = [
    {"nama_tempat": "", "tanggal": "", "mulai_pada": "", "akhir_pada": ""},
  ];

  constructor(private _formBuilder: FormBuilder) { }
  ngOnInit(): void {
    
  }
  
  ngOnDestroy() {
    console.log('component destroyed');
  }

  addIndex() {
    this.tujuan2.push({
      nama_tempat: '',
      tanggal: '',
      mulai_pada: '',
      akhir_pada: '',
    });
  }
}
