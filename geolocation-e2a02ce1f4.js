window.getCountryCode = (() => {
  const e = navigator.language || navigator.userLanguage,
    //https://nanoleaf.me
    n = "https://nanoleaf.me",
    t = [
      "AT",
      "AX",
      "BE",
      "BG",
      "CH",
      "CY",
      "CZ",
      "DK",
      "EE",
      "ES",
      "FI",
      "FO",
      "FR",
      "DE",
      "EL",
      "HR",
      "HU",
      "IE",
      "IS",
      "IT",
      "LI",
      "LT",
      "LU",
      "LV",
      "MK",
      "MT",
      "NL",
      "NO",
      "PL",
      "PT",
      "RO",
      "SK",
      "SI",
      "SE",
      "SJ",
      "TR",
      "VA"
    ],
    o = ["CK", "FJ", "NR", "PG", "WS", "TO"],
    a = [
      "en-CA",
      "fr-CA",
      "en-MX",
      "es-MX",
      "en-US",
      "es-US",
      "en-AR",
      "es-AR",
      "en-BR",
      "pt-BR",
      "en-CL",
      "es-CL",
      "en-CO",
      "es-CO",
      "en-PE",
      "es-PE",
      "en-EU",
      "fr-FR",
      "de-DE",
      "it-IT",
      "en-GB",
      "en-HK",
      "zh-HK",
      "en-IN",
      "en-ID",
      "id-ID",
      "en-JP",
      "ja-JP",
      "en-MY",
      "en-PH",
      "en-SG",
      "en-KR",
      "ko-KR",
      "en-TW",
      "zh-TW",
      "en-TH",
      "th-TH",
      "en-VN",
      "vi-VN",
      "en-AU",
      "en-NZ"
    ],
    i = "countryCode";
  function c() {
    const e = (function (e) {
      const n = `; ${document.cookie}`.split(`; ${e}=`);
      return 2 === n.length ? n.pop().split(";").shift() : null;
    })(i);
    return e
      ? Promise.resolve(e)
      : //https://geo.helper.nanoleaf.me
        fetch("vv.xml", { method: "HEAD" }).then((e) => {
          const n = e.headers.get("X-Client-Geo-Location");
          return (
            n &&
              (function (e, n, t) {
                const o = new Date();
                o.setDate(o.getDate() + t),
                  (document.cookie = `${e}=${n}; expires=${o.toUTCString()}; path=/`);
              })(i, n, 30),
            n
          );
        });
  }
  return (
    c()
      .then((i) => {
        if (i) {
          let s = "/" === location.pathname,
            l = [
              "CA",
              "US",
              "AU",
              "NZ",
              "GB",
              "HK",
              "ID",
              "IN",
              "JP",
              "KR",
              "MY",
              "PH",
              "SG",
              "TH",
              "TW",
              "VN"
            ].includes((c = i))
              ? c
              : t.includes(c)
              ? "EU"
              : o.includes(c)
              ? "AU"
              : "HK",
            r = e.split("-")[0] + "-" + l;
          s &&
            (a.includes(r)
              ? location.replace(`${n}/${r}/`)
              : a.includes(e)
              ? location.replace(`${n}/${e}/`)
              : location.replace(`${n}/en-${l}/`));
        }
        var c;
      })
      .catch(() => {}),
    c
  );
})();
