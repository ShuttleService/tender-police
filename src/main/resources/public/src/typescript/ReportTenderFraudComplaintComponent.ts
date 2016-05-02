/**
 * Created by zorodzay on 2016/04/24.
 */
import {Component, Inject} from "angular2/core";
import {TenderFraudComplaintService} from "./TenderFraudComplaintService";
@Component({
    selector: 'report-tender-fraud-complaint',
    providers: [TenderFraudComplaintService],
    'template': `
<div class="ui column stackable center page grid" style="margin-top: 5%">
 <div class="one wide column"></div>
    <form class="ui large form segment fourteen wide column center aligned">
    <h3 class="ui header">Report suspicious tender fraud</h3>
    <h3 class="ui info message" *ngIf="reference">Complaint successfully saved. Please keep the reference number <span class="ui label">{{reference}}</span> for follow ups.</h3>
    <div class="ui horizontal divider">Your Personal Information</div>
    <div class="two fields">
     <div class="field">
     <label>Your Full Names</label>
     <input type="text" placeholder="Your full name" [(ngModel)]="tenderFraudComplaint.complainantName" required> 
</div>
<div class="field">
<label>Your Email Address</label>
<input type="email" placeholder="email@domain.com" [(ngModel)]="tenderFraudComplaint.complainantEmail">
</div>
</div>
<div class="two fields">
<div class="field">
<label>Your Phone Number</label>
<input type="tel" placeholder="phone number" [(ngModel)]="tenderFraudComplaint.complainantPhone">  
</div>
<div class="field">
<label>Your Id Number</label>
<input type="text" placeholder="Your Id Or Passport Number" [(ngModel)]="tenderFraudComplaint.complainantId">
</div>
</div>

<h4 class="ui horizontal divider">Culprit Company Information</h4>
<div class="two fields">
<div class="field">
<label>Priority</label>
<select class="ui fluid dropdown" [(ngModel)]="tenderFraudComplaint.complaintPriority">
<option *ngFor="let priority of priorities" [value]="priority">{{priority}}</option>
</select>
</div>
<div class="field">
<label>Offending Company</label>
<input  type="text" [(ngModel)]="tenderFraudComplaint.offendingCompany" placeholder="Offending company" required>
</div>
</div>

<div class="field">
<label>Details Of The Complaint</label>
<textarea [(ngModel)]="tenderFraudComplaint.complaint" placeholder="the gory details of the suspected tender fraud"></textarea>
</div>

<div class="two buttons"> 
<button class="ui button secondary right" type="reset">Reset</button>
<button class="ui button primary right" type="button" (click)="saveFraudComplaint()">Save Complaint</button>
</div>
</form>
</div>
`
})
export class ReportTenderFraudComplaintComponent {
    tenderFraudComplaint:any = {};
    priorities:String[] = ["High", "Medium", "Routine"];
    reference:string;

    constructor(@Inject(TenderFraudComplaintService)private service:TenderFraudComplaintService){}

    saveFraudComplaint():void {
        console.log("Saving complaint", JSON.stringify(this.tenderFraudComplaint));
       this.service.save(this.tenderFraudComplaint).subscribe(savedTenderFraudComplain => {
            console.log("Saved and got id", savedTenderFraudComplain.id);
            this.reference = savedTenderFraudComplain.reference;
        })
    }
}