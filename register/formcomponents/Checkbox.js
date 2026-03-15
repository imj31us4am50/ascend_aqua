import CheckboxCSS from "/formcomponents/Checkbox.css";

export default function Checkbox() {
  return (
    <div className="row pl-3 pr-3 pt-3 mx-auto" style={CheckboxCSS}>
      <label for="checkbox">
        <input type="checkbox" name="checkbox" className="m-2" required />
        Am citit și sunt de acord cu{" "}
        <a href="#popup1">Termenii și Condițiile</a>
      </label>

      <div id="popup1" className="overlay">
        <div className="popup termscond">
          <div className="h2">Termenii și Condițiile site-ului Ascend Aqua</div>
          <a class="close" href="#">
            &times;
          </a>
          <div className="content">
            Condiții Generale pentru utilizarea site-ului Ascend Aqua
            <br />
            <br />
            ACCEPTAREA CONDIȚIILOR
            <br />
            <br /> Prin accesarea acestui site web și/sau a oricărei pagini a
            acestuia sunteți de acord cu aceste condiții de utilizare. Dacă nu
            sunteți de acord cu aceșți termeni și condiții de utilizare, nu
            accesați acest site. <br />
            <br />
            DESCRIEREA SERVICIILOR <br />
            <br />
            Site-ul nostru va pune la dispoziție informațiile din acest site web
            în scop informativ general și nu garantează de exactitatea lor la un
            moment dat, deși se va încerca pe cât posibil că la publicarea lor
            pe site toate informațiile să fie exacte. <br />
            <br />
            INTRODUCERE
            <br />
            <br />
            Prezențele Condiții Generale definesc condițiile de utilizare a
            site-ului Ascend Aqua de către potențialii vizitatori sau clienți.
            Accesând și navigând pe acest site, acceptați termenii de utilizare
            descriși în continuare. <br />
            <br />
            DREPTURILE ASUPRA CONȚINUTULUI SITE-ULUI
            <br />
            <br /> Nu vă transferăm titlul de proprietate asupra aplicațiilor
            software. Deținem drepturi complete și depline asupra titlului de
            proprietate și prin această toate drepturile de autor și cele
            brevetate.
            <br />
            <br />
            Nu aveți dreptul să redistribuiți, vindeți, decompilati,
            dezasamblati aplicația software într-o formă perceptibilă de către
            oameni. Toate informațiile, produsele sau aplicațiile conținute în
            acest site sunt proprietatea Ascend Aqua care își rezervă dreptul de
            a modifica conținutul și/sau structura site-ului în orice moment și
            fără nici o informare prealabilă. Întregul conținut al site-ului
            nostru este protejat prin legea drepturilor de autor, toate
            drepturile fiind rezervate.
            <br />
            <br />
            Toate drepturile referitoare la pagini, conținutul și prezentarea
            site-ului sunt deținute de Ascend Aqua. Este interzisă copierea,
            modificarea, afișarea, distribuirea, transmiterea, publicarea,
            comercializarea, licențierea, crearea unor materiale derivate sau
            utilizarea conținutului site-ului în orice scop fără confirmarea
            scrisă din partea noastră.
            <br />
            <br />
            Accesul și utilizarea paginii Ascend Aqua sunt gratuite și au scopul
            de a veni în ajutorul utilizatorilor pentru a găsi informațiile
            necesare în cel mai ușor și rapid mod posibil, conform cerințelor
            fiecăruia. Informațiile prezente pe site sunt de interes general și
            sunt puse la dispoziția utilizatorilor în mod gratuit.
            <br />
            <br />
            Prin termenul „utilizator” al acestei pagini se întelege orice
            persoană fizică sau juridică care va accesa pagina. Puteți copia și
            tipări conținutul paginii Ascend Aqua pentru folosința dumneavoastră
            personală, fără intenții comerciale. În orice alte situații,
            conținutul site-ului nu poate fi reprodus, modificat sau exploatat
            fără consimtamântul explicit al reprezentanților Ascend Aqua.
          </div>
        </div>
      </div>
    </div>
  );
}
