# Cloudera 5.4 Configuration

![alt text](./images/ClouderaImplementationImages/Python_add_service_wizard_1.png)
This is the start page for all of the services you will need to add. The list on the left side of the screen shows services that have already been activated, with the green dot indicating they are running.

## Adding Python Tools Services

![alt text](./images/ClouderaImplementationImages/Python_add_service_wizard_2.png)
Clcik the arrow to open the dropdown menu and click "Add a Service"

![alt text](./images/ClouderaImplementationImages/Python_add_service_wizard_3.png)
The Python Tools option are not on the first page. Scroll down to find the service.

![alt text](./images/ClouderaImplementationImages/Python_add_service_wizard_4.png)
 Select the "Python Tools" service and click "Continue".
 
 ![alt text](./images/ClouderaImplementationImages/Python_add_service_wizard_5.png)
Assign a role to the Python Tools host by clicking the "Select hosts" bar.

 ![alt text](./images/ClouderaImplementationImages/Python_add_service_wizard_6.png)
Select the desired host from the list and click "OK".

 ![alt text](./images/ClouderaImplementationImages/Python_add_service_wizard_7.png)
Once the Python Tools has an assigned host, click "Continue".

 ![alt text](./images/ClouderaImplementationImages/Python_add_service_wizard_8.png)
 Check the Services are running properly and click "Continue".
 
 ![alt text](./images/ClouderaImplementationImages/Python_add_service_wizard_9.png)
Click "Finish" to confirm you have added the Python Tools services.

 ![alt text](images/ClouderaImplementationImages/Python_add_service_wizard_10.png)
Install Python Tools to host(same host of Argyle Data ML)

## Adding Argyle Data ML Services
![alt text](./images/ClouderaImplementationImages/Python_add_service_wizard_2.png)
Return to the home screen to begin adding a new service. Again, click the arrow to get the drop down menu and click “Add a Service”

![alt text](./images/ClouderaImplementationImages/ArgyleML_add_service_wizard_1.png)
Click Argyle Data ML and click continue to start adding the Argyle Data Machine Learning services.

![alt text](./images/ClouderaImplementationImages/ArgyleML_add_service_wizard_2.png)
Select a host for the Argyle Data ML Service by clicking “Select host”.

![alt text](./images/ClouderaImplementationImages/select_host_wizard.png)
Select the desired host(s) by checking the box and clicking “OK”.

![alt text](./images/ClouderaImplementationImages/ArgyleML_add_service_wizard_3.png)
The Agent and assigned host should look like this. Click Continue once your screen looks like this. 

![alt text](./images/ClouderaImplementationImages/ArgyleML_add_service_wizard_4.png)
Review the changes to complete the addition of the Argyle Machine Learning Service to Cloudera. 

##Adding the Flume Service
![alt text](./images/ClouderaImplementationImages/Python_add_service_wizard_2.png)
Return to the home screen to begin adding a new service. Again, click the arrow to get the drop down menu and click “Add a Service”

![alt text](./images/ClouderaImplementationImages/Flume_add_service_wizard_1.png)
Select Flume in the Add Service Wizard to start adding the Flume service. 

![alt text](./images/ClouderaImplementationImages/Flume_add_service_wizard_2.png)
Select the default HDFS dependency for the Flume service. 

![alt text](./images/ClouderaImplementationImages/Flume_add_service_wizard_3.png)
Select the host you want for the Flume agent by clicking “Select hosts”. 	

![alt text](./images/ClouderaImplementationImages/Flume_add_service_wizard_4.png)
Select the desired host(s) from the list by clicking the check box, followed by “OK”.

![alt text](./images/ClouderaImplementationImages/Flume_add_service_wizard_5.png)
Click “Continue” once your screen looks like this and the agent has an assigned host.

![alt text](./images/ClouderaImplementationImages/Flume_add_service_wizard_6.png)
Click Finish to complete the addition of the Flume services.

## Adding Hive Services
![alt text](./images/ClouderaImplementationImages/Python_add_service_wizard_2.png)
Return to the home screen to begin adding a new service. Again, click the arrow to get the drop down menu and click “Add a Service”

![alt text](./images/ClouderaImplementationImages/Hive_add_service_wizard_1.png)
Click the Hive button, followed by “Continue”, to begin adding the Hive services. 

![alt text](./images/ClouderaImplementationImages/Hive_add_service_wizard_2.png)
Here, select the HDFS dependency that includes Sentry. Then, click continue. 

![alt text](./images/ClouderaImplementationImages/Hive_add_service_wizard_3.png)
Click the “Select hosts” button under the Gateway, Hive Metastore Server, WebHcat Server, Hiveserver2 selection fields and select hosts you want to have Hive run on from the list of available hosts.  Once each agent has a host and looks similar to the above screenshot, click continue. 

![alt text](./images/ClouderaImplementationImages/Hive_add_service_wizard_4.png)
Click “Use Embedded Database” and then click “Test Connection”. Once this is working, click “Continue”.

![alt text](./images/ClouderaImplementationImages/Hive_add_service_wizard_5.png)
Leave the defaults as they are and click continue to finish the addition of the Hive services to Cloudera. 

## Adding the Impala Service
![alt text](./images/ClouderaImplementationImages/Python_add_service_wizard_2.png)
Return to the home screen to begin adding a new service. Again, click the arrow to get the drop down menu and click “Add a Service”

![alt text](./images/ClouderaImplementationImages/Impala_add_service_wizard_1.png)
Select the “Impala” option, then click continue to begin adding the Impala services
![alt text](./images/ClouderaImplementationImages/Impala_add_service_wizard_2.png)
Select the HDFS Hive-2 dependency then click continue. 

![alt text](./images/ClouderaImplementationImages/Impala_add_service_wizard_3.png)
Select the host you want to have Hive on for the “Impala Catalogue Server”, “Impala StateStore” and Impala Daemon” by clicking the grey “Select a host” box for each. 

![alt text](./images/ClouderaImplementationImages/Impala_add_service_wizard_4.png)
Once each agent has a host selected, click continue. 

![alt text](./images/ClouderaImplementationImages/Impala_add_service_wizard_5.png)
Leave the defaults as they appear. Click continue to finish adding the Impala services to Cloudera. 
