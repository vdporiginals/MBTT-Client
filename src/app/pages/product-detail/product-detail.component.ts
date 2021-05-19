import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss'],
})
export class ProductDetailComponent implements OnInit {
  numbOfQuestion = 1;
  overall = 5;
  product: any = {
    Title: 'Test',
    American: 'Test',
    Rating: 5,
    price: 10000,
  };
  listCard = [
    {
      title: 'Thông tin sản phẩm',
      icon: 'assets/Folder.svg',
      routeLink: '',
      data: [
        {
          key: 'Name',
          Label: 'Tên:',
          Name: 'Ginger Bear',
        },
        {
          key: 'Price',
          Label: 'Giá (Niêm Yết):',
          Price: 1000000,
        },
        {
          key: 'Price',
          Label: 'Nguồn gốc:',
          Price: 'Ginger Bear',
        },
        {
          key: 'Bar',
          Label: 'Mã Vạch:',
          type: 'img',
          Bar: 'assets/group_cert.png',
        },
        {
          key: 'Detail',
          Label: 'Chi tiết:',
          Detail:
            'Sản phẩm Beer Ginger được nhập khẩu trực tiếp từ Hoa Kỳ với thành',
        },
        {
          type: 'btn',
          btnArray: [
            {
              title: 'Xem thêm',
              link: '',
            },
          ],
        },
      ],
    },
    {
      title: 'Doanh nghiệp sở hữu',
      icon: 'assets/Work.svg',
      routeLink: '',
      data: [
        {
          key: 'Name',
          Label: 'Tên:',
          Name: 'C.ty TNHH Sapioso Food & Drink',
        },
        {
          key: 'Mst',
          Label: 'MST:',
          Mst: '0120257478953',
        },
        {
          key: 'Addess',
          Label: 'Địa chỉ:',
          Addess: 'N03-T7 Ngoại Giao Đoàn, Bắc Từ Liêm, Hà Nội',
        },
      ],
    },
    {
      title: 'Điểm bán',
      icon: 'assets/Buy.svg',
      routeLink: '',
      data: [
        {
          key: 'Total',
          Label: 'Số lượng:',
          Total: '15 điểm bán',
        },
        {
          key: 'near',
          Label: 'Gần nhất:',
          near: 'Cách 500m - Vinmart Hồng Hà',
        },
        {
          type: 'btn',
          btnArray: [
            {
              title: 'Chỉ đường',
              link: '',
            },
          ],
        },
      ],
    },
  ];
  constructor() {}

  ngOnInit(): void {}

  onBtnCardClick(link) {
    console.log(link);
  }
}
