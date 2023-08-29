import React, { useContext ,createContext} from 'react';


const Context = createContext();
export function ContextProvider({children})  {
 
  const currencies = [
    {
      value: "ilan",
      label: "Kıdemli Java Yazılım Geliştiricisi",
      code: "SJVD-22-01",
      req: [
        "Üniversitelerin ilgili bölümlerinden mezun olmak (tercihen bilgisayar, endüstri, işletme, matematik, elektrik elektronik, yönetim bilişim sistemleri veya ilgili mühendislik eğitimi veren bölümlerden)",
        "Ön yüz geliştirme konusunda en az 2 yıllık tecrübeye sahip olmak",
        "İyi seviye HTML ve CSS bilgisine sahip olmak",
        "Bootstrap, Material UI veya benzer kütüphanelerden biri hakkında deneyim sahibi olmak.",
        "JavaScript geliştirme konusunda deneyim sahibi olmak (ES5 ve ES6)",
        "ReactJS ile proje geliştirmiş ve tercihen web frameworkleri (React, Angular, VueJs) konusunda bilgi sahibi olmak",
      ],
    },
    {
      value: "ilan",
      label: "Java Yazılım Geliştirici",
      code: "JVD-22-01",
      req: [
        "Üniversitelerin ilgili bölümlerinden mezun olmak (tercihen bilgisayar, endüstri, işletme, matematik, elektrik elektronik, yönetim bilişim sistemleri veya ilgili mühendislik eğitimi veren bölümlerden)",
        "Ön yüz geliştirme konusunda en az 2 yıllık tecrübeye sahip olmak",
        "İyi seviye HTML ve CSS bilgisine sahip olmak",
        "Bootstrap, Material UI veya benzer kütüphanelerden biri hakkında deneyim sahibi olmak.",
        "JavaScript geliştirme konusunda deneyim sahibi olmak (ES5 ve ES6)",
        "ReactJS ile proje geliştirmiş ve tercihen web frameworkleri (React, Angular, VueJs) konusunda bilgi sahibi olmak",
      ],
    },
    {
      value: "ilan",
      label: "Frontend (React) Developer (Ön Yüz Geliştirici)",
      code: "JVD-22-01",
      req: [
        "Üniversitelerin ilgili bölümlerinden mezun olmak (tercihen bilgisayar, endüstri, işletme, matematik, elektrik elektronik, yönetim bilişim sistemleri veya ilgili mühendislik eğitimi veren bölümlerden)",
        "Ön yüz geliştirme konusunda en az 2 yıllık tecrübeye sahip olmak",
        "İyi seviye HTML ve CSS bilgisine sahip olmak",
        "Bootstrap, Material UI veya benzer kütüphanelerden biri hakkında deneyim sahibi olmak.",
        "JavaScript geliştirme konusunda deneyim sahibi olmak (ES5 ve ES6)",
        "ReactJS ile proje geliştirmiş ve tercihen web frameworkleri (React, Angular, VueJs) konusunda bilgi sahibi olmak",
        "Npm, Yarn, Bower vb. paket yöneticilerinin en az bir tanesini kullanmış olmak",
        "REST API haberleşme konusunda bilgi sahibi olmak,",
        "Jira, Confluence ve Git kaynak kontrol sistemi ile çalışmış veya bilgi sahibi olmak",
        "Responsive tasarım konusunda tecrübe sahibi olmak",
        "Tasarımları yüksek kaliteli koda dönüştürebilmek",
        "Bileşenleri maksimum performans için kurgulayabilmek",
        "İyi seviyede algoritma oluşturabilme ve koda dönüştürebilme becerisine sahip olmak",
        "Çevik yazılım geliştirme süreçlerini bilmek ve tercihen bu süreçlerin kullanıldığı projelerde çalışma tecrübesine sahibi olmak",
      ],
    },
    {
      value: "ilan",
      label: "Kıdemli .Net Geliştirici",
      code: "NET-22-01",
      req: [
        "Üniversitelerin ilgili bölümlerinden mezun olmak (tercihen bilgisayar, endüstri, işletme, matematik, elektrik elektronik, yönetim bilişim sistemleri veya ilgili mühendislik eğitimi veren bölümlerden)",
        "Ön yüz geliştirme konusunda en az 2 yıllık tecrübeye sahip olmak",
        "İyi seviye HTML ve CSS bilgisine sahip olmak",
        "Bootstrap, Material UI veya benzer kütüphanelerden biri hakkında deneyim sahibi olmak.",
        "JavaScript geliştirme konusunda deneyim sahibi olmak (ES5 ve ES6)",
        "ReactJS ile proje geliştirmiş ve tercihen web frameworkleri (React, Angular, VueJs) konusunda bilgi sahibi olmak",
      ],
    },
    {
      value: "ilan",
      label: "PostgreSQL Veri Tabanı Yöneticisi",
      code: "VT-22-02",
      req: [
        "Üniversitelerin ilgili bölümlerinden mezun olmak (tercihen bilgisayar, endüstri, işletme, matematik, elektrik elektronik, yönetim bilişim sistemleri veya ilgili mühendislik eğitimi veren bölümlerden)",
        "Ön yüz geliştirme konusunda en az 2 yıllık tecrübeye sahip olmak",
        "İyi seviye HTML ve CSS bilgisine sahip olmak",
        "Bootstrap, Material UI veya benzer kütüphanelerden biri hakkında deneyim sahibi olmak.",
        "JavaScript geliştirme konusunda deneyim sahibi olmak (ES5 ve ES6)",
        "ReactJS ile proje geliştirmiş ve tercihen web frameworkleri (React, Angular, VueJs) konusunda bilgi sahibi olmak",
      ],
    },
    {
      value: "ilan",
      label: "Sybase Veri Tabanı Yöneticisi",
      code: "VT-22-01",
      req: [
        "Üniversitelerin ilgili bölümlerinden mezun olmak (tercihen bilgisayar, endüstri, işletme, matematik, elektrik elektronik, yönetim bilişim sistemleri veya ilgili mühendislik eğitimi veren bölümlerden)",
        "Ön yüz geliştirme konusunda en az 2 yıllık tecrübeye sahip olmak",
        "İyi seviye HTML ve CSS bilgisine sahip olmak",
        "Bootstrap, Material UI veya benzer kütüphanelerden biri hakkında deneyim sahibi olmak.",
        "JavaScript geliştirme konusunda deneyim sahibi olmak (ES5 ve ES6)",
        "ReactJS ile proje geliştirmiş ve tercihen web frameworkleri (React, Angular, VueJs) konusunda bilgi sahibi olmak",
      ],
    },
    {
      value: "ilan",
      label: "İş Analisti",
      code: "ANL 22-01",
      req: [
        "Üniversitelerin ilgili bölümlerinden mezun olmak (tercihen bilgisayar, endüstri, işletme, matematik, elektrik elektronik, yönetim bilişim sistemleri veya ilgili mühendislik eğitimi veren bölümlerden)",
        "Ön yüz geliştirme konusunda en az 2 yıllık tecrübeye sahip olmak",
        "İyi seviye HTML ve CSS bilgisine sahip olmak",
        "Bootstrap, Material UI veya benzer kütüphanelerden biri hakkında deneyim sahibi olmak.",
        "JavaScript geliştirme konusunda deneyim sahibi olmak (ES5 ve ES6)",
        "ReactJS ile proje geliştirmiş ve tercihen web frameworkleri (React, Angular, VueJs) konusunda bilgi sahibi olmak",
      ],
    },
    {
      value: "ilan",
      label: "Yazılım Test Mühendisi",
      code: "TST-22-01",
      req: [
        "Üniversitelerin ilgili bölümlerinden mezun olmak (tercihen bilgisayar, endüstri, işletme, matematik, elektrik elektronik, yönetim bilişim sistemleri veya ilgili mühendislik eğitimi veren bölümlerden)",
        "Ön yüz geliştirme konusunda en az 2 yıllık tecrübeye sahip olmak",
        "İyi seviye HTML ve CSS bilgisine sahip olmak",
        "Bootstrap, Material UI veya benzer kütüphanelerden biri hakkında deneyim sahibi olmak.",
        "JavaScript geliştirme konusunda deneyim sahibi olmak (ES5 ve ES6)",
        "ReactJS ile proje geliştirmiş ve tercihen web frameworkleri (React, Angular, VueJs) konusunda bilgi sahibi olmak",
      ],
    },
    {
      value: "ilan",
      label: "Mobil Uygulama (Android)  Geliştirici",
      code: "ANDD-22-01",
      req: [
        "Üniversitelerin ilgili bölümlerinden mezun olmak (tercihen bilgisayar, endüstri, işletme, matematik, elektrik elektronik, yönetim bilişim sistemleri veya ilgili mühendislik eğitimi veren bölümlerden)",
        "Ön yüz geliştirme konusunda en az 2 yıllık tecrübeye sahip olmak",
        "İyi seviye HTML ve CSS bilgisine sahip olmak",
        "Bootstrap, Material UI veya benzer kütüphanelerden biri hakkında deneyim sahibi olmak.",
        "JavaScript geliştirme konusunda deneyim sahibi olmak (ES5 ve ES6)",
        "ReactJS ile proje geliştirmiş ve tercihen web frameworkleri (React, Angular, VueJs) konusunda bilgi sahibi olmak",
      ],
    },
    {
      value: "ilan",
      label: "Mobil Uygulama (iOS) Geliştirici",
      code: "iOSD-22-01",
      req: [
        "Üniversitelerin ilgili bölümlerinden mezun olmak (tercihen bilgisayar, endüstri, işletme, matematik, elektrik elektronik, yönetim bilişim sistemleri veya ilgili mühendislik eğitimi veren bölümlerden)",
        "Ön yüz geliştirme konusunda en az 2 yıllık tecrübeye sahip olmak",
        "İyi seviye HTML ve CSS bilgisine sahip olmak",
        "Bootstrap, Material UI veya benzer kütüphanelerden biri hakkında deneyim sahibi olmak.",
        "JavaScript geliştirme konusunda deneyim sahibi olmak (ES5 ve ES6)",
        "ReactJS ile proje geliştirmiş ve tercihen web frameworkleri (React, Angular, VueJs) konusunda bilgi sahibi olmak",
      ],
    },
    {
      value: "ilan",
      label: "Yazılım Destek Uzmanı",
      code: "YDU-22-01",
      req: [
        "Üniversitelerin ilgili bölümlerinden mezun olmak (tercihen bilgisayar, endüstri, işletme, matematik, elektrik elektronik, yönetim bilişim sistemleri veya ilgili mühendislik eğitimi veren bölümlerden)",
        "Ön yüz geliştirme konusunda en az 2 yıllık tecrübeye sahip olmak",
        "İyi seviye HTML ve CSS bilgisine sahip olmak",
        "Bootstrap, Material UI veya benzer kütüphanelerden biri hakkında deneyim sahibi olmak.",
        "JavaScript geliştirme konusunda deneyim sahibi olmak (ES5 ve ES6)",
        "ReactJS ile proje geliştirmiş ve tercihen web frameworkleri (React, Angular, VueJs) konusunda bilgi sahibi olmak",
      ],
    },
    {
      value: "ilan",
      label: "İş Zekası Uzmanı",
      code: "İZU-22-01",
      req: [
        "Üniversitelerin ilgili bölümlerinden mezun olmak (tercihen bilgisayar, endüstri, işletme, matematik, elektrik elektronik, yönetim bilişim sistemleri veya ilgili mühendislik eğitimi veren bölümlerden)",
        "Ön yüz geliştirme konusunda en az 2 yıllık tecrübeye sahip olmak",
        "İyi seviye HTML ve CSS bilgisine sahip olmak",
        "Bootstrap, Material UI veya benzer kütüphanelerden biri hakkında deneyim sahibi olmak.",
        "JavaScript geliştirme konusunda deneyim sahibi olmak (ES5 ve ES6)",
        "ReactJS ile proje geliştirmiş ve tercihen web frameworkleri (React, Angular, VueJs) konusunda bilgi sahibi olmak",
      ],
    },
    {
      value: "ilan",
      label: "Kıdemli İş Zekası Uzmanı",
      code: "İZU-22-02",
      req: [
        "Üniversitelerin ilgili bölümlerinden mezun olmak (tercihen bilgisayar, endüstri, işletme, matematik, elektrik elektronik, yönetim bilişim sistemleri veya ilgili mühendislik eğitimi veren bölümlerden)",
        "Ön yüz geliştirme konusunda en az 2 yıllık tecrübeye sahip olmak",
        "İyi seviye HTML ve CSS bilgisine sahip olmak",
        "Bootstrap, Material UI veya benzer kütüphanelerden biri hakkında deneyim sahibi olmak.",
        "JavaScript geliştirme konusunda deneyim sahibi olmak (ES5 ve ES6)",
        "ReactJS ile proje geliştirmiş ve tercihen web frameworkleri (React, Angular, VueJs) konusunda bilgi sahibi olmak",
      ],
    },
    {
      value: "ilan",
      label: "Siber Güvenlik Uzmanı",
      code: "SGU-22-01",
      req: [
        "Üniversitelerin ilgili bölümlerinden mezun olmak (tercihen bilgisayar, endüstri, işletme, matematik, elektrik elektronik, yönetim bilişim sistemleri veya ilgili mühendislik eğitimi veren bölümlerden)",
        "Ön yüz geliştirme konusunda en az 2 yıllık tecrübeye sahip olmak",
        "İyi seviye HTML ve CSS bilgisine sahip olmak",
        "Bootstrap, Material UI veya benzer kütüphanelerden biri hakkında deneyim sahibi olmak.",
        "JavaScript geliştirme konusunda deneyim sahibi olmak (ES5 ve ES6)",
        "ReactJS ile proje geliştirmiş ve tercihen web frameworkleri (React, Angular, VueJs) konusunda bilgi sahibi olmak",
      ],
    },
    {
      value: "ilan",
      label: "Bilişim Sistemleri Uzmanı",
      code: "BSU-22-01",
      req: [
        "Üniversitelerin ilgili bölümlerinden mezun olmak (tercihen bilgisayar, endüstri, işletme, matematik, elektrik elektronik, yönetim bilişim sistemleri veya ilgili mühendislik eğitimi veren bölümlerden)",
        "Ön yüz geliştirme konusunda en az 2 yıllık tecrübeye sahip olmak",
        "İyi seviye HTML ve CSS bilgisine sahip olmak",
        "Bootstrap, Material UI veya benzer kütüphanelerden biri hakkında deneyim sahibi olmak.",
        "JavaScript geliştirme konusunda deneyim sahibi olmak (ES5 ve ES6)",
        "ReactJS ile proje geliştirmiş ve tercihen web frameworkleri (React, Angular, VueJs) konusunda bilgi sahibi olmak",
      ],
    },
    {
      value: "ilan",
      label: "Bilişim Sistemleri DevOps Uzmanı",
      code: "BSDU-22-01",
      req: [
        "Üniversitelerin ilgili bölümlerinden mezun olmak (tercihen bilgisayar, endüstri, işletme, matematik, elektrik elektronik, yönetim bilişim sistemleri veya ilgili mühendislik eğitimi veren bölümlerden)",
        "Ön yüz geliştirme konusunda en az 2 yıllık tecrübeye sahip olmak",
        "İyi seviye HTML ve CSS bilgisine sahip olmak",
        "Bootstrap, Material UI veya benzer kütüphanelerden biri hakkında deneyim sahibi olmak.",
        "JavaScript geliştirme konusunda deneyim sahibi olmak (ES5 ve ES6)",
        "ReactJS ile proje geliştirmiş ve tercihen web frameworkleri (React, Angular, VueJs) konusunda bilgi sahibi olmak",
      ],
    },
  ];
  return (
    <Context.Provider value={{currencies}}>
    {children}
  </Context.Provider>
  );
}

export function useData(){
  return useContext(Context);
};