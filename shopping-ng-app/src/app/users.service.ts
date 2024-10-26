import { Injectable } from '@angular/core';

export interface User {
  Id: string;
  Name: string;
  Email:string,
  Phone: string;
  Address: string;
  RegisterDate: string;
}

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  users: User[] = [
    {
      Id: '1231-1244-1233',
      Name: 'Mohamed Ashraf',
      Email: 'Mohamed.Ashraf@Gmail.com',
      Phone: '01144558866',
      Address:
        '55 Mohammed Mostafa El Sayed, An Nadi Al Ahli, Nasr City, Cairo Governorate',
      RegisterDate:
        'Wed Sep 18 2019 12:35:14 GMT+0200 (Eastern European Standard Time)',
    },
    {
      Id: '8573-2903-2344',
      Name: 'Ahmed Hossam',
      Email: 'Ahmed.Hossam@gmail.com',
      Phone: '01025458780',
      Address: '234 Al Abageyah, Qesm Al Khalifah, Cairo Governorate',
      RegisterDate:
        'Wed Sep 18 2019 12:35:14 GMT+0200 (Eastern European Standard Time)',
    },
    {
      Id: '8475-2345-2312',
      Name: 'Hassan Mostafa Ahmed',
      Email: 'HassanMostafa@gmail.com',
      Phone: '01235698458',
      Address: '1 Al Teraa, El-Masara El-Balad, Helwan, Cairo Governorate',
      RegisterDate:
        'Wed Sep 18 2019 12:35:14 GMT+0200 (Eastern European Standard Time)',
    },
    {
      Id: '9843-2345-2345',
      Name: 'Abd El-Rahman Ahmed Abd El-Aleem',
      Email: 'AbdoAhmed@hotmail.com',
      Phone: '01125452545',
      Address:
        '25 Street 214, Maadi as Sarayat Al Gharbeyah, Maadi, Cairo Governorate',
      RegisterDate:
        'Wed Sep 18 2019 12:35:14 GMT+0200 (Eastern European Standard Time)',
    },
    {
      Id: '5432-3425-1234',
      Name: 'Hossam Ramadan',
      Email: 'HossamRamadan2010@live.com',
      Phone: '01025485522',
      Address: '236A Al Labeini, Al Haraneyah, Giza District, Giza Governorate',
      RegisterDate:
        'Wed Sep 18 2019 12:35:14 GMT+0200 (Eastern European Standard Time)',
    },
    {
      Id: '9179-2312-3421',
      Name: 'Hoda Ahmed',
      Email: 'HodaHoda2020@gmail.com',
      Phone: '01256633333',
      Address:
        '25 Street 214, Maadi as Sarayat Al Gharbeyah, Maadi, Cairo Governorate',
      RegisterDate:
        'Wed Sep 18 2019 12:35:14 GMT+0200 (Eastern European Standard Time)',
    },
    {
      Id: '2343-1233-4323',
      Name: 'Nada Hossam Ahmed',
      Email: 'NadaAhmed2222@gmail.com',
      Phone: '01223655892',
      Address:
        '111, District 7, Neighborhood 1, Floor 7, El sheikh zayed, Giza Governorate 12577',
      RegisterDate:
        'Wed Sep 18 2019 12:35:14 GMT+0200 (Eastern European Standard Time)',
    },
    {
      Id: '1223-1223-1231',
      Name: 'John Emad Peter',
      Email: 'JohnP2011@gmail.com',
      Phone: '01566445588',
      Address: '88 10 Ramadan, Ezbet Saad, Sidi Gaber, Alexandria Governorate',
      RegisterDate:
        'Wed Sep 18 2019 12:35:14 GMT+0200 (Eastern European Standard Time)',
    },
    {
      Id: '3123-3242-1231',
      Name: 'John Emad Peter',
      Email: 'JohnP2011@gmail.com',
      Phone: '01002235544',
      Address: '125 Z, Hadayek Al Ahram, Haram, Giza Governorate',
      RegisterDate:
        'Wed Sep 18 2019 12:35:14 GMT+0200 (Eastern European Standard Time)',
    },
  ];
  constructor() {}
}
