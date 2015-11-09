# Cloudera 5.4 Service Configuration

### Adding Cloudera services
Select on the arrow next to cluster name and select Add a Service per picture below
![](images/Home_add_service_1.png)

From list of services pick the service you want to add
![](images/All_add_service_wizard_1.png)

### Adding the Flume service
Follow Adding Cloudera services above and Select continue to accept defaults below
![](images/Flume_add_service_wizard_1.png)

Select on Flume agent selection field and select hosts you want to have the agent on from the list of available hosts and Select continue and finish
![](images/Flume_add_service_wizard_2.png)

### Adding the Accumulo service
Follow Adding Cloudera services above and Select continue to accept defaults below
![](images/Accumulo_add_service_wizard_1.png)

Select on Accumulo master, Tablet Server, Garbage Collector, Monitor, Tracer, Gateway selection fields and select hosts you want to have Accumulo on from the list of available hosts and Select continue
![](images/Accumulo_add_service_wizard_2.png)

Make sure the values below match what you have on screen and set Root Password field to Argyle standard and Select continue than finish
![](images/Accumulo_add_service_wizard_3.png)

### Adding the Hive service
Follow Adding Cloudera services above and Select continue to accept defaults below
![](images/Hive_add_service_wizard_1.png)

Select on Gateway, Hive Metastore Server, WebHcat Server, Hiveserver2 selection fields and select hosts you want to have Hive on from the list of available hosts and Select continue.
![](images/Hive_add_service_wizard_2.png)

Select Use Embedded database and Select test connection then Select continue
![](images/Hive_add_service_wizard_3.png)

Leave defaults below as is and Select finish
![](images/Hive_add_service_wizard_4.png)

### Adding the Impala service
Follow Adding Cloudera services above and Select continue to accept defaults below
![](images/Impala_add_service_wizard_1.png)

Select on Impala Catalog Server, Impala Satatestore, WImpala Daemon selection fields and select hosts you want to have Hive on from the list of available hosts and Select continue.
![](images/Impala_add_service_wizard_2.png)

Leave defaults as is and Select continue than finish
![](images/Impala_add_service_wizard_3.png)

### Adding the ArgyleDB service
Follow Adding Cloudera services above and Select continue to accept defaults below
![](images/ArgyleDB_add_service_wizard_1.png)

Select on ArgyleDB Server, Redis Server selection fields and select hosts you want to have ArgyleDB on from the list of available hosts and Select continue.
![](images/ArgyleDB_add_service_wizard_2.png)

Set Accumulo user password and PrestoDB discovery URI as below
![](images/ArgyleDB_add_service_wizard_3-1.png)

Add Redis server host if localhost set to local otherwise use FQDN name. Add Tableau rest api user. Add Tableau user password for rest apu user. Add api admin user
![](images/ArgyleDB_add_service_wizard_3-2.png)

Add ipa admin user password. Add host ipa server. Add ipa cert path
![](images/ArgyleDB_add_service_wizard_3-3.png)

### Adding the PrestoDB service
Follow Adding Cloudera services above and Select continue to accept defaults below
![](images/PrestoDB_add_service_wizard_1.png)

Add Accumulo instance name. Set accumulo password per Argyle records
![](images/PrestoDB_add_service_wizard_2-1.png)

Leave defaults as is and Select continue then finish
![](images/PrestoDB_add_service_wizard_2-2.png)

### Adding the IBIS service
Follow adding Cloudera services above and Select continue to accept defaults below
![](images/IBIS_add_service_wizard_1.png)

ignore the error during install
![](images/IBIS_add_service_wizard_2.png)
