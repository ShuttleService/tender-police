package org.dough.apps.tenderpolice.domain.model

import org.bson.types.ObjectId
import org.springframework.data.repository.PagingAndSortingRepository
import org.springframework.data.repository.query.Param

/**
 * Created by zorodzay on 2016/04/21.
 */
interface TenderFraudComplaintRepository extends PagingAndSortingRepository<TenderFraudComplaint, ObjectId> {

    List<TenderFraudComplaint> findByComplainantNameLikeOrOffendingCompanyLikeOrComplaintLikeOrIdLike(@Param('searchText') String complainant,
                                                                                                      @Param('searchText')String offendingCompany,
                                                                                                      @Param('searchText')String complaint,
                                                                                                      @Param('searchText')String id)
}