# Cloudera 5.4 Service Configuration

## Adding Cloudera services
Select on the arrow next to cluster name and select Add a Service per picture below
![](images/Home_add_service_1.png)

From list of services pick the service you want to add
![](images/All_add_service_wizard_1.png)

## Adding the Flume service
Follow Adding Cloudera services above and select continue to accept defaults below
![](images/Flume_add_service_wizard_1.png)

Select on Flume agent selection field and select hosts you want to have the agent on from the list of available hosts and select continue and finish
![](images/Flume_add_service_wizard_2.png)

Make sure the values below match what you have on screen and set Root Password field to Argyle standard and select continue than finish
![](images/Accumulo_add_service_wizard_3.png)

## Adding the Hive service
Follow Adding Cloudera services above and select continue to accept defaults below
![](images/Hive_add_service_wizard_1.png)

Select on Gateway, Hive Metastore Server, WebHcat Server, Hiveserver2 selection fields and select hosts you want to have Hive on from the list of available hosts and select continue.
![](images/Hive_add_service_wizard_2.png)

Select Use Embedded database and select test connection then select continue
![](images/Hive_add_service_wizard_3.png)

Leave defaults below as is and select finish
![](images/Hive_add_service_wizard_4.png)

## Impala service
Follow Adding Cloudera services above and select continue to accept defaults below
![](images/Impala_add_service_wizard_1.png)

Select on Impala Catalog Server, Impala Satatestore, Impala Daemon selection fields and select hosts you want to have Hive on from the list of available hosts and select continue.
![](images/Impala_add_service_wizard_2.png)

Leave defaults as is and select continue than finish
![](images/Impala_add_service_wizard_3.png)

## ArgyleDB service
Follow Adding Cloudera services above and select continue to accept defaults below
![](images/ArgyleDB_add_service_wizard_1.png)

Select on ArgyleDB Server, Redis Server selection fields and select hosts you want to have ArgyleDB on from the list of available hosts and select continue.
![](images/ArgyleDB_add_service_wizard_2.png)

Set Accumulo user password and PrestoDB discovery URI as below
![](images/ArgyleDB_add_service_wizard_3-1.png)

Add Redis server host if localhost set to local otherwise use FQDN name. Add Tableau REST API user. Add Tableau user password for rest apu user. Add api admin user
![](images/ArgyleDB_add_service_wizard_3-2.png)

Add IPA admin user password. Add host IPA server. Add ipa cert path
![](images/ArgyleDB_add_service_wizard_3-3.png)

## Adding the IBIS service
Follow adding Cloudera services above and select continue to accept defaults below
![](images/IBIS_add_service_wizard_1.png)

Ignore the error during install
![](images/IBIS_add_service_wizard_2.png)
