## Set up a Kubernetes cluster and deploy a REST API

1. Execute *deploy.sh* script in your k8s master. It will create your ssl cert.

2. Get service url with: 
```
    kubectl get services app --url
```

3. Call REST API with your favourite tester

# API Instructions

..* Return all Phones in the DB
 GET /phones

..* Return a Phone with specified database ID
GET /phone/<id>

..* Insert a new Phone in the DB
POST /phones
Request body
{
 'name':    'Phone name',
 'price': 	 'xxx€'
}

..* Update a register already exists
PUT /phone/<id>
Request body
{
 'name':    'Phone new name',
 'price': 	 'xxxxx€'
}

..* Delete a Phone with specified database ID
DELETE /phone/<id>

