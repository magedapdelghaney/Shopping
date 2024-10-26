import { Injectable } from '@angular/core';
import { Product } from './products.service';
import { HttpClient } from '@angular/common/http';



export interface ProductItem {
  ProductId: number;
  Quantity:number
}
export interface Order {
  OrderId: number;
  OrderDate: string;
  UserId: string;
  Products: ProductItem[];
  PaymentType: string;
}

@Injectable({
  providedIn: 'root',
})

export class OrdersService {
  orders: Order[] = [
    {
      OrderId: 1233,
      OrderDate:
        'Wed Sep 18 2019 12:45:37 GMT+0200(Eastern European Standard Time)',
      UserId: '8475-2345-2312',
      Products: [
        { ProductId: 124, Quantity: 2 },
        { ProductId: 127, Quantity: 1 },
        { ProductId: 130, Quantity: 1 },
      ],
      PaymentType: 'online',
    },
    {
      OrderId: 1234,
      OrderDate:
        'Wed Sep 18 2019 12:45:37 GMT+0200(Eastern European Standard Time)',
      UserId: '1223-1223-1231',
      Products: [
        { ProductId: 132, Quantity: 12 },
        { ProductId: 134, Quantity: 3 },
        { ProductId: 130, Quantity: 2 },
      ],
      PaymentType: 'Online',
    },
    {
      OrderId: 1235,
      OrderDate:
        'Wed Sep 18 2019 12:45:37 GMT+0200(Eastern European Standard Time)',
      UserId: '9843-2345-2345',
      Products: [
        { ProductId: 123, Quantity: 1 },
        { ProductId: 131, Quantity: 1 },
      ],
      PaymentType: 'Cash',
    },
    {
      OrderId: 1236,
      OrderDate:
        'Thu Jul 19 2019 12:45:37 GMT+0200(Eastern European Standard Time)',
      UserId: '2343-1233-4323',
      Products: [
        { ProductId: 136, Quantity: 1 },
        { ProductId: 139, Quantity: 1 },
      ],
      PaymentType: 'Online',
    },
    {
      OrderId: 1237,
      OrderDate:
        'Wed Jul 19 2019 12:45:37 GMT+0200(Eastern European Standard Time)',
      UserId: '2343-1233-4323',
      Products: [{ ProductId: 142, Quantity: 3 }],
      PaymentType: 'Online',
    },
    {
      OrderId: 1238,
      OrderDate:
        'Thu Jul 20 2019 12:45:37 GMT+0200(Eastern European Standard Time)',
      UserId: '3123-3242-1231',
      Products: [
        { ProductId: 126, Quantity: 6 },
        { ProductId: 141, Quantity: 1 },
      ],
      PaymentType: 'Online',
    },
    {
      OrderId: 1239,
      OrderDate:
        'Fri Jul 20 2019 12:55:37 GMT+0200(Eastern European Standard Time)',
      UserId: '1231-1244-1233',
      Products: [
        { ProductId: 135, Quantity: 6 },
        { ProductId: 141, Quantity: 10 },
      ],
      PaymentType: 'Online',
    },
    {
      OrderId: 1240,
      OrderDate:
        'Fri Jul 20 2019 01:55:37 GMT+0200(Eastern European Standard Time)',
      UserId: '1223-1223-1231',
      Products: [
        { ProductId: 142, Quantity: 3 },
        { ProductId: 125, Quantity: 1 },
      ],
      PaymentType: 'online',
    },
    {
      OrderId: 1241,
      OrderDate:
        'Fri Jul 20 2019 03:55:37 GMT+0200(Eastern European Standard Time)',
      UserId: '1231-1244-1233',
      Products: [
        { ProductId: 131, Quantity: 3 },
        { ProductId: 125, Quantity: 2 },
        { ProductId: 123, Quantity: 1 },
      ],
      PaymentType: 'Cash',
    },
    {
      OrderId: 1242,
      OrderDate:
        'Fri Jul 20 2019 06:55:37 GMT+0200(Eastern European Standard Time)',
      UserId: '1231-1244-1233',
      Products: [
        { ProductId: 140, Quantity: 3 },
        { ProductId: 125, Quantity: 8 },
      ],
      PaymentType: 'Cash',
    },
    {
      OrderId: 1243,
      OrderDate:
        'Fri Jul 20 2019 09:55:37 GMT+0200(Eastern European Standard Time)',
      UserId: '1231-1244-1233',
      Products: [
        { ProductId: 140, Quantity: 3 },
        { ProductId: 125, Quantity: 1 },
      ],
      PaymentType: 'Cash',
    },
    {
      OrderId: 1244,
      OrderDate:
        'Fri Jul 20 2019 11:30:37 GMT+0200(Eastern European Standard Time)',
      UserId: '1231-1244-1233',
      Products: [
        { ProductId: 141, Quantity: 3 },
        { ProductId: 130, Quantity: 1 },
      ],
      PaymentType: 'Cash',
    },
    {
      OrderId: 1245,
      OrderDate:
        'Fri Jul 20 2019 00:55:37 GMT+0200(Eastern European Standard Time)',
      UserId: '1231-1244-1233',
      Products: [
        { ProductId: 141, Quantity: 3 },
        { ProductId: 130, Quantity: 1 },
      ],
      PaymentType: 'online',
    },
    {
      OrderId: 1246,
      OrderDate:
        'Fri Jul 20 2019 14:55:37 GMT+0200(Eastern European Standard Time)',
      UserId: '1231-1244-1233',
      Products: [
        { ProductId: 141, Quantity: 3 },
        { ProductId: 130, Quantity: 1 },
      ],
      PaymentType: 'Cash',
    },
    {
      OrderId: 1247,
      OrderDate:
        'Fri Jul 20 2019 12:55:37 GMT+0200(Eastern European Standard Time)',
      UserId: '1231-1244-1233',
      Products: [
        { ProductId: 141, Quantity: 3 },
        { ProductId: 130, Quantity: 1 },
      ],
      PaymentType: 'Cash',
    },
    {
      OrderId: 1248,
      OrderDate:
        'Fri Jul 20 2019 16:55:37 GMT+0200(Eastern European Standard Time)',
      UserId: '1231-1244-1233',
      Products: [
        { ProductId: 141, Quantity: 3 },
        { ProductId: 130, Quantity: 1 },
      ],
      PaymentType: 'Cash',
    },
    {
      OrderId: 1249,
      OrderDate:
        'Fri Jul 20 2019 18:55:37 GMT+0200(Eastern European Standard Time)',
      UserId: '1231-1244-1233',
      Products: [
        { ProductId: 141, Quantity: 3 },
        { ProductId: 130, Quantity: 1 },
      ],
      PaymentType: 'online',
    },
    {
      OrderId: 1250,
      OrderDate:
        'Fri Jul 20 2019 22:55:37 GMT+0200(Eastern European Standard Time)',
      UserId: '1231-1244-1233',
      Products: [
        { ProductId: 141, Quantity: 3 },
        { ProductId: 130, Quantity: 1 },
      ],
      PaymentType: 'Cash',
    },
    {
      OrderId: 1251,
      OrderDate:
        'Fri Jul 20 2019 23:50:37 GMT+0200(Eastern European Standard Time)',
      UserId: '1231-1244-1233',
      Products: [
        { ProductId: 140, Quantity: 3 },
        { ProductId: 130, Quantity: 1 },
      ],
      PaymentType: 'Cash',
    },
    {
      OrderId: 1252,
      OrderDate:
        'Sun Jul 22 2019 03:00:00 GMT+0200(Eastern European Standard Time)',
      UserId: '5432-3425-1234',
      Products: [
        { ProductId: 141, Quantity: 3 },
        { ProductId: 130, Quantity: 1 },
      ],
      PaymentType: 'Cash',
    },
    {
      OrderId: 1253,
      OrderDate:
        'Sun Jul 22 201901:55:37 GMT+0200(Eastern European Standard Time)',
      UserId: '5432-3425-1234',
      Products: [
        { ProductId: 141, Quantity: 3 },
        { ProductId: 130, Quantity: 1 },
      ],
      PaymentType: 'Cash',
    },
    {
      OrderId: 1254,
      OrderDate:
        'Fri Jul 20 2019 12:55:37 GMT+0200(Eastern European Standard Time)',
      UserId: '5432-3425-1234',
      Products: [
        { ProductId: 141, Quantity: 3 },
        { ProductId: 130, Quantity: 1 },
      ],
      PaymentType: 'online',
    },
    {
      OrderId: 1255,
      OrderDate:
        'Fri Jul 20 2019 01:05:37 GMT+0200(Eastern European Standard Time)',
      UserId: '5432-3425-1234',
      Products: [
        { ProductId: 141, Quantity: 3 },
        { ProductId: 129, Quantity: 1 },
      ],
      PaymentType: 'Cash',
    },
    {
      OrderId: 1256,
      OrderDate:
        'Fri Jul 20 2019 14:50:37 GMT+0200(Eastern European Standard Time)',
      UserId: '5432-3425-1234',
      Products: [
        { ProductId: 141, Quantity: 3 },
        { ProductId: 129, Quantity: 1 },
      ],
      PaymentType: 'Cash',
    },
    {
      OrderId: 1257,
      OrderDate:
        'Fri Jul 20 2019 14:50:37 GMT+0200(Eastern European Standard Time)',
      UserId: '5432-3425-1234',
      Products: [
        { ProductId: 141, Quantity: 3 },
        { ProductId: 129, Quantity: 1 },
      ],
      PaymentType: 'Cash',
    },
    {
      OrderId: 1258,
      OrderDate:
        'Fri Jul 20 2019 14:50:37 GMT+0200(Eastern European Standard Time)',
      UserId: '5432-3425-1234',
      Products: [
        { ProductId: 141, Quantity: 3 },
        { ProductId: 129, Quantity: 1 },
      ],
      PaymentType: 'online',
    },
    {
      OrderId: 1259,
      OrderDate:
        'Fri Jul 20 2019 14:50:37 GMT+0200(Eastern European Standard Time)',
      UserId: '5432-3425-1234',
      Products: [
        { ProductId: 141, Quantity: 3 },
        { ProductId: 129, Quantity: 1 },
      ],
      PaymentType: 'Cash',
    },
    {
      OrderId: 1260,
      OrderDate:
        'Fri Jul 20 2019 22:30:37 GMT+0200(Eastern European Standard Time)',
      UserId: '5432-3425-1234',
      Products: [
        { ProductId: 141, Quantity: 3 },
        { ProductId: 129, Quantity: 1 },
      ],
      PaymentType: 'online',
    },
    {
      OrderId: 1261,
      OrderDate:
        'Fri Jul 20 2019 22:30:37 GMT+0200(Eastern European Standard Time)',
      UserId: '5432-3425-1234',
      Products: [
        { ProductId: 141, Quantity: 3 },
        { ProductId: 129, Quantity: 1 },
      ],
      PaymentType: 'online',
    },
    {
      OrderId: 1262,
      OrderDate:
        'Fri Jul 20 2019 22:30:37 GMT+0200(Eastern European Standard Time)',
      UserId: '5432-3425-1234',
      Products: [
        { ProductId: 140, Quantity: 3 },
        { ProductId: 129, Quantity: 1 },
      ],
      PaymentType: 'online',
    },
    {
      OrderId: 1263,
      OrderDate:
        'Fri Jul 20 2019 22:30:37 GMT+0200(Eastern European Standard Time)',
      UserId: '2343-1233-4323',
      Products: [
        { ProductId: 140, Quantity: 3 },
        { ProductId: 129, Quantity: 1 },
      ],
      PaymentType: 'online',
    },
    {
      OrderId: 1264,
      OrderDate:
        'Fri Jul 20 2019 22:30:37 GMT+0200(Eastern European Standard Time)',
      UserId: '2343-1233-4323',
      Products: [
        { ProductId: 140, Quantity: 3 },
        { ProductId: 128, Quantity: 1 },
      ],
      PaymentType: 'Cash',
    },
    {
      OrderId: 1265,
      OrderDate:
        'Fri Jul 20 2019 22:30:37 GMT+0200(Eastern European Standard Time)',
      UserId: '2343-1233-4323',
      Products: [
        { ProductId: 140, Quantity: 3 },
        { ProductId: 128, Quantity: 1 },
      ],
      PaymentType: 'Cash',
    },
    {
      OrderId: 1266,
      OrderDate:
        'Fri Jul 20 2019 22:30:37 GMT+0200(Eastern European Standard Time)',
      UserId: '2343-1233-4323',
      Products: [
        { ProductId: 140, Quantity: 3 },
        { ProductId: 128, Quantity: 1 },
      ],
      PaymentType: 'Cash',
    },
    {
      OrderId: 1267,
      OrderDate:
        'Fri Jul 20 2019 22:30:37 GMT+0200(Eastern European Standard Time)',
      UserId: '2343-1233-4323',
      Products: [
        { ProductId: 140, Quantity: 3 },
        { ProductId: 128, Quantity: 1 },
      ],
      PaymentType: 'online',
    },
    {
      OrderId: 1268,
      OrderDate:
        'Fri Jul 20 2019 22:30:37 GMT+0200(Eastern European Standard Time)',
      UserId: '2343-1233-4323',
      Products: [
        { ProductId: 140, Quantity: 3 },
        { ProductId: 128, Quantity: 1 },
      ],
      PaymentType: 'Cash',
    },
    {
      OrderId: 1269,
      OrderDate:
        'Mon Jul 23 201922:30:37 GMT+0200(Eastern European Standard Time)',
      UserId: '2343-1233-4323',
      Products: [
        { ProductId: 142, Quantity: 3 },
        { ProductId: 128, Quantity: 1 },
      ],
      PaymentType: 'Cash',
    },
    {
      OrderId: 1270,
      OrderDate:
        'Mon Jul 23 201922:30:37 GMT+0200(Eastern European Standard Time)',
      UserId: '2343-1233-4323',
      Products: [
        { ProductId: 142, Quantity: 3 },
        { ProductId: 128, Quantity: 1 },
      ],
      PaymentType: 'Cash',
    },
    {
      OrderId: 1271,
      OrderDate:
        'Mon Jul 23 201906:30:37 GMT+0200(Eastern European Standard Time)',
      UserId: '2343-1233-4323',
      Products: [
        { ProductId: 142, Quantity: 3 },
        { ProductId: 128, Quantity: 1 },
      ],
      PaymentType: 'Cash',
    },
    {
      OrderId: 1272,
      OrderDate:
        'Mon Jul 23 201906:30:37 GMT+0200(Eastern European Standard Time)',
      UserId: '2343-1233-4323',
      Products: [
        { ProductId: 142, Quantity: 3 },
        { ProductId: 128, Quantity: 1 },
      ],
      PaymentType: 'Cash',
    },
    {
      OrderId: 1273,
      OrderDate:
        'Mon Jul 23 201906:30:37 GMT+0200(Eastern European Standard Time)',
      UserId: '2343-1233-4323',
      Products: [
        { ProductId: 142, Quantity: 3 },
        { ProductId: 128, Quantity: 1 },
      ],
      PaymentType: 'online',
    },
    {
      OrderId: 1274,
      OrderDate:
        'Mon Jul 23 201906:30:37 GMT+0200(Eastern European Standard Time)',
      UserId: '8573-2903-23443',
      Products: [
        { ProductId: 142, Quantity: 3 },
        { ProductId: 128, Quantity: 1 },
      ],
      PaymentType: 'Cash',
    },
    {
      OrderId: 1275,
      OrderDate:
        'Mon Jul 23 201906:30:37 GMT+0200(Eastern European Standard Time)',
      UserId: '8573-2903-23443',
      Products: [
        { ProductId: 142, Quantity: 3 },
        { ProductId: 128, Quantity: 1 },
      ],
      PaymentType: 'Cash',
    },
    {
      OrderId: 1276,
      OrderDate:
        'Mon Jul 23 201906:30:37 GMT+0200(Eastern European Standard Time)',
      UserId: '8573-2903-23443',
      Products: [
        { ProductId: 142, Quantity: 3 },
        { ProductId: 128, Quantity: 1 },
      ],
      PaymentType: 'Cash',
    },
    {
      OrderId: 1277,
      OrderDate:
        'Mon Jul 23 201906:30:37 GMT+0200(Eastern European Standard Time)',
      UserId: '8573-2903-23443',
      Products: [
        { ProductId: 139, Quantity: 3 },
        { ProductId: 128, Quantity: 1 },
      ],
      PaymentType: 'Cash',
    },
    {
      OrderId: 1278,
      OrderDate:
        'Mon Jul 23 201906:30:37 GMT+0200(Eastern European Standard Time)',
      UserId: '8573-2903-23443',
      Products: [
        { ProductId: 139, Quantity: 3 },
        { ProductId: 127, Quantity: 1 },
      ],
      PaymentType: 'Cash',
    },
    {
      OrderId: 1279,
      OrderDate:
        'Mon Jul 23 201906:30:37 GMT+0200(Eastern European Standard Time)',
      UserId: '8573-2903-23443',
      Products: [
        { ProductId: 139, Quantity: 3 },
        { ProductId: 127, Quantity: 1 },
      ],
      PaymentType: 'online',
    },
    {
      OrderId: 1280,
      OrderDate:
        'Tue Jul 24 201906:30:37 GMT+0200(Eastern European Standard Time)',
      UserId: '8573-2903-23443',
      Products: [
        { ProductId: 139, Quantity: 3 },
        { ProductId: 127, Quantity: 1 },
      ],
      PaymentType: 'Cash',
    },
    {
      OrderId: 1281,
      OrderDate:
        'Tue Jul 24 201906:30:37 GMT+0200(Eastern European Standard Time)',
      UserId: '8573-2903-23443',
      Products: [
        { ProductId: 139, Quantity: 3 },
        { ProductId: 127, Quantity: 1 },
      ],
      PaymentType: 'Cash',
    },
    {
      OrderId: 1282,
      OrderDate:
        'Tue Jul 24 201906:30:37 GMT+0200(Eastern European Standard Time)',
      UserId: '8573-2903-23443',
      Products: [
        { ProductId: 139, Quantity: 3 },
        { ProductId: 127, Quantity: 1 },
      ],
      PaymentType: 'Cash',
    },
    {
      OrderId: 1283,
      OrderDate:
        'Tue Jul 24 201906:30:37 GMT+0200(Eastern European Standard Time)',
      UserId: '8573-2903-23443',
      Products: [
        { ProductId: 139, Quantity: 3 },
        { ProductId: 127, Quantity: 1 },
      ],
      PaymentType: 'Cash',
    },
    {
      OrderId: 1284,
      OrderDate:
        'Tue Jul 24 201906:30:37 GMT+0200(Eastern European Standard Time)',
      UserId: '8573-2903-23443',
      Products: [
        { ProductId: 139, Quantity: 3 },
        { ProductId: 127, Quantity: 1 },
      ],
      PaymentType: 'Cash',
    },
    {
      OrderId: 1285,
      OrderDate:
        'Tue Jul 24 201923:30:37 GMT+0200(Eastern European Standard Time)',
      UserId: '8573-2903-23443',
      Products: [
        { ProductId: 139, Quantity: 3 },
        { ProductId: 127, Quantity: 1 },
      ],
      PaymentType: 'online',
    },
    {
      OrderId: 1286,
      OrderDate:
        'Tue Jul 24 201923:30:37 GMT+0200(Eastern European Standard Time)',
      UserId: '9179-2312-3421',
      Products: [
        { ProductId: 138, Quantity: 3 },
        { ProductId: 127, Quantity: 1 },
      ],
      PaymentType: 'online',
    },
    {
      OrderId: 1287,
      OrderDate:
        'Tue Jul 24 201923:30:37 GMT+0200(Eastern European Standard Time)',
      UserId: '9179-2312-3421',
      Products: [
        { ProductId: 138, Quantity: 3 },
        { ProductId: 127, Quantity: 1 },
      ],
      PaymentType: 'online',
    },
    {
      OrderId: 1288,
      OrderDate:
        'Tue Jul 24 201923:30:37 GMT+0200(Eastern European Standard Time)',
      UserId: '9179-2312-3421',
      Products: [
        { ProductId: 138, Quantity: 3 },
        { ProductId: 127, Quantity: 1 },
      ],
      PaymentType: 'Cash',
    },
    {
      OrderId: 1289,
      OrderDate:
        'Tue Jul 24 201923:30:37 GMT+0200(Eastern European Standard Time)',
      UserId: '9179-2312-3421',
      Products: [
        { ProductId: 138, Quantity: 3 },
        { ProductId: 127, Quantity: 1 },
      ],
      PaymentType: 'Cash',
    },
    {
      OrderId: 1290,
      OrderDate:
        'Tue Jul 24 201923:30:37 GMT+0200(Eastern European Standard Time)',
      UserId: '9179-2312-3421',
      Products: [
        { ProductId: 138, Quantity: 3 },
        { ProductId: 127, Quantity: 1 },
      ],
      PaymentType: 'Cash',
    },
    {
      OrderId: 1291,
      OrderDate:
        'Tue Jul 24 201923:30:37 GMT+0200(Eastern European Standard Time)',
      UserId: '9179-2312-3421',
      Products: [
        { ProductId: 138, Quantity: 3 },
        { ProductId: 127, Quantity: 1 },
      ],
      PaymentType: 'Cash',
    },
    {
      OrderId: 1292,
      OrderDate:
        'Tue Jul 24 201923:30:37 GMT+0200(Eastern European Standard Time)',
      UserId: '9179-2312-3421',
      Products: [
        { ProductId: 138, Quantity: 3 },
        { ProductId: 127, Quantity: 1 },
      ],
      PaymentType: 'online',
    },
    {
      OrderId: 1293,
      OrderDate:
        'Tue Jul 24 201923:30:37 GMT+0200(Eastern European Standard Time)',
      UserId: '9179-2312-3421',
      Products: [
        { ProductId: 138, Quantity: 3 },
        { ProductId: 127, Quantity: 1 },
      ],
      PaymentType: 'online',
    },
    {
      OrderId: 1294,
      OrderDate:
        'Tue Jul 24 201923:30:37 GMT+0200(Eastern European Standard Time)',
      UserId: '9179-2312-3421',
      Products: [
        { ProductId: 138, Quantity: 3 },
        { ProductId: 127, Quantity: 1 },
      ],
      PaymentType: 'online',
    },
    {
      OrderId: 1295,
      OrderDate:
        'Tue Jul 24 201923:30:37 GMT+0200(Eastern European Standard Time)',
      UserId: '9179-2312-3421',
      Products: [
        { ProductId: 136, Quantity: 3 },
        { ProductId: 127, Quantity: 1 },
      ],
      PaymentType: 'online',
    },
    {
      OrderId: 1296,
      OrderDate:
        'Tue Jul 24 201923:30:37 GMT+0200(Eastern European Standard Time)',
      UserId: '9179-2312-3421',
      Products: [
        { ProductId: 136, Quantity: 3 },
        { ProductId: 127, Quantity: 1 },
      ],
      PaymentType: 'online',
    },
    {
      OrderId: 1297,
      OrderDate:
        'Tue Jul 24 201923:30:37 GMT+0200(Eastern European Standard Time)',
      UserId: '9179-2312-3421',
      Products: [
        { ProductId: 136, Quantity: 3 },
        { ProductId: 127, Quantity: 1 },
      ],
      PaymentType: 'online',
    },
    {
      OrderId: 1298,
      OrderDate:
        'Tue Jul 24 201923:30:37 GMT+0200(Eastern European Standard Time)',
      UserId: '9179-2312-3421',
      Products: [
        { ProductId: 136, Quantity: 3 },
        { ProductId: 125, Quantity: 10 },
      ],
      PaymentType: 'Cash',
    },
    {
      OrderId: 1299,
      OrderDate:
        'Tue Jul 24 201923:30:37 GMT+0200(Eastern European Standard Time)',
      UserId: '9179-2312-3421',
      Products: [
        { ProductId: 136, Quantity: 3 },
        { ProductId: 125, Quantity: 33 },
      ],
      PaymentType: 'Cash',
    },
    {
      OrderId: 1300,
      OrderDate:
        'Wed Jul 25 201923:30:37 GMT+0200(Eastern European Standard Time)',
      UserId: '8475-2345-2312',
      Products: [
        { ProductId: 136, Quantity: 30 },
        { ProductId: 125, Quantity: 1 },
      ],
      PaymentType: 'Cash',
    },
    {
      OrderId: 1301,
      OrderDate:
        'Wed Jul 25 201923:30:37 GMT+0200(Eastern European Standard Time)',
      UserId: '8475-2345-2312',
      Products: [
        { ProductId: 136, Quantity: 3 },
        { ProductId: 125, Quantity: 1 },
      ],
      PaymentType: 'Cash',
    },
    {
      OrderId: 1302,
      OrderDate:
        'Wed Jul 25 201923:30:37 GMT+0200(Eastern European Standard Time)',
      UserId: '8475-2345-2312',
      Products: [
        { ProductId: 136, Quantity: 3 },
        { ProductId: 125, Quantity: 1 },
      ],
      PaymentType: 'Cash',
    },
    {
      OrderId: 1303,
      OrderDate:
        'Wed Jul 25 201923:30:37 GMT+0200(Eastern European Standard Time)',
      UserId: '8475-2345-2312',
      Products: [
        { ProductId: 135, Quantity: 3 },
        { ProductId: 125, Quantity: 10 },
      ],
      PaymentType: 'online',
    },
    {
      OrderId: 1304,
      OrderDate:
        'Wed Jul 25 201901:55:37 GMT+0200(Eastern European Standard Time)',
      UserId: '8475-2345-2312',
      Products: [
        { ProductId: 135, Quantity: 3 },
        { ProductId: 125, Quantity: 1 },
      ],
      PaymentType: 'online',
    },
    {
      OrderId: 1305,
      OrderDate:
        'Wed Jul 25 201915:30:37 GMT+0200(Eastern European Standard Time)',
      UserId: '8475-2345-2312',
      Products: [
        { ProductId: 135, Quantity: 3 },
        { ProductId: 125, Quantity: 1 },
      ],
      PaymentType: 'online',
    },
    {
      OrderId: 1306,
      OrderDate:
        'Wed Jul 25 201915:30:37 GMT+0200(Eastern European Standard Time)',
      UserId: '8475-2345-2312',
      Products: [
        { ProductId: 135, Quantity: 38 },
        { ProductId: 125, Quantity: 1 },
      ],
      PaymentType: 'online',
    },
    {
      OrderId: 1307,
      OrderDate:
        'Wed Jul 25 201915:30:37 GMT+0200(Eastern European Standard Time)',
      UserId: '8475-2345-2312',
      Products: [
        { ProductId: 135, Quantity: 3 },
        { ProductId: 125, Quantity: 1 },
      ],
      PaymentType: 'online',
    },
    {
      OrderId: 1308,
      OrderDate:
        'Wed Jul 25 201915:30:37 GMT+0200(Eastern European Standard Time)',
      UserId: '8475-2345-2312',
      Products: [
        { ProductId: 135, Quantity: 3 },
        { ProductId: 125, Quantity: 1 },
      ],
      PaymentType: 'online',
    },
    {
      OrderId: 1309,
      OrderDate:
        'Wed Jul 25 201915:30:37 GMT+0200(Eastern European Standard Time)',
      UserId: '8475-2345-2312',
      Products: [
        { ProductId: 135, Quantity: 3 },
        { ProductId: 127, Quantity: 1 },
      ],
      PaymentType: 'online',
    },
    {
      OrderId: 1310,
      OrderDate:
        'Wed Jul 25 201915:30:37 GMT+0200(Eastern European Standard Time)',
      UserId: '8475-2345-2312',
      Products: [
        { ProductId: 135, Quantity: 3 },
        { ProductId: 126, Quantity: 1 },
      ],
      PaymentType: 'online',
    },
    {
      OrderId: 1311,
      OrderDate:
        'Wed Jul 25 201915:30:37 GMT+0200(Eastern European Standard Time)',
      UserId: '8475-2345-2312',
      Products: [
        { ProductId: 134, Quantity: 3 },
        { ProductId: 126, Quantity: 1 },
      ],
      PaymentType: 'Cash',
    },
    {
      OrderId: 1312,
      OrderDate:
        'Wed Jul 25 201915:30:37 GMT+0200(Eastern European Standard Time)',
      UserId: '8475-2345-2312',
      Products: [
        { ProductId: 134, Quantity: 3 },
        { ProductId: 126, Quantity: 1 },
      ],
      PaymentType: 'Cash',
    },
    {
      OrderId: 1313,
      OrderDate:
        'Wed Jul 25 201915:30:37 GMT+0200(Eastern European Standard Time)',
      UserId: '8475-2345-2312',
      Products: [
        { ProductId: 134, Quantity: 3 },
        { ProductId: 126, Quantity: 1 },
      ],
      PaymentType: 'Cash',
    },
    {
      OrderId: 1314,
      OrderDate:
        'Wed Jul 25 201915:30:37 GMT+0200(Eastern European Standard Time)',
      UserId: '8475-2345-2312',
      Products: [
        { ProductId: 134, Quantity: 3 },
        { ProductId: 126, Quantity: 1 },
      ],
      PaymentType: 'Cash',
    },
    {
      OrderId: 1315,
      OrderDate:
        'Wed Jul 25 201915:30:37 GMT+0200(Eastern European Standard Time)',
      UserId: '8475-2345-2312',
      Products: [
        { ProductId: 134, Quantity: 3 },
        { ProductId: 126, Quantity: 1 },
      ],
      PaymentType: 'Cash',
    },
    {
      OrderId: 1316,
      OrderDate:
        'Wed Jul 25 201915:30:37 GMT+0200(Eastern European Standard Time)',
      UserId: '8475-2345-2312',
      Products: [
        { ProductId: 134, Quantity: 3 },
        { ProductId: 126, Quantity: 1 },
      ],
      PaymentType: 'Cash',
    },
    {
      OrderId: 1317,
      OrderDate:
        'Thu Jul 26 201915:30:37 GMT+0200(Eastern European Standard Time)',
      UserId: '8475-2345-2312',
      Products: [
        { ProductId: 134, Quantity: 3 },
        { ProductId: 126, Quantity: 1 },
      ],
      PaymentType: 'online',
    },
    {
      OrderId: 1318,
      OrderDate:
        'Thu Jul 26 201915:30:37 GMT+0200(Eastern European Standard Time)',
      UserId: '8475-2345-2312',
      Products: [
        { ProductId: 134, Quantity: 3 },
        { ProductId: 126, Quantity: 1 },
      ],
      PaymentType: 'Cash',
    },
    {
      OrderId: 1319,
      OrderDate:
        'Thu Jul 26 201915:30:37 GMT+0200(Eastern European Standard Time)',
      UserId: '8475-2345-2312',
      Products: [
        { ProductId: 133, Quantity: 3 },
        { ProductId: 126, Quantity: 1 },
      ],
      PaymentType: 'Cash',
    },
    {
      OrderId: 1320,
      OrderDate:
        'Thu Jul 26 201915:30:37 GMT+0200(Eastern European Standard Time)',
      UserId: '2343-1233-4323',
      Products: [
        { ProductId: 133, Quantity: 3 },
        { ProductId: 126, Quantity: 1 },
      ],
      PaymentType: 'Cash',
    },
    {
      OrderId: 1321,
      OrderDate:
        'Thu Jul 26 201915:30:37 GMT+0200(Eastern European Standard Time)',
      UserId: '2343-1233-4323',
      Products: [
        { ProductId: 133, Quantity: 3 },
        { ProductId: 126, Quantity: 1 },
      ],
      PaymentType: 'online',
    },
    {
      OrderId: 1322,
      OrderDate:
        'Thu Jul 26 201915:30:37 GMT+0200(Eastern European Standard Time)',
      UserId: '2343-1233-4323',
      Products: [
        { ProductId: 133, Quantity: 3 },
        { ProductId: 124, Quantity: 1 },
      ],
      PaymentType: 'Cash',
    },
    {
      OrderId: 1323,
      OrderDate:
        'Thu Jul 26 201915:30:37 GMT+0200(Eastern European Standard Time)',
      UserId: '2343-1233-4323',
      Products: [
        { ProductId: 133, Quantity: 3 },
        { ProductId: 124, Quantity: 1 },
      ],
      PaymentType: 'Cash',
    },
    {
      OrderId: 1324,
      OrderDate:
        'Thu Jul 26 201915:30:37 GMT+0200(Eastern European Standard Time)',
      UserId: '2343-1233-4323',
      Products: [
        { ProductId: 133, Quantity: 3 },
        { ProductId: 124, Quantity: 1 },
      ],
      PaymentType: 'Cash',
    },
    {
      OrderId: 1325,
      OrderDate:
        'Thu Jul 26 201915:30:37 GMT+0200(Eastern European Standard Time)',
      UserId: '2343-1233-4323',
      Products: [
        { ProductId: 133, Quantity: 3 },
        { ProductId: 124, Quantity: 1 },
      ],
      PaymentType: 'Cash',
    },
    {
      OrderId: 1326,
      OrderDate:
        'Thu Jul 26 201918:30:37 GMT+0200(Eastern European Standard Time)',
      UserId: '2343-1233-4323',
      Products: [
        { ProductId: 133, Quantity: 3 },
        { ProductId: 124, Quantity: 1 },
      ],
      PaymentType: 'online',
    },
    {
      OrderId: 1327,
      OrderDate:
        'Thu Jul 26 201918:30:37 GMT+0200(Eastern European Standard Time)',
      UserId: '2343-1233-4323',
      Products: [
        { ProductId: 133, Quantity: 3 },
        { ProductId: 124, Quantity: 1 },
      ],
      PaymentType: 'Cash',
    },
    {
      OrderId: 1328,
      OrderDate:
        'Thu Jul 26 201918:30:37 GMT+0200(Eastern European Standard Time)',
      UserId: '2343-1233-4323',
      Products: [
        { ProductId: 133, Quantity: 3 },
        { ProductId: 124, Quantity: 1 },
      ],
      PaymentType: 'Cash',
    },
    {
      OrderId: 1329,
      OrderDate:
        'Thu Jul 26 201918:30:37 GMT+0200(Eastern European Standard Time)',
      UserId: '2343-1233-4323',
      Products: [
        { ProductId: 133, Quantity: 3 },
        { ProductId: 125, Quantity: 1 },
      ],
      PaymentType: 'Cash',
    },
    {
      OrderId: 1330,
      OrderDate:
        'Thu Jul 26 201918:30:37 GMT+0200(Eastern European Standard Time)',
      UserId: '2343-1233-4323',
      Products: [
        { ProductId: 133, Quantity: 3 },
        { ProductId: 123, Quantity: 1 },
      ],
      PaymentType: 'Cash',
    },
    {
      OrderId: 1331,
      OrderDate:
        'Thu Jul 26 201918:30:37 GMT+0200(Eastern European Standard Time)',
      UserId: '2343-1233-4323',
      Products: [
        { ProductId: 133, Quantity: 3 },
        { ProductId: 123, Quantity: 1 },
      ],
      PaymentType: 'online',
    },
    {
      OrderId: 1332,
      OrderDate:
        'Thu Jul 26 201918:30:37 GMT+0200(Eastern European Standard Time)',
      UserId: '2343-1233-4323',
      Products: [
        { ProductId: 132, Quantity: 3 },
        { ProductId: 123, Quantity: 1 },
      ],
      PaymentType: 'online',
    },
    {
      OrderId: 1333,
      OrderDate:
        'Thu Jul 26 201918:30:37 GMT+0200(Eastern European Standard Time)',
      UserId: '1231-1244-1233',
      Products: [
        { ProductId: 132, Quantity: 3 },
        { ProductId: 123, Quantity: 1 },
      ],
      PaymentType: 'online',
    },
    {
      OrderId: 1334,
      OrderDate:
        'Thu Jul 26 201918:30:37 GMT+0200(Eastern European Standard Time)',
      UserId: '1231-1244-1233',
      Products: [
        { ProductId: 132, Quantity: 3 },
        { ProductId: 123, Quantity: 1 },
      ],
      PaymentType: 'online',
    },
    {
      OrderId: 1335,
      OrderDate:
        'Fri Jul 27 201918:30:37 GMT+0200(Eastern European Standard Time)',
      UserId: '1231-1244-1233',
      Products: [
        { ProductId: 132, Quantity: 3 },
        { ProductId: 123, Quantity: 1 },
      ],
      PaymentType: 'online',
    },
    {
      OrderId: 1336,
      OrderDate:
        'Fri Jul 27 201918:30:37 GMT+0200(Eastern European Standard Time)',
      UserId: '1231-1244-1233',
      Products: [
        { ProductId: 132, Quantity: 3 },
        { ProductId: 123, Quantity: 1 },
      ],
      PaymentType: 'Cash',
    },
    {
      OrderId: 1337,
      OrderDate:
        'Fri Jul 27 201918:30:37 GMT+0200(Eastern European Standard Time)',
      UserId: '1231-1244-1233',
      Products: [
        { ProductId: 132, Quantity: 3 },
        { ProductId: 123, Quantity: 1 },
      ],
      PaymentType: 'Cash',
    },
    {
      OrderId: 1338,
      OrderDate:
        'Fri Jul 27 201918:30:37 GMT+0200(Eastern European Standard Time)',
      UserId: '1231-1244-1233',
      Products: [
        { ProductId: 132, Quantity: 3 },
        { ProductId: 123, Quantity: 1 },
      ],
      PaymentType: 'Cash',
    },
    {
      OrderId: 1339,
      OrderDate:
        'Fri Jul 27 201918:30:37 GMT+0200(Eastern European Standard Time)',
      UserId: '1231-1244-1233',
      Products: [
        { ProductId: 132, Quantity: 3 },
        { ProductId: 125, Quantity: 88 },
      ],
      PaymentType: 'Cash',
    },
    {
      OrderId: 1400,
      OrderDate:
        'Fri Jul 27 201918:30:37 GMT+0200(Eastern European Standard Time)',
      UserId: '1231-1244-1233',
      Products: [
        { ProductId: 132, Quantity: 3 },
        { ProductId: 125, Quantity: 1 },
      ],
      PaymentType: 'Cash',
    },
    {
      OrderId: 1401,
      OrderDate:
        'Fri Jul 27 201918:30:37 GMT+0200(Eastern European Standard Time)',
      UserId: '1231-1244-1233',
      Products: [
        { ProductId: 132, Quantity: 3 },
        { ProductId: 125, Quantity: 5 },
      ],
      PaymentType: 'Cash',
    },
    {
      OrderId: 1402,
      OrderDate:
        'Fri Jul 27 201918:30:37 GMT+0200(Eastern European Standard Time)',
      UserId: '1231-1244-1233',
      Products: [
        { ProductId: 132, Quantity: 3 },
        { ProductId: 125, Quantity: 1 },
      ],
      PaymentType: 'Cash',
    },
    {
      OrderId: 1403,
      OrderDate:
        'Fri Jul 27 201918:30:37 GMT+0200(Eastern European Standard Time)',
      UserId: '1231-1244-1233',
      Products: [
        { ProductId: 132, Quantity: 3 },
        { ProductId: 125, Quantity: 2 },
      ],
      PaymentType: 'Cash',
    },
    {
      OrderId: 1404,
      OrderDate:
        'Fri Jul 27 201918:30:37 GMT+0200(Eastern European Standard Time)',
      UserId: '1231-1244-1233',
      Products: [
        { ProductId: 132, Quantity: 3 },
        { ProductId: 125, Quantity: 1 },
      ],
      PaymentType: 'online',
    },
    {
      OrderId: 1405,
      OrderDate:
        'Fri Jul 27 201918:30:37 GMT+0200(Eastern European Standard Time)',
      UserId: '1231-1244-1233',
      Products: [
        { ProductId: 132, Quantity: 3 },
        { ProductId: 125, Quantity: 8 },
      ],
      PaymentType: 'online',
    },
    {
      OrderId: 1406,
      OrderDate:
        'Fri Jul 27 201918:30:37 GMT+0200(Eastern European Standard Time)',
      UserId: '9179-2312-3421',
      Products: [
        { ProductId: 132, Quantity: 3 },
        { ProductId: 125, Quantity: 90 },
      ],
      PaymentType: 'online',
    },
    {
      OrderId: 1407,
      OrderDate:
        'Fri Jul 27 201918:30:37 GMT+0200(Eastern European Standard Time)',
      UserId: '9179-2312-3421',
      Products: [
        { ProductId: 132, Quantity: 3 },
        { ProductId: 125, Quantity: 1 },
      ],
      PaymentType: 'online',
    },
    {
      OrderId: 1408,
      OrderDate:
        'Fri Jul 27 201918:30:37 GMT+0200(Eastern European Standard Time)',
      UserId: '9179-2312-3421',
      Products: [
        { ProductId: 131, Quantity: 3 },
        { ProductId: 125, Quantity: 6 },
      ],
      PaymentType: 'online',
    },
    {
      OrderId: 1409,
      OrderDate:
        'Fri Jul 27 201918:30:37 GMT+0200(Eastern European Standard Time)',
      UserId: '9179-2312-3421',
      Products: [
        { ProductId: 131, Quantity: 3 },
        { ProductId: 125, Quantity: 3 },
      ],
      PaymentType: 'online',
    },
    {
      OrderId: 1410,
      OrderDate:
        'Sun Jul 22 2019 06:55:37 GMT+0200(Eastern European Standard Time)',
      UserId: '9179-2312-3421',
      Products: [
        { ProductId: 131, Quantity: 3 },
        { ProductId: 125, Quantity: 30 },
      ],
      PaymentType: 'online',
    },
    {
      OrderId: 1411,
      OrderDate:
        'Sun Jul 22 2019 18:30:37 GMT+0200(Eastern European Standard Time)',
      UserId: '9179-2312-3421',
      Products: [
        { ProductId: 131, Quantity: 3 },
        { ProductId: 125, Quantity: 1 },
      ],
      PaymentType: 'online',
    },
    {
      OrderId: 1412,
      OrderDate:
        'Sat Jul 21 2019 18:30:37 GMT+0200(Eastern European Standard Time)',
      UserId: '9179-2312-3421',
      Products: [
        { ProductId: 131, Quantity: 3 },
        { ProductId: 125, Quantity: 9 },
      ],
      PaymentType: 'Cash',
    },
    {
      OrderId: 1413,
      OrderDate:
        'Sat Jul 21 2019 01:00:37 GMT+0200(Eastern European Standard Time)',
      UserId: '9179-2312-3421',
      Products: [
        { ProductId: 131, Quantity: 3 },
        { ProductId: 125, Quantity: 1 },
      ],
      PaymentType: 'Cash',
    },
    {
      OrderId: 1414,
      OrderDate:
        'Sat Jul 21 2019 01:55:37 GMT+0200(Eastern European Standard Time)',
      UserId: '9179-2312-3421',
      Products: [
        { ProductId: 131, Quantity: 3 },
        { ProductId: 125, Quantity: 1 },
      ],
      PaymentType: 'Cash',
    },
  ];

  constructor(private httpClient: HttpClient) {}


  getOrders(){
   return this.httpClient.get<Order[]>('assets/data/orders.json');
  }  

  addOrder(order:any){
    // to be implemented
  }

}
