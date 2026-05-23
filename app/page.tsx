export default function Home() {
  return (
    <main className="hero-page">
      <section style={{ maxWidth: 1460, margin: "0 auto", padding: "28px 64px 28px" }}>
        <header style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 44 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
            <div style={{ width: 40, height: 40, position: "relative", color: "#B08957" }}>
              <span style={{ position: "absolute", left: 0, top: 0, width: 13, height: 13, borderLeft: "3px solid currentColor", borderTop: "3px solid currentColor" }} />
              <span style={{ position: "absolute", left: 0, bottom: 0, width: 13, height: 13, borderLeft: "3px solid currentColor", borderBottom: "3px solid currentColor" }} />
              <span style={{ position: "absolute", right: 0, top: 0, width: 13, height: 13, borderTop: "3px solid currentColor" }} />
              <span style={{ position: "absolute", right: 0, top: 0, height: 40, borderRight: "3px solid currentColor" }} />
              <span style={{ position: "absolute", right: 0, bottom: 0, width: 13, height: 13, borderBottom: "3px solid currentColor" }} />
              <span style={{ position: "absolute", left: "50%", top: "50%", width: 7, height: 7, borderRadius: 99, background: "currentColor", transform: "translate(-50%,-50%)" }} />
            </div>

            <div>
              <div style={{ fontSize: 21, fontWeight: 700, letterSpacing: "0.34em", lineHeight: 1 }}>
                CREATOR HOUSE
              </div>
              <div style={{ fontSize: 15, color: "#B08957", marginTop: 8 }}>
                professional creator profile
              </div>
            </div>
          </div>

          <div style={{ display: "flex", gap: 22, alignItems: "center" }}>
            <button style={{ border: "none", background: "transparent", fontSize: 18, fontWeight: 600 }}>Войти</button>
            <button style={{ border: "none", background: "#1f1f1f", color: "white", borderRadius: 999, padding: "15px 30px", fontSize: 17, fontWeight: 600 }}>
              Создать профиль
            </button>
          </div>
        </header>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 610px", gap: 70, alignItems: "center" }}>
          <div>
            <div style={{ display: "inline-flex", padding: "12px 23px", borderRadius: 999, border: "1px solid rgba(176,137,87,.2)", background: "rgba(255,255,255,.48)", marginBottom: 34 }}>
              <span style={{ color: "#B08957", fontSize: 16, fontWeight: 500, letterSpacing: ".04em" }}>
                Новый формат профессионального профиля
              </span>
            </div>

            <h1 className="display" style={{ fontSize: 76, lineHeight: 1.03, margin: "0 0 26px", maxWidth: 760 }}>
              Выгляди как<br />блогер, которого<br />выбирают бренды
            </h1>

            <p style={{ fontSize: 21, lineHeight: 1.55, color: "#5f5b55", maxWidth: 690, margin: "0 0 34px" }}>
              Один красивый Creator House вместо PDF,<br />
              бесконечных сообщений и устаревших медиакитов.
            </p>

            <div style={{ display: "flex", gap: 20, marginBottom: 48 }}>
              <button style={{ border: "none", background: "#1f1f1f", color: "white", borderRadius: 999, padding: "16px 30px", fontSize: 17, fontWeight: 650 }}>
                Создать Creator House
              </button>
              <button style={{ border: "1px solid rgba(31,31,31,.2)", background: "rgba(255,255,255,.44)", borderRadius: 999, padding: "15px 30px", fontSize: 17, fontWeight: 600 }}>
                Посмотреть пример
              </button>
            </div>

            <div style={{ display: "flex", gap: 42 }}>
              {["Проверено аналитикой", "Актуальная статистика", "Закрыто от посторонних"].map((text) => (
                <div key={text} style={{ display: "flex", gap: 12, alignItems: "center" }}>
                  <span style={{ width: 22, height: 22, border: "2px solid #B08957", borderRadius: 8 }} />
                  <span style={{ fontSize: 15, lineHeight: 1.25, color: "#3e3b37", maxWidth: 145 }}>{text}</span>
                </div>
              ))}
            </div>
          </div>

          <div style={{ position: "relative", height: 650 }}>
            <div style={{ position: "absolute", right: -34, bottom: 24, width: 430, height: 570, borderRadius: 38, background: "#1f1f1f", transform: "rotate(8deg)", boxShadow: "0 28px 70px rgba(31,31,31,.18)" }} />
            <div style={{ position: "absolute", left: 30, bottom: 66, width: 430, height: 560, borderRadius: 38, background: "linear-gradient(180deg,#fff2ee,#ead0c6)", transform: "rotate(-8deg)", boxShadow: "0 24px 60px rgba(159,105,88,.13)" }} />
            <div style={{ position: "absolute", right: 58, bottom: 36, width: 455, height: 585, borderRadius: 38, background: "rgba(255,255,255,.86)", transform: "rotate(-2deg)", boxShadow: "0 24px 64px rgba(31,31,31,.08)" }} />

            <div style={{ position: "absolute", right: 28, top: 0, width: 500, borderRadius: 40, background: "rgba(255,255,255,.94)", boxShadow: "0 32px 88px rgba(31,31,31,.12)", padding: 28 }}>
              <div style={{ color: "#B08957", fontSize: 16, fontWeight: 700, letterSpacing: ".16em", marginBottom: 20 }}>
                ТАК БРЕНД УВИДИТ ТЕБЯ
              </div>

              <div style={{ height: 270, borderRadius: 30, overflow: "hidden", position: "relative", marginBottom: 20, background: "linear-gradient(180deg,#e9c48d 0%,#b47a31 48%,#25170d 100%)" }}>
                <div style={{ position: "absolute", inset: 0, background: "radial-gradient(circle at 72% 22%, rgba(255,255,255,.46), transparent 24%), linear-gradient(180deg, transparent 42%, rgba(0,0,0,.72))" }} />
                <div style={{ position: "absolute", left: 28, bottom: 28, color: "white" }}>
                  <div className="display" style={{ fontSize: 50, lineHeight: 1, marginBottom: 10 }}>Alexandra</div>
                  <div style={{ fontSize: 18, opacity: .9 }}>Lifestyle блогер • Instagram • TikTok</div>
                </div>
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14, marginBottom: 14 }}>
                {[
                  ["128K", "аудитория"],
                  ["6.8%", "вовлечённость"],
                ].map(([value, label]) => (
                  <div key={value} style={{ background: "#f6f1e8", borderRadius: 22, padding: "20px 22px" }}>
                    <div className="display" style={{ fontSize: 36, lineHeight: 1, marginBottom: 8 }}>{value}</div>
                    <div style={{ fontSize: 16, color: "#625e58" }}>{label}</div>
                  </div>
                ))}
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14, marginBottom: 16 }}>
                <div style={{ background: "rgba(246,241,232,.76)", borderRadius: 20, padding: "18px 20px" }}>
                  <div style={{ display: "flex", gap: 9, alignItems: "center", color: "#B08957", fontSize: 15, marginBottom: 7 }}>
                    <span style={{ width: 10, height: 10, borderRadius: 99, background: "#73bf78", boxShadow: "0 0 0 8px rgba(115,191,120,.16)" }} />
                    Проверено
                  </div>
                  <strong style={{ fontSize: 17 }}>аналитикой</strong>
                </div>
                <div style={{ background: "rgba(246,241,232,.76)", borderRadius: 20, padding: "18px 20px" }}>
                  <div style={{ color: "#B08957", fontSize: 15, marginBottom: 7 }}>Кейс</div>
                  <strong style={{ fontSize: 17 }}>248K просмотров</strong>
                </div>
              </div>

              <div style={{ background: "#1f1f1f", borderRadius: 25, padding: 20, display: "flex", alignItems: "center", justifyContent: "space-between", gap: 14 }}>
                <div>
                  <div style={{ color: "#d8b885", fontSize: 15, lineHeight: 1.25, marginBottom: 8 }}>Рекламное<br />предложение</div>
                  <div className="display" style={{ color: "white", fontSize: 32, lineHeight: 1 }}>от $950</div>
                </div>
                <button style={{ border: "none", background: "white", color: "#1f1f1f", borderRadius: 999, padding: "16px 24px", fontSize: 16, fontWeight: 650, lineHeight: 1.15, minWidth: 168 }}>
                  Предложить<br />сотрудничество
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
