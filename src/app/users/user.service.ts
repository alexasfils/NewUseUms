import { Injectable } from '@angular/core';

export interface User {
  id: number;
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
      id:1,
      name: 'Marco',
      lastName: 'Verdi',
      email: 'verdi.marco@.com',
      fiscalCode: 'MRARSS777H13H501Z',
      phone: '0551234567',
      province: 'Firenze',
    },
    {
      id:2,
      name: 'Luca',
      lastName: 'Gialli',
      email: 'giall.iluca@.com',
      fiscalCode: 'MRARSS777H13H501Z',
      phone: '9891254567',
      province: 'Napoli',
    },
    {
      id:3,
      name: 'Mimmo',
      lastName: 'Verdi',
      email: 'mimmov@.com',
      fiscalCode: 'MRARSS777H13H501Z',
      phone: '8881234567',
      province: 'Palermo',
    },
    {
      id:4,
      name: 'Anna',
      lastName: 'Neri',
      email: 'annaneri@.com',
      fiscalCode: 'MRARSS777H13H501Z',
      phone: '1111234567',
      province: 'Parigi',
    },
    {
      id:5,
      name: 'Ugo',
      lastName: 'Florenzi',
      email: 'ugof@.com',
      fiscalCode: 'MRARSS777H13H501Z',
      phone: '26558996654',
      province: 'Roma',
    },
    {
      id:6,
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
     
    const idx = this.users.findIndex(ele => ele.id === user.id);
    this.users.splice(idx,1);
  }

  updateUser(user: User): boolean {
    //Trovo User con email specifico(id specifico)
    const idx = this.users.findIndex(ele => ele.id === user.id);
    //memorizzo la copia dello user dentro l'array di users di userspecifico con indice che gli passo
    if (idx === -1) {
      return false;
    }
    this.users[idx] = { ...user };
    return true;
  }
}
