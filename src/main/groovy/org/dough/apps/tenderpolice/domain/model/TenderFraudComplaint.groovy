package org.dough.apps.tenderpolice.domain.model

import groovy.transform.Canonical
import org.bson.types.ObjectId
import org.springframework.data.mongodb.core.mapping.Document

/**
 * Created by zorodzay on 2016/04/21.
 */
@Document
@Canonical
class TenderFraudComplaint {
    ObjectId id
    String complainantName
    String offendingCompany
    String complainantEmail
    String complainantId
    String complainantPhone
    Priority complaintPriority
    String complaint
}

enum Priority {

}