package org.dough.apps.tenderpolice

import org.dough.apps.tenderpolice.domain.model.TenderFraudComplaint
import org.dough.apps.tenderpolice.domain.model.TenderFraudComplaintRepository
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.test.context.ContextConfiguration

/**
 * Created by zorodzay on 2016/04/21.
 */
@ContextConfiguration(classes = [App])
class TenderFraudComplaintRepositorySpec extends spock.lang.Specification {

    @Autowired
    TenderFraudComplaintRepository repository

    def 'should save into the mongodb database'() {
        given: 'that we do not have stuff in the db'
        assert repository.count() == 0
        when: 'we save'
        repository.save(new TenderFraudComplaint())
        then: 'we should have something in the database'
        repository.count() == 1
    }
}
