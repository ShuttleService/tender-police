package org.dough.apps.tenderpolice.domain.model

import org.dough.apps.tenderpolice.App
import org.dough.apps.tenderpolice.domain.model.TenderFraudComplaint
import org.dough.apps.tenderpolice.domain.model.TenderFraudComplaintRepository
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.test.context.ContextConfiguration
import spock.lang.Subject
import spock.lang.Title

/**
 * Created by zorodzay on 2016/04/21.
 */
@Title('A test that demonstrate that the TenderFraudComplaintRepository has been set up correctly')
@ContextConfiguration(classes = [App])
class TenderFraudComplaintRepositorySpec extends spock.lang.Specification {

    @Autowired
    @Subject
    TenderFraudComplaintRepository repository

    def 'demonstrate that the repository has been set up correctly by saving a TenderFraudComplaint to the db '() {
        given: 'that we have a certain number of TenderFraudComplaints in the database'
        int numberOfTenderFraudComplains = repository.count()
        when: 'we save a TenderFraudComplaint'
        repository.save(new TenderFraudComplaint())
        then: 'we should have one more tender fraud complaint in the database'
        repository.count() == numberOfTenderFraudComplains + 1
    }
}
