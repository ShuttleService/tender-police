import {Component, provide, Inject} from "@angular/core";
import {bootstrap} from "@angular/platform-browser-dynamic";
import {APP_BASE_HREF, LocationStrategy, HashLocationStrategy} from "@angular/common";
import {HTTP_PROVIDERS} from "@angular/http";
import {ReportTenderFraudComplaintComponent} from "./ReportTenderFraudComplaintComponent";
import {SearchTenderFraudComplaintComponent} from "./SearchTenderFraudComplaintComponent";
import {Router, ROUTER_DIRECTIVES, ROUTER_PROVIDERS, RouteConfig} from "@angular/router-deprecated";
@Component({
    selector: 'tender-police-home',
    directives: [ROUTER_DIRECTIVES],
    template: `<nav class="ui two item menu">
    <a class="ui item" [routerLink]="['ReportTenderFraudComplaint']">Report A Tender Fraud</a>
    <div class="item">
    <div class="ui icon action input">
      <input type="text" #searchText placeholder="Search..." (keydown.enter)="searchForTenderFraudComplaint(searchText.value)">
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

bootstrap(TenderPoliceHomeComponent, [HTTP_PROVIDERS, ROUTER_PROVIDERS, provide(APP_BASE_HREF, {useValue: '/'}), provide(LocationStrategy, {useClass: HashLocationStrategy})]);