import { Injectable } from '@angular/core';

export interface User {
  name: string;
  lastName: string;
  email: string;
  fiscalCode: string;
  phone: string;
  province: string;
}

@Injectable({
  providedIn: 'root',
})
export class UserService {
  users: User[] = [
    {
      name: 'Marco',
      lastName: 'Verdi',
      email: 'verdi.marco@.com',
      fiscalCode: 'MRARSS777H13H501Z',
      phone: '0551234567',
      province: 'Firenze',
    },
    {
      name: 'Luca',
      lastName: 'Gialli',
      email: 'giall.iluca@.com',
      fiscalCode: 'MRARSS777H13H501Z',
      phone: '9891254567',
      province: 'Napoli',
    },
    {
      name: 'Mimmo',
      lastName: 'Verdi',
      email: 'mimmov@.com',
      fiscalCode: 'MRARSS777H13H501Z',
      phone: '8881234567',
      province: 'Palermo',
    },
    {
      name: 'Anna',
      lastName: 'Neri',
      email: 'annaneri@.com',
      fiscalCode: 'MRARSS777H13H501Z',
      phone: '1111234567',
      province: 'Parigi',
    },
    {
      name: 'Ugo',
      lastName: 'Florenzi',
      email: 'ugof@.com',
      fiscalCode: 'MRARSS777H13H501Z',
      phone: '26558996654',
      province: 'Roma',
    },
    {
      name: 'Ciro',
      lastName: 'Padova',
      email: 'padova.ciro@.com',
      fiscalCode: 'MRARSS777H13H501Z',
      phone: '9961234567',
      province: 'Milano',
    },
  ];

  getUsers(): User[] {
    return this.users;
  }

  deleteUser(user: User): void {
    console.log('sono nelle servizio');
     
    const idx = this.users.findIndex(ele => ele.email === user.email);
    this.users.splice(idx,1);
  }
}
