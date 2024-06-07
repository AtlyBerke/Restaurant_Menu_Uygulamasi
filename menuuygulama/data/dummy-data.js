import Category from '../models/category';
import Food from '../models/food';



export const CATEGORIES = [
  new Category('c1', 'İtalyan', '#4cc9f0'), // Pembe renk
  new Category('c2', 'Aperatif', '#4895ef'), // Koyu pembe renk
  new Category('c3', 'Hamburger', '#4361ee'), // Kahverengi renk
  new Category('c4', 'Alman', '#3f37c9'), // Sarı renk
  new Category('c5', 'Diyet', '#4169e1'), // Mavi renk
  new Category('c6', 'Egzotik', '#7209b7'), // Yeşil renk
  new Category('c7', 'Kahvaltı', '#5fa8d3'), // Açık mavi renk
  new Category('c8', 'İçecekler', '#b8b8ff'), // Açık yeşil renk
];


export const FOODS = [
  new Food(
    'm1',
    ['c1', 'c2'],
    'Domates soslu Spagetti',
    'bütçeye uygun',
    'normal kalorili',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Spaghetti_Bolognese_mit_Parmesan_oder_Grana_Padano.jpg/800px-Spaghetti_Bolognese_mit_Parmesan_oder_Grana_Padano.jpg',
    [
      '4 Domates',
      '1 Çay Kaşığı Zeytinyağı',
      '2 Soğan',
      '200g Spaghetti',
      'Baharatlar',
      'Peynir',
    ]
  ),
  new Food(
    'm2',
    ['c2'],
    'Tost',
    'bütçeye uygun',
    'çok kalorili',
    'https://cdn.pixabay.com/photo/2018/07/11/21/51/toast-3532016_1280.jpg',
    ['Yarım Ekmek', 'Sucuk', 'Salam', 'Kaşar Peyniri', 'Margarin']
  ),
  new Food(
    'm3',
    ['c3'],
    'Hamburger',
    'bütçeye uygun',
    'çok kalorili',
    'https://cdn.pixabay.com/photo/2014/10/23/18/05/burger-500054_1280.jpg',
    [
      '150 gr et',
      '2 Dilim Domates',
      '1 Dilim Chedar Peyniri',
      '1 Dilim Soğan',
      'Ketçap',
      'Mayonez',
    ]
  ),
  new Food(
    'm4',
    ['c4'],
    'Tavuk Sote',
    'bütçeye uygun',
    'normal kalorili',
    'https://cdn.pixabay.com/photo/2018/03/31/19/29/schnitzel-3279045_1280.jpg',
    [
      '200 gr Tavuk',
      'Domates',
      'Biber',
      'Fesleğen',
      'Limon',
      'Zeytinyağı',
      'Tuz',
    ]
  ),
  new Food(
    'm5',
    ['c2', 'c5'],
    'Balıklı Salata',
    'pahalı',
    'az kalorili',
    'https://cdn.pixabay.com/photo/2016/10/25/13/29/smoked-salmon-salad-1768890_1280.jpg',
    [
      'Somon Balığı',
      'Domates',
      'Limon',
      'Salata Sosu',
      'Taze Soğan',
      'Hardal',
      'Zeytin Yağı',
      'Tuz',
    ]
  ),
  new Food(
    'm6',
    ['c6'],
    'Portakallı Muhallebi',
    'bütçeye uygun',
    'çok kalorili',
    'https://cdn.pixabay.com/photo/2017/05/01/05/18/pastry-2274750_1280.jpg',
    [
      'Portakal Suyu',
      '200gr Şeker',
      '100gr Yoğurt',
      '200g Krem Şanti',
      'Portakal Dilimleri',
    ]
  ),
  new Food(
    'm7',
    ['c7'],
    'Pankek',
    'bütçeye uygun',
    'az kalorili',
    'https://cdn.pixabay.com/photo/2018/07/10/21/23/pancake-3529653_1280.jpg',
    [
      '3 yemek kaşığı un',
      '1 Tatlı Kaşığı Tuz',
      '1 Tatlı Kaşığı Şeker',
      '2 bardak süt',
      '2 Yumurta',
      '2 Yemek Kaşığı Yağ',
    ]
  ),
  new Food(
    'm8',
    ['c6'],
    'Tavuklu Hint Yemeği',
    'bütçeye uygun',
    'normal kalorili',
    'https://cdn.pixabay.com/photo/2018/06/18/16/05/indian-food-3482749_1280.jpg',
    [
      '6 Tavuk Butu',
      '2 Soğan',
      '4 Diş Sarımsak',
      '1 Çay Kaşığı Zerdeçal',
      '1 litre Süt',
      'Yarım Litre Krem Şanti',
      'Tuz',
    ]
  ),

  new Food(
    'm10',
    ['c2', 'c5'],
    'Çilekli Yaz Salatası',
    'bütçeye uygun',
    'az kalorili',
    'https://cdn.pixabay.com/photo/2018/04/09/18/26/asparagus-3304997_1280.jpg',
    ['Çilek', 'Domates', 'Salatalık', 'Tuz', 'Salata Sosu', 'Zeytin Yağı']
  ),
  new Food(
    'm12',
    ['c1', 'c2'],
    'Margarita Pizza',
    'bütçeye uygun',
    'normal kalorili',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Pizza_Margherita_stu_spivack.jpg/640px-Pizza_Margherita_stu_spivack.jpg',
    [
      '1 Pizza Hamuru',
      '2 Domates',
      '200g Mozzarella Peyniri',
      '1 Çay Kaşığı Zeytinyağı',
      'Taze Fesleğen',
      'Tuz',
    ]
),
new Food(
  'm13',
  ['c1'],
  'Risotto alla Milanese',
  'bütçeye uygun',
  'yüksek kalorili',
  'https://www.cucchiaio.it/content/dam/cucchiaio/it/ricette/2009/11/ricetta-risotto-alla-milanese/risotto-alla-milanese-ante.jpg',
  [
    '300g Arborio Pirinci',
    '1 Soğan',
    '2 Yemek Kaşığı Zeytinyağı',
    '1 Litre Tavuk Suyu',
    '0.5g Safran',
    '50g Parmesan Peyniri',
  ]
),

new Food(
  'm14',
  ['c1'],
  'Lasagna',
  'orta bütçe',
  'yüksek kalorili',
  'https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Lasagne_-_stonesoup.jpg/800px-Lasagne_-_stonesoup.jpg',
  [
    '12 Lazanya Yaprağı',
    '500g Kıyma',
    '2 Soğan',
    '4 Domates',
    '200g Mozzarella Peyniri',
    'Beyaz Sos',
  ]
),

new Food(
  'm15',
  ['c1'],
  'Fettuccine Alfredo',
  'orta bütçe',
  'yüksek kalorili',
  'https://cdn.yemek.com/mncrop/940/625/uploads/2014/09/fettucini-alfredo-sevgililer-gunu-gorsel.jpg',
  [
    '200g Fettuccine',
    '100g Tereyağı',
    '200ml Krema',
    '50g Parmesan Peyniri',
    'Tuz',
    'Karabiber',
  ]
),

new Food(
  'm16',
  ['c1', 'c2'],
  'Bruschetta',
  'bütçeye uygun',
  'düşük kalorili',
  'https://image.hurimg.com/i/hurriyet/75/0x0/638c9c134e3fe112308373bd.jpg',
  [
    '1 Baget Ekmek',
    '4 Domates',
    '2 Diş Sarımsak',
    '1 Çay Kaşığı Zeytinyağı',
    'Taze Fesleğen',
    'Tuz',
  ]
),
new Food(
  'm17',
  ['c3'],
  'Classic Cheeseburger',
  'orta bütçe',
  'yüksek kalorili',
  'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Cheeseburger.jpg/800px-Cheeseburger.jpg',
  [
    '2 Hamburger Ekmeği',
    '200g Dana Kıyma',
    '2 Dilim Cheddar Peyniri',
    '1 Domates',
    '1 Marul Yaprağı',
    '1 Yemek Kaşığı Ketçap',
    '1 Yemek Kaşığı Mayonez',
  ]
),

new Food(
  'm18',
  ['c3'],
  'Bacon Burger',
  'orta bütçe',
  'yüksek kalorili',
  'https://cookiesandcups.com/wp-content/uploads/2014/11/bacon-cheeseburgers-12.jpg',
  [
    '2 Hamburger Ekmeği',
    '200g Dana Kıyma',
    '4 Dilim Pastırma',
    '2 Dilim Cheddar Peyniri',
    '1 Soğan',
    '1 Yemek Kaşığı Barbekü Sos',
  ]
),

new Food(
  'm19',
  ['c3'],
  'Mushroom Swiss Burger',
  'orta bütçe',
  'yüksek kalorili',
  'https://www.simplyrecipes.com/thmb/oIJk--AQ_oqPcsSZ_L-zMh1Cbi4=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Simply-Recipes-Mushroom-Swiss-Burger-LEAD-10-e86ce22657bb4a11b5d4b3f4d1230fe3.jpg',
  [
    '2 Hamburger Ekmeği',
    '200g Dana Kıyma',
    '100g Mantar',
    '2 Dilim İsviçre Peyniri',
    '1 Soğan',
    '1 Yemek Kaşığı Mayonez',
  ]
),

new Food(
  'm20',
  ['c3'],
  'Veggie Burger',
  'bütçeye uygun',
  'düşük kalorili',
  'https://hips.hearstapps.com/hmg-prod/images/veggie-burger-recipe-1-1650394748.jpg?crop=0.502xw:1.00xh;0.0657xw,0&resize=1200:*',
  [
    '2 Hamburger Ekmeği',
    '1 Adet Vejetaryen Burger Köftesi',
    '1 Domates',
    '1 Marul Yaprağı',
    '1 Yemek Kaşığı Ketçap',
    '1 Yemek Kaşığı Hardal',
  ]
),

new Food(
  'm21',
  ['c3'],
  'BBQ Burger',
  'orta bütçe',
  'yüksek kalorili',
  'https://recipes.net/wp-content/uploads/2021/10/the-best-grilled-bbq-burger-recipe.jpg',
  [
    '2 Hamburger Ekmeği',
    '200g Dana Kıyma',
    '2 Dilim Cheddar Peyniri',
    '1 Soğan Halkası',
    '1 Yemek Kaşığı Barbekü Sos',
    '2 Dilim Turşu',
  ]
),
new Food(
  'm22',
  ['c4'],
  'Sauerbraten',
  'orta bütçe',
  'yüksek kalorili',
  'https://www.allrecipes.com/thmb/3es9jI2W0huSN_rBCbKgBN-XWjA=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/221361-traditional-sauerbraten-beauty-2x1-BP-2927-61e6ad8fae53472ca528c22383113d42.jpg',
  [
    '1 kg Dana Eti (Sığır eti de kullanılabilir)',
    '2 Soğan',
    '2 Havuç',
    '2 Dal Kereviz',
    '2 Yemek Kaşığı Sirke',
    '2 Yemek Kaşığı Un',
    '3 Yemek Kaşığı Yağ',
    '2 Bardak Et Suyu',
    'Tuz, Karabiber',
  ]
),

new Food(
  'm23',
  ['c4'],
  'Kartoffelsalat',
  'bütçeye uygun',
  'normal kalorili',
  'https://s.zentrum-der-gesundheit.de/img/kartoffelsalat-curry-1?width=1280&height=720',
  [
    '1 kg Patates',
    '1 Soğan',
    '4 Yemek Kaşığı Hardal',
    '6 Yemek Kaşığı Sirke',
    '6 Yemek Kaşığı Bitkisel Yağ',
    'Tuz, Karabiber',
    'Maydanoz (süsleme için)',
  ]
),

new Food(
  'm24',
  ['c4'],
  'Wurstsalat',
  'bütçeye uygun',
  'normal kalorili',
  'https://i.ytimg.com/vi/8K19l65ebqM/maxresdefault.jpg',
  [
    '200g Salam',
    '200g Sosis',
    '1 Soğan',
    '3 Yemek Kaşığı Sirke',
    '3 Yemek Kaşığı Bitkisel Yağ',
    '1 Çay Kaşığı Tatlı Kırmızı Biber',
    'Tuz, Karabiber',
  ]
),

new Food(
  'm25',
  ['c4'],
  'Rote Grütze',
  'bütçeye uygun',
  'düşük kalorili',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKNUnYyrl-ztR1ESj0itY49hBhx276RkImNw&s',
  [
    '500g Kırmızı Meyveler (Çilek, Frambuaz, Ahududu)',
    '100g Şeker',
    '1 Limon Kabuğu Rendesi',
    '1 Vanilya Çubuğu veya Vanilya Özütü',
    '2 Yemek Kaşığı Mısır Nişastası',
    '2 Yemek Kaşığı Soğuk Su',
  ]
),

new Food(
  'm26',
  ['c4'],
  'Schwarzwälder Kirschtorte',
  'orta bütçe',
  'yüksek kalorili',
  'https://files.billa.at/fg/thema7/20180101_14_l.jpg',
  [
    '4 Yumurta',
    '150g Şeker',
    '100g Un',
    '30g Kakao Tozu',
    '1 Paket Vanilin Şekeri',
    '1 Paket Kabartma Tozu',
    '150ml Krema',
    '300g Kiraz (Taze veya Konserve)',
    '100ml Kirsch (Vişne Likörü)',
    'Kakao Tozu veya Çikolata Parçaları (Süsleme için)',
  ]
),
new Food(
  'm27',
  ['c5'],
  'Kinoa Salatası',
  'orta bütçe',
  'düşük kalorili',
  'https://www.buseterim.com.tr/upload/default/2019/11/15/680.jpg',
  [
    '1 Su Bardağı Kinoa',
    '1 Salatalık',
    '1 Domates',
    '1 Kırmızı Biber',
    '1 Havuç',
    'Maydanoz',
    '1 Limonun Suyu',
    '2 Yemek Kaşığı Zeytinyağı',
    'Tuz, Karabiber',
  ]
),

new Food(
  'm28',
  ['c5'],
  'Mevsim Sebzeli Tavuk Güveç',
  'orta bütçe',
  'düşük kalorili',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaO_oaEpLoAUklTIoXsQgM6iokUwqV3yApzA&s',
  [
    '2 Tavuk Göğsü',
    '1 Patates',
    '1 Havuç',
    '1 Soğan',
    '1 Kabak',
    '2 Domates',
    '2 Diş Sarımsak',
    '1 Yemek Kaşığı Zeytinyağı',
    'Tuz, Karabiber, Kekik',
  ]
),

new Food(
  'm29',
  ['c5'],
  'Mantarlı Tavuk Sote',
  'orta bütçe',
  'düşük kalorili',
  'https://cdn.ye-mek.net/App_UI/Img/out/650/2021/05/tavuklu-mantar-sote-resimli-yemek-tarifi(11).jpg',
  [
    '2 Tavuk Göğsü',
    '200g Mantar',
    '1 Soğan',
    '2 Diş Sarımsak',
    '1 Yemek Kaşığı Zeytinyağı',
    '1 Çay Kaşığı Kırmızı Biber Flakes',
    'Tuz, Karabiber',
  ]
),

new Food(
  'm30',
  ['c5'],
  'Yeşil Mercimek Çorbası',
  'bütçeye uygun',
  'düşük kalorili',
  'https://cdn.yemek.com/mnresize/1250/833/uploads/2024/01/yesil-mercimek-corbasi-yemekcom.jpg',
  [
    '1 Su Bardağı Yeşil Mercimek',
    '1 Soğan',
    '1 Havuç',
    '1 Patates',
    '2 Diş Sarımsak',
    '1 Yemek Kaşığı Zeytinyağı',
    '1 Tatlı Kaşığı Kırmızı Biber Salçası',
    'Tuz, Karabiber',
  ]
),

new Food(
  'm31',
  ['c5'],
  'Yoğurtlu Semizotu Salatası',
  'bütçeye uygun',
  'düşük kalorili',
  'https://chefoodrevolution.com/wp-content/uploads/2021/06/insalata-di-portulaca-con-yogurt.jpg',
  [
    '1 Demet Semizotu',
    '1 Salatalık',
    '1 Yarım Limonun Suyu',
    '1 Su Bardağı Yarım Yağlı Yoğurt',
    '1 Diş Sarımsak (Ezilmiş)',
    'Tuz, Karabiber',
  ]
),

new Food(
  'm32',
  ['c6'],
  'Mango-Ananas Salatası',
  'orta bütçe',
  'düşük kalorili',
  'https://media.istockphoto.com/id/984844438/tr/foto%C4%9Fraf/tropikal-meyve-salatas%C4%B1-mango-ve-pitaya-kase.jpg?s=1024x1024&w=is&k=20&c=e2_m_rfmce3O4nQ-3s_jF7hXpjWgPlf_byM9696GtzI=',
  [
    '1 Mango',
    '1 Ananas',
    '1 Limonun Suyu',
    'Birkaç Nane Yaprağı',
    'Birkaç Dilim Kişniş',
  ]
),

new Food(
  'm33',
  ['c6'],
  'Thai Kırmızı Mercimek Çorbası',
  'orta bütçe',
  'düşük kalorili',
  'https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/B8EF66BD-C565-430C-A945-D94DB606C818/Derivates/186F86D5-053E-4EB7-A1BF-3D22FC9D4F56.jpg',
  [
    '1 Su Bardağı Kırmızı Mercimek',
    '1 Kutu Hindistan Cevizi Sütü',
    '1 Yemek Kaşığı Kırmızı Thai Curry Ezmesi',
    '1 Diş Sarımsak (Ezilmiş)',
    '1 Çay Kaşığı Zencefil (Toz)',
    '1 Limonun Suyu',
    'Tuz, Karabiber',
  ]
),

new Food(
  'm34',
  ['c6'],
  'Japon Ton Balığı Sushi',
  'yüksek bütçe',
  'orta kalorili',
  'https://image.hurimg.com/i/hurriyet/75/750x422/5ab61d68c03c0e200c186a97.jpg',
  [
    '200g Japon Pirinci (Sushi Pirinci)',
    '2 Yemek Kaşığı Pirinç Sirkesi',
    '1 Yemek Kaşığı Şeker',
    '4 Adet Nori Yosunu',
    '200g Ton Balığı',
    '1 Salatalık',
    '1 Avokado',
    'Wasabi, Soya Sosu',
  ]
),

new Food(
  'm35',
  ['c6'],
  'Hindistan Usulü Tavuk Tikka Masala',
  'yüksek bütçe',
  'orta kalorili',
  'https://i.lezzet.com.tr/images-xxlarge/tikka-masala-soslu-tavuk-5b31bfb4-611a-4b96-b216-fe8edb46b428',
  [
    '500g Tavuk Göğsü (Küp Küp Doğranmış)',
    '1 Soğan (Doğranmış)',
    '3 Diş Sarımsak (Ezilmiş)',
    '2 Yemek Kaşığı Zeytinyağı',
    '2 Yemek Kaşığı Hindistan Cevizi Unu',
    '1 Yemek Kaşığı Kırmızı Biber Tozu',
    '1 Çay Kaşığı Tarçın',
    '1 Kutu Domates Püresi',
    '1 Kutu Hindistan Cevizi Sütü',
    'Tuz, Karabiber',
    'Maydanoz (Süsleme için)',
  ]
),

new Food(
  'm36',
  ['c6'],
  'Vietnam Usulü Pho Çorbası',
  'yüksek bütçe',
  'düşük kalorili',
  'https://egepazarindan.com/wp-content/uploads/2023/02/Pho-Corbasi-Tarifi.jpeg',
  [
    '250g Pirinç Noodles (Pho Noodles)',
    '1 Kutu Tavuk Suyu',
    '2 Dilim Zencefil',
    '2 Diş Sarımsak (Ezilmiş)',
    '1 Adet Tarçın Çubuğu',
    '1 Çay Kaşığı Kırmızı Biber Flakes',
    '1 Limonun Suyu',
    'Birkaç Dilim Tavuk Göğsü veya Dana Eti',
    'Taze Soğan, Nane, Kişniş (Servis için)',
  ]
),

new Food(
  'm37',
  ['c7'],
  'Avokado Ezmeli Yumurta',
  'bütçeye uygun',
  'orta kalorili',
  'https://image.milimaj.com/i/milliyet/75/0x410/61a630e286b24a173018babc.jpg',
  [
    '2 Adet Yumurta',
    '1 Adet Avokado',
    'Birkaç Dilim Tam Buğday Ekmeği',
    'Tuz, Karabiber',
    'Birkaç Dilim Domates (Servis için)',
    'Birkaç Dilim Salatalık (Servis için)',
  ]
),

new Food(
  'm38',
  ['c7'],
  'Granola ve Yoğurt',
  'bütçeye uygun',
  'orta kalorili',
  'https://i.lezzet.com.tr/images-xxlarge-recipe/yogurtlu-granola-63fe6de3-4fc1-44d3-8ea9-c5a0d378e132.jpg',
  [
    '1 Kase Yarım Yağlı Yoğurt',
    '3 Yemek Kaşığı Granola',
    'Birkaç Dilim Muz veya Çilek',
    'Birkaç Badem veya Fındık',
    'Birkaç Kuru Üzüm veya Kuru Kayısı (isteğe bağlı)',
  ]
),

new Food(
  'm39',
  ['c7'],
  'Kahvaltılık Omlet',
  'bütçeye uygun',
  'orta kalorili',
  'https://iasbh.tmgrup.com.tr/da9def/1200/627/0/99/1159/705?u=https://isbh.tmgrup.com.tr/sbh/2020/02/26/kahvaltinin-vazgecilmezi-omlet-tarifi-omlet-nasil-yapilir-1582724914990.jpg',
  [
    '2 Adet Yumurta',
    '1 Adet Domates',
    'Birkaç Dilim Hindi Füme',
    'Birkaç Dilim Peynir (Cheddar, Kaşar, vs.)',
    'Tuz, Karabiber',
    'Birkaç Dal Taze Fesleğen veya Maydanoz (Servis için)',
  ]
),

new Food(
  'm40',
  ['c7'],
  'Müsli ve Süt',
  'bütçeye uygun',
  'orta kalorili',
  'https://i.nefisyemektarifleri.com/2023/01/26/musli-nedir-nasil-yenir-8-leziz-tarifiyle.jpg',
  [
    '3 Yemek Kaşığı Müsli',
    '1 Su Bardağı Süt (Yağsız veya Yarım Yağlı)',
    'Birkaç Dilim Muz veya Çilek',
    'Birkaç Badem veya Fındık',
    'Birkaç Kuru Üzüm veya Kuru Kayısı (isteğe bağlı)',
  ]
),

new Food(
  'm41',
  ['c7'],
  'Tost ve Peynir',
  'bütçeye uygun',
  'orta kalorili',
  'https://cdn.yemek.com/mnresize/940/940/uploads/2020/05/bol-peynirli-tost-yemekcom.jpg',
  [
    '2 Dilim Tam Buğday Ekmeği',
    '2 Dilim Kaşar Peyniri',
    'Tuzsuz Tereyağı veya Zeytinyağı',
    'Birkaç Dilim Domates (Servis için)',
    'Birkaç Dal Taze Maydanoz veya Fesleğen (Servis için)',
  ]
),
new Food(
  'm42',
  ['c8'],
  'Yeşil Çay',
  'bütçeye uygun',
  'düşük kalorili',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQM3Lyvj8t8i5B_lCWmtjP3_L2BOdnMO_-sKQ&s',
  [
    '1 Poşet Yeşil Çay',
    '1 Su Bardağı Sıcak Su',
    'Birkaç Damla Limon Suyu (isteğe bağlı)',
    'Bal veya Şeker (isteğe bağlı)',
  ]
),

new Food(
  'm43',
  ['c8'],
  'Smoothie (Meyve Püresi)',
  'orta bütçe',
  'düşük kalorili',
  'https://media.istockphoto.com/id/1338908415/tr/foto%C4%9Fraf/colorful-various-smoothie-or-milkshake-with-assorted-ingredients-served-in-glasses-with.jpg?s=612x612&w=0&k=20&c=3xMbKrmz8h6I8ODxAyvQL6UYVZqL1UckfRnn-IW2YWc=',
  [
    '1 Kase Dondurulmuş veya Taze Meyve (Çilek, Muz, Ahududu, vs.)',
    'Yarım Su Bardağı Süt (Yağsız veya Badem Sütü)',
    'Birkaç Yaprak Ispanak',
    'Birkaç Dilim Salatalık',
    'Birkaç Dilim Ananas',
    'Birkaç Yaprak Nane',
    '1 Yemek Kaşığı Bal veya Yulaf Ezmesi (isteğe bağlı)',
  ]
),

new Food(
  'm44',
  ['c8'],
  'Kahve',
  'bütçeye uygun',
  'düşük kalorili',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmJPrY0AymX8RT0gbqgvegjaCX5sNM9Q2ajQ&s',
  [
    '1 Tatlı Kaşığı Kahve (Tercihinize Göre)',
    '1 Su Bardağı Sıcak Su',
    'Süt veya Krema (isteğe bağlı)',
    'Şeker veya Tatlandırıcı (isteğe bağlı)',
  ]
),

new Food(
  'm45',
  ['c8'],
  'Taze Sıkılmış Portakal Suyu',
  'orta bütçe',
  'yüksek kalorili',
  'https://cdn.yemek.com/mncrop/940/625/uploads/2019/06/taze-sikma-portakal-suyu.jpg',
  [
    '2-3 Adet Portakal',
    'Birkaç Dilim Limon (isteğe bağlı)',
    'Şeker veya Tatlandırıcı (isteğe bağlı)',
  ]
),

new Food(
  'm46',
  ['c8'],
  'Meyve Kokteyli',
  'yüksek bütçe',
  'orta kalorili',
  'https://cdn.yemek.com/mnresize/1250/833/uploads/2021/01/alkolsuz-meyve-kokteyli-tugba.jpg',
  [
    '1 Kase Dondurulmuş veya Taze Meyve (Çilek, Muz, Ananas, vs.)',
    'Yarım Su Bardağı Suyu (Portakal Suyu, Elma Suyu, vs.)',
    'Birkaç Yaprak Nane',
    'Birkaç Dilim Limon',
    '1 Yemek Kaşığı Bal veya Yulaf Ezmesi (isteğe bağlı)',
  ]
),

new Food(
  'm47',
  ['c8'],
  'Kola',
  'orta bütçe',
  'yüksek kalorili',
  'https://www.donanimhaber.com/images/images/haber/151900/1400x1400kola-fareleri-aptallastirdi-peki-insanlari-nasil-etkiliyor.jpg',
  [
    '1 Kutu Kola (330ml)',
    'Buz Küpleri (isteğe bağlı)',
    'Limon Dilimi (isteğe bağlı)',
  ]
),

new Food(
  'm48',
  ['c8'],
  'Fanta',
  'orta bütçe',
  'yüksek kalorili',
  'https://sebeder.org/images/icerik/Fanta_www.sebeder.org_2593.jpg',
  [
    '1 Kutu Fanta (330ml)',
    'Buz Küpleri (isteğe bağlı)',
    'Portakal Dilimi (isteğe bağlı)',
  ]
),

new Food(
  'm49',
  ['c8'],
  'Ice Tea',
  'bütçeye uygun',
  'yüksek kalorili',
  'https://www.dytfazileyilmaz.com/wp-content/uploads/sicak-gunler-icin-harareti-alan-seftalili-soguk-cay.jpg',
  [
    '1 Kutu Ice Tea (330ml)',
    'Buz Küpleri (isteğe bağlı)',
    'Limon Dilimi (isteğe bağlı)',
  ]
),

new Food(
  'm50',
  ['c8'],
  'Churchill',
  'yüksek bütçe',
  'yüksek kalorili',
  'https://i.nefisyemektarifleri.com/2022/09/20/churchill-corcil-nedir-nasil-yapilir-7-onemli-faydasi.jpg',
  [
    '1 Kutu Churchill (330ml)',
    'Buz Küpleri (isteğe bağlı)',
    'Limon Dilimi (isteğe bağlı)',
  ]
),

new Food(
  'm51',
  ['c8'],
  'Maden Suyu',
  'bütçeye uygun',
  'düşük kalorili',
  'https://img.piri.net/mnresize/720/-/resim/upload/2016/01/20/10/24/e8165adcfft99_mf5759341.jpeg',
  [
    '1 Kutu Maden Suyu (330ml)',
    'Buz Küpleri (isteğe bağlı)',
    'Nane Yaprağı (isteğe bağlı)',
    'Limon Dilimi (isteğe bağlı)',
  ]
),





];
