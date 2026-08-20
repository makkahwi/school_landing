import Head from "next/head";

const HeadElement = () => {
  return (
    <Head>
      <title>Al-Aqsa Integrated School - Malaysia</title>
      <meta
        name="description"
        content="Al-Aqsa Integrated School is an international Islamic school in Kuala Lumpur, Malaysia, combining academic excellence, Quranic values and whole-child development."
      />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta property="og:title" content="Al-Aqsa Integrated School - Kuala Lumpur" />
      <meta
        property="og:description"
        content="Professional international Islamic education in KL, Malaysia."
      />
      <meta property="og:type" content="website" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
};

export default HeadElement;
