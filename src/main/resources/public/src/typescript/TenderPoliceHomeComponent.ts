import {Component, provide, Inject} from "angular2/core";
import {bootstrap} from "angular2/platform/browser";
import {
    RouteConfig, Router, ROUTER_DIRECTIVES, ROUTER_PROVIDERS, APP_BASE_HREF,
    LocationStrategy, HashLocationStrategy
} from "angular2/router";
import {HTTP_PROVIDERS} from "angular2/http";
import {ReportTenderFraudComplaintComponent} from "./ReportTenderFraudComplaintComponent";
import {SearchTenderFraudComplaintComponent} from "./SearchTenderFraudComplaintComponent";

@Component({
    selector: 'tender-police-home',
    directives: [ROUTER_DIRECTIVES],
    template: `<nav class="ui two item menu">
    <a class="ui item" [routerLink]="['ReportTenderFraudComplaint']">Report A Tender Fraud</a>
    <div class="item">
    <div class="ui icon action input">
      <input type="text" #searchText placeholder="Search For Tender Fraud Complaint..." (keydown.enter)="searchForTenderFraudComplaint(searchText.value)">
      <i class="search icon"></i>
    </div>
  </div>
</nav>
<router-outlet></router-outlet>
`
})
@RouteConfig([

    {
        path: '/reportTenderFraudComplaint',
        name: 'ReportTenderFraudComplaint',
        component: ReportTenderFraudComplaintComponent,
        useAsDefault: true
    },
    {
        path: '/searchTenderFraudComplaint/:searchText',
        name: 'SearchTenderFraudComplaint',
        component: SearchTenderFraudComplaintComponent

    }
])
class TenderPoliceHomeComponent {
    constructor(@Inject(Router) private router:Router) {
    }

    searchForTenderFraudComplaint(searchText:string) {
        console.log(`Searching for fraud complaint for ${searchText}. Please Wait...`);
        this.router.navigate(['SearchTenderFraudComplaint', {searchText: searchText}]);
    }
}

bootstrap(TenderPoliceHomeComponent, [HTTP_PROVIDERS, ROUTER_PROVIDERS, provide(APP_BASE_HREF, {useValue: '/'}),provide(LocationStrategy,{useClass:HashLocationStrategy})]);