// Manifest.json format for extensions
// Formato de manifest.json para extensões
// https://learn.microsoft.com/pt-br/microsoft-edge/extensions-chromium/getting-started/manifest-format?tabs=v3
// https://developer.chrome.com/docs/extensions/mv3/manifest/
//
// What has changed in the V3 manifesto? - Chrome extensions
// O que mudou no manifesto V3? - Extensões do Chrome
// 15 de fev. de 2021
// Guilhermeasper
// https://youtu.be/cLYcy7MeBhQ
//
// Naming conventions: Camel, Pascal, Kebab and Snake case
// Convenções de nomenclatura: Camel, Pascal, Kebab e Snake case
// https://programadorviking.com.br/convencoes-camel-case-pascal-case-snake-case-kebab-case/
// https://www.alura.com.br/artigos/convencoes-nomenclatura-camel-pascal-kebab-snake-case
// https://www.tabnews.com.br/VictorManhani/cases-existentes-e-suas-linguagens-preferidas
//
// Formatting and Rounding numbers in JavaScript: 2 decimal places and other possible cases
// Formatando e Arredondando números no JavaScript: 2 casas decimais e outros casos possíveis
// https://www.alura.com.br/artigos/formatando-numeros-no-javascript
//
// JavaScript Copy and Paste using navigator clipboard
// 25 de jul. de 2022
// Kayyum698
// https://youtu.be/NttfwZsO1Dw
//
// Lodash - A modern JavaScript utility library delivering modularity, performance & extras.
// https://lodash.com/
//
// Publish a Microsoft Edge extension
// Publicar uma extensão do Microsoft Edge
// https://learn.microsoft.com/pt-br/microsoft-edge/extensions-chromium/publish/publish-extension

