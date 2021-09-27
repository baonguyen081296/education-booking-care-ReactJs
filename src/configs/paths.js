const paths = {
  root: '/',
  home: '/',
  login: '/login',
  drug: {
    add: '/drug/add',
    edit: '/drug/edit',
    list: '/drug/list',
    group: '/drug/group',
    category: '/drug/category',
  },
  goods: {
    add: '/goods/add',
    edit: '/goods/edit',
    list: '/goods/list',
    group: '/goods/group',
    category: '/goods/category',
  },
  sales: {
    sales: '/sales',
    product: '/sales/product',
    invoices: '/sales/invoices',
    return: '/sales/return',
    statistic: '/sales/statistic',
  },
  warehousing: {
    warehousing: '/warehousing',
    invoices: '/warehousing/invoices',
    invoice: '/warehousing/invoice',
    statistic: '/warehousing/statistic',
    return: '/warehousing/return',
    tempInvoices: '/warehousing/temp-invoices',
  },
  order: {
    order: '/order',
    list: '/order/list',
    manage: '/order/manage',
  },
  report: {
    inventory: '/report/inventory',
    revenue: '/report/revenue',
    revenueAndGrossProfit: '/report/revenue-profit',
    importExport: '/report/import-export',
    warehousingSell: '/report/warehousing-sell',
    salesPrescription: '/report/sales-prescription',
    qualityControl: '/report/quality-control',
    qualityControlAdd: '/report/quality-control-add',
    warehouse: '/report/warehouse',
    specialDrug: '/report/special-drug',
    checkInventory: '/report/check-inventory',
    checkInventoryAdd: '/report/check-inventory-add',
    export: '/report/export',
    exportAdd: '/report/exportAdd',
  },
  management: {
    customer: '/management/customer',
    supplier: '/management/supplier',
    system: '/management/system',
    user: '/management/user',
  },
  cashBook: {
    cashBook: '/cash-book',
    voucher: '/cash-book/voucher',
    paymentVoucher: '/cash-book/payment-voucher',
  },
  admin: {
    user: '/admin/user',
    drugStore: '/admin/drug-store',
    annoucement: '/admin/annoucement',
    drug: '/admin/drug',
    unit: '/admin/unit',
  },
  price: {
    price: '/bang-gia',
  },
};

export default paths;
