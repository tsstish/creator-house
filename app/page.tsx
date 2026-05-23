export default function Home() {
  return (
    <main style={{ minHeight: "100vh", background: "#F6F1E8", color: "#1F1F1F" }}>
      <header
        style={{
          maxWidth: "1240px",
          margin: "0 auto",
          padding: "22px 24px 10px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "11px" }}>
          <div
            style={{
              width: "34px",
              height: "34px",
              borderRadius: "50%",
              border: "1px solid rgba(31,31,31,0.16)",
              background: "rgba(255,255,255,0.55)",
              display: "grid",
              placeItems: "center",
              color: "#9B7A45",
              fontWeight: 800,
              fontSize: "13px",
              letterSpacing: "-0.08em",
            }}
          >
            CH
          </div>
          <div>
            <div style={{ fontSize: "21px", fontWeight: 800, letterSpacing: "-0.05em" }}>
              Creator House
            </div>
            <div style={{ fontSize: "12px", color: "#8A6A3B", marginTop: "2px" }}>
              professional creator profile
            </div>
          </div>
        </div>

        <div style={{ display: "flex", gap: "14px", alignItems: "center" }}>
          <button style={{ border: "none", background: "transparent", fontSize: "15px", cursor: "pointer", color: "#5D584F" }}>
            Войти
          </button>
          <button style={{ border: "none", borderRadius: "999px", background: "#1F1F1F", color: "white", padding: "12px 18px", fontSize: "15px", cursor: "pointer" }}>
            Создать профиль
          </button>
        </div>
      </header>

      <section
        style={{
          maxWidth: "1240px",
          margin: "0 auto",
          padding: "26px 24px 72px",
          display: "grid",
          gridTemplateColumns: "1fr 0.95fr",
          gap: "46px",
          alignItems: "center",
        }}
      >
        <div>
          <div style={{ display: "inline-flex", padding: "10px 14px", borderRadius: "999px", background: "rgba(255,255,255,0.72)", border: "1px solid rgba(31,31,31,0.08)", marginBottom: "26px", fontSize: "14px", color: "#8A6A3B" }}>
            Новый формат профессионального профиля
          </div>

          <h1 style={{ fontSize: "clamp(52px, 6.4vw, 86px)", lineHeight: "0.94", letterSpacing: "-0.065em", margin: "0 0 28px", maxWidth: "760px" }}>
            Выгляди как блогер, которого выбирают бренды
          </h1>

          <p style={{ fontSize: "22px", lineHeight: "1.6", color: "#5F5A52", maxWidth: "650px", marginBottom: "38px" }}>
            Один красивый Creator House вместо PDF, бесконечных сообщений и устаревших медиакитов.
          </p>

          <div style={{ display: "flex", gap: "14px", flexWrap: "wrap" }}>
            <button style={{ border: "none", borderRadius: "999px", background: "#1F1F1F", color: "white", padding: "18px 28px", fontSize: "16px", cursor: "pointer", boxShadow: "0 16px 40px rgba(31,31,31,0.18)" }}>
              Создать Creator House
            </button>
            <button style={{ borderRadius: "999px", border: "1px solid rgba(31,31,31,0.10)", background: "rgba(255,255,255,0.65)", padding: "18px 28px", fontSize: "16px", cursor: "pointer" }}>
              Посмотреть пример
            </button>
          </div>
        </div>

        <div style={{ position: "relative", minHeight: "610px" }}>
          <div style={{ position: "absolute", right: "48px", top: "62px", width: "78%", height: "500px", borderRadius: "46px", background: "rgba(255,255,255,0.34)", border: "1px solid rgba(31,31,31,0.06)", transform: "rotate(5deg)" }} />
          <div style={{ position: "absolute", right: "22px", top: "30px", width: "84%", height: "535px", borderRadius: "48px", background: "rgba(255,255,255,0.58)", border: "1px solid rgba(31,31,31,0.08)", transform: "rotate(-3deg)", boxShadow: "0 30px 90px rgba(31,31,31,0.08)" }} />

          <div
            style={{
              position: "relative",
              marginLeft: "auto",
              width: "90%",
              borderRadius: "50px",
              background: "rgba(255,255,255,0.92)",
              border: "1px solid rgba(31,31,31,0.08)",
              boxShadow: "0 34px 110px rgba(31,31,31,0.12)",
              padding: "24px",
              overflow: "hidden",
            }}
          >
            <p style={{ margin: "0 0 18px", color: "#9B7A45", fontSize: "14px", letterSpacing: "0.16em", textTransform: "uppercase", fontWeight: 800 }}>
              Так бренд увидит тебя
            </p>

            <div
              style={{
                position: "relative",
                height: "380px",
                borderRadius: "36px",
                overflow: "hidden",
                background:
                  "radial-gradient(circle at 50% 18%, #F7E8D2 0%, #D8B985 28%, #9B7442 62%, #5B3F25 100%)",
                marginBottom: "18px",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  left: "50%",
                  top: "68px",
                  transform: "translateX(-50%)",
                  width: "168px",
                  height: "168px",
                  borderRadius: "50%",
                  background: "rgba(255,255,255,0.28)",
                  boxShadow: "0 0 80px rgba(255,255,255,0.35)",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  left: "50%",
                  bottom: "76px",
                  transform: "translateX(-50%)",
                  width: "240px",
                  height: "250px",
                  borderRadius: "120px 120px 40px 40px",
                  background: "linear-gradient(180deg, rgba(255,255,255,0.42), rgba(255,255,255,0.10))",
                  filter: "blur(0.2px)",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background:
                    "linear-gradient(180deg, transparent 42%, rgba(0,0,0,0.78))",
                }}
              />

              <div style={{ position: "absolute", left: "22px", right: "22px", bottom: "22px", color: "white" }}>
                <h2 style={{ margin: "0 0 8px", fontSize: "38px", letterSpacing: "-0.05em" }}>
                  Alexandra
                </h2>
                <p style={{ margin: 0, color: "rgba(255,255,255,0.78)", fontSize: "17px" }}>
                  Lifestyle блогер • Instagram • TikTok
                </p>
              </div>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "14px", marginBottom: "14px" }}>
              <div style={{ background: "#F7F2EA", borderRadius: "24px", padding: "18px" }}>
                <strong style={{ fontSize: "30px" }}>128K</strong>
                <p style={{ margin: "6px 0 0", color: "#6A655D" }}>аудитория</p>
              </div>
              <div style={{ background: "#F7F2EA", borderRadius: "24px", padding: "18px" }}>
                <strong style={{ fontSize: "30px" }}>6.8%</strong>
                <p style={{ margin: "6px 0 0", color: "#6A655D" }}>вовлечённость</p>
              </div>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "14px", marginBottom: "14px" }}>
              <div style={{ background: "rgba(31,31,31,0.04)", borderRadius: "22px", padding: "16px" }}>
                <p style={{ margin: "0 0 6px", color: "#9B7A45", fontSize: "14px", display: "flex", alignItems: "center", gap: "8px" }}>
                  <span
                    style={{
                      width: "10px",
                      height: "10px",
                      borderRadius: "50%",
                      background: "#A8D8B9",
                      boxShadow: "0 0 0 6px rgba(168,216,185,0.22)",
                      display: "inline-block",
                    }}
                  />
                  Проверено
                </p>
                <strong>аналитикой</strong>
              </div>
              <div style={{ background: "rgba(31,31,31,0.04)", borderRadius: "22px", padding: "16px" }}>
                <p style={{ margin: "0 0 6px", color: "#9B7A45", fontSize: "14px" }}>Кейс</p>
                <strong>248K просмотров</strong>
              </div>
            </div>

            <div style={{ borderRadius: "26px", background: "#1F1F1F", color: "white", padding: "20px", display: "flex", justifyContent: "space-between", gap: "16px", alignItems: "center" }}>
              <div>
                <p style={{ margin: "0 0 8px", color: "#D5B781" }}>
                  Рекламное предложение
                </p>
                <strong style={{ fontSize: "24px" }}>от $950</strong>
              </div>
              <button style={{ border: "none", borderRadius: "999px", background: "white", color: "#1F1F1F", padding: "13px 18px", fontWeight: 700, cursor: "pointer" }}>
                Предложить сотрудничество
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
