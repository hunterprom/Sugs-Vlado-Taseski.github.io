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

    const avg = uspeh.map(v => parseFloat(v));
    const mak = makedonski.map(v => parseInt(v));
    const ang = angliski.map(v => parseInt(v));
    const mat = matematika.map(v => parseInt(v));
    const fiz = fizika.map(v => parseInt(v));
    const pov = povedenie.map(v => parseInt(v));
    const dip = parseInt(diplomi);

    for (let i = 0; i < 4; i++) {
      if (isNaN(avg[i]) || avg[i] < 2 || avg[i] > 5) {
        setError(`${t("kalkulator.errorGpa")} ${grades[i]} ${t("kalkulator.grade")}`);
        return;
      }
    }
    for (let i = 0; i < 4; i++) {
      if (isNaN(mak[i]) || mak[i] < 2 || mak[i] > 5) {
        setError(`${t("kalkulator.errorMacedonian")} ${grades[i]} ${t("kalkulator.grade")}`);
        return;
      }
    }
    for (let i = 0; i < 4; i++) {
      if (isNaN(ang[i]) || ang[i] < 2 || ang[i] > 5) {
        setError(`${t("kalkulator.errorEnglish")} ${grades[i]} ${t("kalkulator.grade")}`);
        return;
      }
    }
    for (let i = 0; i < 4; i++) {
      if (isNaN(mat[i]) || mat[i] < 2 || mat[i] > 5) {
        setError(`${t("kalkulator.errorMath")} ${grades[i]} ${t("kalkulator.grade")}`);
        return;
      }
    }
    for (let i = 0; i < 2; i++) {
      if (isNaN(fiz[i]) || fiz[i] < 2 || fiz[i] > 5) {
        setError(`${t("kalkulator.errorPhysics")} ${i === 0 ? "8" : "9"} ${t("kalkulator.grade")}`);
        return;
      }
    }
    for (let i = 0; i < 4; i++) {
      if (isNaN(pov[i]) || pov[i] === 0) {
        setError(`${t("kalkulator.errorBehavior")} ${grades[i]} ${t("kalkulator.grade")}`);
        return;
      }
    }
    if (isNaN(dip) || (dip !== 0 && dip !== 1 && dip !== 3 && dip !== 5)) {
      setError(t("kalkulator.errorDiplomas"));
      return;
    }

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

  /* ── Shared row for desktop grid ── */
  const DesktopRow = ({ label, values, setter, calcValue, type = "number", options, placeholder = "5" }: {
    label: string;
    values: string[];
    setter: (idx: number, val: string) => void;
    calcValue: string;
    type?: "number" | "select";
    options?: { value: string; label: string }[];
    placeholder?: string;
  }) => (
    <div className="calc-row">
      <div className="calc-label">{label}</div>
      {values.map((v, i) => (
        <div key={i} className="calc-input-cell">
          {type === "select" ? (
            <select value={v} onChange={e => setter(i, e.target.value)} className="calc-select">
              {options?.map(o => <option key={o.value} value={o.value}>{o.label}</option>)}
            </select>
          ) : (
            <input type="number" step={placeholder === "5.00" ? "0.01" : "1"} min="2" max="5" value={v} onChange={e => setter(i, e.target.value)} className="calc-input" placeholder={placeholder} />
          )}
        </div>
      ))}
      <div className="calc-result-cell">{calcValue}</div>
    </div>
  );

  /* ── Mobile card for each subject ── */
  const MobileCard = ({ label, values, setter, calcValue, gradeLabels, type = "number", options, placeholder = "5" }: {
    label: string;
    values: string[];
    setter: (idx: number, val: string) => void;
    calcValue: string;
    gradeLabels: string[];
    type?: "number" | "select";
    options?: { value: string; label: string }[];
    placeholder?: string;
  }) => (
    <div className="calc-mobile-card">
      <div className="calc-mobile-card-header">{label}</div>
      <div className="calc-mobile-card-inputs">
        {values.map((v, i) => (
          <div key={i} className="calc-mobile-field">
            <span className="calc-mobile-grade">{gradeLabels[i]}</span>
            {type === "select" ? (
              <select value={v} onChange={e => setter(i, e.target.value)} className="calc-select">
                {options?.map(o => <option key={o.value} value={o.value}>{o.label}</option>)}
              </select>
            ) : (
              <input type="number" step={placeholder === "5.00" ? "0.01" : "1"} min="2" max="5" value={v} onChange={e => setter(i, e.target.value)} className="calc-input" placeholder={placeholder} />
            )}
          </div>
        ))}
      </div>
      {calcValue && <div className="calc-mobile-result">= {calcValue}</div>}
    </div>
  );

  const behaviorOptions = [
    { value: "", label: t("kalkulator.choose") },
    { value: "5", label: t("kalkulator.exemplary") },
    { value: "3", label: t("kalkulator.good") },
    { value: "1", label: t("kalkulator.unsatisfactory") },
  ];

  const diplomaOptions = [
    { value: "", label: t("kalkulator.choose") },
    { value: "0", label: "0" },
    { value: "1", label: "1" },
    { value: "3", label: "3" },
    { value: "5", label: "5" },
  ];

  const subjects = [
    { label: t("kalkulator.gpa"), values: uspeh, setter: (i: number, v: string) => updateArr(setUspeh, i, v), calc: calculations.uspeh || "", grades: grades.map(g => `${g} ${t("kalkulator.grade")}`), placeholder: "5.00" },
    { label: t("kalkulator.macedonian"), values: makedonski, setter: (i: number, v: string) => updateArr(setMakedonski, i, v), calc: calculations.makedonski || "", grades: grades.map(g => `${g} ${t("kalkulator.grade")}`) },
    { label: t("kalkulator.english"), values: angliski, setter: (i: number, v: string) => updateArr(setAngliski, i, v), calc: calculations.angliski || "", grades: grades.map(g => `${g} ${t("kalkulator.grade")}`) },
    { label: t("kalkulator.math"), values: matematika, setter: (i: number, v: string) => updateArr(setMatematika, i, v), calc: calculations.matematika || "", grades: grades.map(g => `${g} ${t("kalkulator.grade")}`) },
  ];

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
            <div className="calc-container">

              {/* ══ DESKTOP VIEW ══ */}
              <div className="calc-desktop">
                {/* Header */}
                <div className="calc-row calc-header-row">
                  <div className="calc-label">{t("kalkulator.subject")}</div>
                  {grades.map((g, i) => (
                    <div key={i} className="calc-col-header">{g} {t("kalkulator.grade")}</div>
                  ))}
                  <div className="calc-col-header">{t("kalkulator.calc")}</div>
                </div>

                {subjects.map((s, i) => (
                  <DesktopRow key={i} label={s.label} values={s.values} setter={s.setter} calcValue={s.calc} placeholder={s.placeholder || "5"} />
                ))}

                {/* Physics - only 8th and 9th */}
                <div className="calc-row">
                  <div className="calc-label">{t("kalkulator.physics")}</div>
                  <div className="calc-input-cell"><span style={{ color: "#9FBDD6" }}>---</span></div>
                  <div className="calc-input-cell"><span style={{ color: "#9FBDD6" }}>---</span></div>
                  <div className="calc-input-cell">
                    <input type="number" min="2" max="5" value={fizika[0]} onChange={e => updateArr(setFizika, 0, e.target.value)} className="calc-input" placeholder="5" />
                  </div>
                  <div className="calc-input-cell">
                    <input type="number" min="2" max="5" value={fizika[1]} onChange={e => updateArr(setFizika, 1, e.target.value)} className="calc-input" placeholder="5" />
                  </div>
                  <div className="calc-result-cell">{calculations.fizika || ""}</div>
                </div>

                {/* Behavior */}
                <DesktopRow
                  label={t("kalkulator.behavior")}
                  values={povedenie}
                  setter={(i, v) => updateArr(setPovedenie, i, v)}
                  calcValue={calculations.povedenie || ""}
                  type="select"
                  options={behaviorOptions}
                />

                {/* Diplomas */}
                <div className="calc-row">
                  <div className="calc-label">{t("kalkulator.diplomas")}</div>
                  <div style={{ gridColumn: "span 4" }}>
                    <select value={diplomi} onChange={e => setDiplomi(e.target.value)} className="calc-select" style={{ width: "120px" }}>
                      {diplomaOptions.map(o => <option key={o.value} value={o.value}>{o.label}</option>)}
                    </select>
                  </div>
                  <div className="calc-result-cell">{calculations.diplomi || ""}</div>
                </div>
              </div>

              {/* ══ MOBILE VIEW ══ */}
              <div className="calc-mobile">
                {subjects.map((s, i) => (
                  <MobileCard key={i} label={s.label} values={s.values} setter={s.setter} calcValue={s.calc} gradeLabels={s.grades} placeholder={s.placeholder || "5"} />
                ))}

                <MobileCard
                  label={t("kalkulator.physics")}
                  values={fizika}
                  setter={(i, v) => updateArr(setFizika, i, v)}
                  calcValue={calculations.fizika || ""}
                  gradeLabels={[`8 ${t("kalkulator.grade")}`, `9 ${t("kalkulator.grade")}`]}
                />

                <MobileCard
                  label={t("kalkulator.behavior")}
                  values={povedenie}
                  setter={(i, v) => updateArr(setPovedenie, i, v)}
                  calcValue={calculations.povedenie || ""}
                  gradeLabels={grades.map(g => `${g} ${t("kalkulator.grade")}`)}
                  type="select"
                  options={behaviorOptions}
                />

                <div className="calc-mobile-card">
                  <div className="calc-mobile-card-header">{t("kalkulator.diplomas")}</div>
                  <div className="calc-mobile-card-inputs">
                    <div className="calc-mobile-field" style={{ flex: 1 }}>
                      <select value={diplomi} onChange={e => setDiplomi(e.target.value)} className="calc-select" style={{ width: "100%" }}>
                        {diplomaOptions.map(o => <option key={o.value} value={o.value}>{o.label}</option>)}
                      </select>
                    </div>
                  </div>
                  {calculations.diplomi && <div className="calc-mobile-result">= {calculations.diplomi}</div>}
                </div>
              </div>

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
