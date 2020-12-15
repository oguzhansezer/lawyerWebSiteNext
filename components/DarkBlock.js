import "./DarkBlock.scss";
import { Shape1, Shape2, Shape3 } from "../styles/icons.js";
export const DarkBlock = () => {
  return (
    <div className="darkBlock">
      <div className="headerImage"></div>
      <div className="headerContact">
        <li>
          <span>E:</span>
          <a href="mailto:info@minerva-advocaten.nl">
            {"nilsuonder@gmail.com"}
          </a>
        </li>
        <li>
          <span>T:</span>
          <a href="tel:+31103076677">{"+544 520 70 97"}</a>
        </li>
      </div>

      <div className="shapes">
        <div className="shape">
          <Shape1 />
          <h3>Ceza Hukuku</h3>
          <p>
            Ağır ceza avukatı olarak, Anayasamızca korunan adil yargılanma hakkı
            çerçevesinde müvekkillerimizi savunmak ve ceza davalarında müşteki
            vekili olarak ceza davasının takibi gibi konularda hizmet
            vermekteyiz.
          </p>
        </div>

        <div className="shape">
          <Shape2 />
          <h3>Ticaret ve Şirketler Hukuku</h3>
          <p>
            Şirketler arası ticari ilişkilerde sözleşmelerin hazırlanması,
            işçilerle alakalı fesih ve diğer işlemler gibi konularda ve çek
            senet tahsili konularında ticaret ve şirketler hukuku avukatı olarak
            hukuki danışmanlık ve profesyonel avukatlık hizmeti vermekteyiz.
          </p>
        </div>

        <div className="shape">
          <Shape3 />
          <h3>Spor Hukuku</h3>
          <p>
            Sporcuların sözleşmelerinden doğan uyuşmazlıkların çözümü,
            alacaklarının tahsili ve spor kulüplerine danışmanlık gibi konularda
            spor hukuku avukatı olarak hizmeti vermekteyiz.
          </p>
        </div>
      </div>
    </div>
  );
};
