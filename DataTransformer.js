const userIds = ['U01', 'U02', 'U03'];
const orderIds = ['T01', 'T02', 'T03', 'T04'];
const userOrders = [
  { userId: 'U01', orderIds: ['T01', 'T02'] },
  { userId: 'U02', orderIds: [] },
  { userId: 'U03', orderIds: ['T03'] },
];
const userData = { U01: 'Tom', U02: 'Sam', U03: 'John' };
const orderData = {
  T01: {
    name: 'A',
    price: 499,
  },
  T02: {
    name: 'B',
    price: 599,
  },
  T03: {
    name: 'C',
    price: 699,
  },
  T04: {
    name: 'D',
    price: 799,
  },
};
var result = [];
function combineData() {
  result = userIds.map((eachId) => {
    var name = userData[eachId];
    var orders = userOrders.map((eachUserOrders) => {
      // ID 相同則回傳變換過的 orderData
      if (eachId == eachUserOrders.userId) {
        let detailOrderData = eachUserOrders.orderIds.map(
          (eachOrderId) => orderData[eachOrderId]
        );
        return detailOrderData;
      }
    });

    return { user: { id: eachId, name: name }, orders: orders };
  });
  console.log(result);
}

combineData();
