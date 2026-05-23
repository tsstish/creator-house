export default function Home() {
  return (
    <main style={{
      minHeight: "100vh",
      background: "linear-gradient(135deg, #F8F3EA 0%, #EFE5D6 100%)",
      color: "#1F1F1F",
      padding: "24px"
    }}>
      <section style={{
        minHeight: "calc(100vh - 48px)",
        display: "grid",
        placeItems: "center"
      }}>
        <div style={{
          width: "100%",
          maxWidth: "1180px",
          display: "grid",
          gridTemplateColumns: "1.05fr 0.95fr",
          gap: "32px",
          alignItems: "center"
        }}>
          <div style={{
            background: "rgba(255,255,255,0.74)",
            border: "1px solid rgba(31,31,31,0.08)",
            borderRadius: "32px",
            padding: "clamp(32px, 6vw, 72px)",
            boxShadow: "0 28px 90px rgba(36, 28, 16, 0.10)"
          }}>
            <p style={{
              margin: "0 0 18px",
              fontSize: "13px",
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "#9B7A45",
              fontWeight: 600
            }}>
              Creator House
            </p>

            <h1 style={{
              fontSize: "clamp(44px, 6vw, 78px)",
              lineHeight: "0.96",
              letterSpacing: "-0.06em",
              margin: "0 0 24px",
              fontWeight: 650
            }}>
              Выгляди как creator, которого выбирают бренды
            </h1>

            <p style={{
              fontSize: "clamp(18px, 2vw, 22px)",
              lineHeight: "1.55",
              margin: "0 0 34px",
              maxWidth: "650px",
              color: "#5F5A52"
            }}>
              Покажи реальные цифры, красиво оформи рекламные предложения
              и отправляй один профессиональный Creator House вместо PDF и хаоса.
            </p>

            <div style={{
              display: "flex",
              gap: "12px",
              flexWrap: "wrap",
              alignItems: "center"
            }}>
              <button style={{
                border: "none",
                borderRadius: "999px",
                padding: "16px 26px",
                background: "#1F1F1F",
                color: "white",
                fontSize: "16px",
                cursor: "pointer",
                boxShadow: "0 14px 32px rgba(31,31,31,0.20)"
              }}>
                Создать Creator House
              </button>

              <button style={{
                border: "1px solid rgba(31,31,31,0.12)",
                borderRadius: "999px",
                padding: "16px 24px",
                background: "rgba(255,255,255,0.54)",
                color: "#1F1F1F",
                fontSize: "16px",
                cursor: "pointer"
              }}>
                Посмотреть пример
              </button>
            </div>

            <p style={{
              margin: "28px 0 0",
              fontSize: "14px",
              color: "#7A746B"
            }}>
              Без PDF • Актуальные данные • Работает на телефоне
            </p>
          </div>

          <div style={{
            display: "grid",
            gap: "16px"
          }}>
            <div style={{
              background: "rgba(255,255,255,0.70)",
              border: "1px solid rgba(31,31,31,0.08)",
              borderRadius: "28px",
              padding: "26px",
              boxShadow: "0 24px 70px rgba(36, 28, 16, 0.09)"
            }}>
              <p style={{ margin: "0 0 12px", color: "#9B7A45", fontSize: "13px", letterSpacing: "0.14em", textTransform: "uppercase" }}>
                Preview
              </p>
              <h2 style={{ margin: "0 0 18px", fontSize: "34px", letterSpacing: "-0.04em" }}>
                Alexandra
              </h2>
              <div style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "12px"
              }}>
                <div style={{ padding: "18px", borderRadius: "20px", background: "#F7F2EA" }}>
                  <strong style={{ fontSize: "28px" }}>128K</strong>
                  <p style={{ margin: "6px 0 0", color: "#746D63" }}>аудитория</p>
                </div>
                <div style={{ padding: "18px", borderRadius: "20px", background: "#F7F2EA" }}>
                  <strong style={{ fontSize: "28px" }}>6.8%</strong>
                  <p style={{ margin: "6px 0 0", color: "#746D63" }}>вовлечённость</p>
                </div>
              </div>
            </div>

            <div style={{
              background: "#1F1F1F",
              color: "white",
              borderRadius: "28px",
              padding: "26px",
              boxShadow: "0 24px 70px rgba(31,31,31,0.20)"
            }}>
              <p style={{ margin: "0 0 10px", color: "#D7BE8A" }}>
                Рекламное предложение
              </p>
              <h3 style={{ margin: "0 0 12px", fontSize: "28px" }}>
                360 продвижение
              </h3>
              <p style={{ margin: 0, color: "rgba(255,255,255,0.72)" }}>
                Instagram • Telegram • TikTok
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
