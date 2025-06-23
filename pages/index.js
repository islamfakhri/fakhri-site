import Head from 'next/head'
export default function Home() {
  return (
    <>
      <Head>
        <title>Fakhri | مهندس إسلام فخري</title>
      </Head>
      <main style={{padding: '2rem', fontFamily: 'sans-serif', textAlign: 'center'}}>
        <h1>مرحبًا، أنا المهندس إسلام فخري</h1>
        <p>مهندس كهرباء متخصص في البنية التحتية.</p>
        <a href="/about">عنّي</a> | <a href="/certifications">الشهادات</a>
      </main>
    </>
  )
}
