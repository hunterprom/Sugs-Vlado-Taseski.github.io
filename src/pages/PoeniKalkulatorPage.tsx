import { useState } from "react";
import { Link } from "react-router-dom";
import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";
import { useLanguage } from "@/i18n/LanguageContext";
import "./StaticHomePage.css";

const grades = ["6", "7", "8", "9"];

const PoeniKalkulatorPage = () => {
  const { t } = useLanguage();
  const [uspeh, setUspeh] = useState(["", "", "", ""]);
  const [makedonski, setMakedonski] = useState(["", "", "", ""]);
  const [angliski, setAngliski] = useState(["", "", "", ""]);
  const [matematika, setMatematika] = useState(["", "", "", ""]);
  const [fizika, setFizika] = useState(["", ""]);
  const [povedenie, setPovedenie] = useState(["5", "5", "5", "5"]);
  const [diplomi, setDiplomi] = useState("");
  const [result, setResult] = useState<number | null>(null);

  const updateArr = (setter: React.Dispatch<React.SetStateAction<string[]>>, idx: number, val: string) => {
    setter(prev => { const n = [...prev]; n[idx] = val; return n; });
  };

  const calculate = () => {
    const uspehSum = uspeh.reduce((s, v) => s + (parseFloat(v) || 0), 0);
    const makSum = makedonski.reduce((s, v) => s + (parseInt(v) || 0), 0);
    const angSum = angliski.reduce((s, v) => s + (parseInt(v) || 0), 0);
    const matSum = matematika.reduce((s, v) => s + (parseInt(v) || 0), 0);
    const fizSum = fizika.reduce((s, v) => s + (parseInt(v) || 0), 0);
    const povSum = povedenie.reduce((s, v) => s + (parseInt(v) || 0), 0);
    const dipVal = parseInt(diplomi) || 0;
    const total = (uspehSum * 5) + makSum + angSum + matSum + fizSum + povSum + dipVal;
    setResult(Math.round(total * 100) / 100);
  };

  const inputStyle: React.CSSProperties = {
    width: "70px", padding: "8px", borderRadius: "8px", border: "1px solid #BBDEFB",
    textAlign: "center", fontSize: "0.9rem", color: "#2E6899",
  };

  const labelStyle: React.CSSProperties = {
    fontWeight: 600, color: "#2E6899", fontSize: "0.9rem", minWidth: "200px",
  };

  return (
    <>
      <SiteHeader />
      <main>
        <section className="struka-hero">
          <div className="container struka-header">
            <div className="struka-icon"><i className="fas fa-calculator"></i></div>
            <h1>{t("kalkulator.title")}</h1>
            <p>{t("kalkulator.subtitle")}</p>
          </div>
        </section>

        <section style={{ padding: "50px 0" }}>
          <div className="container" style={{ maxWidth: "900px" }}>
            <div style={{ background: "white", borderRadius: "20px", padding: "30px", boxShadow: "0 4px 20px rgba(0,0,0,0.06)" }}>
              <div style={{ display: "grid", gridTemplateColumns: "200px repeat(4, 1fr)", gap: "10px", marginBottom: "15px", textAlign: "center" }}>
                <div style={labelStyle}>{t("kalkulator.subject")}</div>
                {grades.map((g, i) => (
                  <div key={i} style={{ fontWeight: 700, color: "#4B8BBE", fontSize: "0.85rem" }}>{g} {t("kalkulator.grade")}</div>
                ))}
              </div>

              {/* GPA */}
              <div style={{ display: "grid", gridTemplateColumns: "200px repeat(4, 1fr)", gap: "10px", marginBottom: "12px", alignItems: "center" }}>
                <div style={labelStyle}>{t("kalkulator.gpa")}</div>
                {grades.map((_, i) => (
                  <div key={i} style={{ textAlign: "center" }}>
                    <input type="number" step="0.01" min="1" max="5" value={uspeh[i]} onChange={e => updateArr(setUspeh, i, e.target.value)} style={inputStyle} placeholder="5.00" />
                  </div>
                ))}
              </div>

              {/* Macedonian */}
              <div style={{ display: "grid", gridTemplateColumns: "200px repeat(4, 1fr)", gap: "10px", marginBottom: "12px", alignItems: "center" }}>
                <div style={labelStyle}>{t("kalkulator.macedonian")}</div>
                {grades.map((_, i) => (
                  <div key={i} style={{ textAlign: "center" }}>
                    <input type="number" min="1" max="5" value={makedonski[i]} onChange={e => updateArr(setMakedonski, i, e.target.value)} style={inputStyle} placeholder="5" />
                  </div>
                ))}
              </div>

              {/* English */}
              <div style={{ display: "grid", gridTemplateColumns: "200px repeat(4, 1fr)", gap: "10px", marginBottom: "12px", alignItems: "center" }}>
                <div style={labelStyle}>{t("kalkulator.english")}</div>
                {grades.map((_, i) => (
                  <div key={i} style={{ textAlign: "center" }}>
                    <input type="number" min="1" max="5" value={angliski[i]} onChange={e => updateArr(setAngliski, i, e.target.value)} style={inputStyle} placeholder="5" />
                  </div>
                ))}
              </div>

              {/* Math */}
              <div style={{ display: "grid", gridTemplateColumns: "200px repeat(4, 1fr)", gap: "10px", marginBottom: "12px", alignItems: "center" }}>
                <div style={labelStyle}>{t("kalkulator.math")}</div>
                {grades.map((_, i) => (
                  <div key={i} style={{ textAlign: "center" }}>
                    <input type="number" min="1" max="5" value={matematika[i]} onChange={e => updateArr(setMatematika, i, e.target.value)} style={inputStyle} placeholder="5" />
                  </div>
                ))}
              </div>

              {/* Physics - only 8th and 9th */}
              <div style={{ display: "grid", gridTemplateColumns: "200px repeat(4, 1fr)", gap: "10px", marginBottom: "12px", alignItems: "center" }}>
                <div style={labelStyle}>{t("kalkulator.physics")}</div>
                <div style={{ textAlign: "center", color: "#9FBDD6" }}>---</div>
                <div style={{ textAlign: "center", color: "#9FBDD6" }}>---</div>
                <div style={{ textAlign: "center" }}>
                  <input type="number" min="1" max="5" value={fizika[0]} onChange={e => updateArr(setFizika, 0, e.target.value)} style={inputStyle} placeholder="5" />
                </div>
                <div style={{ textAlign: "center" }}>
                  <input type="number" min="1" max="5" value={fizika[1]} onChange={e => updateArr(setFizika, 1, e.target.value)} style={inputStyle} placeholder="5" />
                </div>
              </div>

              {/* Behavior */}
              <div style={{ display: "grid", gridTemplateColumns: "200px repeat(4, 1fr)", gap: "10px", marginBottom: "12px", alignItems: "center" }}>
                <div style={labelStyle}>{t("kalkulator.behavior")}</div>
                {grades.map((_, i) => (
                  <div key={i} style={{ textAlign: "center" }}>
                    <select value={povedenie[i]} onChange={e => updateArr(setPovedenie, i, e.target.value)} style={{ ...inputStyle, width: "80px", fontSize: "0.8rem", padding: "6px 4px" }}>
                      <option value="5">{t("kalkulator.exemplary")}</option>
                      <option value="3">{t("kalkulator.good")}</option>
                      <option value="1">{t("kalkulator.unsatisfactory")}</option>
                    </select>
                  </div>
                ))}
              </div>

              {/* Diplomas */}
              <div style={{ display: "grid", gridTemplateColumns: "200px 1fr", gap: "10px", marginBottom: "20px", alignItems: "center" }}>
                <div style={labelStyle}>{t("kalkulator.diplomas")}</div>
                <div>
                  <input type="number" min="0" value={diplomi} onChange={e => setDiplomi(e.target.value)} style={{ ...inputStyle, width: "100px" }} placeholder="0" />
                </div>
              </div>

              <div style={{ textAlign: "center" }}>
                <button onClick={calculate} className="btn-primary" style={{ fontSize: "1rem", padding: "14px 40px", cursor: "pointer", border: "none" }}>
                  <i className="fas fa-calculator"></i> {t("kalkulator.calculate")}
                </button>
              </div>

              {result !== null && (
                <div style={{ marginTop: "30px", textAlign: "center", background: "linear-gradient(135deg, #1E4D7A, #4B8BBE)", borderRadius: "16px", padding: "30px", color: "white" }}>
                  <p style={{ fontSize: "1rem", opacity: 0.8, marginBottom: "8px" }}>{t("kalkulator.total")}</p>
                  <h2 style={{ fontSize: "3rem", fontWeight: 800, color: "#FBC02D" }}>{result}</h2>
                </div>
              )}
            </div>

            <p style={{ textAlign: "center", marginTop: "20px", color: "#9FBDD6", fontSize: "0.8rem" }}>
              {t("kalkulator.credits")}
            </p>
          </div>
        </section>

        <section className="back-section">
          <div className="container">
            <Link to="/upisi" className="back-button">
              <i className="fas fa-arrow-left"></i> {t("kalkulator.back")}
            </Link>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
};

export default PoeniKalkulatorPage;
