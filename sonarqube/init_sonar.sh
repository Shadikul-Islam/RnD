#!/bin/bash

# Download the SonarQube Community Branch Plugin
curl -L -o /opt/sonarqube/extensions/plugins/sonarqube-community-branch-plugin-1.9.0.jar https://github.com/mc1arke/sonarqube-community-branch-plugin/releases/download/1.9.0/sonarqube-community-branch-plugin-1.9.0.jar

# Run SonarQube
exec /opt/sonarqube/bin/linux-x86-64/sonar.sh run
