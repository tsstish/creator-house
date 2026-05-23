export default function Home() {
  return (
    <main className="hero-page">
      <section
        style={{
          maxWidth: 1460,
          margin: "0 auto",
          padding: "26px 64px 24px",
        }}
      >
        <header
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: 34,
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
            <div style={{ width: 38, height: 38, position: "relative", color: "#6F5A3A" }}>
              <span style={{ position: "absolute", left: 0, top: 0, width: 12, height: 12, borderLeft: "3px solid currentColor", borderTop: "3px solid currentColor" }} />
              <span style={{ position: "absolute", left: 0, bottom: 0, width: 12, height: 12, borderLeft: "3px solid currentColor", borderBottom: "3px solid currentColor" }} />
              <span style={{ position: "absolute", right: 0, top: 0, width: 12, height: 12, borderTop: "3px solid currentColor" }} />
              <span style={{ position: "absolute", right: 0, top: 0, height: 38, borderRight: "3px solid currentColor" }} />
              <span style={{ position: "absolute", right: 0, bottom: 0, width: 12, height: 12, borderBottom: "3px solid currentColor" }} />
              <span style={{ position: "absolute", left: "50%", top: "50%", width: 7, height: 7, borderRadius: 99, background: "currentColor", transform: "translate(-50%,-50%)" }} />
            </div>

            <div>
              <div
                style={{
                  fontSize: 20,
                  fontWeight: 700,
                  letterSpacing: "0.36em",
                  lineHeight: 1,
                }}
              >
                CREATOR HOUSE
              </div>
              <div style={{ fontSize: 14, color: "#8C6D3E", marginTop: 7 }}>
                professional creator profile
              </div>
            </div>
          </div>

          <div style={{ display: "flex", gap: 20, alignItems: "center" }}>
            <button style={{ border: "none", background: "transparent", fontSize: 16, fontWeight: 600 }}>
              Войти
            </button>
            <button
              style={{
                border: "none",
                background: "#2F2D2A",
                color: "white",
                borderRadius: 999,
                padding: "12px 24px",
                fontSize: 15,
                fontWeight: 600,
              }}
            >
              Создать профиль
            </button>
          </div>
        </header>

        <div
          style={{
            minHeight: "calc(72vh - 40px)",
            display: "grid",
            gridTemplateColumns: "1fr 570px",
            gap: 58,
            alignItems: "center",
          }}
        >
          <div>
            <div
              style={{
                display: "inline-flex",
                padding: "10px 20px",
                borderRadius: 999,
                border: "1px solid rgba(176,137,87,.2)",
                background: "rgba(255,255,255,.48)",
                marginBottom: 26,
              }}
            >
              <span style={{ color: "#8C6D3E", fontSize: 15, fontWeight: 500, letterSpacing: ".04em" }}>
                Новый формат профессионального профиля
              </span>
            </div>

            <h1
              className="display"
              style={{
                fontSize: 66,
                lineHeight: 1.04,
                margin: "0 0 22px",
                maxWidth: 720,
              }}
            >
              Выгляди как
              <br />
              блогер, которого
              <br />
              выбирают бренды
            </h1>

            <p
              style={{
                fontSize: 19,
                lineHeight: 1.52,
                color: "#5f5b55",
                maxWidth: 650,
                margin: "0 0 28px",
              }}
            >
              Один красивый Creator House вместо PDF,
              <br />
              бесконечных сообщений и устаревших медиакитов.
            </p>

            <div style={{ display: "flex", gap: 16, marginBottom: 34 }}>
              <button
                style={{
                  border: "none",
                  background: "#2F2D2A",
                  color: "white",
                  borderRadius: 999,
                  padding: "13px 24px",
                  fontSize: 15,
                  fontWeight: 650,
                }}
              >
                Создать Creator House
              </button>

              <button
                style={{
                  border: "1px solid rgba(31,31,31,.2)",
                  background: "rgba(255,255,255,.44)",
                  borderRadius: 999,
                  padding: "12px 24px",
                  fontSize: 15,
                  fontWeight: 600,
                }}
              >
                Посмотреть пример
              </button>
            </div>

            <div style={{ display: "flex", gap: 34 }}>
              {["Проверено аналитикой", "Актуальная статистика", "Закрыто от посторонних"].map((text) => (
                <div key={text} style={{ display: "flex", gap: 10, alignItems: "center" }}>
                  <span style={{ width: 19, height: 19, border: "2px solid #8C6D3E", borderRadius: 7 }} />
                  <span style={{ fontSize: 14, lineHeight: 1.22, color: "#3e3b37", maxWidth: 128 }}>{text}</span>
                </div>
              ))}
            </div>
          </div>

          <div style={{ position: "relative", height: 560, transform: "translateY(-18px)" }}>
            <div
              style={{
                position: "absolute",
                right: -26,
                bottom: 18,
                width: 405,
                height: 490,
                borderRadius: 34,
                background: "#2F2D2A",
                transform: "rotate(8deg)",
                boxShadow: "0 24px 58px rgba(31,31,31,.18)",
                padding: 24,
                color: "white",
              }}
            >
              <div style={{ fontSize: 14, letterSpacing: ".14em", color: "#D8B885", fontWeight: 700 }}>
                DARK PREMIUM
              </div>
              <div style={{ position: "absolute", left: 24, right: 24, bottom: 34 }}>
                <div style={{ height: 13, width: "68%", borderRadius: 999, background: "rgba(255,255,255,.22)", marginBottom: 10 }} />
                <div style={{ height: 13, width: "48%", borderRadius: 999, background: "rgba(255,255,255,.14)" }} />
              </div>
            </div>

            <div
              style={{
                position: "absolute",
                left: 28,
                bottom: 56,
                width: 405,
                height: 500,
                borderRadius: 34,
                background: "linear-gradient(180deg,#fff2ee,#ead0c6)",
                transform: "rotate(-8deg)",
                boxShadow: "0 22px 52px rgba(159,105,88,.13)",
                padding: 24,
                overflow: "hidden",
              }}
            >
              <div style={{ fontSize: 14, fontWeight: 700, letterSpacing: ".12em", color: "#7B4A3F" }}>
                BEAUTY PROFILE
              </div>
              <div style={{ fontSize: 21, marginTop: 22, color: "#1f1f1f", fontWeight: 700 }}>
                Elena
              </div>
              <div style={{ position: "absolute", left: 28, bottom: 32, width: 130, height: 160, borderRadius: "80px 80px 34px 34px", background: "rgba(255,255,255,.42)" }} />
            </div>

            <div
              style={{
                position: "absolute",
                right: 52,
                bottom: 28,
                width: 420,
                height: 512,
                borderRadius: 34,
                background: "#ffffff",
                transform: "rotate(-2deg)",
                boxShadow: "0 22px 58px rgba(31,31,31,.08)",
                padding: 24,
              }}
            >
              <div style={{ fontSize: 14, letterSpacing: ".13em", color: "#8C6D3E", fontWeight: 700 }}>
                TRAVEL STYLE
              </div>
              <div style={{ marginTop: 24, height: 160, borderRadius: 26, background: "#EFE5D6" }} />
            </div>

            <div
              style={{
                position: "absolute",
                right: 20,
                top: 0,
                width: 460,
                borderRadius: 36,
                background: "#ffffff",
                boxShadow: "0 28px 78px rgba(31,31,31,.13)",
                padding: 24,
              }}
            >
              <div
                style={{
                  color: "#8C6D3E",
                  fontSize: 14,
                  fontWeight: 700,
                  letterSpacing: ".16em",
                  marginBottom: 18,
                }}
              >
                ТАК БРЕНД УВИДИТ ТЕБЯ
              </div>

              <div
                style={{
                  height: 290,
                  borderRadius: 28,
                  overflow: "hidden",
                  position: "relative",
                  marginBottom: 16,
                  background: "linear-gradient(180deg,#e9c48d 0%,#b47a31 48%,#25170d 100%)",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background:
                      "radial-gradient(circle at 72% 22%, rgba(255,255,255,.46), transparent 24%), linear-gradient(180deg, transparent 42%, rgba(0,0,0,.72))",
                  }}
                />
                <div style={{ position: "absolute", left: 26, bottom: 26, color: "white" }}>
                  <div className="display" style={{ fontSize: 46, lineHeight: 1, marginBottom: 8 }}>
                    Alexandra
                  </div>
                  <div style={{ fontSize: 16, opacity: 0.9 }}>
                    Lifestyle блогер • Instagram • TikTok
                  </div>
                </div>
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginBottom: 12 }}>
                {[
                  ["128K", "аудитория"],
                  ["6.8%", "вовлечённость"],
                ].map(([value, label]) => (
                  <div key={value} style={{ background: "#f6f1e8", borderRadius: 18, padding: "15px 17px" }}>
                    <div className="display" style={{ fontSize: 30, lineHeight: 1, marginBottom: 5 }}>
                      {value}
                    </div>
                    <div style={{ fontSize: 14, color: "#625e58" }}>{label}</div>
                  </div>
                ))}
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginBottom: 12 }}>
                <div style={{ background: "rgba(246,241,232,.76)", borderRadius: 18, padding: "14px 16px" }}>
                  <div style={{ display: "flex", gap: 8, alignItems: "center", color: "#8C6D3E", fontSize: 13, marginBottom: 5 }}>
                    <span style={{ width: 9, height: 9, borderRadius: 99, background: "#73bf78", boxShadow: "0 0 0 7px rgba(115,191,120,.16)" }} />
                    Проверено
                  </div>
                  <strong style={{ fontSize: 15 }}>аналитикой</strong>
                </div>

                <div style={{ background: "rgba(246,241,232,.76)", borderRadius: 18, padding: "14px 16px" }}>
                  <div style={{ color: "#8C6D3E", fontSize: 13, marginBottom: 5 }}>Кейс</div>
                  <strong style={{ fontSize: 15 }}>248K просмотров</strong>
                </div>
              </div>

              <div
                style={{
                  background: "#2F2D2A",
                  borderRadius: 22,
                  padding: 16,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: 12,
                }}
              >
                <div>
                  <div style={{ color: "#d8b885", fontSize: 13, lineHeight: 1.25, marginBottom: 5 }}>
                    Рекламное
                    <br />
                    предложение
                  </div>
                  <div className="display" style={{ color: "white", fontSize: 28, lineHeight: 1 }}>
                    от $950
                  </div>
                </div>

                <button
                  style={{
                    border: "none",
                    background: "white",
                    color: "#2F2D2A",
                    borderRadius: 999,
                    padding: "13px 18px",
                    fontSize: 14,
                    fontWeight: 650,
                    lineHeight: 1.15,
                    minWidth: 148,
                  }}
                >
                  Предложить
                  <br />
                  сотрудничество
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
