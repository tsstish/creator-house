export default function Home() {
  return (
    <main style={{
      minHeight: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      background: "#F7F2EA",
      color: "#1F1F1F",
      padding: "24px"
    }}>
      <section style={{
        maxWidth: "760px",
        textAlign: "center",
        background: "rgba(255,255,255,0.72)",
        border: "1px solid rgba(0,0,0,0.08)",
        borderRadius: "28px",
        padding: "56px 32px",
        boxShadow: "0 24px 80px rgba(0,0,0,0.08)"
      }}>
        <p style={{
          marginBottom: "16px",
          fontSize: "14px",
          letterSpacing: "0.16em",
          textTransform: "uppercase",
          color: "#9B7A45"
        }}>
          Creator House
        </p>

        <h1 style={{
          fontSize: "clamp(42px, 7vw, 82px)",
          lineHeight: "0.95",
          margin: "0 0 24px"
        }}>
          Выгляди как creator, которого выбирают бренды
        </h1>

        <p style={{
          fontSize: "20px",
          lineHeight: "1.6",
          margin: "0 auto 32px",
          maxWidth: "620px",
          color: "#5A5650"
        }}>
          Покажи реальные цифры, красиво оформи рекламные предложения
          и отправляй один профессиональный Creator House вместо PDF и хаоса.
        </p>

        <button style={{
          border: "none",
          borderRadius: "999px",
          padding: "16px 26px",
          background: "#1F1F1F",
          color: "white",
          fontSize: "16px",
          cursor: "pointer"
        }}>
          Создать ТЕСТ РАБОТАЕТ
        </button>

        <p style={{
          marginTop: "24px",
          fontSize: "14px",
          color: "#7A746B"
        }}>
          Без PDF • Актуальные данные • Работает на телефоне
        </p>
      </section>
    </main>
  );
}