https: document.addEventListener("DOMContentLoaded", () => {
  const resposta = document.getElementById("resposta");
  let caixa = document.getElementById("caixa");

  const camelCase = document.getElementById("lblCamelCase");
  const pascalCase = document.getElementById("lblPascalCase");
  const snakeCase = document.getElementById("lblSnakeCase");
  const constantCase = document.getElementById("lblConstantCase");
  const brochetteCase = document.getElementById("lblBrochetteCase");
  const kebabCase = document.getElementById("lblKebabCase");
  const scremingCase = document.getElementById("lblScremingCase");
  const flatCase = document.getElementById("lblFlatCase");

  /* ------------------------------------------------------------
     It does NOT work within the extension.
     NÃO funciona dentro da extensão.
     ------------------------------------------------------------ */
  // const btnC = document.getElementById("btn_Converter");
  // btnC.disabled = true;

  // const format1 = "text/plain";
  // const promise_text_blob = Promise.resolve(
  //   new Blob(["hello"], { type: format1 })
  // );
  // const clipboardItemInput = new ClipboardItem(
  //   { [format1]: promise_text_blob },
  //   { presentationStyle: "unspecified" }
  // );
  // ---------------------------------------------------------

  // const promise1 = Promise.resolve(
  //   alert("Copied to clipboard."),
  //   navigator.clipboard
  //     .readText()
  //     .then((copyText) => {
  //       btnC.disabled = true;
  //       alert("Link copied to clipboard2: " + copyText);

  //       caixa.innerHTML = copyText;

  //       return copyText;
  //     })
  //     .catch((err) => {
  //       //document.getElementById("caixa").innerHTML = `Aconteceu um erro: ${err}`;
  //       btnC.disabled = true;
  //       return `Aconteceu um erro: ${err}`;
  //     })
  // );

  // btnC.addEventListener("click", () => {
  //   promise1.then((value) => {
  //     caixa.innerHTML = value;
  //   });
  // });
  // ---------------------------------------------------------
  // // pasting code
  // btnC.addEventListener("click", () => {
  //   //caixa.innerHTML = "TESTE - até aqui veio!";

  //   caixa.innerHTML = navigator.clipboard
  //     .readText()
  //     .then((copyText) => {
  //       btnC.disabled = false;
  //       caixa.innerHTML = copyText;
  //       //return copyText.length();
  //       return copyText;
  //     })
  //     .catch((err) => {
  //       //document.getElementById("caixa").innerHTML = `Aconteceu um erro: ${err}`;
  //       return `Aconteceu um erro: ${err}`;
  //     });
  // });
  // ---------------------------------------------------------

  document.getElementById("btn_Copiar").addEventListener("click", (e) => {
    navigator.clipboard.writeText(document.getElementById("caixa").innerHTML);
    e.target.disabled = true;
  });

  document.getElementById("texto").addEventListener("click", (e) => {
    e.target.focus();
    e.target.select();
  });

  document.getElementById("allRadio").addEventListener("click", (e) => {
    const text = document.getElementById("texto").value;
    const num_caracteresSem = text.replace(/\s/g, "").length;

    document.getElementById("btn_Copiar").disabled = false;
    //btnC.disabled = false;

    document.getElementById(
      "tamanhoSem"
    ).innerHTML = `Size without spaces: ${num_caracteresSem} characters.`;

    document.getElementById(
      "tamanhoCom"
    ).innerHTML = `Size with spaces: ${text.length} characters.`;

    if (isNotNumber(text)) {
      camelCase.innerHTML = "Camel Case / Dromedary Case";
      pascalCase.innerHTML = "Pascal Case / Capital Case";
      snakeCase.innerHTML = "Snake Case / Underscore Case";
      constantCase.innerHTML = "Constant Case / Scream Snake Case";
      brochetteCase.innerHTML = "Brochette Case";
      kebabCase.innerHTML = "Kebab Case / Caterpillar Case";
      scremingCase.innerHTML = "Screaming Kebab Case / Cobol Case";
      flatCase.innerHTML = "Flat Case / Mumble Case";

      switch (e.target.getAttribute("id")) {
        case "camelCase":
          resposta.innerHTML = "&#9728; Camel Case / Dromedary Case:";
          caixa.innerHTML = camelize(text);
          break;

        case "pascalCase":
          resposta.innerHTML = "&#9728; Pascal Case / Capital Case:";
          caixa.innerHTML = pascalize(text);
          break;

        case "snakeCase":
          resposta.innerHTML = "&#9728; Snake Case / Underscore Case:";
          caixa.innerHTML = toSnakeCase(text);
          break;

        case "constantCase":
          resposta.innerHTML = "&#9728; Constant Case / Scream Snake Case:";
          caixa.innerHTML = toConstantalize(text);
          break;

        case "brochetteCase":
          resposta.innerHTML = "&#9728; Brochette Case:";
          caixa.innerHTML = brochettelize(text);
          break;

        case "kebabCase":
          resposta.innerHTML = "&#9728; Kebab Case / Caterpillar Case:";
          caixa.innerHTML = kebabelize(text);
          break;

        case "scremingCase":
          resposta.innerHTML = "&#9728; Screaming Kebab Case / Cobol Case:";
          caixa.innerHTML = kebabelize(text).toUpperCase();
          break;

        case "flatCase":
          resposta.innerHTML = "&#9728; Flat Case / Mumble Case:";
          caixa.innerHTML = flatelize(text);
          break;

        default:
          break;
      }
    } else {
      camelCase.innerHTML = "Valor Monetário por Extenso:";
      pascalCase.innerHTML = "'R$' + parseFloat():";
      snakeCase.innerHTML = "parseInt():";
      constantCase.innerHTML = "Math.round():";
      brochetteCase.innerHTML = ".toFixed(2):";
      kebabCase.innerHTML = "Math.ceil():";
      scremingCase.innerHTML = "Math.floor():";
      flatCase.innerHTML = ".trim().replace('.', ','):";

      switch (e.target.getAttribute("id")) {
        case "camelCase":
          resposta.innerHTML = "&#9728; Valor Monetário por Extenso:";
          caixa.innerHTML = parseFloat(text.replace(",", "."))
            .toFixed(2)
            .replace(".", ",")
            .extenso(true);
          break;

        case "pascalCase":
          resposta.innerHTML = "&#9728; 'R$' + parseFloat():";
          caixa.innerHTML =
            "R$" +
            parseFloat(text.replace(",", ".")).toFixed(2).replace(".", ",");
          break;

        case "snakeCase":
          resposta.innerHTML = "&#9728; parseInt():";
          caixa.innerHTML = parseInt(text);
          break;

        case "constantCase":
          resposta.innerHTML = "&#9728; Math.round():";
          caixa.innerHTML = Math.round(parseFloat(text.replace(",", ".")));
          break;

        case "brochetteCase":
          resposta.innerHTML = "&#9728; .toFixed(2):";
          caixa.innerHTML = parseFloat(text.replace(",", "."))
            .toFixed(2)
            .replace(".", ",");
          break;

        case "kebabCase":
          resposta.innerHTML = "&#9728; Math.ceil():";
          caixa.innerHTML = Math.ceil(parseFloat(text.replace(",", ".")));
          break;

        case "scremingCase":
          resposta.innerHTML = "&#9728; Math.floor():";
          caixa.innerHTML = Math.floor(parseFloat(text.replace(",", ".")));
          break;

        case "flatCase":
          resposta.innerHTML = "&#9728; .trim().replace('.', ','):";
          caixa.innerHTML = text.trim().replace(".", ",");
          break;

        default:
          break;
      }
    }
  });

  /* ***** FUNÇÕES ***** */

  // Converting any string into camel case
  // https://stackoverflow.com/questions/2970525/converting-any-string-into-camel-case
  const camelize = (str) =>
    str
      .trim()
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/(?:^\w|[A-Z]|\b\w)/g, (word, index) => {
        return index === 0 ? word.toLowerCase() : word.toUpperCase();
      })
      .replace(/\s+/g, "")
      .match(
        /[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g
      )
      .join("");

  // const pascalize = (str) => title(str).replace(/ /g, "");
  const pascalize = (str) =>
    str
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/(?:^\w|[A-Z]|\b\w)/g, (word) => {
        return word.toUpperCase();
      })
      .replace(/\s+/g, "")
      .match(
        /[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g
      )
      .join("");

  // JavaScript: Convert a string to snake case
  // https://www.w3resource.com/javascript-exercises/fundamental/javascript-fundamental-exercise-120.php
  const toSnakeCase = (str) =>
    str &&
    str
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .match(
        /[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g
      )
      .map((x) => x.toLowerCase())
      .join("_");

  const toConstantalize = (str) =>
    str &&
    str
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .match(
        /[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g
      )
      .map((x) => x.toUpperCase())
      .join("_");

  const brochettelize = (str) =>
    title(str)
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/(?:^\w|[A-Z]|\b\w)/g, (word) => {
        return word.toUpperCase();
      })
      .match(
        /[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g
      )
      .join("_");

  const kebabelize = (str) =>
    str
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase()
      .match(
        /[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g
      )
      .join("-");

  const flatelize = (str) =>
    str
      .replace(/ /g, "")
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .match(
        /[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g
      )
      .join("")
      .toLowerCase();

  // Convert string to Title Case with JavaScript
  // https://stackoverflow.com/questions/196972/convert-string-to-title-case-with-javascript
  const title = (str) =>
    str.replace(/(^|\s)\S/g, function (t) {
      return t.toUpperCase();
    });

  // function that checks if it is a number
  // função que verifica se é um número
  const isNotNumber = (str) => isNaN(parseFloat(str));

  //+ Carlos R. L. Rodrigues
  //@ http://jsfromhell.com/string/extenso [rev. #3]
  String.prototype.extenso = function (c) {
    var ex = [
      [
        "zero",
        "um",
        "dois",
        "três",
        "quatro",
        "cinco",
        "seis",
        "sete",
        "oito",
        "nove",
        "dez",
        "onze",
        "doze",
        "treze",
        "quatorze",
        "quinze",
        "dezesseis",
        "dezessete",
        "dezoito",
        "dezenove",
      ],
      [
        "dez",
        "vinte",
        "trinta",
        "quarenta",
        "cinqüenta",
        "sessenta",
        "setenta",
        "oitenta",
        "noventa",
      ],
      [
        "cem",
        "cento",
        "duzentos",
        "trezentos",
        "quatrocentos",
        "quinhentos",
        "seiscentos",
        "setecentos",
        "oitocentos",
        "novecentos",
      ],
      [
        "mil",
        "milhão",
        "bilhão",
        "trilhão",
        "quadrilhão",
        "quintilhão",
        "sextilhão",
        "setilhão",
        "octilhão",
        "nonilhão",
        "decilhão",
        "undecilhão",
        "dodecilhão",
        "tredecilhão",
        "quatrodecilhão",
        "quindecilhão",
        "sedecilhão",
        "septendecilhão",
        "octencilhão",
        "nonencilhão",
      ],
    ];
    var a,
      n,
      v,
      i,
      n = this.replace(c ? /[^,\d]/g : /\D/g, "").split(","),
      e = " e ",
      $ = "real",
      d = "centavo",
      sl;
    for (
      var f = n.length - 1, l, j = -1, r = [], s = [], t = "";
      ++j <= f;
      s = []
    ) {
      j && (n[j] = (("." + n[j]) * 1).toFixed(2).slice(2));
      if (
        !((a = (v = n[j]).slice((l = v.length) % 3).match(/\d{3}/g)),
        (v = l % 3 ? [v.slice(0, l % 3)] : []),
        (v = a ? v.concat(a) : v)).length
      )
        continue;
      for (a = -1, l = v.length; ++a < l; t = "") {
        if (!(i = v[a] * 1)) continue;
        (i % 100 < 20 && (t += ex[0][i % 100])) ||
          ((i % 100) + 1 &&
            (t +=
              ex[1][(((i % 100) / 10) >> 0) - 1] +
              (i % 10 ? e + ex[0][i % 10] : "")));
        s.push(
          (i < 100
            ? t
            : !(i % 100)
            ? ex[2][i == 100 ? 0 : (i / 100) >> 0]
            : ex[2][(i / 100) >> 0] + e + t) +
            ((t = l - a - 2) > -1
              ? " " +
                (i > 1 && t > 0 ? ex[3][t].replace("ão", "ões") : ex[3][t])
              : "")
        );
      }
      a =
        (sl = s.length) > 1
          ? ((a = s.pop()), s.join(" ") + e + a)
          : s.join("") ||
            ((!j && n[j + 1] * 1 > 0) || r.length ? "" : ex[0][0]);
      a &&
        r.push(
          a +
            (c
              ? " " +
                (v.join("") * 1 > 1
                  ? j
                    ? d + "s"
                    : (/0{6,}$/.test(n[0]) ? "de " : "") + $.replace("l", "is")
                  : j
                  ? d
                  : $)
              : "")
        );
    }

    return r.join(e);
  };
});
