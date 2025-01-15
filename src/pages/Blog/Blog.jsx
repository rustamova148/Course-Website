import { useParams } from 'react-router-dom'
import './Blog.css'

const Blog = () => {
const { id } = useParams();
console.log(id);
  return (
    <div className='blog'>
{id === '1' ? <p className='blog-text'>Hər gün sosial şəbəkələrdə informasiya paylaşır, e-poçtlardan istifadə edir və ya internet üzərindən alış-veriş edirik. Ağılda bir sual yaranır: bütün bu məlumatlar nə qədər qorunur? 🕵‍♀  <br /><br />

Düşünəndə ki, hər 39 saniyədə bir kiberhücum baş verir, təhlükənin nə qədər ciddi olduğunu anlamaq daha asan olur. Kiber cinayətkarlar hədəf olaraq yalnız fərdləri deyil, iri şirkətləri və hətta dövlət qurumlarını seçirlər. Ən diqqət çəkəni isə, bu hücumların 90%-nin insan səhvləri səbəbindən uğurlu olmasıdır.  
<br /><br /><br />
<h2>Nə ilə qarşılaşa bilərsən?</h2>   <br /> <br />
<ul style={{paddingLeft:'20px'}}>
  <li>⁠Pulsuz Wi-Fi şəbəkələri vasitəsilə məlumatlarının oğurlanması.</li>
  <li>⁠E-poçtlar vasitəsilə zərərli proqramların cihazına yüklənməsi.</li>
  <li>⁠Zəif və təkrarlanan parollarla hesablarınızın ələ keçirilməsi.</li>
</ul> <br />

Özünü Necə Qoruya Bilərsən?  ⛓ <br />
Kiber təhlükələrdən qorunmaq mümkündür – sadəcə bəzi qaydalara riayət etməlisən:  
<ul style={{paddingLeft:'20px'}}>
  <li>⁠Güclü parollar seçin: Parollarında böyük və kiçik hərfləri, rəqəmləri və xüsusi simvolları birləşdir.</li>
  <li>⁠Etibarsız linklərə klikləmə: Qeyri-adi e-poçtlar və ya mesajlarla gələn linklərə ehtiyatla yanaş. </li>
  <li>⁠Məlumatlı ol: Hər zaman kibertəhlükəsizlik haqqında yeni biliklər əldə et və başqalarını da maarifləndir. </li>
  <li>⁠Antivirus proqramlarından istifadə et: Cihazların üçün müasir təhlükəsizlik proqramları quraşdır.</li>
</ul><br />
    

Təhlükəsizliyinin təminatçısı  🔑 <br />
Div Academy olaraq, sənə kibertəhlükəsizlik sahəsində ən müasir bilikləri təqdim edirik. <br />Texnologiyadan qorxma – onu idarə etməyi öyrən! ⚡
<br /> <br />
 Div Academy ilə gələcəyə inamla addımla.</p> 
 : id === '2' ? <p className='blog-text'>Proqramlaşdırma dedikdə bir çoxumuzun ağlına qarışıq kodlar, kompüter qarşısında gecələyən eynəkli proqramistlər, bəzilərimizin isə YouTube-dakı hind aksenti ilə danışan müəllimlər gəlir.. <br /> <br />

 Düşünürük ki, proqramlaşdırma yalnız iş dünyasında istifadə olunan kompleks saytlar və tətbiqlərin yaradıldığı yüksək maaşlı sahədir. Yüksək maaşlı olduğunu inkar edə bilmərik 😁 , lakin yalnız professional mühitdə istifadə olunduğu fikrinin mif olduğunu asanlıqla iddia edirik. 
 <br /> <br />
 
 <b>Niyə</b>❓ <br /> <br />
 
 <b>Çünki proqramlaşdırma hər yerdədir:</b> bu mətni oxuya bildiyin vebsaytımızdan, vebsayta daxil olduğun cihaza, saatlarla vaxt keçirdiyimiz sosial şəbəkələrdən, onlayn alışveriş platformalarına, bank və ödəniş sistemlərindən, nəqliyyat üçün istifadə etdiyimiz xəritə və naviqator tətbiqlərinə qədər hər şey proqramlaşdırma məhsuludur. 💻
 <br /> <br />
 
 Bəs sən proqramlaşdırmadan gündəlik həyatında necə faydalana bilərsən? 🧐 <br /> <br />
 
 Bunun üçün istifadə edə biləcəyin 5 ideyanı səninlə bölüşürük: <br /> <br />
 <ol style={{paddingLeft:'17px'}}>
  <li><b>Səyahətlərini planlaşdırmağa kömək edəcək alqoritmlər yazmaq:</b> Dünyanı gəzmək və yeni yerlər kəşf etmək hər birimizin arzusudur, lakin planlaşdırma mərhələsi çoxumuz üçün çətinlik yarada bilir. Prosesdə zaman və enerjinə qənaət etmək məqsədi ilə, müəyyən tarixlərdə təyyarə biletləri üçün qiymətləri avtomatik izləyən və daha ucuz biletlər tapdıqda xəbərdarlıq edən bir proqram yaza və ya səyahət marşrutlarını və otel qiymətlərini təhlil edən skriptlər yaradaraq ən optimal variantları seçə bilərsən. ✈️</li> <br /> <br />
  <li><b>Gündəlik işlərini asanlaşdırmaq:</b> Gündəlik işlərimizdə bəzi prosesləri təkrar-təkrar yerinə yetiririk: Hər gün e-poçt yoxlamaq, müəyyən faylları yükləmək, məlumatları təhlil etmək və s. Bu kimi işləri avtomatikləşdirmək üçün kiçik skriptlər yazmağın mümkündür. Məsələn, tələbələrimizdən biri mövcud geyim parçalarına əsasən həftənin müxtəlif günləri üçün fərqli kombinasiya fikirləri təklif edən bir proqram yazaraq, özünü qərarvermə yükündən azad etmişdi. ✨</li> <br /> <br />
  <li><b>Şəxsi maliyyə nəzarəti:</b> Gəlir və xərclərini izləmək, büdcəni planlaşdırmaq üçün proqramlaşdırma biliklərindən istifadə edərək, öz büdcə idarəetmə tətbiqini yarada bilərsən. Bu sistem sənin üçün xüsusi hesabatlar hazırlamaqla, maliyyə vəziyyətinə daha yaxşı nəzarət etməyinə imkan verər. 💸</li> <br /> <br />
  <li><b>Hobbilərin üçün tövsiyə proqramları:</b> Məsələn, sevdiyin film və ya serialları izləmək, yeni kitablar yaxud müxtəlif sənət məşğuliyyətləri üçün ideyalar təklif edən proqramlar yarada bilərsən. 🎶</li> <br /> <br />
  <li><b>Üfüqlərini genişləndirəcək məqsədlər:</b> Proqramlaşdırma dilini öyrəndikdən sonra onu tədris və öyrənmə prosesində istifadə etməyin də mümkündür. İnkişaf yolunu izləyən, sənə tövsiyələr verən və ya müəyyən vaxtlarda təkrar etməyin üçün bildirişlər göndərən tədris alətləri yaratmaqla, daha effektiv nəticələrə nail ola bilərsən. ✅</li> <br /> <br />
 </ol>
 <br /> <br />
 Nəticə olaraq, görürük ki, proqramlaşdırma yalnız IT mütəxəssisləri üçün deyil, hamımız üçün faydalı alətlər yaratmaq imkanı verən güclü vasitədir. Sən də qeyd etdiyimiz və ya bənzər məqsədlər üçün proqramlaşdırma öyrənməyə elə bugündən başla! 💻
 </p>
 : id === '3' ? <p className='blog-text'>Marketinqdə effektiv istifadə olunarsa böyük uğur qazandıra biləcək müxtəlif fəaliyyət növləri vardır. Bu vasitələr marketinq dünyasında “Böyük üçlü“ kimi tanınır 🤩 . <br /> <br />

 <b>BƏS BU “BÖYÜK ÜÇLÜ“-NÜN FƏALİYYƏTİ NƏDƏN İBARƏTDİR?</b> <br /> <br />
  
 Rəqəmsal marketinqdə “Böyük üçlü“ strategiyaları, uğur qazanmaq üçün vacib olan əsas komponent və nüanslardan ibarətdir. Bu &quot;Böyük üçlü&quot; aspektləri şirkətə hədəf kütləsini maqnit kimi cəlb etməyə və qoyulan hədəflərə nail olmağa kömək edir. Gəlin baxaq bura nələr aiddir ⤵️: <br /> <br />
 
  <h1>📍 Search Engine Optimization (SEO): </h1>  <br />
 Təsəvvür edin ki, bir təyinat nöqtəsinə səmərəli şəkildə çatmaq üçün xəritəyə ehtiyacınız var. Bu axtarılan xəritə isə SEO-dur. Açar söz axtarışı, səhifə optimallaşdırması, link və məzmun yaradılması kimi taktikalardan istifadə edərək şirkətlər “organic” axtarışlarda üst sıralara yüksəlirlər 📈 . Ən yaxşı SEO təcrübələrini izləmək və alqoritm dəyişiklikləri ilə ayaqlaşaraq şirkətlər rəqabətli onlayn bazarda uğur qazanmaq şanslarını artıra bilərlər.
 <br /> <br /> <br />
  <h1>📍 Content Marketing:</h1> <br />
 Əksər şirkətlərin viral olmasının səbəbi məhz məzmun marketinq olduğunu bilirdin 💡 ? Auditoriyanın duyğularına və ehtiyaclarına uyğun yüksək keyfiyyətli məzmun təqdim etməklə şirkətlər nüfuz qazana, inam yarada və dönüşümləri artıra bilirlər. Blog yazıları, məqalələr, videolar, infoqrafika, podkastlar kimi müxtəlif məzmun formalarından istifadə edilir. Əsas odur ki, problemi həll edən, suala cavab verən və ya tamaşaçıları bir şəkildə əyləndirən məzmun təmin olunsun .
 <br /> <br /> <br />
  <h1>📍 Social Media Marketing:</h1> <br />
 Rəqəmsal marketinqin başqa bir kütləvi növü sosial media marketinqidir. Günümüzdə biznesin bilinirliyini artırmaq üçün Facebook, YouTube, İnstagram, Pinterest, Linkedın kimi sosial media platformalarından istifadə olunur. Sosial media platformaları markanızı, məhsullarınızı və xidmətlərinizi birbaşa reklam edərək satışlarınızın sayında ciddi fərq yarada bilərlər 🎯 .</p>
 : id === '4' ? <p className='blog-text'>Yəqin ki, sən də son zamanlarda Süni İntellekt ifadəsini çox eşitmisən. Onun haqqında hər gün yeni xəbərlər çıxır, tibb sahəsindən maliyyəyədək bir çox sferada ondan istifadə daha da artır, insanlar onun barəsində müxtəlif fikirlər irəli sürür vs. <br /> <br /> <br />

 <h1>Yaxşı, bəs bu Süni İntellekt tam olaraq nədir? 🤔</h1> <br />
 Süni İntellekt və ya daha çox tanınan adı ilə desək, Artificial Intelligence ( AI ) insan zəkasına əsaslanan, rəqəmsal kompüter ya da robot tərəfindən idarə edilən texnologiyadır. Computer Science sahəsinin Machine Learning qrupuna aid olan bu texnologiya bir çox kompleks taskları yerinə yetirə bilir. Bunlara aiddir: <br /> <br />
 <ul style={{paddingLeft:'35px'}}>
  <li>biznes analizi və qərarvermə</li> <br />
  <li>marketinq və satış</li> <br />
  <li>brendinq və dizayn</li> <br />
  <li>şəkil, video, səslərin hazırlanması və editlənməsi</li> <br />
  <li>kod yazmaq</li> <br />
  <li>məlumat yaradılması və kommunikasiya</li>
 </ul> <br /> <br />
 
 Gördüyün kimi, Süni İntellektin bir çox bacarığı var. Bütün bu bacarıqları nəzər alsaq, ağlımızda o sual yaranır:
 <br /> <br /> <br />
 <h1>Süni İntellekt İnsanları əvəzləyəcək? 🤖</h1> <br /> <br />
 
 Əlbəttə ki, YOX! Süni İntellektin yaradılmasının ilkin və ən önəmli səbəbi insanlara kömək etməsidir. Nə qədər yüksək bacarıqlara sahib olsa da insan əməyini tamamilə əvəzləyə bilməsi mümkün deyil. İllər əvvəl sənayə inqilab zamanı maşınlar da onlarca insanın görə biləcəyi işi tək başına görərək onları əvəz etmiş kimi görsəndi. <br /> <br /> <br />
 
 Lakin o maşınları ixtira edib nəzarət edənlərdə məhz insanlardı. İnnovasiya yeni iş sahələri və ixtisasların açılmasına gətirib çıxardır. Bir digər nümunəni isə, proqramlaşdırma üzərindən verək: Bir çoxlarının düşüncəsinə görə, əgər AI modelləri proqram təminatının inkişafı üçün lazımi kodları yaza bilirsə, deməli, gələcəkdə proqramçıları əvəzləyəcək. 
 <br /> <br /> <br />
 
 Lakin bu düşüncə yanlışdır, çünki proqramlaşdırma sadəcə kod yazmaqdan ibarət deyil. Kodlars sadəcə bu işin texniki tərəfinin bir hissəsidir.
 <br /> <br />
 Proqramlaşdırma eyni zamanda Süni İntellektin edə bilmədiyi: <br /> <br />
 
 🎯 Kreativlik; <br />
 🎯 Problem həll edilməsi; <br />
 🎯 Kritiki düşüncə; <br />
 🎯 İntuisiya bacarıqlarını da özündə birləşdirir. <br /> <br />
 
 Bir proqramçı kod yazmaqdan əlavə keçmiş təcrübələrinə əsaslanaraq istifadəçi ehtiyaclarını müəyyənləşdirir, potensial riskləri nəzərə alır, işinə unikal perspektivdən yanaşmağa çalışır. 
 <br /> <br />
 Sayılan bu insan elementləri AI tərəfindən təkrarlana bilməz, lakin bu o demək deyil ki, proqramçılar AI istifadəsini öyrənməməlidir. Proqramçı müasir dövrdə getdikcə həyatımızın ayrılmaz bir parçasına çevrilən AI modelləri ilə “dostlaşaraq” gördüyü işi daha da optimallaşdıra və əmək bazarında rəqabətə davamlı bir fərdə çevrilə bilər. 🚀</p> : ''}
    </div>
  )
}

export default Blog