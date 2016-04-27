package org.dough.apps.tenderpolice.domain.model

import groovy.transform.Canonical
import org.bson.types.ObjectId
import org.springframework.data.annotation.Id
import org.springframework.data.mongodb.core.mapping.Document
import org.springframework.data.rest.core.event.AfterSaveEvent

/**
 * Created by zorodzay on 2016/04/21.
 */
@Document
@Canonical
class TenderFraudComplaint {
    @Id
    ObjectId id
    String complainantName
    String offendingCompany
    String complainantEmail
    String complainantId
    String complainantPhone
    Priority complaintPriority
    String complaint
    String reference
    Date reportedOn

    public String getReference() {
        id?.toString()
    }

    Date getReportedOn() {
        id?.getDate()
    }
}

enum Priority {
    High, Medium, Routine
}