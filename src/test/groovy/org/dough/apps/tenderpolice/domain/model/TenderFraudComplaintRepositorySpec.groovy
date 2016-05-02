package org.dough.apps.tenderpolice.domain.model

import org.bson.types.ObjectId
import org.dough.apps.tenderpolice.App
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.test.context.ContextConfiguration
import spock.lang.Subject
import spock.lang.Title
import spock.lang.Unroll

/**
 * Created by zorodzay on 2016/04/21.
 */
@Title('A test that demonstrate that the TenderFraudComplaintRepository has been set up correctly')
@ContextConfiguration(classes = [App])
class TenderFraudComplaintRepositorySpec extends spock.lang.Specification {

    @Autowired
    @Subject
    TenderFraudComplaintRepository repository
    static String complainant = 'some complainant name'
    static String offendingCompany = 'some offending company'
    static String complaint = 'some complaint'
    static String id

    def setup() {
        repository.deleteAll()
    }

    def 'demonstrate that the repository has been set up correctly by saving a TenderFraudComplaint to the db '() {
        given: 'that we have a certain number of TenderFraudComplaints in the database'
        int numberOfTenderFraudComplains = repository.count()
        when: 'we save a TenderFraudComplaint'
        repository.save(new TenderFraudComplaint())
        then: 'we should have one more tender fraud complaint in the database'
        repository.count() == numberOfTenderFraudComplains + 1
    }

    @Unroll("should find tenderFraudComplaint with the searchString #searchText")
    def "find complaints by part string or full string of either complainant's name, offending company, reference, the actual complaint "() {
        given: "a tender fraud complaint with the given properties"
        TenderFraudComplaint tenderFraudComplaint = new TenderFraudComplaint(complainantName: complainant, offendingCompany: offendingCompany,
                complaint: complaint)

        when: 'we save and search for the tender fraud complaint '
        TenderFraudComplaint savedTenderFraudComplaint = repository.save(tenderFraudComplaint)
        id = savedTenderFraudComplaint.id.toString()

        then: 'we should get the tender fraud complaint'
        List<TenderFraudComplaint> foundTenderFraudComplaint = repository.findByComplainantNameLikeOrOffendingCompanyLikeOrComplaintLikeOrId(searchText,
                searchText, searchText, searchText)

        and: 'the found tender complaint should be the one we are looking for as verified by having the id that we got after saving'
        id && id.toString() == foundTenderFraudComplaint[0].id.toString()

        where: 'the search text is as below either'
        searchText << [complainant, complainant.substring(6), complaint, complaint.substring(5), offendingCompany, offendingCompany.substring(7),
        ]

    }

    def 'find a complaint by the reference, which in effect is the timestamp for the id'() {
        given: 'a tender fraud complaint'
        TenderFraudComplaint tenderFraudComplaint = new TenderFraudComplaint()

        when: 'we save and then search for the saved tender fraud complaint'
        ObjectId id = repository.save(tenderFraudComplaint).id
        List<TenderFraudComplaint> actual = repository.findByComplainantNameLikeOrOffendingCompanyLikeOrComplaintLikeOrId(id.toString(),id.toString(),id.toString(),id.toString())
        then: 'the found tender fraud complaint should be the one saved'
        actual && actual[0].id == tenderFraudComplaint.id
    }
}
