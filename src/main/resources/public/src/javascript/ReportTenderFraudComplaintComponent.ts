/**
 * Created by zorodzay on 2016/04/24.
 */
import {Component} from 'angular2/core';
import {bootstrap} from 'angular2/platform/browser';

@Component({
    selector: 'report-tender-fraud-complaint',
    'template': `
<div class="ui column stackable center page grid" style="margin-top: 5%">
 <div class="one wide column"></div>
    <form class="ui large form segment fourteen wide column center aligned">
    <h3 class="ui header">Report suspicious tender fraud</h3>
    <div class="ui horizontal divider">Your Personal Information</div>
    <div class="two fields">
     <div class="field">
     <label>Your Full Names</label>
     <input type="text" placeholder="Your full name" [(ngModel)]="tenderFraudComplaint.complaintName" required> 
</div>
<div class="field">
<label>Your Email Address</label>
<input type="email" placeholder="email@domain.com" [(ngModel)]="tenderFraudComplaint.complaintEmail">
</div>
</div>
<div class="two fields">
<div class="field">
<label>Your Phone Number</label>
<input type="tel" placeholder="phone number" [(ngModel)]="tenderFraudComplaint.complaintPhone">  
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
<select class="ui fluid dropdown" [(ngModel)]="tenderFraudComplaint.priority">
<option *ngFor="#priority of priorities" [value]="priority">{{priority}}</option>
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
class ReportTenderFraudComplaintComponent {
    tenderFraudComplaint:any = {};
    priorities:String[] = ["High", "Medium", "Low"];

    saveFraudComplaint():void {
        console.log("Saving complaint", JSON.stringify(this.tenderFraudComplaint));
    }
}

bootstrap(ReportTenderFraudComplaintComponent, []);