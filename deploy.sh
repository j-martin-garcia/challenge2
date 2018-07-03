echo "Provide the name of host when asked for *Common Name*"
echo ">>>>>>>>>>>><<<<<<<<<<<<<<<<"

openssl req -x509 -nodes -days 365 -newkey rsa:2048 -keyout tls-key.key -out tls-cert.crt

openssl dhparam -out dhparam.pem 2048

echo "Created SSL cert"

kubectl create secret tls tls-certificate --key tls-key.key --cert tls-cert.crt

kubectl create secret generic tls-dhparam --from-file=dhparam.pem

echo "Create namespace and ingress controller"

kubectl create -f .

echo "Create dev enviroment"

kubectl create -f ./dev

echo "Create prod enviroment"

kubectl create -f ./prod


