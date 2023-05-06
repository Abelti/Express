//routes
//get method

const express = require('express');

const app = express();

const port = 3000;

let accounts = [
    {
        "id": 1,
        "username": "Abelti",
        "role": "admin"
    },
    {
        "id": 2,
        "username": "Kebede",
        "role": "guest"
    },
    {
        "id": 3,
        "username": "Ayele",
        "role": "guest"
    }
    ];

app.get('/', (request, response) => {
        response.send('This is the homepage<br /> /accounts <br /> /accounts{id} <br /> id = 1, 2, 3');
    });

app.get('/accounts', (request, response) => {
    response.json(accounts);
    });

app.get('/accounts/:id', (request, response) => {
    const accountId = Number(request.params.id);
    const getAccount = accounts.find((account) => account.id === accountId);

    if (!getAccount) {
        response.status(500).send('Account not found.')
    } else {
        response.json(getAccount);
    }
    });

    app.post('/accounts', (request, response) => {
        // const incomingAccount = {
        //     "id": 4,
        //     "username": "Hello",
        //     "role": "admin"
        // };
        const incomingAccount = request.body;
    
        accounts.push(incomingAccount);
    
        response.json(accounts);
    })
    app.put('/accounts/:id', (request, response) => {
        const accountId = Number(request.params.id);
        const body = request.body;
        const account = accounts.find((account) => account.id === accountId);
        const index = accounts.indexOf(account);
    
        if (!account) {
            response.status(500).send('Account not found.');
        } else {
        const updatedAccount = { ...account, ...body };
    
        accounts[index] = updatedAccount;
    
        response.send(updatedAccount);
        }
    });

    
    app.delete('/accounts/:id', (request, response) => {
        const accountId = Number(request.params.id);
        const newAccounts = accounts.filter((account) => account.id != accountId);
    
        if (!newAccounts) {
            response.status(500).send('Account not found.');
        } else {
            accounts = newAccounts;
            response.send(accounts);
        }
        });

    app.listen(port, () => {
        console.log(`Example app listening on port ${port}`)
    })