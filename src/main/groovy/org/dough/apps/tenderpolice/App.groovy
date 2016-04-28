package org.dough.apps.tenderpolice

import org.dough.apps.tenderpolice.domain.model.TenderFraudComplaintRepository
import org.slf4j.Logger
import org.slf4j.LoggerFactory
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.boot.SpringApplication
import org.springframework.boot.autoconfigure.SpringBootApplication

/**
 * Created by zorodzay on 2016/04/21.
 */
@SpringBootApplication
class App {
    static Logger logger = LoggerFactory.getLogger(App)
    @Autowired
    TenderFraudComplaintRepository repository

    static void main(String... a) {
        logger.info('Starting the tender police app. Please wait...')
        SpringApplication.run(App, a)
    }
}
