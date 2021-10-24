import './App.css';
import aks from './assets/images/logo.jpg';

function App() {
  return (


    <div className="div_1">

    <div className="div_2">
        <img src={aks} alt="Logo"/>
    </div>


    <div className="div_3">

        <div className="div_4">
            <p dir="rtl"> بلاگفا یک ابزار قدرتمند برای ساخت و مدیریت وبلاگ است . بلاگفا به شما کمک میکند تا با سرعت و سهولت اطلاعات ، خاطرات و مطالب و مقالات خود را در اینترنت منتشر کنید.</p>
            <button className="btn">ثبت نام و ایجاد وبلاگ جدید</button>
        </div>

        <div className="div_5">
            <form>
                <input id="name" name="name" placeholder="نام کاربری"/>
                <input id="password" name="password" type="password" placeholder="رمز عبور"/>
                <button className="btn_2">ورود به بخش مدیریت وبلاگ</button>
                <a className="link">کلمه عبور خود را فراموش کردم</a>

            </form>
        </div>

    </div>

    <div className="title">
        <hr/>
        <p>وبلاگ های بروز شده</p>
        <hr/>
    </div>


    <div className="div_b">

        <div className="card">
            <p className="p1">کیک کدو حلوایی</p>
            <a>hossein-heydari.ir</a>
            <p className="p2">این مطلب درمورد پرده اتاق کودک بسیار زیبا و شیک است . این مطلب از سایت اتاق میباشد . برای مشاده ی کامل این مطلب به سایت اتاق مراجعه کنید</p>
        </div>

        <div className="card">
            <p className="p1">کیک کدو حلوایی</p>
            <a>hossein-heydari.ir</a>
            <p className="p2">این مطلب درمورد پرده اتاق کودک بسیار زیبا و شیک است . این مطلب از سایت اتاق میباشد . برای مشاده ی کامل این مطلب به سایت اتاق مراجعه کنید</p>
        </div>

        <div className="card">
            <p className="p1">کیک کدو حلوایی</p>
            <a>hossein-heydari.ir</a>
            <p className="p2">این مطلب درمورد پرده اتاق کودک بسیار زیبا و شیک است . این مطلب از سایت اتاق میباشد . برای مشاده ی کامل این مطلب به سایت اتاق مراجعه کنید</p>
        </div>

        <div className="card">
            <p className="p1">کیک کدو حلوایی</p>
            <a>hossein-heydari.ir</a>
            <p className="p2">این مطلب درمورد پرده اتاق کودک بسیار زیبا و شیک است . این مطلب از سایت اتاق میباشد . برای مشاده ی کامل این مطلب به سایت اتاق مراجعه کنید</p>
        </div>

        <div className="card">
            <p className="p1">کیک کدو حلوایی</p>
            <a>hossein-heydari.ir</a>
            <p className="p2">این مطلب درمورد پرده اتاق کودک بسیار زیبا و شیک است . این مطلب از سایت اتاق میباشد . برای مشاده ی کامل این مطلب به سایت اتاق مراجعه کنید</p>
        </div>

        <div className="card">
            <p className="p1">کیک کدو حلوایی</p>
            <a>hossein-heydari.ir</a>
            <p className="p2">این مطلب درمورد پرده اتاق کودک بسیار زیبا و شیک است . این مطلب از سایت اتاق میباشد . برای مشاده ی کامل این مطلب به سایت اتاق مراجعه کنید</p>
        </div>

        <div className="card">
            <p className="p1">کیک کدو حلوایی</p>
            <a>hossein-heydari.ir</a>
            <p className="p2">این مطلب درمورد پرده اتاق کودک بسیار زیبا و شیک است . این مطلب از سایت اتاق میباشد . برای مشاده ی کامل این مطلب به سایت اتاق مراجعه کنید</p>
        </div>

        <div className="card">
            <p className="p1">کیک کدو حلوایی</p>
            <a>hossein-heydari.ir</a>
            <p className="p2">این مطلب درمورد پرده اتاق کودک بسیار زیبا و شیک است . این مطلب از سایت اتاق میباشد . برای مشاده ی کامل این مطلب به سایت اتاق مراجعه کنید</p>
        </div>

    </div>


    <div className="footer">
        <ul>|
            <a><li>تماس با ما</li></a>|
            <a><li>اخبار سایت</li></a>|
            <a><li>گزارش تخلف</li></a>|
            <a style={{color: "red"}}><li>تبلیغ در وبلاگ ها</li></a>|
            <a><li>راهنما</li></a>|
            <a><li>ثبت وبلاگ جدید</li></a>|
            <a><li>فهرست وبلاگ ها</li></a>|
            <a><li>وبلاگ های بروز شده</li></a>|
        </ul>
    </div>

</div>
   
  );
}

export default App;
