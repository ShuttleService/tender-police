/**
 * Created by zorodzay on 2016/04/25.
 */
import {Injectable, Inject} from "@angular/core";
import {Http, Headers} from "@angular/http";
import "rxjs/add/operator/map";
import {Observable} from "rxjs/Observable";

@Injectable()
export class TenderFraudComplaintService {
    static ENDPOINT_URL:string = '/tenderFraudComplaints';

    constructor(@Inject(Http) private http:Http) {
    }

    save(tenderFraudComplaint):any {
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.post(TenderFraudComplaintService.ENDPOINT_URL, JSON.stringify(tenderFraudComplaint),
            {headers: headers}).map(complaint => complaint.json());
    }

    searchTenderFraudComplaints(searchText:string):Observable<any> {
        console.log(`Searching for Tender Fraud Complaint matching ${searchText}. Calling the backend`);
        return this.http.get(TenderFraudComplaintService.ENDPOINT_URL +
                "/search/findByComplainantNameLikeOrOffendingCompanyLikeOrComplaintLikeOrId?" +
                "searchText=" + searchText)
            .map(complaints=>complaints.json()._embedded.tenderFraudComplaints);
    }
}