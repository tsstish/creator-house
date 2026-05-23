export default function Home() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#F6F1E8",
        color: "#1F1F1F",
      }}
    >
      <header
        style={{
          maxWidth: "1240px",
          margin: "0 auto",
          padding: "24px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            fontSize: "20px",
            fontWeight: 800,
            letterSpacing: "-0.04em",
          }}
        >
          <span
            style={{
              width: "28px",
              height: "28px",
              borderRadius: "10px",
              background: "linear-gradient(135deg, #1F1F1F, #B99A62)",
              display: "inline-block",
            }}
          />
          Creator House
        </div>

        <div style={{ display: "flex", gap: "14px", alignItems: "center" }}>
          <button
            style={{
              border: "none",
              background: "transparent",
              fontSize: "15px",
              cursor: "pointer",
              color: "#5D584F",
            }}
          >
            Войти
          </button>

          <button
            style={{
              border: "none",
              borderRadius: "999px",
              background: "#1F1F1F",
              color: "white",
              padding: "12px 18px",
              fontSize: "15px",
              cursor: "pointer",
            }}
          >
            Создать профиль
          </button>
        </div>
      </header>

      <section
        style={{
          maxWidth: "1240px",
          margin: "0 auto",
          padding: "42px 24px 80px",
          display: "grid",
          gridTemplateColumns: "1fr 0.95fr",
          gap: "54px",
          alignItems: "center",
        }}
      >
        <div>
          <div
            style={{
              display: "inline-flex",
              padding: "10px 14px",
              borderRadius: "999px",
              background: "rgba(255,255,255,0.72)",
              border: "1px solid rgba(31,31,31,0.08)",
              marginBottom: "26px",
              fontSize: "14px",
              color: "#8A6A3B",
            }}
          >
            Новый формат профессионального профиля
          </div>

          <h1
            style={{
              fontSize: "clamp(52px, 6.4vw, 86px)",
              lineHeight: "0.94",
              letterSpacing: "-0.065em",
              margin: "0 0 28px",
              maxWidth: "760px",
            }}
          >
            Выгляди как блогер, которого выбирают бренды
          </h1>

          <p
            style={{
              fontSize: "22px",
              lineHeight: "1.6",
              color: "#5F5A52",
              maxWidth: "650px",
              marginBottom: "38px",
            }}
          >
            Один красивый Creator House вместо PDF, бесконечных сообщений
            и устаревших медиакитов.
          </p>

          <div style={{ display: "flex", gap: "14px", flexWrap: "wrap" }}>
            <button
              style={{
                border: "none",
                borderRadius: "999px",
                background: "#1F1F1F",
                color: "white",
                padding: "18px 28px",
                fontSize: "16px",
                cursor: "pointer",
                boxShadow: "0 16px 40px rgba(31,31,31,0.18)",
              }}
            >
              Создать Creator House
            </button>

            <button
              style={{
                borderRadius: "999px",
                border: "1px solid rgba(31,31,31,0.10)",
                background: "rgba(255,255,255,0.65)",
                padding: "18px 28px",
                fontSize: "16px",
                cursor: "pointer",
              }}
            >
              Посмотреть пример
            </button>
          </div>
        </div>

        <div style={{ position: "relative", minHeight: "560px" }}>
          <div
            style={{
              position: "absolute",
              inset: "72px 22px auto auto",
              width: "78%",
              height: "410px",
              borderRadius: "38px",
              background: "rgba(255,255,255,0.38)",
              border: "1px solid rgba(31,31,31,0.06)",
              transform: "rotate(4deg)",
            }}
          />

          <div
            style={{
              position: "absolute",
              inset: "38px 0 auto auto",
              width: "84%",
              height: "455px",
              borderRadius: "42px",
              background: "rgba(255,255,255,0.58)",
              border: "1px solid rgba(31,31,31,0.08)",
              transform: "rotate(-3deg)",
              boxShadow: "0 30px 90px rgba(31,31,31,0.08)",
            }}
          />

          <div
            style={{
              position: "relative",
              marginLeft: "auto",
              width: "90%",
              borderRadius: "46px",
              background: "rgba(255,255,255,0.88)",
              border: "1px solid rgba(31,31,31,0.08)",
              boxShadow: "0 34px 110px rgba(31,31,31,0.12)",
              padding: "26px",
              overflow: "hidden",
            }}
          >
            <p
              style={{
                margin: "0 0 18px",
                color: "#9B7A45",
                fontSize: "14px",
                letterSpacing: "0.16em",
                textTransform: "uppercase",
                fontWeight: 700,
              }}
            >
              Так бренд увидит тебя
            </p>

            <div
              style={{
                height: "230px",
                borderRadius: "32px",
                background:
                  "linear-gradient(135deg, #D8C2A0 0%, #8E6E42 100%)",
                marginBottom: "22px",
              }}
            />

            <h2
              style={{
                margin: "0 0 8px",
                fontSize: "38px",
                letterSpacing: "-0.05em",
              }}
            >
              Alexandra
            </h2>

            <p style={{ margin: "0 0 22px", color: "#6A655D", fontSize: "17px" }}>
              Lifestyle блогер • Instagram • TikTok
            </p>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "14px",
                marginBottom: "16px",
              }}
            >
              <div style={{ background: "#F7F2EA", borderRadius: "24px", padding: "18px" }}>
                <strong style={{ fontSize: "30px" }}>128K</strong>
                <p style={{ margin: "6px 0 0", color: "#6A655D" }}>аудитория</p>
              </div>

              <div style={{ background: "#F7F2EA", borderRadius: "24px", padding: "18px" }}>
                <strong style={{ fontSize: "30px" }}>6.8%</strong>
                <p style={{ margin: "6px 0 0", color: "#6A655D" }}>
                  вовлечённость
                </p>
              </div>
            </div>

            <div
              style={{
                borderRadius: "26px",
                background: "#1F1F1F",
                color: "white",
                padding: "20px",
              }}
            >
              <p style={{ margin: "0 0 8px", color: "#D5B781" }}>
                Пример рекламного предложения
              </p>
              <strong style={{ fontSize: "26px" }}>360 продвижение</strong>
              <p style={{ margin: "8px 0 0", color: "rgba(255,255,255,0.72)" }}>
                Instagram • Telegram • TikTok
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
