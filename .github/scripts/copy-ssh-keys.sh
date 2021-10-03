#!/bin/bash


mkdir -p ~/.ssh/
cp -rv ./ansible/**/files/ssh_keys/instance/academusoftv2_ansible_aws* ~/.ssh/
chmod 600 ~/.ssh/academusoftv2_ansible_aws*
