https://www.youtube.com/watch?v=3jXtTSnA8zw&t=10s
// CI=> COntinous Integration
// CD=> COntinuous Deployment
action=> create workflow
setting => action / action runner 
svc.sh 
cd /etc/nginx
cd sites-available

sudo nano default
ip:80
ip:80/api/
ip:8000/api 
============


location /api/{
    proxy_pass http://localhost:8000/;
    proxy_set_header Host $host;
    proxy_set_header X-Real-IP $remote_addr;
    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for
}
===================
:wq then exit
nano default
sudo nano default
sudo systemctl restart nginx 