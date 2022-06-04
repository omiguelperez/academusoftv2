#!/bin/bash


python -m venv venv
source venv/bin/activate
python -m pip install --upgrade pip
pip install ansible==2.10

ansible-galaxy install omiguelperez.ec2_staging_deploy

ansible-galaxy collection install community.general
ansible-galaxy collection install community.docker
