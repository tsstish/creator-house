export default function Home() {
  return (
    <main className="hero-page">
      <section
        style={{
          maxWidth: "1480px",
          margin: "0 auto",
          padding: "32px 64px 42px",
        }}
      >
        <header
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "58px",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "18px" }}>
            <div className="logo-mark">
              <span className="lt" />
              <span className="lb" />
              <span className="rt" />
              <span className="right-full" />
              <span className="rb" />
              <span className="dot" />
            </div>

            <div>
              <div
                style={{
                  fontSize: "22px",
                  fontWeight: 700,
                  letterSpacing: "0.32em",
                  lineHeight: 1,
                }}
              >
                CREATOR HOUSE
              </div>
              <div
                style={{
                  fontSize: "15px",
                  color: "#b08957",
                  marginTop: "8px",
                  letterSpacing: "0.03em",
                }}
              >
                professional creator profile
              </div>
            </div>
          </div>

          <div style={{ display: "flex", gap: "24px", alignItems: "center" }}>
            <button
              style={{
                border: "none",
                background: "transparent",
                fontSize: "18px",
                fontWeight: 600,
              }}
            >
              Войти
            </button>

            <button
              style={{
                border: "none",
                background: "#1f1f1f",
                color: "white",
                borderRadius: "999px",
                padding: "17px 34px",
                fontSize: "18px",
                fontWeight: 600,
                boxShadow: "0 20px 42px rgba(31,31,31,0.14)",
              }}
            >
              Создать профиль
            </button>
          </div>
        </header>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 600px",
            gap: "68px",
            alignItems: "center",
          }}
        >
          <div>
            <div
              style={{
                display: "inline-flex",
                padding: "13px 24px",
                borderRadius: "999px",
                border: "1px solid rgba(176,137,87,0.2)",
                background: "rgba(255,255,255,0.48)",
                marginBottom: "38px",
              }}
            >
              <span
                style={{
                  color: "#b08957",
                  fontSize: "17px",
                  fontWeight: 500,
                  letterSpacing: "0.04em",
                }}
              >
                Новый формат профессионального профиля
              </span>
            </div>

            <h1
              className="display"
              style={{
                fontSize: "82px",
                lineHeight: "1.04",
                margin: "0 0 28px",
                maxWidth: "780px",
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
                fontSize: "22px",
                lineHeight: "1.55",
                color: "#5f5b55",
                maxWidth: "700px",
                margin: "0 0 36px",
              }}
            >
              Один красивый Creator House вместо PDF,
              <br />
              бесконечных сообщений и устаревших медиакитов.
            </p>

            <div
              style={{
                display: "flex",
                gap: "22px",
                marginBottom: "54px",
                alignItems: "center",
              }}
            >
              <button
                style={{
                  border: "none",
                  background: "#1f1f1f",
                  color: "white",
                  borderRadius: "999px",
                  padding: "18px 32px",
                  fontSize: "18px",
                  fontWeight: 650,
                  boxShadow: "0 18px 38px rgba(31,31,31,0.14)",
                }}
              >
                Создать Creator House
              </button>

              <button
                style={{
                  border: "1px solid rgba(31,31,31,0.2)",
                  background: "rgba(255,255,255,0.44)",
                  borderRadius: "999px",
                  padding: "17px 32px",
                  fontSize: "18px",
                  fontWeight: 600,
                }}
              >
                Посмотреть пример
              </button>
            </div>

            <div style={{ display: "flex", gap: "44px" }}>
              {[
                ["⌁", "Проверено аналитикой"],
                ["▥", "Актуальная статистика"],
                ["▢", "Закрыто от посторонних"],
              ].map(([icon, text]) => (
                <div key={text} style={{ display: "flex", gap: "13px", alignItems: "center" }}>
                  <span style={{ color: "#b08957", fontSize: "28px", lineHeight: 1 }}>
                    {icon}
                  </span>
                  <span style={{ fontSize: "16px", lineHeight: "1.25", color: "#3e3b37", maxWidth: "150px" }}>
                    {text}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div style={{ position: "relative", height: "720px" }}>
            <div
              style={{
                position: "absolute",
                right: "-26px",
                top: "112px",
                width: "460px",
                height: "570px",
                borderRadius: "40px",
                background: "linear-gradient(180deg, #1d1d1d 0%, #292929 100%)",
                transform: "rotate(8deg)",
                boxShadow: "0 28px 70px rgba(31,31,31,0.18)",
              }}
            />

            <div
              style={{
                position: "absolute",
                right: "108px",
                top: "84px",
                width: "430px",
                height: "585px",
                borderRadius: "40px",
                background: "linear-gradient(180deg, #fff2ee 0%, #ead0c6 100%)",
                transform: "rotate(-8deg)",
                boxShadow: "0 24px 60px rgba(159,105,88,0.13)",
                padding: "26px",
                overflow: "hidden",
              }}
            >
              <div style={{ fontSize: "14px", fontWeight: 700, letterSpacing: "0.12em", color: "#6a3f34" }}>
                Beauty profile
              </div>
            </div>

            <div
              style={{
                position: "absolute",
                right: "22px",
                top: "48px",
                width: "470px",
                height: "600px",
                borderRadius: "40px",
                background: "rgba(255,255,255,0.88)",
                transform: "rotate(-2deg)",
                boxShadow: "0 24px 64px rgba(31,31,31,0.08)",
              }}
            />

            <div
              style={{
                position: "absolute",
                right: "36px",
                top: "0",
                width: "500px",
                borderRadius: "42px",
                background: "rgba(255,255,255,0.92)",
                border: "1px solid rgba(255,255,255,0.78)",
                boxShadow: "0 32px 88px rgba(31,31,31,0.12)",
                padding: "28px",
              }}
            >
              <div
                style={{
                  color: "#b08957",
                  fontSize: "16px",
                  fontWeight: 700,
                  letterSpacing: "0.16em",
                  marginBottom: "22px",
                }}
              >
                ТАК БРЕНД УВИДИТ ТЕБЯ
              </div>

              <div
                style={{
                  height: "284px",
                  borderRadius: "30px",
                  overflow: "hidden",
                  position: "relative",
                  marginBottom: "22px",
                  background:
                    "linear-gradient(180deg, #e9c48d 0%, #b47a31 48%, #25170d 100%)",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background:
                      "radial-gradient(circle at 72% 22%, rgba(255,255,255,0.46), transparent 24%), linear-gradient(180deg, transparent 42%, rgba(0,0,0,0.72))",
                  }}
                />

                <div style={{ position: "absolute", left: "28px", bottom: "28px", color: "white" }}>
                  <div className="display" style={{ fontSize: "50px", lineHeight: 1, marginBottom: "10px" }}>
                    Alexandra
                  </div>
                  <div style={{ fontSize: "18px", opacity: 0.9 }}>
                    Lifestyle блогер • Instagram • TikTok
                  </div>
                </div>
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "15px", marginBottom: "15px" }}>
                {[
                  ["128K", "аудитория"],
                  ["6.8%", "вовлечённость"],
                ].map(([value, label]) => (
                  <div key={value} style={{ background: "#f6f1e8", borderRadius: "23px", padding: "22px 24px" }}>
                    <div className="display" style={{ fontSize: "36px", lineHeight: 1, marginBottom: "9px" }}>
                      {value}
                    </div>
                    <div style={{ fontSize: "16px", color: "#625e58" }}>{label}</div>
                  </div>
                ))}
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "15px", marginBottom: "17px" }}>
                <div style={{ background: "rgba(246,241,232,0.76)", borderRadius: "21px", padding: "20px 22px" }}>
                  <div style={{ display: "flex", gap: "10px", alignItems: "center", color: "#b08957", fontSize: "16px", marginBottom: "8px" }}>
                    <span
                      style={{
                        width: "10px",
                        height: "10px",
                        borderRadius: "50%",
                        background: "#73bf78",
                        boxShadow: "0 0 0 8px rgba(115,191,120,0.16)",
                      }}
                    />
                    Проверено
                  </div>
                  <strong style={{ fontSize: "18px" }}>аналитикой</strong>
                </div>

                <div style={{ background: "rgba(246,241,232,0.76)", borderRadius: "21px", padding: "20px 22px" }}>
                  <div style={{ color: "#b08957", fontSize: "16px", marginBottom: "8px" }}>Кейс</div>
                  <strong style={{ fontSize: "18px" }}>248K просмотров</strong>
                </div>
              </div>

              <div
                style={{
                  background: "#1f1f1f",
                  borderRadius: "26px",
                  padding: "22px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: "16px",
                }}
              >
                <div>
                  <div style={{ color: "#d8b885", fontSize: "16px", lineHeight: "1.25", marginBottom: "8px" }}>
                    Рекламное
                    <br />
                    предложение
                  </div>
                  <div className="display" style={{ color: "white", fontSize: "34px", lineHeight: 1 }}>
                    от $950
                  </div>
                </div>

                <button
                  style={{
                    border: "none",
                    background: "white",
                    color: "#1f1f1f",
                    borderRadius: "999px",
                    padding: "18px 26px",
                    fontSize: "17px",
                    fontWeight: 650,
                    lineHeight: 1.15,
                    minWidth: "178px",
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
