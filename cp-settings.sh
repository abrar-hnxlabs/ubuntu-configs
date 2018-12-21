#! /bin/sh

cp -v smb.simple.conf /etc/samba/smb.conf
cp -v haproxy.cfg /etc/haproxy/haproxy.cfg
cp -v transmission-setting.json /etc/transmission-daemon/settings.json
systemctl reload transmission-daemon.service
systemctl restart haproxy
systemctl restart smbd