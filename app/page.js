import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main style={{display: 'flex', flexDirection: 'column', alignItems:'center', justifyContent: 'center', fontSize: '40px', fontWeight: '700'}}>
        <div>DREAMHACK PROFILE BADGE SERVICE</div>
        <div style={{fontSize: '32px', marginTop: '16px'}}>Cre: <a href="https://github.com/jameskaois" style={{textDecoration: 'underline', color: 'blueviolet'}}>jameskaois</a></div>
      </main>
    </div>
  );
}
