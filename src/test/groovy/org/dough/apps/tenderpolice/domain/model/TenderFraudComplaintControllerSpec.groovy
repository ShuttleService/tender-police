package org.dough.apps.tenderpolice.domain.model

import org.dough.apps.tenderpolice.App
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.test.context.ContextConfiguration
import org.springframework.test.context.web.WebAppConfiguration
import org.springframework.test.web.servlet.MockMvc
import org.springframework.test.web.servlet.MvcResult
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*

import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.*

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*
import org.springframework.test.web.servlet.setup.MockMvcBuilders
import org.springframework.web.context.WebApplicationContext
import spock.lang.Title

/**
 * Created by zorodzayi on 2016/04/22.
 */
@Title('A test that demonstrates that the controller for the TenderFraudComplaint has been set up correctly by spring rest data')
@ContextConfiguration(classes = [App])
@WebAppConfiguration
class TenderFraudComplaintControllerSpec extends spock.lang.Specification {
    @Autowired
    WebApplicationContext applicationContext
    MockMvc mockMvc
    static final String TENDER_FRAUD_COMPLAINT_BASE_URL = '/tenderFraudComplaints'

    def setup() {
        mockMvc = MockMvcBuilders.webAppContextSetup(applicationContext).build()
    }

    def '''tenderFraudComplaint url should be available and this should demonstrate that the spring data rest
 set up the TenderFraudComplaintController successfully'''() {
        when:
        "I visit the url ${TENDER_FRAUD_COMPLAINT_BASE_URL}"
        MvcResult result = mockMvc.perform(get(TENDER_FRAUD_COMPLAINT_BASE_URL)).andDo(print()).andReturn()
        then: 'the url should be accessible proving it exists and thus been set up correctly'
        result.response.status == 200

    }
}
