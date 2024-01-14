
 
    const a = Number(prompt("Nhập vào độ dài cạnh a: "));
    const b = Number(prompt("Nhập vào độ dài cạnh b: "));
    const c = Number(prompt("Nhập vào độ dài cạnh c: "));
  
     if (a <= 0 || b <= 0 || c <= 0) {
      alert("Tất cả các cạnh của tam giác phải là số dương.");
    } else if (a + b <= c || a + c <= b || b + c <= a) {
      alert("Tổng của hai cạnh bất kỳ của tam giác phải lớn hơn cạnh còn lại.");
    } else {
      alert("Ba cạnh của tam giác hợp lệ.");
    }
  
  