import React from "react";
import { User } from "../pages/createAccount/CreateAccount";

const BASE_URL = 'https://airbean-9pcyw.ondigitalocean.app';

export async function createAcc(userData: User) {
  try {
    const response = await fetch(`${BASE_URL}/api/user/signup`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(userData)
    });
    console.log(response);
    if (!response.ok) {
        throw new Error('Kunde inte skapa konto');
    }
    const data = await response.json();
    console.log(data);
    return data;

    } catch (error: any) {
        console.error(error);
    }
}

export async function loginAcc(userData: User){
    try {
        console.log(userData);
        const response = await fetch(`${BASE_URL}/api/user/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userData)
        });
        console.log(response);
        if (!response.ok) {
            throw new Error('Could not login')
        }
        const data = await response.json();
        console.log(data);
        sessionStorage.setItem('token', data.token);
        return data;
        
    } catch (error: any) {
        console.error(error);
    }
}

export async function checkToken() {
    
    const token = sessionStorage.getItem('token') || ''; 
    if (token.length > 0) {
        try {
            const response = await fetch(`${BASE_URL}/api/user/status`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `${token}`
                }
            });
            const data = await response.json();
            return data;

        } catch (error: any) {
            console.error(error);
        }
    }
};

export async function fetchHistory() {
    
    const token = sessionStorage.getItem('token') || ''; 
    if (token.length > 0) {
        try {
            const response = await fetch(`${BASE_URL}/api/user/history`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `${token}`
                }
            });
            const data = await response.json();
            return data;

        } catch (error: any) {
            console.error(error);
        }
    }
};


export async function getOrder(orderNum: string) {
    try {
        const response = await fetch(`${BASE_URL}/api/beans/order/status/${orderNum}`, {
            method: "GET",
            headers: {
            'Content-Type': 'application/json', 
            'Authorization': `${sessionStorage.getItem('token')}`
            }
        });
        const data = await response.json();
        console.log('Token');
        return data;

        } catch (error) {
        console.error(error);
        }

  }