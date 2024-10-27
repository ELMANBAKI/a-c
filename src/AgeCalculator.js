import React, { useState } from "react";
import "./AgeCalculator.css";

const حساب_العمر = () => {
  const [تاريخ_الميلاد, setتاريخ_الميلاد] = useState({
    سنة: "",
    شهر: "",
    يوم: ""
  });
  const [العمر, setالعمر] = useState(null);
  const [خطأ, setخطأ] = useState("");
  const [عدد_النجوم, setعدد_النجوم] = useState(0); // حالة جديدة لتخزين عدد النجوم

  const احسب_العمر = () => {
    const اليوم = new Date();
    const الميلاد = new Date(
      تاريخ_الميلاد.سنة,
      تاريخ_الميلاد.شهر - 1,
      تاريخ_الميلاد.يوم
    );

    if (الميلاد > اليوم) {
      setخطأ("تاريخ الميلاد لا يمكن أن يكون في المستقبل");
      setالعمر(null);
      setعدد_النجوم(0); // إعادة عدد النجوم إلى 0 في حالة الخطأ
      return;
    }

    setخطأ("");

    let السنوات = اليوم.getFullYear() - الميلاد.getFullYear();
    let الأشهر = اليوم.getMonth() - الميلاد.getMonth();
    let الأيام = اليوم.getDate() - الميلاد.getDate();

    if (الأيام < 0) {
      الأشهر -= 1;
      الأيام += 30;
    }

    if (الأشهر < 0) {
      السنوات -= 1;
      الأشهر += 12;
    }

    setالعمر({ السنوات, الأشهر, الأيام });
    setعدد_النجوم(5); // تعيين عدد النجوم عند حساب العمر
  };

  const handleChange = (e) => {
    setتاريخ_الميلاد({
      ...تاريخ_الميلاد,
      [e.target.name]: e.target.value
    });
  };

  const مسح_البيانات = () => {
    setتاريخ_الميلاد({ سنة: "", شهر: "", يوم: "" });
    setالعمر(null);
    setخطأ("");
    setعدد_النجوم(0); // إعادة عدد النجوم إلى 0 عند المسح
  };

  return (
    <div className="age-calculator">
      <h1>احسب العمر </h1>
      <div className="input-group">
        <input
          type="number"
          name="سنة"
          placeholder="السنة"
          value={تاريخ_الميلاد.سنة}
          onChange={handleChange}
          className="input-field"
          required
        />
        <input
          type="number"
          name="شهر"
          placeholder="الشهر"
          value={تاريخ_الميلاد.شهر}
          onChange={handleChange}
          className="input-field"
          required
        />
        <input
          type="number"
          name="يوم"
          placeholder="اليوم"
          value={تاريخ_الميلاد.يوم}
          onChange={handleChange}
          className="input-field"
          required
        />
      </div>
      <div>
        <button onClick={احسب_العمر} className="calculate-button">
          اظغط هنا{" "}
        </button>
      </div>
      {خطأ && <p className="error">{خطأ}</p>}
      {العمر && (
        <div className="result">
          <h2>عمرك</h2>
          <p>
            {" "}
            {العمر.السنوات} سنة، {العمر.الأشهر} شهر، و {العمر.الأيام} يوم{" "}
          </p>
         
          <button onClick={مسح_البيانات} className="reset-button">
            مسح البيانات
          </button>
          <div className="stars">
            {Array.from({ length: عدد_النجوم }, (_, index) => (
              <span key={index} className="star">
                ⭐
              </span>
            ))}
          </div>
          <dv className="contact" >
            <p>للمزيد من البرامج تابعنا على صفحتنا </p>
          </dv>
        </div>
      )}
    </div>
  );
};

export default حساب_العمر;
