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
  const [povedenie, setPovedenie] = useState(["", "", "", ""]);
  const [diplomi, setDiplomi] = useState("");
  const [result, setResult] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [calculations, setCalculations] = useState<Record<string, string>>({});

  const updateArr = (setter: React.Dispatch<React.SetStateAction<string[]>>, idx: number, val: string) => {
    setter(prev => { const n = [...prev]; n[idx] = val; return n; });
  };

  const calculate = () => {
    setError(null);
    setCalculations({});

    // Parse values
    const avg = uspeh.map(v => parseFloat(v));
    const mak = makedonski.map(v => parseInt(v));
    const ang = angliski.map(v => parseInt(v));
    const mat = matematika.map(v => parseInt(v));
    const fiz = fizika.map(v => parseInt(v));
    const pov = povedenie.map(v => parseInt(v));
    const dip = parseInt(diplomi);

    // Validate GPA (2-5)
    for (let i = 0; i < 4; i++) {
      if (isNaN(avg[i]) || avg[i] < 2 || avg[i] > 5) {
        setError(`${t("kalkulator.errorGpa")} ${grades[i]} ${t("kalkulator.grade")}`);
        return;
      }
    }

    // Validate Macedonian (2-5)
    for (let i = 0; i < 4; i++) {
      if (isNaN(mak[i]) || mak[i] < 2 || mak[i] > 5) {
        setError(`${t("kalkulator.errorMacedonian")} ${grades[i]} ${t("kalkulator.grade")}`);
        return;
      }
    }

    // Validate English (2-5)
    for (let i = 0; i < 4; i++) {
      if (isNaN(ang[i]) || ang[i] < 2 || ang[i] > 5) {
        setError(`${t("kalkulator.errorEnglish")} ${grades[i]} ${t("kalkulator.grade")}`);
        return;
      }
    }

    // Validate Math (2-5)
    for (let i = 0; i < 4; i++) {
      if (isNaN(mat[i]) || mat[i] < 2 || mat[i] > 5) {
        setError(`${t("kalkulator.errorMath")} ${grades[i]} ${t("kalkulator.grade")}`);
        return;
      }
    }

    // Validate Physics (2-5)
    for (let i = 0; i < 2; i++) {
      if (isNaN(fiz[i]) || fiz[i] < 2 || fiz[i] > 5) {
        setError(`${t("kalkulator.errorPhysics")} ${i === 0 ? "8" : "9"} ${t("kalkulator.grade")}`);
        return;
      }
    }

    // Validate Behavior
    for (let i = 0; i < 4; i++) {
      if (isNaN(pov[i]) || pov[i] === 0) {
        setError(`${t("kalkulator.errorBehavior")} ${grades[i]} ${t("kalkulator.grade")}`);
        return;
      }
    }

    // Validate Diplomas (0, 1, 3, or 5)
    if (isNaN(dip) || (dip !== 0 && dip !== 1 && dip !== 3 && dip !== 5)) {
      setError(t("kalkulator.errorDiplomas"));
      return;
    }

    // Calculate averages
    const averageSuccess = ((avg[0] + avg[1] + avg[2] + avg[3]) / 4) * 10;
    const averageMacedonian = (mak[0] + mak[1] + mak[2] + mak[3]) / 4;
    const averageEnglish = (ang[0] + ang[1] + ang[2] + ang[3]) / 4;
    const averageMath = (mat[0] + mat[1] + mat[2] + mat[3]) / 4;
    const averagePhysics = (fiz[0] + fiz[1]) / 2;
    const averageBehavior = (pov[0] + pov[1] + pov[2] + pov[3]) / 4;

    const totalPoints = averageSuccess + averageMacedonian + averageEnglish + averageMath + averagePhysics + averageBehavior + dip;

    setCalculations({
      uspeh: averageSuccess.toFixed(2).replace(".", ","),
      makedonski: averageMacedonian.toFixed(2).replace(".", ","),
      angliski: averageEnglish.toFixed(2).replace(".", ","),
      matematika: averageMath.toFixed(2).replace(".", ","),
      fizika: averagePhysics.toFixed(2).replace(".", ","),
      povedenie: averageBehavior.toFixed(2).replace(".", ","),
      diplomi: dip.toFixed(2).replace(".", ","),
    });

    setResult(Math.round(totalPoints * 100) / 100);
  };

  const inputStyle: React.CSSProperties = {
    width: "70px", padding: "8px", borderRadius: "8px", border: "1px solid #BBDEFB",
    textAlign: "center", fontSize: "0.9rem", color: "#2E6899",
  };

  const labelStyle: React.CSSProperties = {
    fontWeight: 600, color: "#2E6899", fontSize: "0.9rem", minWidth: "200px",
  };

  const calcStyle: React.CSSProperties = {
    fontWeight: 700, color: "#4B8BBE", fontSize: "0.9rem", textAlign: "center",
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
          <div className="container" style={{ maxWidth: "950px" }}>
            <div style={{ background: "white", borderRadius: "20px", padding: "30px", boxShadow: "0 4px 20px rgba(0,0,0,0.06)" }}>
              {/* Header row */}
              <div style={{ display: "grid", gridTemplateColumns: "200px repeat(4, 1fr) 90px", gap: "10px", marginBottom: "15px", textAlign: "center" }}>
                <div style={labelStyle}>{t("kalkulator.subject")}</div>
                {grades.map((g, i) => (
                  <div key={i} style={{ fontWeight: 700, color: "#4B8BBE", fontSize: "0.85rem" }}>{g} {t("kalkulator.grade")}</div>
                ))}
                <div style={{ fontWeight: 700, color: "#4B8BBE", fontSize: "0.85rem" }}>{t("kalkulator.calc")}</div>
              </div>

              {/* GPA */}
              <div style={{ display: "grid", gridTemplateColumns: "200px repeat(4, 1fr) 90px", gap: "10px", marginBottom: "12px", alignItems: "center" }}>
                <div style={labelStyle}>{t("kalkulator.gpa")}</div>
                {grades.map((_, i) => (
                  <div key={i} style={{ textAlign: "center" }}>
                    <input type="number" step="0.01" min="2" max="5" value={uspeh[i]} onChange={e => updateArr(setUspeh, i, e.target.value)} style={inputStyle} placeholder="5.00" />
                  </div>
                ))}
                <div style={calcStyle}>{calculations.uspeh || ""}</div>
              </div>

              {/* Macedonian */}
              <div style={{ display: "grid", gridTemplateColumns: "200px repeat(4, 1fr) 90px", gap: "10px", marginBottom: "12px", alignItems: "center" }}>
                <div style={labelStyle}>{t("kalkulator.macedonian")}</div>
                {grades.map((_, i) => (
                  <div key={i} style={{ textAlign: "center" }}>
                    <input type="number" min="2" max="5" value={makedonski[i]} onChange={e => updateArr(setMakedonski, i, e.target.value)} style={inputStyle} placeholder="5" />
                  </div>
                ))}
                <div style={calcStyle}>{calculations.makedonski || ""}</div>
              </div>

              {/* English */}
              <div style={{ display: "grid", gridTemplateColumns: "200px repeat(4, 1fr) 90px", gap: "10px", marginBottom: "12px", alignItems: "center" }}>
                <div style={labelStyle}>{t("kalkulator.english")}</div>
                {grades.map((_, i) => (
                  <div key={i} style={{ textAlign: "center" }}>
                    <input type="number" min="2" max="5" value={angliski[i]} onChange={e => updateArr(setAngliski, i, e.target.value)} style={inputStyle} placeholder="5" />
                  </div>
                ))}
                <div style={calcStyle}>{calculations.angliski || ""}</div>
              </div>

              {/* Math */}
              <div style={{ display: "grid", gridTemplateColumns: "200px repeat(4, 1fr) 90px", gap: "10px", marginBottom: "12px", alignItems: "center" }}>
                <div style={labelStyle}>{t("kalkulator.math")}</div>
                {grades.map((_, i) => (
                  <div key={i} style={{ textAlign: "center" }}>
                    <input type="number" min="2" max="5" value={matematika[i]} onChange={e => updateArr(setMatematika, i, e.target.value)} style={inputStyle} placeholder="5" />
                  </div>
                ))}
                <div style={calcStyle}>{calculations.matematika || ""}</div>
              </div>

              {/* Physics - only 8th and 9th */}
              <div style={{ display: "grid", gridTemplateColumns: "200px repeat(4, 1fr) 90px", gap: "10px", marginBottom: "12px", alignItems: "center" }}>
                <div style={labelStyle}>{t("kalkulator.physics")}</div>
                <div style={{ textAlign: "center", color: "#9FBDD6" }}>---</div>
                <div style={{ textAlign: "center", color: "#9FBDD6" }}>---</div>
                <div style={{ textAlign: "center" }}>
                  <input type="number" min="2" max="5" value={fizika[0]} onChange={e => updateArr(setFizika, 0, e.target.value)} style={inputStyle} placeholder="5" />
                </div>
                <div style={{ textAlign: "center" }}>
                  <input type="number" min="2" max="5" value={fizika[1]} onChange={e => updateArr(setFizika, 1, e.target.value)} style={inputStyle} placeholder="5" />
                </div>
                <div style={calcStyle}>{calculations.fizika || ""}</div>
              </div>

              {/* Behavior */}
              <div style={{ display: "grid", gridTemplateColumns: "200px repeat(4, 1fr) 90px", gap: "10px", marginBottom: "12px", alignItems: "center" }}>
                <div style={labelStyle}>{t("kalkulator.behavior")}</div>
                {grades.map((_, i) => (
                  <div key={i} style={{ textAlign: "center" }}>
                    <select value={povedenie[i]} onChange={e => updateArr(setPovedenie, i, e.target.value)} style={{ ...inputStyle, width: "80px", fontSize: "0.8rem", padding: "6px 4px" }}>
                      <option value="">{t("kalkulator.choose")}</option>
                      <option value="5">{t("kalkulator.exemplary")}</option>
                      <option value="3">{t("kalkulator.good")}</option>
                      <option value="1">{t("kalkulator.unsatisfactory")}</option>
                    </select>
                  </div>
                ))}
                <div style={calcStyle}>{calculations.povedenie || ""}</div>
              </div>

              {/* Diplomas */}
              <div style={{ display: "grid", gridTemplateColumns: "200px 1fr 90px", gap: "10px", marginBottom: "20px", alignItems: "center" }}>
                <div style={labelStyle}>{t("kalkulator.diplomas")}</div>
                <div>
                  <select value={diplomi} onChange={e => setDiplomi(e.target.value)} style={{ ...inputStyle, width: "120px", fontSize: "0.85rem" }}>
                    <option value="">{t("kalkulator.choose")}</option>
                    <option value="0">0</option>
                    <option value="1">1</option>
                    <option value="3">3</option>
                    <option value="5">5</option>
                  </select>
                </div>
                <div style={calcStyle}>{calculations.diplomi || ""}</div>
              </div>

              {/* Error message */}
              {error && (
                <div style={{ textAlign: "center", color: "#e53935", fontWeight: 600, marginBottom: "15px", padding: "10px", background: "#ffebee", borderRadius: "10px" }}>
                  {error}
                </div>
              )}

              <div style={{ textAlign: "center" }}>
                <button onClick={calculate} className="btn-primary" style={{ fontSize: "1rem", padding: "14px 40px", cursor: "pointer", border: "none" }}>
                  <i className="fas fa-calculator"></i> {t("kalkulator.calculate")}
                </button>
              </div>

              {result !== null && (
                <div style={{ marginTop: "30px", textAlign: "center", background: "linear-gradient(135deg, #1E4D7A, #4B8BBE)", borderRadius: "16px", padding: "30px", color: "white" }}>
                  <p style={{ fontSize: "1rem", opacity: 0.8, marginBottom: "8px" }}>{t("kalkulator.total")}</p>
                  <h2 style={{ fontSize: "3rem", fontWeight: 800, color: "#FBC02D" }}>{result.toFixed(2).replace(".", ",")}</h2>
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
