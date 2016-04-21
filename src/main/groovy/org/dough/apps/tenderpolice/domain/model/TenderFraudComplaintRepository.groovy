package org.dough.apps.tenderpolice.domain.model

import org.bson.types.ObjectId
import org.springframework.data.repository.PagingAndSortingRepository

/**
 * Created by zorodzay on 2016/04/21.
 */
interface TenderFraudComplaintRepository extends PagingAndSortingRepository<TenderFraudComplaint,ObjectId>{

}